import express from 'express';
import template from './index.template.html';
import createApp from '/built/server-bundle';
import ssrRenderer from 'vue-ssr-renderer';

const server = express();
const renderer = ssrRenderer.createRenderer();

server.get('*', (req, res) => {
  const context = { url: req.url };

  createApp(context).then(app => {
    renderer.renderToString(app)
      .then(html => res.end(html))
      .catch(err => res.status(err.code).end());
  });
});