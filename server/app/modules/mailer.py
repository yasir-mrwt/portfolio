"""
Email Service Module
Handles sending emails from contact form.
"""

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import current_app

def send_contact_email(data):
    """
    Sends contact form email using SMTP.
    
    Args:
        data (dict): Contact form data with name, email, subject, message
    
    Returns:
        bool: True if email sent successfully, False otherwise
    
    How it works:
    1. Creates email message with sender and recipient
    2. Formats HTML email body with form data
    3. Connects to SMTP server (Gmail, SendGrid, etc)
    4. Sends email through authenticated connection
    5. Returns success/failure status
    """
    
    try:
        # Get email configuration from Flask app config
        config = current_app.config
        
        # Create message container
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f"Portfolio Contact: {data['subject']}"
        msg['From'] = config['MAIL_DEFAULT_SENDER']
        msg['To'] = config['MAIL_RECIPIENT']
        msg['Reply-To'] = data['email']
        
        # Create HTML email body
        html_body = f"""
        <html>
            <head>
                <style>
                    body {{ font-family: Arial, sans-serif; line-height: 1.6; }}
                    .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                    .header {{ background: #4F46E5; color: white; padding: 20px; border-radius: 5px; }}
                    .content {{ background: #f9fafb; padding: 20px; margin-top: 20px; border-radius: 5px; }}
                    .field {{ margin-bottom: 15px; }}
                    .label {{ font-weight: bold; color: #374151; }}
                    .value {{ color: #1f2937; }}
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>New Contact Form Submission</h2>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="label">Name:</div>
                            <div class="value">{data['name']}</div>
                        </div>
                        <div class="field">
                            <div class="label">Email:</div>
                            <div class="value">{data['email']}</div>
                        </div>
                        <div class="field">
                            <div class="label">Subject:</div>
                            <div class="value">{data['subject']}</div>
                        </div>
                        <div class="field">
                            <div class="label">Message:</div>
                            <div class="value">{data['message']}</div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
        """
        
        # Attach HTML body to message
        html_part = MIMEText(html_body, 'html')
        msg.attach(html_part)
        
        # Connect to SMTP server and send
        with smtplib.SMTP(config['MAIL_SERVER'], config['MAIL_PORT']) as server:
            server.starttls()  # Secure connection
            server.login(config['MAIL_USERNAME'], config['MAIL_PASSWORD'])
            server.send_message(msg)
        
        return True
    
    except Exception as e:
        # Log error (in production, use proper logging)
        print(f"Email sending failed: {str(e)}")
        return False