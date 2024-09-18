require('dotenv').config();   
const express=require('express');
const app=express();
const cors=require('cors')
const morgan=require('morgan');
const productRouter = require('./api/v1/routes/product');

let mongoPass=process.env.MONGO_PASS;
let mongoUser=process.env.MONGO_USER;
let MongoServer=process.env.MONGO_SERVER;
let MongoDbName=process.env.MONGO_DB_NAME;


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/product',productRouter); 

app.all('*',(req,res)=>{
    res.status(404).json({Msg:"Not Found 404"});
});

module.exports=app;