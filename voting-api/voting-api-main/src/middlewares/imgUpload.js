const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, `${__dirname}/../uploads/images`);
  },
  filename(req, file, cb) {
    console.log(req.user);
    cb(null, `${req.user.data.regNumber}-${file.originalname}`);
  },
});

const fileUploader = multer({ storage });
module.exports = fileUploader;
