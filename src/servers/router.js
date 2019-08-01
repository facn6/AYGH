const handler = require('../helpers/handlers');

const router = (req, res) => {
  const { url } = req;
  if (url === '/') {
    handler.handleHome(res);
  } else if (url.indexOf('.') !== -1) {
    handler.handlePublic(req, res);
  } else if (req.url === '/v2/sources?language=en' || req.url === '/v2/sources?language=ar' || req.url === '/v2/sources?language=he' || req.url === '/v2/sources?language=ru' )
  {
    const section = req.url;
    handlers.handlerNews(req, res, section);
  } else {
    handler.handleNotfound(req, res);
  }
};


module.exports = router;
