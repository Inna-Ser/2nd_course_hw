/*let password = 'Пароль';
let password2 = prompt ('Введите пароль');
if (password === password2) {
    alert ('Пароль верный');
} else {
    alert ('Пароль не верный');
}

let c = -3.2;
if (c > 0 && c < 10) {
    alert ('Верно');
} else {
    alert ('Не верно');
}

let d = 32;
let e = 130;
if(d > 100 || e > 100) {
    alert ('верно');
} else {
    alert ('не верно');
}

let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));
*/
let monthNumber = 4;
switch (monthNumber) {
    case (monthNumber > 11 && monthNumber < 13) || (monthNumber > 0 && monthNumber < 3):
        alert('это весна');
        break;
    case 3:
        case 4:
        case 5:
        alert('это весна');
        break;
    case monthNumber > 5 && monthNumber < 9:
        alert('это лето');
        break;
    case monthNumber > 8 && monthNumber < 12:
        alert('это осень');
        break;
    default:
        alert('нет такого месяца');
        break;
}