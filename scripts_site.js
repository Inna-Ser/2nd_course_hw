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