/**
 * Created by sk on 06.05.16.
 */
// Load required modules
var http    = require('http'),         // http server core module
    port    = 8000,
    timeNow = new Date().toLocaleString('en-US', {hour12: false, timeZone: 'Europe/Kiev'}),
    express = require('express'),       // web framework external module
    httpApp = express();

// Setup and configure Express http server. Expect a subfolder called 'static' to be the web root.
httpApp.use(express.static(__dirname + '/static/'));

// Add url for directory 'bower_components'.
httpApp.use('/bower_components', express.static(__dirname + '/bower_components/'));

// Start Express http server on the port
console.info(timeNow + ': Starting http server on the port ' + port);
http.createServer(httpApp).listen(port);