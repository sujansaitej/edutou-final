import os

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'qwertyuiopzxcvbnmlkjhgfdsa')
    DEBUG = True
    DB_NAME = "edutou"
    DB_USER = "root"
    DB_PASSWORD = "Suresh$$$"
    DB_HOST = "localhost"

    # Connection URI (without database name for initial check)
    SQLALCHEMY_DATABASE_URI_BASE = f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/"

    # Connection URI (with database name for normal operation)
    SQLALCHEMY_DATABASE_URI = f"{SQLALCHEMY_DATABASE_URI_BASE}{DB_NAME}"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
