const express=require('express');
const bodyParser=require('body-parser');
const multer=require('multer');
const mongoose=require('mongoose');
const cors=require('cors');
const path=require('path')
app=express();
const Post=require('./models/post');
const postsRoutes=require('./routes/posts');
const userRoutes=require('./routes/user');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/images',express.static(path.join('backend/images')))
url='mongodb://localhost:27017/kazi'
mongoose
  .connect(
    url,
    { useNewUrlParser: true,useUnifiedTopology:true }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });



app.use('/api/posts',postsRoutes);
app.use('/api/user',userRoutes);
module.exports=app;