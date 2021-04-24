require('dotenv').config();

var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');

    const Shopify = require('shopify-api-node');
    const shopify = new Shopify({
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.ACCESS_TOKEN,
    });
    shopify.order
        .list({ limit: 5 })
        .then((orders) => console.log(orders))
        .catch((err) => console.error(err));

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000');
