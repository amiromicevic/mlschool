# mlschool


Reference material from MLSchool presentation. This is currently work in progress and more material will be added here in due time.

# backend
The following lambda files represent simple backend functionality that support the features presented on the demo at ML School episode on Twitch.

**Comprehend.py** takes a text paragraph and requests Amazon Comprehend service to run insight analysis on the text and extract the key phrases and return them to the front end.

**EyeGaze.js**  takes the still image from the front end which is passed to the function as base64 encoded string. The string is decoded to an array of bytes and passed to Amazon Rekognition service to run DetectFaces command to detect the face on the still image, and then extract key insights from the face, including EyeDirection parameter. The resulting json is then returned to the front end.

**TextGenAI.py** connects to the provisioned inference end point created by Amazon SageMaker JumpStart and passes the prompt with the instructions for text creation to the foundational model. The generated text is then returned to the front end.

In addition, if you want to include **image generation using JumpStart** , have a look at this Lambda function 
ImageGenAI.py connects to the provisioned inference end point created by Amazon SageMaker JumpStart and passes the prompt with the instructions for image creation to the foundational model. The generated image is then returned to the front end as the base64 encoded jpeg.

If you would like to add **sound controls** , have a look at **Sound.js**  Lambda function
Sound.js takes text as input and converts it into sound that is saved to your designated S3 bucket, and is played by the front end via JavaScript that downloads the sound file from the S3 bucket. Lambda function creates a presigned Url that acts as as a temporary permission that allows the authorised users to download the audio file from the bucket. The function uses Amazon Polly service to convert text to sound, and the resulting audio strsam is saved to the designated S3 bucket. The presigned Url is then returned to the front end and it allows user to access and download the saved sound file, and no more than that.

To create a **word cloud** , send an array of words to your Amazon API Gateway endpoint, which will envoke Lambda function (wordCloud.py). The function generates the word cloud image from the array of words, encodes the image bytes into ascii base64 string representation of the image, and sends it back to API Gateway, and finally to the front end. The base64 string can then be directly mapped to an HTML image element in your front end. This is the most efficient way of using it, as opposed to uploading the file to S3, and then invoking Lambda when S3 generates new item added to the bucket event. 

# front end
**imageClassifierFrontEnd.js**  is a short code snippet that allows your front end to call the Amazon API Gateway end point, which is configured to call a Lambda function **(imageClassifier.py)** that sends a base64 string encoded image to the SageMaker endpoint for inference. It returns a predicted image label, which can be one of these 3 [unclassified, up, down] to the calling Lambda function, which in turn gets sent back to API Gateway and finally to the front end.


# how to create and deploy API Gateway end points
Content will be added here in due time.

# how to deploy SageMaker JumpStart LLM and obtain endpoint for live inference
Content will be added here in due time.



