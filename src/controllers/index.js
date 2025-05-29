

const shortenController = (req, res)=>{
    const result = shortenService(req.body.longUrl);
    
    res.status(201).json({shortUrl : result });
}

module.exports = {shortenController} ;