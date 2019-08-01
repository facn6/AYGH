const fs = require("fs");
const path = require("path");


const handleHome= (response)=> {
 const filepath = path.join(__dirname, '..', '/..','/public','/view','index.html');
    fs.readFile(filepath, function(error, file) {
      if (error) {
        response.writeHead(500, { "Content-type": "text/html" });
        response.end("error in the main page handler");
      } else {
        response.writeHead(200, { "Content-type": "text/html" });
        response.end(file);
      }
    });
  }


  var filePath='';
   const handlePublic= (request,response)=> {
     const url=request.url;
    var extention = url.split(".")[1];
    const extentionType = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      ico: "image/x-icon",
      jpg: "image/jpeg",
      png: "image/png"
    };

     filePath = path.join(__dirname, "..","/..", "/public","/view", url);

    fs.readFile(filePath, (error, file) => {
      if (error) {
        response.writeHead(500, { "Content-type": extentionType.html });
        response.end("<h1>Sorry, we have an error in the internal file -css,javascript...-</h1>");
      } else {
        response.writeHead(200, { "Content-type": extentionType[extention] });
        response.end(file);
      }

    });

  }


const handlerNews = (request, response, section) => {
  requester(
  ` https://newsapi.org/v2/sources?language=${section}&apiKey=416eb04821e74994a23b72fb0e7f5e0a`,
    (err, res, body) => {
      if (err) {
        console.log(`Error ${err}`);
        response.writeHead(500, { 'content-type': 'text/plain' });
        return response.end('Sorry, there was a server error');
      }

      const info = JSON.parse(body);
      const { results } = info.response;
      const answer = [];
      for (let i = 0; i < 5; i++) {
        answer.push(results[i]);
      }

      response.writeHead(200, { 'Content-type': 'application/json' });
      response.end(JSON.stringify(answer));
    },
  );
};
const handleNotfound=(request,response)=>{
  response.writeHead(404);
  response.end('<h1>page is not found</h1>');
}



module.exports ={ handleHome,handlePublic,handlerNews,handleNotfound};
