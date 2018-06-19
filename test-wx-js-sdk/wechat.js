var url = require("url");
var crypto = require("crypto");
var xml2js=require('xml2js')

function sha1(str){
    var md5sum = crypto.createHash("sha1");
    md5sum.update(str);
    str = md5sum.digest("hex");
    return str;
}

/*
	*ES6 class 
*/
var wechat=(function(){
	var config={
		token:'wechat'
	}
	var handle={};
	return class extends Function{
		constructor(){
			super()
			const f=function(req,res){
				//console.log(config)
				//console.log(handle)
				var query=url.parse(req.url,true).query;
				var timestamp = query.timestamp;
				var nonce = query.nonce;
				var scyptoString = sha1([nonce,timestamp,config.token].sort().join(''));
				
				var echostr = query.echostr;
				var signature = query.signature;
				var flag=(signature == scyptoString);
				var buffer=new Buffer('');
				req.on('data',function(chunk){
					buffer=Buffer.concat([buffer,chunk]);
				})
				req.on('end',function() {
					buffer=buffer.toString();
					req.body=buffer;
					if(!flag){
						//request is not form wechat
            // return res.end('error');
            if(!('api' in handle)){
              return res.end('error')
            }
            handle['api'].forEach((item)=>{
              item.call(this,req,res)
            })

					}else if(req.body==''){
						//first set token,wechat server verification token
						return res.end(echostr);
					}else{
						//wechat event 
						xml2js.parseString(req.body,function(err,result){
							var obj=result.xml;
							console.log(obj)
							if(obj.MsgType[0]=='text'){//text event
								if(handle.text&&handle.text.length!=0){
									handle.text.forEach(function(item){
										item.call(null,obj)
									})
								}
								res.end(`<xml>\n<ToUserName><![CDATA[${obj.FromUserName}]]></ToUserName>\n<FromUserName><![CDATA[${obj.ToUserName}]]></FromUserName>\n<CreateTime>${new Date().getTime()}</CreateTime>\n<MsgType><![CDATA[${obj.MsgType}]]></MsgType>\n<Content><![CDATA[${obj.Content}]]></Content>\n</xml>`)
							}else if(obj.MsgType[0]=='event'&&obj.Event[0]=='subscribe'){
								console.log('subscribe')
								res.end(`<xml>\n<ToUserName><![CDATA[${obj.FromUserName}]]></ToUserName>\n<FromUserName><![CDATA[${obj.ToUserName}]]></FromUserName>\n<CreateTime>${new Date().getTime()}</CreateTime>\n<MsgType><![CDATA[${'text'}]]></MsgType>\n<Content><![CDATA[${'谢谢关注'}]]></Content>\n</xml>`)
							}else{//other event
								res.end(echostr)
							}
						})
					}
				})
			}
			f.__proto__=this.__proto__
			return f;
		}
		set(obj){
			if(typeof obj=='object'&&obj.token){
				config.token=obj.token;
			}else{
				throw new Error('First argument must be a Object,token must in the object');
			}
			return this;
		}
		on(type,cb){
			if(typeof cb=='function'&&typeof type=='string'&&type!=''){
				if(handle[type]==undefined){
					handle[type]=[cb];
				}else{
					handle[type].push(cb);
				}
			}else{
				throw new Error('First argument must be a string of the event type. Second argument must be a function');
			}
			return this;
		}
	}
})()
module.exports=wechat;