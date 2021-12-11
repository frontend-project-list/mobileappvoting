const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, `${__dirname}/../uploads`);
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileUploader = multer({ storage });
module.exports = fileUploader;
