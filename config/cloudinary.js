const cloudinary=require('cloudinary').v2;
const dotenv=require('dotenv');
dotenv.config();

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
    // cloud_name:'dmziyyrdp',
    // api_key:'155381824395299',
    // api_secret:'Gc9Xsc8c4W4rsiG1-h81aYOZI9U'

})

exports.upload=(file,folder)=>{
    return new Promise(resolve=>{
        cloudinary.uploader.upload(file,(result)=>{
            resolve({
                url:result.url
               
            })
        },{
            resource_type:"auto",
            folder:folder
        })
    })
}

