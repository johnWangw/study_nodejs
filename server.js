const express = require('express')

const app = express()

var env={}
void (()=>{
  var reg=/^\-\-([a-zA-z]{1,})=([\.\/a-zA-Z0-9_\-]{1,})$/g
  process.argv.slice(2).map(item=>{
    if(!reg.test(item)){
      console.log(item)
      throw new Error(`just set --***{1,}=*{1,}`)
    }
    var key = item.replace(reg,'$1')
    var value = item.replace(reg,'$2')
    env[key] = value
  })
})()

app.use(express.static(env.staticpath||'./'))

app.listen(env.port||8888,()=>{
  console.log(`server start at http://localhost:${env.port||8888}`)
})