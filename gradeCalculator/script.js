const calculate = () => {
    let webd = document.querySelector("#webd").value;
    let coa = document.querySelector("#coa").value;
    let dsa = document.querySelector("#dsa").value;
    let dms = document.querySelector("#dms").value;
    let pdc = document.querySelector("#pdc").value;
    let grades = "";

    let totalgrades = parseFloat(webd) + parseFloat(coa) + parseFloat(dsa) + parseFloat(dms) + parseFloat(pdc);
    let percentage = (totalgrades / 500) * 100;
    if (percentage <= 100 && percentage >= 80) {
        grades = "A";
    } else if (percentage <= 79 && percentage >= 60) {
        grades = "B";
    } else if (percentage <= 59 && percentage >= 40) {
        grades = "C";
    } else {
        grades = "F";
    }
    if (webd == "" || coa == "" || dsa == "" || dms == "" || pdc == "") {
        document.querySelector("#showdata").innerHTML = "Please enter all the fields";
    } else {
        if (percentage >= 39.5) {
            document.querySelector("#showdata").innerHTML = ` Out of 500 your total is ${totalgrades} and percentage is ${percentage}%. <br> Your grade is ${grades}. You are Pass. `;
        } else {
            document.querySelector("#showdata").innerHTML = ` Out of 500 your total is ${totalgrades} and percentage is ${percentage}%. <br> Your grade is ${grades}. You are Fail. `;
        }
    }
};