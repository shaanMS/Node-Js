/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

console.log("test");
for(let x = 1; x < 50000; x ++)
{
    if(x % 250 == 0)
    {
        document.seal()
        process.exit();
    }
    console.log('Not yet   '+x*2);
}
