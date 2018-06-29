console.log(require.cache)

// let code = `console.log(__dirname)`

// const obj = process.binding('contextify');
// const { ContextifyScript } = obj
// console.log(obj)
// // return 
// code  = `${'(function (exports, require, module, process) {'}${code}${'\n});'}`


// const script = new ContextifyScript(code, __filename);

// // console.log(script.runInThisContext)
// // return 
// const fn = script.runInThisContext(-1, true, false);

// console.log(fn)

// return 
// fn(module.exports,require,this,process)