
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');
const http = require('http');

const mongoUrl = 'mongodb+srv://easymatchapp:engsofteasymatch@easym-z1wwr.mongodb.net/easymatchDB?retryWrites=true&w=majority';
const app = express();
const server = new http.Server(app);

mongoose.connect(mongoUrl, {useNewUrlParser: true});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3000);
