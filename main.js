const prompt = require("prompt-sync")();

// // Chalenge 1

// let muliNum = Number(prompt("Donner un nombre: "));

// for (let i = 1; i <= 10; i++) {
//   console.log(`${muliNum} * ${i} = ${muliNum * i}`);
// }

// // Chalenge 2

// let premierNum = Number(prompt("Donner un nombre: "));

// for (let i = 1; i <= 9; i++) {
//   if (premierNum <= 0) {
//     console.log("Le nombre n'est pas premier");
//     break;
//   } else if (premierNum == 1) {
//     console.log("Le nombre est premier");
//     break;
//   }

//   if (premierNum % 1 == 0 && premierNum % premierNum == 0) {
//     if (i == 1) {
//       continue;
//     } else if (premierNum % i != 0) {
//       console.log("Le nombre est premier");
//     } else {
//       console.log("Le nombre n'est pas premier");
//     }
//     break;
//   } else {
//     console.log("Le nombre n'est pas premier");
//     break;
//   }
// }

// // Chalenge 3

// let number = +prompt("Donner un nombre: "),
//   som = 0,
//   max = 0;

// while (number !== 0) {
//   if (number >= 100) {
//     console.log("Le nombre est supérieur à 100, il sera donc ignoré");
//   } else {
//     som += number;
//     max = number > max ? (max = number) : (max = max);
//   }
//   number = +prompt("Donner un nombre: ");
// }

// console.log(
//   `La somme des valeur est: ${som} et le maximum des valeurs valides est: ${max}`
// );

// // Chalenge 4

// let chiffres = prompt("Écris des chiffres: ");

// console.log(chiffres.split("").reverse().join(""));

// Chalenge 5

// let n = +prompt("Donner un nombre: ");

// while (n <= 1) {
//   console.log("Donner un nombre supérieure à 1");
//   n = +prompt("Donner un nombre: ");
// }

// console.log(`Les nombres premiers jusqu’à ${n}`);

// for (let i = 2; i <= n; i++) {
//   let check = false;

//   for (let j = 2; j <= 9; j++) {
//     if (j == i) {
//       continue;
//     } else if (i % j !== 0) {
//       check = true;
//     } else {
//       check = false;
//     }
//   }

//   check ? console.log(i) : "";
// }

// Chalenge 6
