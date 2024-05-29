// Vazifa.
// 1-masala
// let result;
// for (let i = 1; i <= 50; i += 2) {
//     console.log(i**2);
// }

// 2-masala
// let result;
// for (let i = 1; i <= 10; i += 1) {
//     console.log(i**3);
// }

// 3-masala
// let n = +prompt('n soni kiritilsin');
// for(let i = 1; i <= 10; i++) {
//     let S = 1;
//     for( let n = 1; n <= i; n++){
//         S = S * n; 
//     }
//     console.log(`factarial ${i} hisoblanadi ${S}`);
// }

// 4-masala
// let summ = 0;
// for(let i = 1; i <= 30; i++) {
//     summ = summ + i ** 2;
// }
// console.log(summ);

// 5-masala

// for (let i = 1; i <= 20; i++) {
//     let counter = 0;
//     for (let a = 1; a <= i; a++) {
//     if (i % a == 0) {
//       counter = counter + 1;
//     }
// }
// if (counter == 2) {
//     console.log(i);
// }
// }

// 6-masala
// for(let i = 1; i < 100; i++) {
//     if(i * 2 < 100) {
//         console.log(i);
//     }
// }

// 7-masala
// for(let i = 1; i <= 100; i++) {
//     if(i % 7 ==0 && i % 5 != 0) {
//         console.log(i);
//     }
// }

// 8-masala
// let n = +prompt("n soni kiritilsin");
// let summ = 0;
// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     summ = summ + i;
//     console.log(i);
//   }
// }

// console.log(`yigindi ${summ}`);



//Qo'shimcha masala
// 1-masala
// let n = +prompt('n soni iritilsin');
// let m = +prompt('m soni iritilsin');
// let counter = 0;
// for (let i = n; n <= m; i++) {
//     if (i < 10) {
//         counter = counter + 10*1;
//     } else if (i > 9 && i < 100) {
//         counter = counter + 10*2;
//     } else if (i < 10000 && i > 999) {
//         counter = counter + 10*3;
//     }
// }
// console.log(counter);

//2-masala
// let n = +prompt('n soni iritilsin');
// let m = +prompt('m soni iritilsin');
// let counter;

// counter = 10*(n-m);
// console.log(counter);

// 3-masala
// let N = +prompt('N soni kiritilsin');
// let S = 0;
// for (let i = 1; i <= N; i++) {
//     S = S + i**3;
// }
// let counter = 0;
// for (let a = 1; a <= S; a++) {
//     if (S % a == 0) {
//         counter = counter + 1;
//     }
// }

// if ( counter % 2 == 1) {
//     console.log('Qiziqarli');
// } else {
//     console.log('Qiziqarli emas');
// }

// 4-masala
// ('a<b')
// let a = +prompt('a soni kiritilsin');
// let b = +prompt('b soni kiritilsin');
// let counter =0;
// for (i = a; i <= b; i++) {
//     if (i % 3 == 0 && i % 7 != 0) {
//         counter = counter + i;
//     }
// }
// console.log(counter);

// ('b<a')
// let a = +prompt('a soni kiritilsin');
// let b = +prompt('b soni kiritilsin');
// let counter =0;
// for (i = b; i <= a; i++) {
//     if (i % 3 == 0 && i % 7 != 0) {
//         counter = counter + i;
//     }
// }
// console.log(counter);

// 5-masala
// let n = +prompt("n soni kiritilsin");
// let a;
// let b;
// let c;
// let i = 1;
// while (i <= n) {
//     if ( n % i == 0 && i != n) {
//         a=i;
//     };
//     i++;
// }
// console.log(a);

// 6-masala
// Shart || Sardor va Farxod bir masala ustida bahslashib qolishdi. Doskani uning tomonlariga parallel bo'lgan 𝑁
// ta chiziqlar yordamida eng ko'pi bilan nechta qismga ajratish mumkin?

// let N = +prompt('N soni kiritilsin');
// let n = N * 2; ('Kopi bilan necha qismga ajratishi');
// console.log(n);

// 7-masala

// Shart || Kadrlar bo'limida ish haqqini so’mda oladigan 3 nafar xodim ishlaydi. Ulardan eng yuqori maosh oluvchining
//  maoshi eng kam maosh oluvchidan qancha farq qilishini aniqlash talab etiladi.

// let a = +prompt('1 - ishchining oladigan maoshi');
// let b = +prompt('2 - ishchining oladigan maoshi');
// let c = +prompt('3 - ishchining oladigan maoshi');
// let min;
// let max;
// let result; ("eng kop va eng kam maosh oluvchi ishchilarning maoshlari orasidagi farq");

// if(a<b && a<c) {
//     min = a;
// } else if(b<a && b<c) {
//     min = b;
// } else if(c<a && c<b) {
//     min = c;
// }

// if(a>b && a>c) {
//     max = a;
// } else if(b>a && b>c) {
//     max = b;
// } else if(c>a && c>b) {
//     max = c;
// }

// result = max - min;
// console.log(result);


