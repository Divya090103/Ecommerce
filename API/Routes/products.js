const express=require('express')
const router=express.Router();
const {getallproducts,gettheproducttest}=require('../controllers/products')
router.get( '/' ,getallproducts);
router.get('/test',gettheproducttest);
module.exports = router;