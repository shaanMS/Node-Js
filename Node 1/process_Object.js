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

console.log(process.argv[2])