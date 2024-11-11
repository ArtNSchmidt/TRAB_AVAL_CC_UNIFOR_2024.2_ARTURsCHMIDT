function numerosPares(numbersArray) {
    return numbersArray.filter(number => number % 2 === 0);
}

const inputNumbers = [1, 2, 3, 4, 5, 6];
const paresNumeros = numerosPares(inputNumbers);
console.log(paresNumeros);





