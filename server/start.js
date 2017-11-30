import express from 'express';
import fs from 'fs';
import { createBundleRenderer } from 'vue-server-renderer';
import clientManifest from 'built/manifest.json';

const server = express();
const template = fs.readFileSync('./index.template.html', 'utf-8');
const renderer = createBundleRenderer('built/server-bundle.json', {
  runInNewContext: false,
  template,
  clientManifest
});

server.get('*', (req, res) => {
  const context = { url: req.url };

  renderer.renderToString(context)
    .then(html => res.end(html))
    .catch(err => res.status(err.code).end());
});