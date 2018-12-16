let routes = (packages,db) => {

    let awsRouter = require('./videos')(packages,db);
    let routerConfig = require('../configuration/routes-config');
	packages.app.use(routerConfig.BASE_VIDEO_URL, awsRouter);
}

module.exports = routes;