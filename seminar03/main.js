"use strict";

// Задача 2: Получить от пользователя два числа и вывести в диалоговое окно сумму значений, которые ввел пользователь, вывод должен выглядеть так (пример): 
// Результат сложения чисел 5 и 2 равен 7.

// const numb1 = Number.parseFloat(prompt("Введите первое число"));

// const numb2 = Number.parseFloat(prompt("Введите второе число"));

// const numb1 = +prompt("Введите первое число");

// const numb2 = +prompt("Введите второе число");

// // alert("Результат сложения чисел " + numb1 + " и " + numb2 + " равен " + (numb1+numb2) + ".");

// // alert(`Результат сложения чисел ${numb1} и ${numb2} равен ${numb1 + numb2}.`);

// function sum(numb1, numb2){
//     return numb1 + numb2;
// }

// alert(`Результат сложения чисел ${numb1} и ${numb2} равен ${sum(numb1, numb2)}.`);

// Задача 4: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.- При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”.- При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением “Ну вы держитесь там!”.

// const answer = confirm("Вам хорошо живётся?");

// if (answer) alert('Тогда мы идём к вам');
// else alert('Ну вы держитесь там');

// Задача 5: перепишите код, используя конструкцию switch-case, запрашивая продукт через диалоговое окно.

// const product = prompt("Введите продукт");

// if (product == "Мандарины") {
//   alert('Мандарины стоят 100 руб/кг.');
// } else if (product == "Бананы") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } else if (product == "Груши") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } else {
//   alert('Нет такого продукта.');
// }

// switch (product) {
//     case 'Мандарины': alert('Мандарины стоят 100 руб/кг.');
//     break;
//     case 'Бананы':
//     case 'Груши': alert('Бананы и груши стоят 70 руб/кг.');
//     break;
//     default: alert('Нет такого продукта.');
//     break;
// } 

// Функция getMaxEvenElement принимает массив с целыми числами, необходимо 
// реализовать функцию так, чтобы она возвращала значение большего элемента массива, 
// который записан в четном индексе включая 0.

// function getMaxEvenElement(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i += 2)
//         if (arr[i] > max) max = arr[i];
//     return max;
// }

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   }

// function fillRandomArray(arr, min, max){
//     for (let i = 0; i < arr.length; i ++)
//     arr[i] = getRandomArbitrary(min, max)
// }

// console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
// console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31

/*
Задача с реального собеседования.
 
Один покупатель старинных уникальных часов хочет приобрести для музея 
двое часов. В магазине у хозяйки есть n разных часов с соответствующими 
ценами [p1, ..., pn]. Покупатель хочет полностью использовать свой 
бюджет. Необходимо выяснить получится ли это.
*/

function f(clockArr, money) {
    for (let i = 0; i < clockArr.length - 1; i++) {
        for (let k = i + 1; k < clockArr.length; k++) {
            if (Math.round((clockArr[i] + clockArr[k]) * 100) / 100 === money) {
                return true;
            }
        }
    }
    return false;
}

console.log(f([8.74, 3.12, 9.50, 2.35], 2.35)); // false
console.log(f([1.1, 4.2, 7.5, 0.4], 8.4)); // false
console.log(f([54.10, 20.00, 18.51, 97.75, 35.20, 76.42], 89.3)); // true