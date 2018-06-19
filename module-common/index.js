console.log('__dirname' in global)
require('./dir/d.js')


return
var obj = require('./b.js')
console.log(obj)
console.log(obj.a)
console.log(obj.a.b)
console.log( obj.a.b == obj )


return
var c0= require('./c.js') //{me:'c',x:100}
Promise.resolve().then(()=>{
c0.x=100
})

var c1 =require('./b.js')
setTimeout(() => {
  console.log('c1',c1)
}, 0);

return
var b ={
  me: 'b'
}

var a={
  me: 'a'
}

b.a=a
a.b=b

console.log(a)
console.log(b)