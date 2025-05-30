const shortToLongMap = {};
const longToShortMap = {};

// Utility to generate a random 6-character code
const generateShortCode = () => {
  return Math.random().toString(36).substring(2, 8);
};

const shortenService = (longUrl) =>{
  const shortCode = generateShortCode();
  const shortUrl = `http://localhost:8080/${shortCode}`;

  shortToLongMap[shortCode] = longUrl;
  longToShortMap[longUrl] = shortCode;

  return shortUrl ;
}



const getOriginalUrlService = (shortCode) => {
  return shortToLongMap[shortCode]; // could be undefined
};


module.exports = { shortenService, getOriginalUrlService, };
