const multer = require('multer');
 
var storage = multer.diskStorage({
  destination: './public/uploads/',
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
var upload = multer({storage: storage}).single('file');
 
module.exports = upload;