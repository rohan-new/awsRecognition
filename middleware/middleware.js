let middleware = ()=>{

    let upload = require('../configuration/multer-config.js');

    const uploadToDisk = (req, res, next)=>{
        if(req.path === '/analyze'){

            console.log(req.body)
                if(req.body.file == undefined){
                    console.log('undefined');
                }
                upload(req, res, (err)=>{
                    if(err) throw err;
                    console.log(req.body)
                    next();

                });
             
        }else{
            next();
        }
    }

    return {
        uploadToDisk
    }
}

module.exports =  middleware;