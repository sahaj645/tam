const express= require('express');
const dotenv= require('dotenv').config()
const cors=require('cors')
const{mongoose}=require('mongoose')
const app = express();
//database connection
mongoose.connect('mongodb+srv://gravitastam2024:Sahil%40tam123@cluster0.inn1c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log("DB Connected"))
.catch((err)=> console.log("DB not connected",err))

//middelware
app.use(express.json)

app.use('/',require('./routes/authroutes'))


const port = 8000;
app.listen(port,()=>console.log(`Server is running on port ${port}`))