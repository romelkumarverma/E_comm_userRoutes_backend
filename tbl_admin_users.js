const express = require ('express');
const multer = require('multer')
const path = require('path')

const user1 = express.Router()


const { userpost, userget, userupdate, userdelete, userstatusupdate} = require('../Controller/tbl_admin_users')

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

user1.get("/api/get_users", userget)
user1.post("/api/add/users", upload.single('photo'), userpost);
user1.put("/api/update_users/:uid", userupdate)
user1.delete("/api/delete_users/:uid", userdelete)

///////     It is for status    ////////
user1.put("/api/user_status", userstatusupdate)


module.exports =  {user1}