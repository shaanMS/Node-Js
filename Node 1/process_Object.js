/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


console.log(process.pid)

console.log(process.getgid)

console.log(process.getuid)

console.log(process.execpath)

//    ANOTHER WAY

const p = require('process')
 
console.log('\n\n\n\n\n\n\nHello I am Calling Process........\n\n\n'+p.pid+'\n\n\nPlease see this in first line also\n\n\n')

console.log(process.argv)

console.log('\n\n\n')

console.log(process.argv[0])

console.log('\n\n\n')

console.log(process.argv[1])

console.log('\n\n\n')

//console.log(process.argv[2])

const v1 = process.argv[2];

let msg = ' hrrrrrrrrrrr...............${v1}';

console.log(msg);

console.log("\n\n\n\n")

console.warn("Hello");

var s = "shaan";

console.log(s)

console.count()

console.count()

console.clear()

for(let x = 0;x<1000;x++)
{

console.table([
    { a: x, b: 2-x/6+x/568 }, 
    { a: 3000000%x, b: 7-x/55555, c: 'y' }
]);

if (x > 500)
     var t = console.warn("Alert !!!!!!!")
 
 console.log(t);
 
 console.info()
}