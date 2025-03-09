from website import create_app
from flask import Flask, send_from_directory
import os

app = create_app()

# Define the frontend directory
FRONTEND_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'dist')

# Serve static files
@app.route('/<path:path>')
def static_files(path):
    if os.path.exists(os.path.join(FRONTEND_DIR, path)):
        return send_from_directory(FRONTEND_DIR, path)
    return send_from_directory(FRONTEND_DIR, 'index.html')

# Serve React index.html for all routes (for React Router)
@app.route('/')
def serve_react():
    return send_from_directory(FRONTEND_DIR, 'index.html')

if __name__ == "__main__":
    app.run(debug=True)
