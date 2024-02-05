const express = require('express');

const {category_post, category_get, category_update} = require('../Controller/tbl_admin_product_category');
const category = express.Router();


category.post('/api/admin/category/addcategory', category_post);
category.get('/api/admin/category', category_get);
category.put('/api/admin/category/updatecategory/:categoryid', category_update)

module.exports={category};