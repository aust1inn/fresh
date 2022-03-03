function myfunction () {
    let bDay = document.getElementById("bday").value;
    let bDay1 = bDay.toString()
    let d = new Date(bDay1)
    let day = d.getDay();
    alert(day)
    let gender = document.getElementById("gender").value;

    
}

function check () {
    let inputtedDay = document.getElementById("day").value
    let inputtedMonth = document.getElementById("month").value
    let inputtedYear = document.getElementById("year").value

    let stringDay = inputtedDay.toString();
    let stringMonth = inputtedMonth.toString();
    let stringYear = inputtedYear.toString();

    let ourDay = stringDay + "-" + stringMonth + "-" + stringYear;
    let p = new Date(ourDay)
    let dayWeek = p.getDay();
    alert (dayWeek)

    alert(ourDay)
}
