const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://thaubr28:thau012725@rockseat-app-xh9fh.mongodb.net/admin?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(express.json())
app.use(routes);

app.listen(3333);