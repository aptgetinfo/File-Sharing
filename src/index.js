const express = require('express');
const mainRouter=require('./routers/main')
const multer = require('multer');
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,
    optionSuccessStatus:200
}

const app = express();
const port =process.env.PORT
app.use(cors(corsOptions));
app.use(express.json())
app.use(mainRouter)

app.listen(port,()=>{
    console.log('Server is up on PORT : '+port)
})
