var db=require("../dbconnection");

var cats={
    getAllCat:function(callback){
        return db.query("select * from cat_product",callback);
    }
};
module.exports=cats;