/**
 * Created by Eric-mac on 16/3/15.
 */
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
//var config = require('./webpack.config.js')
var config = require('./webpack.protetype.config.js')
var path = require('path');

var app = new (require('express'))()
var port = 3004

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("*", function(req, res) {
    console.log(req.url);
    res.sendFile(path.join(__dirname, './out/index.html'));
    //res.sendFile(path.join(__dirname, './prototype/index.html'));
})

app.listen(port, 'localhost', function (err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Listening at http://localhost:%s', port);
});

