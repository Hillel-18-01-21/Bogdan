// function fac(n) {
//   let result = 1n;
//   for (let i = 1n; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(fac(0));
// console.log(fac(2n));
// console.log(fac(5n));
// console.log(fac(15));
// console.log(fac(100n));
// console.log(fac(10000));

// // function fac(n) {
// //   if (n > 1) {
// //     return BigInt(n) * fac(n - 1);
// //   }else{
// //     return 1n;
// //   }
// // }

// // console.log(fac(2));
// // console.log(fac(5));
// // console.log(fac(15));

const google = fetch('https://google.com');
console.log(google);