const express = require('express')
const tasks = require('./routes/tasks')
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
dotenv.config()
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI



//Middleware
app.use(express.json())

//Routes
app.get('/', (req, res) => {
    res.send("hello");
})
app.use('/api/v1/tasks', tasks)

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected")
    app.listen(PORT, console.log(`App is listing on PORT: ${PORT}`))
}).catch((err) => {
    console.log(err)
})
