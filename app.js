const express = require('express');
const bodyParser = require('body-parser');
const categoryRoutes = require('./routes/category.routes');
const {PORT} = require('./config/serverConfig');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

// // secure your file with password using secretFile 
// const mySecret = require('./secretFile');
// console.log(mySecret.S3_BUCKET);
// console.log(mySecret.SECRET_KEY);


// // secure your file with password using .env (for globally)
// require('dotenv').config();
// console.log(process.env.S3_BUCKET);
// console.log(process.env.SECRET_KEY); 


categoryRoutes(app);

app.listen(PORT,()=>{
    console.log('server is listening to port:',PORT);
});  