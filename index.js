const express = require("express");

const blogRouter = require('./blog.router');

const app = express();

app.set('view engine','pug');

app.set('views','./views');

const PORT = 9000;
const HOST = 'localhost';

app.use('/', blogRouter);

app.listen(PORT,HOST, () =>{
 console.log(`[Express.js] - L'application a démarré sur http://${HOST}:${PORT}`);
});