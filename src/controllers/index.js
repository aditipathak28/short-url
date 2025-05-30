const { shortenService, getOriginalUrlService } = require('../services');

const shortenController = (req, res)=>{
    const result = shortenService(req.body.longUrl);
    
    res.status(201).json({shortUrl : result });
}


const redirectController = (req, res) => {
  const shortCode = req.params.id;
  const longUrl = getOriginalUrlService(shortCode);

  if (longUrl) {
    return res.redirect(301, longUrl);
  }

  res.status(404).json({ error: 'URL not found' });
};


module.exports = {shortenController,  redirectController, } ;