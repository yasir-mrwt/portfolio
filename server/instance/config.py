"""
Configuration file for Flask application.
Loads environment variables and sets app configuration.
"""

import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Config:
    """
    Application configuration class.
    
    Environment variables are loaded from .env file and 
    accessed through os.environ. This keeps sensitive data
    out of version control.
    """
    
    # Flask secret key for session management
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-secret-key-change-in-production'
    
    # Email configuration for contact form
    MAIL_SERVER = os.environ.get('MAIL_SERVER', 'smtp.gmail.com')
    MAIL_PORT = int(os.environ.get('MAIL_PORT', 587))
    MAIL_USE_TLS = os.environ.get('MAIL_USE_TLS', 'True') == 'True'
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')
    MAIL_DEFAULT_SENDER = os.environ.get('MAIL_DEFAULT_SENDER')
    MAIL_RECIPIENT = os.environ.get('MAIL_RECIPIENT')
    
    # API rate limiting (requests per minute)
    RATELIMIT_ENABLED = True
    RATELIMIT_DEFAULT = "10 per minute"
    
    # JSON response configuration
    JSON_SORT_KEYS = False
    JSONIFY_PRETTYPRINT_REGULAR = True