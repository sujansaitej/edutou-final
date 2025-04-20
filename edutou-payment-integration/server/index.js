const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Validate environment variables
const requiredEnvVars = [
  'PHONEPE_MERCHANT_ID',
  'PHONEPE_SALT_KEY',
  'PHONEPE_SALT_INDEX',
  'CLIENT_DOMAIN',
  'SERVER_DOMAIN',
];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`❌ Missing required environment variable: ${envVar}`);
    process.exit(1);
  }
}

const {
  PHONEPE_MERCHANT_ID,
  PHONEPE_SALT_KEY,
  PHONEPE_SALT_INDEX,
  CLIENT_DOMAIN,
  SERVER_DOMAIN,
  PHONEPE_BASE_URL,
  NODE_ENV = 'development',
} = process.env;

const PHONEPE_API_URL = `${PHONEPE_BASE_URL}/pg/v1/pay`;

// ✅ GET route to verify server is running
app.get('/api/phonepe/pay', (req, res) => {
  res.send('✅ PhonePe Payment API is up and ready to accept POST requests.');
});

// ✅ POST route to initiate payment
app.post('/api/phonepe/pay', async (req, res) => {
  try {
    const { amount, phone } = req.body;

    if (!amount || amount < 100) {
      return res.status(400).json({ error: 'Amount must be at least ₹1 (100 paise)' });
    }

    if (!phone || !/^\d{10}$/.test(phone)) {
      return res.status(400).json({ error: 'Valid 10-digit phone number required' });
    }

    const merchantTransactionId = `TXN_${Date.now()}_${crypto.randomBytes(2).toString('hex')}`;

    const payload = {
      merchantId: PHONEPE_MERCHANT_ID,
      merchantTransactionId,
      merchantUserId: "user_" + Date.now(),
      amount: Number(amount),
      redirectUrl: `${CLIENT_DOMAIN}/payment-success?transactionId=${merchantTransactionId}`,
      redirectMode: "POST",
      callbackUrl: `${SERVER_DOMAIN}/api/payment-callback`,
      mobileNumber: phone,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');
    const stringToHash = base64Payload + "/pg/v1/pay" + PHONEPE_SALT_KEY;
    const xVerify = crypto
      .createHash("sha256")
      .update(stringToHash)
      .digest("hex") + "###" + PHONEPE_SALT_INDEX;

    const response = await axios.post(
      PHONEPE_API_URL,
      { request: base64Payload },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-VERIFY': xVerify,
          'X-MERCHANT-ID': PHONEPE_MERCHANT_ID,
        },
        timeout: 10000,
      }
    );

    const redirectUrl = response.data?.data?.instrumentResponse?.redirectInfo?.url;

    if (!redirectUrl) {
      console.error("Invalid PhonePe response:", response.data);
      return res.status(500).json({ error: "Invalid response from payment gateway" });
    }

    console.log(`ℹ️ Payment initiated - TXN: ${merchantTransactionId}, Amount: ${amount}`);

    return res.json({ redirectUrl, transactionId: merchantTransactionId });

  } catch (error) {
    console.error("Payment error:", {
      message: error.message,
      response: error.response?.data,
      stack: NODE_ENV === 'development' ? error.stack : undefined,
    });

    return res.status(error.response?.status || 500).json({
      error: error.response?.data?.message || 'Payment processing failed',
      details: NODE_ENV === 'development' ? error.response?.data : null,
    });
  }
});

// ✅ POST route for callback from PhonePe
app.post('/api/payment-callback', (req, res) => {
  try {
    const { response } = req.body;

    if (!response) {
      console.error("Callback missing response");
      return res.status(400).send("Bad Request");
    }

    const decoded = Buffer.from(response, 'base64').toString('utf-8');
    const paymentData = JSON.parse(decoded);

    console.log("📥 Payment callback:", {
      transactionId: paymentData.data?.merchantTransactionId,
      status: paymentData.code,
      amount: paymentData.data?.amount ? paymentData.data.amount / 100 : null,
    });

    if (paymentData.code === 'PAYMENT_SUCCESS') {
      console.log(`💰 Payment successful for TXN: ${paymentData.data?.merchantTransactionId}`);
    } else {
      console.warn(`❌ Payment failed: ${paymentData.message}`);
    }

    return res.status(200).send("Callback processed");
  } catch (err) {
    console.error("Callback processing error:", err);
    return res.status(500).send("Internal Server Error");
  }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT} in ${NODE_ENV} mode`);
  console.log(`📌 PhonePe API Endpoint: ${PHONEPE_API_URL}`);
});

app.get("/", (req, res) => {
  res.send("✅ Server is running");
});
