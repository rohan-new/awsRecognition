
let videoController = ({fs, path, async})=>{
    const s3 = require('../configuration/s3-config.js');
    const services = require('../services/aws-rekognition')();

    const uploadToAws = (req, res) => { 
        console.log('api')
        fs.readFile(path.resolve(__dirname, `../public/uploads/${req.file.filename}`), function (err, data) {
            if (err)  throw err; 
            const s3Client = s3.s3Client;
            const params = s3.uploadParams;
            params.Key = req.file.originalname;
            params.Body = data;

            s3Client.putObject(params, (err, data) => { 
                if (err) {
                    res.status(500).json({error:"Error -> " + err});
                }
                res.json({message: 'File uploaded successfully! -> keyname = ' + req.file.originalname});
            });
        });
    }

    const analyzeVideos = (req, res)=>{
        console.log(req.query.filename)
        async.waterfall([ services.startLabelDetection(req.query.filename),services.getLabelDetection() ], (err, success)=>{
            if(err) return console.log(err);
            console.log(success) 
        });
    }

return{
    uploadToAws,
    analyzeVideos
}

}

module.exports = videoController ;