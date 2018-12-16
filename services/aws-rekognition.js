
let labelDetection = ()=>{

    const env = require('../configuration/s3-env');
    const AWS = require('aws-sdk');
    var rekognition = new AWS.Rekognition({
        accessKeyId: env.AWS_ACCESS_KEY,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
	    region : env.REGION,
        apiVersion: '2016-06-27'
    });
    const labelParams = require('../configuration/rekognition-config');
  

    const startLabelDetection = (fileName) => {
        return ((callback) =>{
            labelParams.startLableParams.Video.S3Object.Name = fileName;
            rekognition.startLabelDetection(labelParams.startLableParams, function(err, data) {
                if (err) callback(err); 
                else {      
                    let JobId = data.JobId;
                    console.log(JobId);
                    callback(null, JobId);
                }
            });
        });  
    }

    const getLabelDetection = ()=>{
        return (( JobId, callback) =>{
            console.log('Ro');
            labelParams.getLabelParams.JobId = JobId ;
            rekognition.getLabelDetection(labelParams.getLabelParams, function(err, data) {
                if (err) callback(err); // an error occurred
                else{
                    if(data.NextToken == null || data.NextToken == undefined){
                        callback(null, data); 
                        // successful response
                    }else{
                        labelParams.getLabelParams.NextToken = data.NextToken;
                        getLabelDetection();
                    } 
                }                
              });
        });  
    }

return{
    startLabelDetection,
    getLabelDetection
}

}

module.exports = labelDetection ;