// task 1
const arrNum = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i-1] === 10) break;
    alert(arrNum[i]);
}

// task 2.1
for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] == 4) {
        alert(i);
    }
}

// task 2.2
alert(arrNum.indexOf(4));

// task 3
const arrNumb = [1, 3, 5, 10, 20];
alert(arrNumb.join(' '));

// task 4
const arrays = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
]

alert(arrays);

// task 5
const array = [1, 1, 1];
array.push(2, 2, 2);

alert(array);

// task 6
const arr = [9, 8, 7, 'a', 6, 5];
arr.sort();
arr.pop();

alert(arr);

// task 7
const arrN = [9, 8, 7, 6, 5];
let number = Number(prompt('Угадай число (введи любое число)'));
if (arrN.includes(number)) {
    alert('Угадал!')
} else {
    alert('Не угадал!')
}

// task 8
let str = 'abcdef';
alert(str.split('').reverse().join(''));

// task 9
const arraysN = [
    [1, 2, 3,],
    [4, 5, 6]
]

alert([arraysN]);

// task 10
let sum = 0;
const arrayNum = [3, 8, 2, 1, 6];
for (let i = 0; i < arrayNum.length; i++) {
    sum += arrayNum[i];
    alert(sum);  // не могу здесь добиться, чтобы выводило только суммы, без первого числа. т.е. впервый раз к 0 прибавляется 3
}

// task 11
const arrayInt = [5, 9, 7, 8, 12]

function getSquareOfNumber(array) {
    return array.map(el => el * el);
}

alert(getSquareOfNumber(arrayInt));

// task 12
const strWorlds = ['coffee', 'dog', 'table', '']

function getLengthStr(array) {
    return array.map(el => el.length);
}

alert(getLengthStr(strWorlds))

// task 13
const arrNegNum = [45, -8, -12, 0, 9, -3]

function filterPositive(array) {
    return array.filter(el => el < 0);
}

alert(filterPositive(arrNegNum));

// task 14
const arrRandom = [];
const arrInteger = [];
let count = 10;
let min = 0;
let max = 10;
for (let i = 0; i < count; i++) {
    arrRandom.push(Math.round(Math.random() * (max - min) + min));
    if(arrRandom[i] % 2 === 0) {
        arrInteger.push(arrRandom[i])
    }
}

alert(arrRandom);
alert(arrInteger);

// task 15
const arrR = [];
let countL = 6;
let minN = 1;
let maxN = 10;
let sumArr = 0;
for (let i = 0; i < countL; i++) {
    arrR.push(Math.round(Math.random() * (maxN - minN) + minN));
    sumArr += arrR[i] / countL;
}

alert(arrR);
alert(sumArr);