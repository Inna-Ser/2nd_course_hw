// task 1
function findLessNumber(a, b) {
    if (a < b) {
        return (`${a}`);
    } else if (a > b) {
        return (`${b}`);
    } else {
        return (`${a}`);
    }
}

alert(findLessNumber(4, 4));

// task 2
function isEven(num) {
    if (num % 2 == 0) {
        return (`Число четное`)
    } else {
        return (`Число не четное`)
    }
}

alert(isEven(3));

// task 3.1
function findSquearNum(num) {
    alert(num * num);
}

findSquearNum(3);

// task 3.2
function findSquearNumb(num) {
    return (num * num);
}

alert(findSquearNumb(2));

// task 4
function howOldyears() {
    let years = prompt("Сколько тебе лет?");
    if(years < 0) {
        alert(`Вы ввели неправильное значение`)
    } else if(years >= 0 && years <= 12) {
        alert(`Привет друг!`)
    } else if (years >= 13) {
        alert(`Добро пожаловать!`)
    }
}

howOldyears();

// task 5
function isCorrectNumber(num1, num2) {
    if (isNaN(Number(num1)) || isNaN(Number(num2))) {
        return (`Одно или оба значения не являются числом`)
    } else {
        return (num1 * num2);
    }
}

alert(isCorrectNumber(2, 2));

// task 6
function findCubeNum() {
    let n = prompt("Напишите число от 0 до 10");
    if (isNaN(Number(n))) {
        return (`Переданное значения не являются числом`)
    } else {
        let result = n * n * n;
        return `${n} в кубе равняется ${result}`;
    }
}

alert(findCubeNum());

// task 7
function getArea() {
    return (3,14 * (this.radius * this.radius));
}

function getPerimeter() {
    return 2 * (3,14 * this.radius);
} 

const circle1 = {
    radius: 5,
    area: getArea,
    perimeter: getPerimeter,
};

const circle2 = {
    radius: 10,
    area: getArea,
    perimeter: getPerimeter,
};

alert(circle1.area());
alert(circle1.perimeter());
alert(circle2.area());
alert(circle2.perimeter());

