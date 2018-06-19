var createTimestamp = function () {
  return parseInt(new Date().getTime() / 1000) + '';
};
var createNonceStr = function () {
  return Math.random().toString(36).substr(2, 15);
};
var ret = {
  jsapi_ticket: 'HoagFKDcsGMVCIY2vOjf9tXpJMiaZHt1PYit0K8kpk-MjMUKkgpQpsl6ySExPcZgZfhwAWWQ8gl29xJ4-c5PKg',
  nonceStr: 'wx80288637207791cb',
  timestamp: createTimestamp(),
  url: 'http:\/\/0eb97594.ngrok.io\/'
}
var raw = function (args) {
  var keys = Object.keys(args);
  keys = keys.sort(); //字典排序 得到 keys ["jsapi_ticket", "nonceStr", "timestamp", "url"]
  var newArgs = {};
  keys.forEach(function (key) {
  newArgs[key.toLowerCase()] = args[key]//.toLowerCase(); //key val 转小写
  });
  
  var string = '';
  for (var k in newArgs) {
    string += '&' + k + '=' + newArgs[k]; //用 & 链接 去掉第一个 &
  }
  string = string.substr(1);
  return string;
};
var string1= raw(ret)

var crypto = require("crypto");
function sha1(str){
  var md5sum = crypto.createHash("sha1");
  md5sum.update(str);
  str = md5sum.digest("hex");
  return str;
}
// return console.log(sha1(`jsapi_ticket=sM4AOVdWfPE4DxkXGEs8VMCPGGVi4C3VM0P37wVUCFvkVAy_90u5h9nbSlYy3-Sl-HhTdfl2fzFy1AOcHKP7qg&noncestr=Wm3WZYTPz0wzccnW&timestamp=1414587457&url=http://mp.weixin.qq.com?params=value`))
var signature = sha1(string1);

console.log(string1)
console.log(ret)
console.log(signature)
return 

function config(time, ns, sign) { 
  wx.config({ 
    debug: !1, 
    appId: '*************', 
    timestamp: time, 
    nonceStr: ns,
    signature: sign, 
    jsApiList: [ 
      'checkJsApi', 
      'onMenuShareTimeline', 
      'onMenuShareAppMessage', 
      'onMenuShareQQ', 
      'onMenuShareWeibo', 
      'showOptionMenu', 
      'hideOptionMenu',//wx.hideOptionMenu(); 'scanQRCode', //scanQRCode 
    ] 
  });
}
