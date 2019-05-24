var ibmdb = require('ibm_db');
var conn_string = "DATABASE=BLUDB;HOSTNAME=dashdb-txn-flex-yp-dal10-138.services.dal.bluemix.net;UID=bluappuser;PWD=db2@BC@unilever;PORT=50000;PROTOCOL=TCPIP";

//var query = "insert into Aleena.employee(User_name, Address, Mob_no) values ('Ayushee','Lucknow',75459834210)"

function insert_in_db(username, add, mob){  
    var query = "insert into Aleena.employee(User_name, Address, Mob_no) values ('"+ username +"','"+add+"',"+mob+")"
    try{
       var conn = ibmdb.openSync(conn_string);
      var res = conn.querySync(query); 
     console.log("inserted.....")
  
   }
   catch(err){
    console.log("error while select from db "+ err);
 }

}
//insert_in_db(query);
module.exports= {
    insert :insert_in_db
}
