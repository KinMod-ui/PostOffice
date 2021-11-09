const express = require("express");
const connectDB = require('./config/db')

const app = express();

// connect database
connectDB();

// Initialise Middleware
app.use(express.json({extended : false}))

app.get('/' , (req , res) => {
    res.send('API running')
});

// Define routes
app.use('/api/users' , require('./routes/api/user'));
app.use('/api/auth' , require('./routes/api/auth'));
app.use('/api/profile' , require('./routes/api/profile'));
app.use('/api/parcelInc' , require('./routes/api/parcelInc'));
app.use('/api/parcelOut' , require('./routes/api/parcelOut'));

const port = process.env.PORT || 5000;

app.listen(port , () => {
    console.log(`Server started on port ${port}`)
});