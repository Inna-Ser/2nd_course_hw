// task 1
for (let i = 0; i < 2; i++) {
    alert('Привет!');
}
// task 2
for (let i = 1; i <= 5; i++) {
    alert(i);
}
// task 3
for (let i = 7; i <= 22; i++) {
    alert(i);
}
// task 4
const obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
};
for (let key in obj) {
    alert(`${key} - зарплата ${obj[key]}`)
}
// task 5
let n = 1000;
let num = 0;
while (n >= 50) {
    n = n / 2;
    num++;
}
alert(`Последнее число деления ${n}, количество делений - ${num}`);
// task 6
let day = 2;
for (; day <= 31; day = day + 7) {
    alert(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`)
}