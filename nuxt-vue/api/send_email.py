from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from http import HTTPStatus
import os

def send_email(name, email, message):
    message = Mail(
        from_email='no_reply@benhickman.dev',
        to_emails='me@benhickman.dev',
        subject='New Email from BenHickman.dev',
        plain_text_content=f'Name: {name}\nEmail: {email}\nMessage: {message}'
    )

    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        return {'status': 'success'}, HTTPStatus.OK
    except Exception as e:
        return {'status': 'error', 'message': str(e)}, HTTPStatus.INTERNAL_SERVER_ERROR

def handler(event, context):
    body = event.get('body')
    name = body.get('name')
    email = body.get('email')
    message = body.get('message')

    return send_email(name, email, message)