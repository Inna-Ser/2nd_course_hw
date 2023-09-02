// task 1
let str = 'js';
console.log(str.toUpperCase());

// task 2
const arrStr = ['Good', 'Smile', 'Sun'];
let world = 's';

function getNewArr(array, w) { 
    const newArr = [];
    array.forEach((element) => {
        if (element.startWith(w)) {
            newArr.push(element);
        }
        return newArr;
    });
}

console(getNewArr(arrStr, world));


// task 3
let n = 32.58884;
console.log(Math.floor(n));
console.log(Math.ceil(n));
console.log(Math.round(n));

// task 4
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

// task 5
let randN = (min, max) => {
    return Math.round(Math.random() * (max + 1 - min));
};

console.log(randN(1, 10));

// task 6
let nm = 6;

function getArrR(max) {
    let lengthArr = max / 2;
    let min = 0;
    const arrR = new Array(lengthArr);
    arrR.map(() => Math.round(Math.random() * (max + 1 - min)));
    return arrR;
}

console.log(getArrR(nm));

// task 7
let num1 = 2;
let num2 = 16;

function getThisNum(max, min) {
    return Math.round(Math.random() * (max + 1 - min))
}

console.log(getThisNum(num2, num1));

// task 8
// option 1
console.log(new Date());

// option 2
const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
console.log(new Date().getDate() + "/" + months[new Date().getMonth()] + "/" + new Date().getFullYear());

// task 9
let currentDay = new Date();
let day73 = 73 * 24 * 60 * 60 * 1000;
let searchDate = +currentDay + day73;
let dateLater73 = new Date(searchDate);

console.log(dateLater73);

// task 10
let myDate = new Date();
const daysWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const monthsRus = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

function fullDate(d) {
    return "Дата: " + d.getDate() + " " + monthsRus[d.getMonth()] + " " + d.getFullYear() + " - это " + daysWeek[d.getDay()] +
        "\nВремя: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
};

console.log(fullDate(myDate));