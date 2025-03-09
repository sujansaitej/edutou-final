from flask import Blueprint, request, jsonify
from .models import db, Enrollment

main = Blueprint('main', __name__)

@main.route('/api/enroll', methods=['POST'])
def enroll():
    data = request.get_json()

    # Extract form data
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    college = data.get('college')
    course = data.get('course', 'Full Stack Foundation')  # Default value
    referral_code = data.get('referralCode', '')

    if not all([name, email, phone, college]):
        return jsonify({"error": "All required fields must be filled"}), 400

    try:
        # Check for duplicate entries (based on email or phone)
        existing_enrollment = Enrollment.query.filter(
            (Enrollment.email == email) | (Enrollment.phone == phone)
        ).first()

        if existing_enrollment:
            return jsonify({"error": "Duplicate entry: Email or phone number already enrolled"}), 409  # 409 Conflict

        # Create a new enrollment entry
        new_enrollment = Enrollment(
            name=name, email=email, phone=phone, college=college, course=course, referral_code=referral_code
        )
        db.session.add(new_enrollment)
        db.session.commit()
        return jsonify({"message": "Form submitted successfully!"}), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
