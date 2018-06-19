const http = require('http')
const fetch = require('fetch')


var httpWechat=require('./wechat.js')
var wechat=new httpWechat()
var port=1234
wechat.set({
    token:'test'
})
wechat.on('text',function(obj){
    //console.log(obj)
    obj.Content=`mother fuck you say : ${obj.Content}`
    return obj;
})
var acct = `10_OeCyDbZG8X4L6vB8tfTmnR8kuR23DdHgXctLb_fkuu9Hx44Y4mSgfqsKx4GqhCPcDBlcNg7tEOWyfhmsYGNR1l_iQ-iJT9VVX2sOYKe1q0aGM-NfBYdtlxOBcPRGtCNGQiBEh86CLbnDM9JrMZPdAEAUHX`
wechat.on('api', function(req, res){
  if(req.url != '/favicon.ico'){
    // fetch.fetchUrl(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${'wx5f5f295e1f29b890'}&secret=${'6749f1fa83e7e709670ad9f1b07f89e6'}`,function(err, meta, body){
    //   console.log(body.toString())
    // })
    fetch.fetchUrl(`https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${acct}&type=jsapi`,function(err, meta, body){
      console.log(body.toString())
      res.end(`${body.toString()}`)
    })
  }
  //res.end(`api ${req.url}`)
})
http.createServer(function (req,res){
  // console.log(req.url)
  return wechat.call(this,req,res)
}).listen(port,'localhost',function(){
    console.log(`server start at ${port}`)
})