// const cloudinary=require('cloudinary').v2;
// cloudinary.config({
//     cloud_name:process.env.Cloudinary_CLOUD_NAME,
//     api_key:process.env.Cloudinary_API_KEY,
//     api_secret:process.env.Cloudinary_API_SECRET,
// })
// module.exports=cloudinary;

const cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });

  module.exports = cloudinary;
//   const opts = {
//     overwrite: true,
//     invalidate: true,
//     resource_type: "auto",
//   };

//   module.exports = (Image) => {
//     return new Promise((resolve, reject) => {
//         cloudinary.uploader.upload(Image, opts, (error, result) => {
//             if (result && result.secure_url){
//                 console.log(result.secure_url);
//                 return resolve(result.secure_url);
//             }
//             console.log(error.message);
//             return reject({message: error.message});
//         });
//     });
//   };