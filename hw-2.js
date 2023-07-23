// task 1
let a = 10;
alert(a);
// task 2
a = 20;
alert(a);
// task 3
let yearOfIssueFirstIphone = 2007;
alert(yearOfIssueFirstIphone);
// task 4
let nameOfCreatorIphone = "Steve Jobs";
alert(nameOfCreatorIphone);
// task 5
let num1 = 10;
let num2 = 2;
alert(num1 + num2);
alert(num1 - num2);
alert(num1 * num2);
alert(num1 / num2);
// task 6
a = 9;
let b = 2;
let result = a%b;
alert(result);
// task 7
let numb = 1;
numb += 5;
numb -= 3;
numb *= 7;
numb /= 3;
numb = numb++;
numb = numb--;
alert(numb);
// task 8
let age = prompt('Сколько Вам лет?');
alert(age);
// task 9
const user = {
    name: 'Bob',
    age: 25,
    isAdmin: true,
}
// 9.1
user.cityOfResidense = true;
// 9.2
age = 40;
// 9.3
delete user.cityOfResidense;
// 9.4
let info = prompt('Вы работаете администратором?');
age = Boolean(info);
alert(age);
// task 10
let userName = prompt('Как Ваше имя?');
alert(`Привет, ${userName}!`);
