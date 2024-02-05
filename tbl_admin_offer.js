const express = require('express');
//const path = require('path');

const {offer_post, offer_get, offer_update} = require('../Controller/tbl_admin_offer');

const offer = express.Router()

offer.post("/api/offer/post", offer_post);
offer.get("/api/offer/get/", offer_get);
offer.put("/api/offer/update", offer_update);

module.exports = {offer}
     
