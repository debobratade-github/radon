const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
var address=require('address');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//  
mongoose.connect("mongodb+srv://Raichu:Rishi1234@cluster0.xw5ct.mongodb.net/bookandauthor?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

//Global Middleware 
app.use (
    function(req, res, next){
        const re=req.path
        let ipa=address.ip()
        const ip=req.ip       // Show ::1  
        const timestamp = Date.now(); 
    const dateObject = new Date(timestamp);
    const date = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    const time = dateObject.getHours() + ":" 
    + dateObject.getMinutes() + ":" + dateObject.getSeconds();
     
        let d=Date.now();
        a=true
        if(a==true){
            next()
            console.log(year+"-"+month+"-"+date, time,",",ipa,",",re);
           
        }
        else{
            res.send("please login")
        }
    }
    
);

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
