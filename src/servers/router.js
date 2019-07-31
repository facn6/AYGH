const handler = require('../helpers/handlers');

const router = (request, response) => {
  const { url } = request;
  if (url === '/') {
    handler.handleHome(response);
  } else if (url.indexOf('.') !== -1) {
    handler.handlePublic(request, response);
  } else {
    handler.handleNotfound(request, response);
  }
};


module.exports = router;
