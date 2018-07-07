var product=require('../models/product_model');
var express=require('express');
var router=express.Router();


router.get("/:cid/:pid",function(req,res,next){
    product.getProductsByCatId(req.params.cid,req.params.pid,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;
