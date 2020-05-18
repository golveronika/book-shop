const express = require('express')
const shop = require('./utils')

const app = express()
const port = process.env.PORT || 8080

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  
    //and remove cacheing so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });

app.get('/getData', function (req, res) {
    res.send(shop.getGoods());
  });

app.listen(port, () => {
    console.log(`Server is up on port ${port}\n${(port === 8080) ? 'http://localhost:8080/': ''}`)
})