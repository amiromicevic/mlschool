import json
import boto3
import base64
import numpy as np
import json
import io
import base64
import matplotlib.pyplot as plt
from wordcloud import WordCloud

def lambda_handler(event, context):
    
    words = event['input']
    text = " ".join(words)
    
    word_cloud = WordCloud(collocations = False, background_color = 'white').generate(text)
    plt.imshow(word_cloud, interpolation='bilinear')
    plt.axis("off")
    # plt.show()
    
    img = io.BytesIO()
    plt.savefig(img, format='png')
    img.seek(0)
    img_b64 = base64.b64encode(img.read()).decode('ascii')
    
    return {
        'statusCode': 200,
        'body': {
            'header':'data:image/png;base64,',
            'base64':img_b64
        }
    }
