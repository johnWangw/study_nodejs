const babylon = require('babylon');

const fs = require('fs');
const path = require('path');


function createAST(filename){
  const content = fs.readFileSync(filename, 'utf-8');
  // console.log('content', content);
  const ast = babylon.parse(content, {
    sourceType: 'module'
  })
  console.log('ast',typeof ast);
  console.log('ast',Object.keys(ast));
  console.log(ast.loc)
  console.log(JSON.stringify(ast))
  // console.log('ast',typeof ast);
  return ast;
}
// console.log(path.join(__dirname, './test.js'))
createAST(path.join(__dirname, './test.js'));