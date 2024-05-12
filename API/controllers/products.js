const { request } = require("express");
const product=require("../Module/product")
const getallproducts=async (req,res)=>{
const mydata=await product.find({});
  res.status(200).json({mydata});
}
const gettheproducttest =async (req,res)=>{
  const mydata=await product.find(res.query);
  res.status(200).json({mydata});
}
module.exports ={getallproducts,gettheproducttest};