const express = require('express');
const { admin_role_post, admin_role_get, admin_role_get_byname, admin_role_update } = require('../Controller/tbl_admin_roles');
const roles = express.Router();

roles.post('/api/adminRole', admin_role_post);
roles.get('/api/adminRole_get/:roleid', admin_role_get);
roles.get('/api/adminRole_get', admin_role_get_byname);
roles.put('/api/adminRole_update/:roleid', admin_role_update);


module.exports={roles}