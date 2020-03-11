const express = require("express");

const blogRouter = new express.Router();

blogRouter.get('/', (request, response) => {
  const name = "JM";
  response.render('index.pug', { name });
});

blogRouter.get('/admin', (request, response) => {
 response.send('Bienvenue sur l\'espace d\'administration !');
});

// Exporte le routeur
module.exports = blogRouter;

