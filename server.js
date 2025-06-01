const app = require('./src/app') ;
const config = require('./src/config');
const PORT = config.server.http.port ;

app.listen( PORT , ()=>{
    console.log(`Server listening on port ${PORT}`);
 }
);