
let router = (packages,db) => {  
    let videosRouter = packages.express.Router();
    let uploadVideos = require('../controllers/video-controller')(packages,db).uploadToAws; 
    let getVideosAnalysis = require('../controllers/video-controller')(packages,db).analyzeVideos; 

    let middleware  = require('../middleware/middleware')(packages).uploadToDisk ;

    videosRouter.use(middleware);
    
    videosRouter.route('/analyze')
    .post(uploadVideos);

    videosRouter.route('/results')
    .get(getVideosAnalysis);


    return videosRouter;
}

module.exports = router;