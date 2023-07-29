let password = 'Пароль';
let password2 = prompt('Введите пароль');
if (password === password2) {
    alert('Пароль верный');
} else {
    alert('Пароль не верный');
}

let c = -3.2;
if (c > 0 && c < 10) {
    alert('Верно');
} else {
    alert('Не верно');
}

let d = 32;
let e = 130;
if (d > 100 || e > 100) {
    alert('верно');
} else {
    alert('не верно');
}

let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));

let monthNumber = 4;
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        alert('это весна');
        break;
    case 3:
    case 4:
    case 5:
        alert('это весна');
        break;
    case 6:
    case 7:
    case 8:
        alert('это лето');
        break;
    case 9:
    case 10:
    case 11:
        alert('это осень');
        break;
    default:
        alert('нет такого месяца');
        break;
}