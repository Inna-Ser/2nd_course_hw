// task 1
const people = [{
        name: 'Глеб',
        age: 29
    },
    {
        name: 'Анна',
        age: 17
    },
    {
        name: 'Олег',
        age: 7
    },
    {
        name: 'Оксана',
        age: 47
    }
];

console.log(people.sort((x, y) => x.age - y.age));

// task 2
function isPositive(num) {
    return num > 0;
}

function isMale(user) {
    return user.gender === 'male';
}

function filter(arr, ruleFunction) {
    const arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            arrNew.push(arr[i]);
        }
    }
    return arrNew;
}

console.log(filter([3, -4, 1, 9], isPositive));

const peopleG = [{
        name: 'Глеб',
        gender: 'male'
    },
    {
        name: 'Анна',
        gender: 'female'
    },
    {
        name: 'Олег',
        gender: 'male'
    },
    {
        name: 'Оксана',
        gender: 'female'
    }
];

console.log(filter(peopleG, isMale));

// task 3
let date = new Date;

const currentDate = (d) => {
    let interval = setInterval(() => {
        console.log(d);
    }, 1000 * 3);
    setTimeout(() => {
        clearInterval(interval);}, 1000 * 30);
}

currentDate(date);

// task 4
function delayForSecond(callback) {
    setTimeout(() => {callback();}, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
});

// task 5
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));

