let util = require('util') //used for debugging and depricating functions

let str = "The loop has excecuted %d time (s)";

for(let i=1;i<=10;i++)
{
  console.log(util.format(str,i)) // outputs: The loop has excecuted i time (s) 
}