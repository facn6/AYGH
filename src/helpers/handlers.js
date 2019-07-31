const fs = require('fs');
const path = require('path');


const handleHome = (response) => {
  const filepath = path.join(__dirname, '..', '/..', '/public', '/view', 'index.html');
  fs.readFile(filepath, (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-type': 'text/html' });
      response.end('error in the main page handler');
    } else {
      response.writeHead(200, { 'Content-type': 'text/html' });
      response.end(file);
    }
  });
};

let filePath = '';
const handlePublic = (request, response) => {
  const { url } = request;
  const extention = url.split('.')[1];
  const extentionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
    jpg: 'image/jpeg',
    png: 'image/png',
  };

  filePath = path.join(__dirname, '..', '/..', '/public', '/view', url);

  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-type': extentionType.html });
      response.end('<h1>Sorry, we have an error in the internal file -css,javascript...-</h1>');
    } else {
      response.writeHead(200, { 'Content-type': extentionType[extention] });
      response.end(file);
    }
  });
};

const handleNotfound = (request, response) => {
  response.writeHead(404);
  response.end('<h1>page is not found</h1>');
};


module.exports = { handleHome, handlePublic, handleNotfound };
