const express = require('express')
const router = express.Router()
const {Product} = require('../models/product.model')
const extend =  require('lodash')


router.route('/')
.get(async(req, res)=>{
    
    try{
        const product = await Product.find({});
        res.json({success:true, product})
    }catch(error){
        res.json({success: false, errorMessage: "Cannot get the products, something went wrong!"})
    }
})


.post(async(req,res)=>{
    try{
        const product = req.body
        const NewProduct = new Product(product)
        // console.log(product)
        const savedProduct = await NewProduct.save()
        res.json({success:true, savedProduct})

    }catch(error){
        res.json({success: false, errorMessage:"cannot save products to database, something went wrong!"})
    }
})

module.exports = router