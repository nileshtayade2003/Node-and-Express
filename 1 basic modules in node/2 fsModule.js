const fs = require('fs')
//asynchronously read file 'sample.txt'
fs.readFile('2 sample.txt','utf-8',(err,data)=>{
  if(err)
  {
    console.log(err)
    return;
  }

  //console log the content of the '2 sample.txt' file
  console.log(data)
})