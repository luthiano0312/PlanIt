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

if ((yearNum % 4 === 0 && yearNum % 100 !== 0) || (yearNum % 400 === 0)) {
    let months = [31,29,31,30,31,30,31,30,31,30,31,30];
}else {
    let months = [31,28,31,30,31,30,31,30,31,30,31,30];
}

let nday = 0;

// while (nday < 1) {
    
// }

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
    console.log(count,month);
}

function nextMonth() {
    count++;
    nowdate();
}

function previousMonth(params) {
    count--;
    nowdate();
}
nowdate();
todayHTML.textContent =  day + " | " + month;