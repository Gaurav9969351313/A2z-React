var request = require("request");

var options = { method: 'GET',
  url: 'http://localhost:3003/api/signin',
  headers: 
   { 'Postman-Token': 'b4e2e39a-dde3-4e6a-86cb-90f308675def',
     'cache-control': 'no-cache',
     'Content-Type': 'application/json' },
  body: { email: 'sss@sss.com', password: 'ssssss' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
