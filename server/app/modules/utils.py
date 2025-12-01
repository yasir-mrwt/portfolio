"""
Utility Functions
Helper functions used across the application.
"""

import re
import html

def validate_email(email):
    """
    Validates email format using regex.
    
    Args:
        email (str): Email address to validate
    
    Returns:
        bool: True if valid email format, False otherwise
    
    Pattern checks for:
    - Characters before @
    - @ symbol
    - Domain name
    - . followed by extension
    """
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None


def sanitize_input(text):
    """
    Sanitizes user input to prevent XSS and injection attacks.
    
    Args:
        text (str): User input text
    
    Returns:
        str: Sanitized text safe for storage/display
    
    How it works:
    1. Strips leading/trailing whitespace
    2. Escapes HTML special characters (<, >, &, ", ')
    3. Limits length to prevent overflow attacks
    """
    if not text:
        return ''
    
    # Remove extra whitespace
    text = text.strip()
    
    # Escape HTML characters
    text = html.escape(text)
    
    # Limit length (adjust as needed)
    max_length = 1000
    if len(text) > max_length:
        text = text[:max_length]
    
    return text


def format_response(success, data=None, error=None, status_code=200):
    """
    Creates standardized API response format.
    
    Args:
        success (bool): Whether request was successful
        data (any): Response data payload
        error (str): Error message if failed
        status_code (int): HTTP status code
    
    Returns:
        tuple: (dict, int) Response object and status code
    
    Ensures consistent API responses:
    Success: { "success": true, "data": {...} }
    Error: { "success": false, "error": "message" }
    """
    response = {'success': success}
    
    if success and data is not None:
        response['data'] = data
    
    if not success and error:
        response['error'] = error
    
    return response, status_code