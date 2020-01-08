/*
1. Создайте веб-приложение, которое спрашивает у пользователя номер урока и возвращает время окончания этого урока. 
Время начала первого урока - 9:00. Длительность урока - 45 минут. Перерыв после четных уроков - 15 минут, 
перерыв после нечетных уроков - 5 минут.
Входные данные:
Число - целое число от 1 до 10
Выходные данные:
Текст - текстовое описание времени окончания в виде hh:mm
*/

function lessonsEnd() {
    let amountLessons = prompt("Введите номер урока:") * 1, 
        startLessons = 540,
        lessonsDuration = amountLessons * 45,
        breakBetweenLessons = 0,
        endingMin = 0,
        endingHours = 0,
        durationAllLessons = 0;

    if(isNaN(amountLessons) || (amountLessons === "") || (amountLessons === " ") || (amountLessons < 0) || (amountLessons > 10)) {
        return alert("Ошибка. Введите число от 1 до 10");
    }

    if((amountLessons % 2) > 0) {
        breakBetweenLessons = ((amountLessons - 1) / 2 * 5) + ((amountLessons - 1) / 2 * 15); 
    } else {
        breakBetweenLessons = (amountLessons / 2 * 5) + ((amountLessons / 2 - 1) * 15);
    }

    durationAllLessons = startLessons + lessonsDuration + breakBetweenLessons;
    endingMin = durationAllLessons % 60 + "";
    endingHours = (durationAllLessons - endingMin) / 60;

    if(endingMin.length < 2) {
        endingMin = "0" + endingMin;
    }
    
    alert("Время окончания " + amountLessons + " урока: " + endingHours + ":" + endingMin);
}

//2. Создайте веб-приложение, которое переводит градусы в Цельсиях в Фаренгейты.
function celsijFarengeit() {
    let degC = prompt("Введите температуру в градусах Цельсия"),
        degF = 9 / 5 * degC + 32;

    if(isNaN(degC) || (degC === "") || (degC === " ")) {
        return alert("Ошибка. Введите число.");
    }
    
    alert(degC + " градусов по Цельсию - это " + degF.toFixed(2) + " градусов по Фаренгейту.");
}

//3. Опять Саймон. Программа о выборе оружия для черепашек
function turtle() {
    let turtle = prompt("Введите черепашку: Донателло, Микеланджело, Рафаэль, Леонардо");
    
    switch(turtle) {
        case "Донателло":
            alert ("Донателло - Посох Бо");
            break;
        case "Микеланджело":
            alert ("Микеланджело - Нунчаки");
            break;
        case "Рафаэль":
            alert ("Рафаэль - Пара сай");
            break;
        case "Леонардо":
            alert ("Леонардо - Катана");
            break;
        default:
            alert ("Автомат АК47");
            break;
    }
}

var btnLessons = document.querySelector("#btnLessons"),
    btnDegrees = document.querySelector("#btnDegrees"),
    btnTurtle = document.querySelector("#btnTurtle");

btnLessons.addEventListener("click", lessonsEnd);
btnDegrees.addEventListener("click", celsijFarengeit);
btnTurtle.addEventListener("click", turtle);
