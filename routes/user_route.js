var users=require('../models/user_model');
var express=require('express');
var router=express.Router();
router.get("/:id",function(req,res,next){
    users.getuserbyid(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.get("",function(req,res,next){
    users.getAlldata(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.get('/:email_id',function(req,res,next){
    users.getdetaisbyemail(req.body,req.params.email_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.post('',function(req,res,next){

    users.login(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.put("/:email_id",function(req,res,next){

    users.updateuser(req.body,req.params.email_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});



module.exports=router;