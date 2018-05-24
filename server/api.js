const AWS = require('aws-sdk');
const Busboy = require('busboy');

const BUCKET_NAME = '3dobjects';
//3dobjects
const IAM_USER_KEY = 'AKIAJNSUCKLK2Y2SGPPA';
//AKIAJNSUCKLK2Y2SGPPA
const IAM_USER_SECRET = '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';
//EGKt/76m0oDaiLyc3fIYUke+XfGmZgnk2CaVRDV1

module.exports = (app) => {

//  app.post('/api/upload', function (req, res, next) {
//   const element1 = req.body.element1;
//   var busboy = new Busboy({ headers: req.headers });

//   console.log('element1');
//   console.log(element1);

//   busboy.on('finish',function(){
//       console.log('upload finished')
//   }

//   console.log('files')
//   console.log(req.files)


//   const file=req.files.element2;
//   console.log(file)

//   let s3bucket=new AWS.S3({
//   accessKeyId: IAM_USER_KEY,
//   secretAccessKey: IAM_USER_SECRET,
//   Bucket: BUCKET_NAME,

//   });


// s3bucket.createBucket(function () {
//   var params = {
//    Bucket: BUCKET_NAME,
//    Key: file.name,
//    Body: file.data,
//   };

//    s3bucket.upload(params, function (err, data) {
//    if (err) {
//     console.log('error in callback');
//     console.log(err);
//    }
//    console.log('success');
//    console.log(data);
//   });
// });

//  req.pipe(busboy);
// })
// };





