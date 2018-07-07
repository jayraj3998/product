var mysql=require('mysql');
var cnn=mysql.createPool({
host:'localhost',
user:'root',
password:'',
database:'first_db'
});

module.exports=cnn;