var obj ={
  me: 'c'
}
module.exports = obj

Promise.resolve().then(()=>{
  obj.x=101
})