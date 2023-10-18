import json
import boto3
import base64
import numpy as np

def lambda_handler(event, context):

    base64Image = event['input']
    img_data = base64Image.encode()
    payload = base64.b64decode(img_data)
    
    endpoint_name = 'YOUR DEPLOYED SAGEMAKER END POINT GOES HERE'
    
    runtime = boto3.client('runtime.sagemaker')
 
    # payload = bytearray(payload)
    inference = runtime.invoke_endpoint(
        EndpointName=endpoint_name, ContentType="application/x-image", Body=payload
    )
    
    result = inference["Body"].read()
    # result will be in json format and convert it to ndarray
    result = json.loads(result)

    # index represents the index of the label with the highest confidence in this array ['unclassified', 'up', 'down']
    index = np.argmax(result)

    return {
        'statusCode': 200,
        'body': {'result':result, 'maxIndex':str(index)}
    }
    