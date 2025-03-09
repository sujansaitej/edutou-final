from . import db

class Enrollment(db.Model):
    __tablename__ = "enrollments"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    phone = db.Column(db.String(20), nullable=False)
    college = db.Column(db.String(255), nullable=False)
    course = db.Column(db.String(255), nullable=False, default="Full Stack Foundation")
    referral_code = db.Column(db.String(50), nullable=True)
    created_at = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp())

    def __init__(self, name, email, phone, college, course, referral_code):
        self.name = name
        self.email = email
        self.phone = phone
        self.college = college
        self.course = course
        self.referral_code = referral_code
