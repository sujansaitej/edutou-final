from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from config import Config
import sqlalchemy
from sqlalchemy.sql import text

db = SQLAlchemy()
migrate = Migrate()


def create_database_if_not_exists():
    """Creates the database if it doesn't exist."""
    engine = sqlalchemy.create_engine(Config.SQLALCHEMY_DATABASE_URI_BASE)  # Connect without DB name
    with engine.connect() as conn:
        conn.execute(text(f"CREATE DATABASE IF NOT EXISTS {Config.DB_NAME};"))  #

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Create DB if not exists
    create_database_if_not_exists()

    db.init_app(app)
    migrate.init_app(app, db)  # Initialize Flask-Migrate
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    from website import models  # Import models to register them with SQLAlchemy
    from website.routes import main  # Import routes

    app.register_blueprint(main)  # Register blueprint

    # Create tables if they don't exist
    with app.app_context():
        db.create_all()

    return app
