const express=require ('express')
const app=express();
const bodyParser=require('body-parser')
const start=require('./dbconnect')
var cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(3000)

app.post('/signup', (req, res) => {
    //const note = { text: req.body.body, title: req.body.title };
    // console.log("request:",req)
    username = req.body.Username;    
    add = req.body.Address;
    mob = req.body.Phone_No;
    let returned =  start.insert(username, add, mob);
    // console.log("returned",returned);
    
          
        // res.send("all done");
        res.json({
            "success":true
        })
      
   
  });
 
  console.log('Server is up and running')