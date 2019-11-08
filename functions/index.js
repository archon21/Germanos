const functions = require('firebase-functions');
const multer = require('multer');
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.getMenuJson = functions.https.onRequest(async (req, res) => {
  var storage = multer.diskStorage({
    //multers disk storage settings
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      var datetimestamp = Date.now();
      cb(
        null,
        file.fieldname +
          '-' +
          datetimestamp +
          '.' +
          file.originalname.split('.')[file.originalname.split('.').length - 1]
      );
    }
  });
  var upload = multer({
    //multer settings
    storage: storage,
    fileFilter: function(req, file, callback) {
      //file filter
      if (
        ['xls', 'xlsx'].indexOf(
          file.originalname.split('.')[file.originalname.split('.').length - 1]
        ) === -1
      ) {
        return callback(new Error('Wrong extension type'));
      }
      callback(null, true);
    }
  }).single('file');

  const filePath = upload(req, res, function(err) {
    if (err) {
      console.error(err);
      return;
    }
    /** Multer gives us file info in req.file object */
    if (!req.file) {
      res.json({ error_code: 1, err_desc: 'No file passed' });
      return;
    }
    /** Check the extension of the incoming file and
     *  use the appropriate module
     */
    return req.file.path;
  });

  try {
    const result = await excelToJson({
      sourceFile: filePath
    });

    fs.unlinkSync(filePath);
    res.json({ error_code: 0, err_desc: null, data: result });
  } catch (err) {
    console.error(err);
  }
  res.send();
});
