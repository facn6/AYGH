const handler = require('../helpers/handlers');

const router = (req, res) => {
  const { url } = req;
  if (url === '/') {
    handler.handleHome(res);
  } else if (url.indexOf('.') !== -1) {
    handler.handlePublic(req, res);
  } else if (req.url === '/en' || req.url === '/ar' || req.url === '/he' || req.url === '/ru' )
  {
    const section = req.url.substring[1];
    handler.handlerNews(req, res, section);
  } else {
    handler.handleNotfound(req, res);
  }
};


module.exports = router;
