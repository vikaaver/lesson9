// Калькулятор стоимости товаров: 
// Создайте функцию, которая принимает цену товара и количество единиц, 
// а затем возвращает общую стоимость.


function totalSum(price, quantity){
    const result = price * quantity;
    return result;
}
const resultSum = totalSum(2333, 44);
console.log(resultSum);

// Проверка на четность: 
// Создайте функцию, которая определяет, является ли число четным и возвращает булевое значение.


function check (num){
   return num % 2 === 0;
}
console.log(check(11));


// Реверс строки: Напишите функцию, 
// которая принимает строку и возвращает ее в обратном порядке (reverse использовать нельзя).

function reverse(string){
    let addstring = "";
    for (let i=string.length-1; i>=0; i--){
        addstring+=string[i];
    }
    return addstring;
}
 const string = "reverse";
 console.log(reverse(string));

//  Конвертер температуры: 
// Создайте функцию для конвертации температуры из градусов Цельсия в градусы Фаренгейта.

function fromCtoF(degreeC){
    const result = degreeC*9/5+32;
    return  result
}
const resultSum1= fromCtoF(25);
console.log(resultSum1)