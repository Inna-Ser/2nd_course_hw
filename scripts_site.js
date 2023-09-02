function howMonth() {
    let month = prompt("Введите месяц (от 1 до 12)");
    if (month > 2 && month < 6) {
        return alert('Весна');
    } else if (month > 5 && month < 9) {
        return alert('Лето');
    } else if (month > 8 && month < 12) {
        return alert('Oсень');
    } else if (month == 12 || month >= 1 && month < 3) {
        return alert('Зима');
    } else if (month == 666) {
        return alert('Вы вызвали дьявала. Он разгромил ваш дом');
    } else
        return alert('Введите значение от 1 до 12')
};

function guestWorld() {
    let arrWorlds = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arrWorlds = arrWorlds.sort(() => Math.random() - 0.5);
    alert(arrWorlds);
    let ans1 = prompt('Чему равнялся первый элемент массива?');
    let ans2 = prompt('Чему равнялся последний элемент массива?');
    arrWorlds.forEach(() => {
        if (ans1.toLowerCase() == arrWorlds[0].toLowerCase() && ans2.toLowerCase() == arrWorlds[arrWorlds.length - 1].toLowerCase()) {
            alert('Поздравляем! Вы угадали!')
        } else if (ans1.toLowerCase() == arrWorlds[0].toLowerCase() || ans2.toLowerCase() == arrWorlds[arrWorlds.length - 1].toLowerCase()) {
            alert('Вы были близки к победе!')
        } else {
            alert('Вы не угадали, попробуйте еще раз!')
        }
    });
}