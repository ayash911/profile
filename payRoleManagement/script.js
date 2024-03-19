var inputBill = document.getElementById("bill");
var cashGiven = document.getElementById("cash");
var checkBtn = document.getElementById("btn");
var errMsg = document.getElementById("error");
var noOfNotes = document.querySelector(".no-of-notes");

var notes = [2000, 500, 100, 50, 20, 10, 5, 1];

function errorHandle(error) {
    errMsg.style.display = "block";
    errMsg.innerText = error;
}

function hideMessage() {
    errMsg.style.display = "none";
}

function clickHandler() {
    hideMessage();

    var billAmount = parseFloat(inputBill.value);
    var cashAmount = parseFloat(cashGiven.value);

    if (isNaN(billAmount) || isNaN(cashAmount) || billAmount < 0 || cashAmount < 0) {
        errorHandle("Please enter valid positive amounts.");
        return;
    }

    if (cashAmount < billAmount) {
        errorHandle("Cash given is less than the bill amount.");
        return;
    }

    var remaining = cashAmount - billAmount;

    for (var i = 0; i < notes.length; i++) {
        var noteCount = Math.floor(remaining / notes[i]);
        remaining %= notes[i];
        var row = document.createElement("tr");
        row.innerHTML = `<td class="row">${notes[i]}</td><td class="no-of-notes">${noteCount}</td>`;
        document.querySelector(".table").appendChild(row);
    }
}

checkBtn.addEventListener("click", clickHandler);