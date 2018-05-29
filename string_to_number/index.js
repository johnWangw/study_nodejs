//test the speed of `string to number`


//express 源码直接  使用了http.createServer().listen

// http.createServer() 是node _http_server.js 的实例， 这个实例 继承了 net.Server, net.Server 的转化放发是(在net.js 1016行) port |=0 等同与 |0
// 检查port 是否符合规则 是用了 internal/net 的 isLegalPort方法，源码如下
// function isLegalPort(port) {
//     if ((typeof port !== 'number' && typeof port !== 'string') ||
//         (typeof port === 'string' && port.trim().length === 0))
//         return false;
//     return +port === (+port >>> 0) && port <= 0xFFFF;
// }
// net模块还写了一个tonumber方法, 核心就是Number
// function toNumber(x) { return (x = Number(x)) >= 0 ? x : false; }


// parseInt 函数将其第一个参数转换为字符串，解析它，并返回一个整数或NaN。如果不是NaN，返回的值将是作为指定基数（基数）中的数字的第一个参数的整数。

var arr = []
function random() {
    return (Math.random() * 10000) | 0
}
for (var i = 0; i < 100000; i++) {
    arr.push(random() + '');
}

//parseInt: 25.354ms
console.time('parseInt')
arr.forEach(item=>parseInt(item))
console.timeEnd('parseInt')

//parseFloat: 20.912ms
console.time('parseFloat')
arr.forEach(item => parseFloat(item))
console.timeEnd('parseFloat')

//-0: 5.508ms
console.time('-0')
arr.forEach(item => item -0)
console.timeEnd('-0')

//|0: 4.487ms
console.time('|0')
arr.forEach(item => item | 0)
console.timeEnd('|0')

//Number: 3.796ms
console.time('Number')
arr.forEach(item => Number(item))
console.timeEnd('Number')

//new Number: 5.579ms
console.time('new Number')
arr.forEach(item => new Number(item))
console.timeEnd('new Number')

// Number("123")     // 123
// Number("")        // 0
// Number("0x11")    // 17
// Number("0b11")    // 3
// Number("0o11")    // 9
// Number("foo")     // NaN
// Number("100a")    // NaN