const today = new Date();

let day = today.getDate();
let month = "";
let year = "";
let count = 0;
let yearNum = today.getFullYear();
let weekdays = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
let weekday = weekdays[today.getDay()];

let monthHTML = document.getElementById("month");
let todayHTML = document.getElementById("today");
let days = document.getElementsByClassName("day");
// monthHTML.style.backgroundColor = "black";


function dayMonth() {
    let dateToday = String(yearNum) + "-" + String(today.getMonth() + 1 + count) + "-1";
    let firstDayMonth = new Date(dateToday);
    let firstWeekDayMonthIndex = firstDayMonth.getDay();

    if ((yearNum % 4 === 0 && yearNum % 100 !== 0) || (yearNum % 400 === 0)) {
        let months = [31,29,31,30,31,30,31,30,31,30,31,30];
        for (let i = 0; i < 42; i++) {
            // zera tudo
            days[i].textContent = "";
        }

        for (let i = 0; i < months[today.getMonth() + count]; i++) {
            // printa os dias
            days[firstWeekDayMonthIndex].textContent = "a";
        }
    }else {
        let months = [31,28,31,30,31,30,31,30,31,30,31,30];
        for (let i = 0; i < 42; i++) {
            // zera tudo
            days[i].textContent = "";
            days[i].style.backgroundColor = "hsl(0, 0%, 90%)";
            days[i].style.border = "1px solid hsl(0, 0%, 80%)";
        }

        for (let i = 0; i < months[today.getMonth() + count]; i++) {
            // printa os dias
            days[firstWeekDayMonthIndex + i].textContent = i + 1;
            days[firstWeekDayMonthIndex + i].style.backgroundColor = "white";

            if (days[firstWeekDayMonthIndex + i].textContent == day && count == 0) {
                days[firstWeekDayMonthIndex + i].style.border = "1px solid black";
            }
        }


    }

}

function nowdate() {
    let monthNum = today.getMonth() + 1;
 
    if (count != 0) {
        monthNum += count;
    }
    
    switch (monthNum) {
        case 1:
            month = "janeiro";
            break;
        case 2:
            month = "fevereiro"; 
            break;
        case 3:
            month = "março";
            break;
        case 4:
            month = "abril";
            break;
        case 5:
            month = "maio";
            break;
        case 6:
            month = "junho";
            break;
        case 7:
            month = "julho";
            break;
        case 8:
            month = "agosto";
            break;
        case 9:
            month = "setembro";
            break;
        case 10:
            month = "outubro";
            break;
        case 11:
            month = "novembro";
            break;
        case 12:
            month = "dezembro";
            break;
        default:
            break;
    }

    
    monthHTML.textContent = month;
}

function nextMonth() {
    count++;
    nowdate();
}

function previousMonth(params) {
    count--;
    nowdate();
}

function animationLeft() {
    document.getElementById("calender").classList.remove("animationLeft");
    document.getElementById("calender").classList.toggle("animationLeft");
    function animationFinish() {
        document.getElementById("calender").classList.remove("animationLeft");
    }
    setTimeout(animationFinish, 300);
}

function animationRight() {
    document.getElementById("calender").classList.remove("animationRight");
    document.getElementById("calender").classList.toggle("animationRight");
    function animationFinish() {
        document.getElementById("calender").classList.remove("animationRight");
    }
    setTimeout(animationFinish, 300);
}

function resetCount() {
    count = 0;
    nowdate();
    dayMonth();
    if (count > 0) {
        animationLeft();
    }else {
        animationRight();
    }
}

nowdate();
dayMonth()
todayHTML.textContent =  day + " | " + month;
