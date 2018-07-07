var product=require('../models/product_model');
var express=require('express');
var router=express.Router();

router.get("/",function(req,res,next){
    product.getAllProduct(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.get("/:name",function(req,res,next){
    product.getProductsByCatName(req.params.name,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;
