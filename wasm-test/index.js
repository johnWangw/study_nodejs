void(function(){
  fetch('./index.wasm')
    .then(res=>res.arrayBuffer())
    .then(buffer=>WebAssembly.compile(buffer))
    .then(module=>{
      // Create the imports for the module, including the
      // standard dynamic library imports
      const imports = {}
      imports = imports || {};
      imports.env = imports.env || {};
      imports.env.memoryBase = imports.env.memoryBase || 0;
      imports.env.tableBase = imports.env.tableBase || 0;
      if (!imports.env.memory) {
        imports.env.memory = new WebAssembly.Memory({ initial: 256 });
      }
      if (!imports.env.table) {
        imports.env.table = new WebAssembly.Table({ initial: 0, element: 'anyfunc' });
      }
      // Create the instance.
      return new WebAssembly.Instance(module, imports);
    }).then(instance => {
      var exports = instance.exports; // the exports of that instance
      console.log(exports._doubler(55)) // Output: 110
    })
})()