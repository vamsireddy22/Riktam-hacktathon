const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routes/User');
const photoRouter = require('./routes/Photo');

const app = express();

app.use(bodyParser.json());

app.use('/user',userRouter);
app.use('/upload',photoRouter);

mongoose.connect("mongodb://localhost/riktam",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
},(err)=>{
    if(err){
        console.log("error connecting the db");
        return;
    }
    console.log("Mongo db connected");
});

app.listen(5000,(err)=>{
    console.log("connected to osrt 5000")
})