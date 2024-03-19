window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calculate").addEventListener("click", () => {
        const amount = parseFloat(document.getElementById("amount").value);       

            const tipEl = document.getElementById("tip");
            const tip = Number.parseInt(tipEl.options[tipEl.selectedIndex].value).toFixed(2);
            const people = Number.parseInt(document.getElementById("people").value);
            if (isNaN(amount) || isNaN(people)) {
                alert("Please Fill out all the fields");
            } else {

            const tipInDollars = amount * (tip / 100);
            const subTotal = parseFloat(amount + tipInDollars);
            const total = subTotal / people;

            document.querySelector(".info_tip").innerHTML = `⭐️Tip:  ₹${parseFloat(tipInDollars).toFixed(2)}`;
            document.querySelector(".info_total").innerHTML = `💰 Total:  ₹${total.toFixed(2)} ${people > 1 ? "each" : ""}`;
            document.querySelector(".info").style = "display: block";
        }
    });
});