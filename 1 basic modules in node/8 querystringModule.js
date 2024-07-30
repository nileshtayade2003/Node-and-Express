let qry = require('querystring'); // provides methods to parse through the query string of a URL.

let qryParams = qry.parse('lastName=Kent&firstName=Clark');
console.log(qryParams.firstName); //returns Clark