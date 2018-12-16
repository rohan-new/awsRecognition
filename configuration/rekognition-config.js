const env = require('./s3-env.js');
var startLableParams = {
    Video: { /* required */
      S3Object: {
        Bucket: env.Bucket,
        Name: '',
      }
    },
    MinConfidence: 60.0,
    "NotificationChannel": { 
      "RoleArn": "arn:aws:iam::534101251048:role/rekognition",
      "SNSTopicArn": "arn:aws:sns:us-east-1:534101251048:Video"
   }
  };

var getLabelParams = {
    JobId: '', /* required */
    MaxResults: 1000,
    SortBy: 'TIMESTAMP'
  };

module.exports = {
      startLableParams,
      getLabelParams
};


