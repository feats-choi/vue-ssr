import express from 'express';
import fs from 'fs';
import path from 'path';
import { createBundleRenderer } from 'vue-server-renderer';

const server = express();

const serverBundler = require('../built/server');
const clientManifest = require('../built/client');
const template = fs.readFileSync(path.resolve(__dirname, './index.template.html'), 'utf-8');

const renderer = createBundleRenderer(serverBundler, {
  runInNewContext: false,
  template,
  clientManifest
});

server.get('*', (req, res) => {
  // for static context
  const context = {url: req.url};

  renderer.renderToString(context, (err, html) => {
    if(err){
      console.error('エラー発生！');
      return
    }
    res.end(html);
  });
});

server.listen(3000, (err) => {
  if(err) return console.info('server setup failed...');
  console.info('server started on the port 3000');
});