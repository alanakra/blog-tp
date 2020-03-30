const express = require("express");

const blogRouter = new express.Router();

blogRouter.get('/', (request, response) => {
  const name = "Alan";
  response.render('index.pug', { name });
});

blogRouter.get('/admin', (request, response) => {
  // response.send('Bienvenue sur l\'espace d\'administration !');
  // response.render('./admin/index.pug');
  response.render('./admin/');
});

blogRouter.get('/write', (request, response) => {
  response.render('./admin/write.pug/');
});

// Exporte le routeur
module.exports = blogRouter;

