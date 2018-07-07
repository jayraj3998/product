var db=require("../dbconnection");

var products={
    getAllProduct:function(callback){
        return db.query("select * from product",callback);
    },
    getProductByProductId:function(id,callback){
        return db.query("select * from product where p_id=?",[id],callback);
    },
    getProductsByCatName:function(name,callback){

        return db.query("select p.*,c.* from product p,cat_product c where p.cid=c.c_id and c_name=?",[name],callback);
    },
    getProductsByCatId:function(cid,pid,callback){
        return db.query("select * from product where cid=? and p_id not in (?)",[cid,pid],callback);
    }
};
module.exports=products;