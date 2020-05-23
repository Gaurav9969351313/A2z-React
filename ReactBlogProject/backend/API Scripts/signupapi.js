var request = require("request");

var options = { method: 'POST',
  url: 'http://localhost:3003/api/signup',
  headers: 
   { 'Postman-Token': '610a9b6e-49ea-49df-a4da-d0e13acf4296',
     'cache-control': 'no-cache',
     'Content-Type': 'application/json' },
  body: { name: 'sss', email: 'sss@sss.com', password: 'ssssss' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
