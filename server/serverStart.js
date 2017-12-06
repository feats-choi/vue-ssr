import fs from 'fs';
import path from 'path';
import express from 'express';
import favicon from 'express-no-favicons';
import { createBundleRenderer } from 'vue-server-renderer';

const serverBundle = require('../build/server');
const clientManifest = require('../build/client');
const template = fs.readFileSync(path.resolve(__dirname, './index.template.html'), 'utf-8');

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
});

const server = express();

server.use(favicon());
server.use('/dist', express.static('./build/client'));
server.get('*', (req, res) => {
  // for static context
  const context = {url: req.url};

  renderer.renderToString(context, (err, html) => {
    if(err){
      return res.end('error,,,');
    }
    console.info('request for => ', req.url);
    res.end(html);
  });
});

server.listen(8080, (err) => {
  if(err) return console.info('server setup failed...');
  console.info('server started on the port 8080');
});