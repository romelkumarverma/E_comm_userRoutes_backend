const express = require('express')
const multer = require('multer')
const path = require('path')


const {subcategory_Post, subcategory_get, subcategory_update} = require('../Controller/tbl_admin_subcategory')

const ProductSubcategory = express.Router();


// let multerS3 = require('multer-s3');
// let multer = require("multer")
// const { S3Client } = require('@aws-sdk/client-s3');

// const bucketName = "ecommerc1"          /// Name of bucket is ecommerc1 ////


//////////      Store file in AWS S3 configuration

// const s3 = new S3Client({
//     region:"ap-south-1",
//     credentials:{
//         accessKeyId:"AKIA35QE3PQSJIWVXLBN",
//         secretAccessKey:"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"
//     }
// })

//////      Storage Configuration      ///////////

// let storage = multerS3({
//     s3: s3,
//     bucket:bucketName,
//     acl:'public-read',
//     metadata:(req,file,cb)=>{
//         cb(null, {fieldName:file.fieldName})
//     },
//     contentType:
//     multerS3.AUTO_CONTENT_TYPE,
//     key:(req,file,cb)=>{
//         cb(null,file,originalname)
//     }
// })

// let upload = multer({storage: storage})




// ProductSubcategory.post("/api/admin/subcategory", upload.single('photo'),subcategory_Post);


////////////////////        Multer      /////////////

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images')
    },
    filename: (req, file, cb) => {
        // cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
        const filename = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
        cb(null, filename)
    }
})

const upload = multer({ storage: storage})

ProductSubcategory.post("/api/admin/subcategory/post", upload.single('photo'), subcategory_Post);
ProductSubcategory.get("/api/admin/subcategory/get", subcategory_get);

///     For check on PostMan:-      ProductSubcategory.get("/api/admin/subcategory/get/:categoryid", subcategory_get);

ProductSubcategory.put("/api/admin/subcategory/update/:categoryid",upload.single('photo'), subcategory_update);




module.exports = {ProductSubcategory}