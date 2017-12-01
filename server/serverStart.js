import fs from 'fs';
import path from 'path';
import express from 'express';
import favicon from 'express-no-favicons';
import { createBundleRenderer } from 'vue-server-renderer';

const serverBundle = require('../built/server');
const clientManifest = require('../built/client');
const template = fs.readFileSync(path.resolve(__dirname, './index.template.html'), 'utf-8');

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
});

const server = express();

server.use(favicon());
server.get('*', (req, res) => {
  // for static context
  const context = {url: req.url};

  renderer.renderToString(context, (err, html) => {
    if(err){
      return res.end('error,,,');
    }
    res.end(html);
  });
});

server.listen(9000, (err) => {
  if(err) return console.info('server setup failed...');
  console.info('server started on the port 9000');
});