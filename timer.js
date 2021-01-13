const input = process.argv.slice(2);

if (input) {}
let i = 6000;

setTimeout(() => {
  for (let item of input) {
    item = process.stdout.write('arlet');
  }
}, i);



// 2

// const cp = require('child_process');

// function beep(frequency, duration) {
// cp.execSync(`rundll32.exe Kernel32.dll,Beep ${frequency},${duration}`);
// }

// beep(750, 300); //



// // 3

// const input = process.argv.slice(2);

// if (input) {
// process.stdout.write('hola');
// }
