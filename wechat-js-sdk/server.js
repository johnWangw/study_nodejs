const express = require('express')

const app = express()

app.use(function(req,res){
  console.log(req.url)
  if(req.url=='/wechat'){
    // console.log(req)
    var buffer= new Buffer('')
    req.on('data',function(chunk){
      buffer=Buffer.concat([buffer,chunk]);
    })
    req.on('end',function() {
      buffer=buffer.toString();
      console.log('---',buffer)
    })
  }
  res.end('ok')
})

app.listen(8080,()=>{
  console.log(`server start at http://localhost:8080`)
})