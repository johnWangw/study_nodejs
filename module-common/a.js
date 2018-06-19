module.exports.me = 'a'
var b= require('./b.js')

console.log(`a.js ${Object.keys(require.cache)}`)
module.exports.b = b