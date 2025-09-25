const prompt = require("prompt-sync")();

// Chalenge 1

let muliNum = Number(prompt("Donner un nombre: "));

for (let i = 1; i <= 10; i++) {
  console.log(`${muliNum} * ${i} = ${muliNum * i}`);
}

// Chalenge 2

let premierNum = Number(prompt("Donner un nombre: "));

for (let i = 1; i <= 9; i++) {
  if (premierNum <= 0) {
    console.log("Le nombre n'est pas premier");
    break;
  } else if (premierNum == 1) {
    console.log("Le nombre est premier");
    break;
  }

  if (premierNum % 1 == 0 && premierNum % premierNum == 0) {
    if (i == 1) {
      continue;
    } else if (premierNum % i != 0) {
      console.log("Le nombre est premier");
    } else {
      console.log("Le nombre n'est pas premier");
    }
    break;
  } else {
    console.log("Le nombre n'est pas premier");
    break;
  }
}

// Chalenge 3

let number = +prompt("Donner un nombre: "),
  som = 0,
  max = 0;

while (number !== 0) {
  if (number >= 100) {
    console.log("Le nombre est supérieur à 100, il sera donc ignoré");
  } else {
    som += number;
    max = number > max ? (max = number) : (max = max);
  }
  number = +prompt("Donner un nombre: ");
}

console.log(
  `La somme des valeur est: ${som} et le maximum des valeurs valides est: ${max}`
);

// Chalenge 4

let chiffres = prompt("Écris des chiffres: ");

console.log(chiffres.split("").reverse().join(""));

// Challenge 5

let n = +prompt("Donner un entier: ");

while (n <= 1) {
  console.log("Donner un nombre plusieur a 1");
  n = +prompt("Donner un entier: ");
}

console.log(`The premier numbers until ${n}:`);

for (let i = 2; i < n; i++) {
  let check = false;

  for (let j = 9; j >= 2; j--) {
    if (i % j != 0) {
      check = true;
    } else {
      check = false;
    }
  }

  if (i == 2) console.log(i);

  check ? console.log(i) : "";
}

// Challenge 6

let base = +prompt("Donner le base: ");
let exposant = +prompt("Donner l'exposant: ");

while (exposant < 0) {
  exposant = +prompt("L'exposant should be bigger than 0, Donner un autre: ");
}

console.log(`${base}^${exposant} = ${Math.pow(base, exposant)} `);

// Challenge 7

let nombres = [];
let nombresSom = 0;

console.log("Donner 10 nombres");

for (let i = 1; i <= 10; i++) {
  nombres.push(+prompt(`Donner un nombre: `));
}

for (let nom of nombres) {
  if (nom > 0) {
    nombresSom += nom;
  }
}

console.log(`La somme des positif nombres est: ${nombresSom}`);

// Challenge 8

let space = 9;

for (let i = 1; i <= 19; i += 2) {
  console.log(" ".repeat(space--), "*".repeat(i));
}
