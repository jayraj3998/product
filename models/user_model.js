var db=require("../dbconnection");


var users={

    getAlldata:function(callback){
        return db.query('select * from signup',callback);
    },
    sign_up:function(item,callback){
        return db.query(
            "insert into signup values(?,?,?,?,?,?,?)",
            [item.email_id,
            item.password,
            item.user_name,
            item.mobile_no,
            item.city,
            item.gender,
            item.address
            ],
            callback
        );
        
    },

    login:function(item,callback){
        return db.query(
            "select * from signup where email_id=? and password=?",
            [item.email_id,item.password],
            callback
        );
    },

    getuserbyid:function(id,callback){
        return db.query("select * from signup where email_id=?",[id],callback);
    },

    getdetaisbyemail:function(email_id,callback){
        return db.query("select * from signup where email_id=?",email_id,callback);
    },

    updatepass:function(item,email_id,callback){
        return db.query("update signup set password=? where email_id=? ",[
            item.password,email_id
        ],callback);
    },

    updateuser:function(item,email_id,callback){
        return db.query(
            "update signup set password=?,user_name=?,mobile_no=?,city=?,gender=?,address=? where email_id=?",
            [
            item.password,
            item.user_name,
            item.mobile_no,
            item.city,
            item.gender,
            item.address,email_id
            ],
            callback
        );
        
    },

    getuserbypass:function(id,callback){
        return db.query("select * from signup where password=?", [id],callback
);
    }



}

module.exports=users;