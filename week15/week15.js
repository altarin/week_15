//Задание 1
// Выведите числа от 1 до 10 в консоль

// let i = 0;
// for (i = 0; i <= 10; i++) { 
//     console.log(i); 
// }

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//     console.log(i);
//     }
// }

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке

// for(let i=10; i>=0; i--) {
//     console.log(i);
// }

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10

// let i = 0;
// for (i = 0; i <= 10; i++) { 
//     console.log(i * 5); 
// }

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль

// let sum = 0;
// for (let i = 0; i <= 100; i++) { 
//     sum += i; 
// }
// console.log(sum);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for

// const array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

//Задание 7
// Выведите сумму всех элементов массива используя цикл for

// const numbers = [1, 2, 3, 4, 5];
// let totalSum = 0;
// for (let i = 0; i < numbers.length; i++){
//     totalSum += numbers[i];
// }
// console.log(totalSum);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! 
// Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";

// let animals = ["Кот", "Рыба", "Лемур"];
// for (let i = 0; i < animals.length; i++){
//     const  animal = animals[i];
//     let editTextAnimal = (`${animals[i]} - прекрасное животное`);
//     animals[i] = editTextAnimal;
// }
// console.log(animals);

//Задание 9
// Выведите символы в строке в консоль

// const str = 'Hello';
// for(let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. 
// Массив array объявлен в Задании 6

// for(let arr of array){
//     console.log(arr);
// }

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split

// const sentences = ['Hello, world!', 'How are you?'];
// let sentString = sentences.join();
// let result = sentString.split(' ');
// console.log(result);

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. 
// Массив numbers объявлен в Задании 7

// let sum = 0;
// for (let number of numbers) {
//     sum += number;
// }
// console.log(sum);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль

// const list = ['apple', 'banana', 'cherry'];
// for (let value of list){
//     console.log(value.length);
// }

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр

// const words = ['Summer', 'Autumn', 'winter', 'Spring'];
// for (let i = 0; i < words.length; i+= 1){
//     const word = words[i];
//     let upperCaseWord = word.toUpperCase();
//     words[i] = upperCaseWord;
// }
// console.log(words);

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes

// const greeting = 'Hello, world!';
// let vowelCount = 0;
// const vowels = ['a', 'e', 'i', 'o', 'u'];

// for(let x = 0; x < greeting.length; x++) {
//     for (let y = 0; y < vowels.length; y++)
//     if (greeting[x] === vowels[y]) {
//         vowelCount += 1;
//     }
// }
// console.log(vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
// const words = ['Hello', 'world', '!'];
// const newString = words.join(' ');
// console.log(newString);

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
// let number = 0;
// while (number < 10){
//     number++;
//     console.log(number);
// }


//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
// let number = 11;
// while (number > 1){
//     number--;
//     console.log(number);
// }


//Задание 19
// Проверьте, все ли элементы массива являются положительными числами 
// используя цикл while
// Подсказка: используйте директиву break

// const allNumbers = [1, 2, 3, -4, 5];
// let number = allNumbers[i];
// let allPositive = true;

// while (i < allNumbers.length) {
//   if (number > 0) {
//     console.log(number);
//     i +=1;
//   } else {
//     break;
//   }
// }


//Задание 20
// Выведите значения элементов массива до первого отрицательного числа 
// используя цикл do...while

// const random = [2, 4, 6, -3, 8, 10];
// let i = 0;
// do { 

//     console.log(random[i]);
//     i++;
// }
// while (i < random.length && random[i] <= 0);


//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 100 && i % 3 !== 0);


//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
// let sum = 0;
// // let number = 0;
// while(sum >= 100){
//     let number = parseInt(prompt("Введите число: "));
//     sum += number;
// }
// console.log(`сумма введенных чисел — ${sum}`);


//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';
