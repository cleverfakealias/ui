import logging
import json

def handler(event, context):
    # Log the event
    print("Received event:", json.dumps(event))

    # Your existing code
    return {
        'statusCode': 200,
        'body': 'Hello from Vercel serverless function!'
    }