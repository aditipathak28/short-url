const validateUrl = (req, res, next) => {
  let { longUrl } = req.body;

  if (!longUrl) {
    return res.status(400).json({ error: 'longUrl is required' });
  }

  // Auto-add http:// if missing
  if (!/^https?:\/\//i.test(longUrl)) {
    longUrl = 'http://' + longUrl;
  }

  try {
    const parsedUrl = new URL(longUrl);

    // Check domain name is present and valid
    const hostname = parsedUrl.hostname;
    const isValidDomain = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(hostname);

    if (!isValidDomain) {
      return res.status(400).json({ error: 'Invalid domain name' });
    }

    // Save cleaned URL back into req.body
    req.body.longUrl = longUrl;

    next();
  } catch (err) {
    return res.status(400).json({ error: 'Invalid URL format' });
  }
};

module.exports = validateUrl;
