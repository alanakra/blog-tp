require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const blogRouter = require('./blog.router');

const app = express();

app.set('view engine','pug');

app.set('views','./views');

const PORT = 9000;
const HOST = 'localhost';

app.use('/', blogRouter);

// mongodb+srv://alan:<password>@cluster0-qpbs6.gcp.mongodb.net/test?retryWrites=true&w=majority

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,{useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log(`[Mongo DB] - Connexion établie !`))
.then(() => {
 app.listen(PORT, HOST, () => {
     console.log(`[Express.js] - L'application a démarré sur http://${HOST}:${PORT}`);
 });
})
.catch(err=>console.error(err));
