require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const apiRoutes = require('./src/routes');
const path = require('path')



const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json({}));
app.use('/images', express.static(path.join(__dirname, './src/uploads/images')))
app.use('/api/',apiRoutes);



app.listen(port,()=>{
    console.log(`app is running on port ${port} 🔥🔥` );
})