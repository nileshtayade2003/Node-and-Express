let express = require('express')

let app = express()
const port = 8080

app.get('/home',function (request,response){
  response.send('hello user')
})

app.get('/',function (request,response){
  response.send('Welcome to our site')
})
app.get('/product/:id',function (request,response){
  let pid = request.params.id;
  response.send('Your viewing product no '+pid)
})

let server = app.listen(port,function(){
  console.log(`listening on url http://localhost:${port}`)
})

// to run type : node index.js



