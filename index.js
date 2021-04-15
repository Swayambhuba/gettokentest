var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://test.api.amadeus.com/v1/security/oauth2/token',
  'headers': {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  form: {
    'client_id': 'VJ5t4PMtK6V0acAhmzgdibWiSmZeI0fn',
    'client_secret': 'Cq3fVC9dXKW6JJe3',
    'grant_type': 'client_credentials'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
 
});
