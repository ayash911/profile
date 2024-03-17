window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");

    if (height === "" || isNaN(height) || height <= 0) {
        result.innerHTML = "Provide a valid Height!";
    }

    else if (weight === "" || isNaN(weight) || weight <= 0) {
        result.innerHTML = "Provide a valid Weight!";
    }
    else {
        let bmi = (weight / ((height * height)/ 10000)).toFixed(2);
        if (bmi < 18.6) {
            result.innerHTML = `Under Weight : ${bmi} BMI`;
        }
        else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `Normal : ${bmi} BMI`;
        }
        else {
            result.innerHTML = `Over Weight : ${bmi} BMI`;
        }
    }
}