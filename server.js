
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const verifyJWT = require('../BACKEND/middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const corsOptions = require('../BACKEND/config/corsOptions');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3500;
const connectDB = require('../BACKEND/config/dbConn');

//Server static files
app.use('/', express.static(path.join(__dirname, '/public')));
//built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());



app.use(cors(corsOptions)); 
//routes
// app.use('/', require('./node_modules/routes/root'));
app.use('/alunos', require('../BACKEND/routes/api/alunos'))
app.use('/register', require('../BACKEND/routes/register'));
app.use('/auth', require('../BACKEND/routes/auth'));
app.use('/refresh', require('../BACKEND/routes/refresh'));
app.use('/logout', require('../BACKEND/routes/logout'));
app.use(verifyJWT);
app.use('/alunos', require('../BACKEND/routes/api/alunos'));


// //Connect to MongoDB
connectDB();


mongoose.connect(process.env.DATABASE_URI, () => {
     console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log('Server running on port' + PORT));
 });