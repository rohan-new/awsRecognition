# awsRecognition

1. Git clone https://github.com/rohan-new/awsRecognition.git
2.Run npm install to install dependencies.
3. Run node server.js
4. Go to postman to run the apis.
5. Go to /api/rekognize/analyze, POST request,  and pass file in the request body with file as the key name.
6. Go to /api/rekognize/results, GET request, and pass filename as the parameter like: /api/rekognize?filename=
   Here, in the filename pass the value fetched from /api/rekognize for the filename.
   
   
MODULES USED:
     1. async to handle callbacks.
     2. MONGODB as the DATABASE.
     3. Express as the framework for creating server.
     4. multer for handling file uploads.
     5. aws-sdk as the javascript aws sdk.
