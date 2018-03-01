const express= require("express");
const path= require("path");
const bodyParser= require("body-parser");
const cors= require("cors");
const mongoose= require("mongoose");
const config= require('./config/database');

// DB Connection
mongoose.connect(config.database);

// Mongoose Connection Event
 mongoose.connection.on('connected', ()=>{
   console.log("connected to database "+config.database);
 });
 // Connection Failed
 mongoose.connection.on('error', (err)=>{
   console.log("Failed to Connect "+err);
 });
// Create NodeJs Server
const app= express();
// Port Number
const port= 3000;

// Cors Middleware
const cors_permission = require('./cors');
app.use(cors_permission.permission)
//
app.use(cors({
    allowedHeaders: ["Content-Type", "Authorization"]
}));
// Activate Body-parser Middleware
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
// List Of Routes Location
const produits= require('./routes/produits') ;
app.use('/api', produits);
// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Activate Cors Module
app.use(cors());


// Racine Root
app.use('/', (req, res)=>{
  res.send('invalid endpoint');
})
app.listen(port, ()=>{
  console.log("server started on port "+port);
})
