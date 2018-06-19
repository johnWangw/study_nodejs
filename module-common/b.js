module.exports.me = 'b'
var a= require('./a.js')
console.log(`b.js ${Object.keys(require.cache)}`)
module.exports.a = a