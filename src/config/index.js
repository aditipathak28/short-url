const fs = require('fs');
const yaml = require('yaml');

// Load config.yaml
const file = fs.readFileSync('config.yaml', 'utf8');
const config = yaml.parse(file);

module.exports= {
    server:{
        env: config.server.env,
        http:{
            port: config.server.http.port
        }
    }
}