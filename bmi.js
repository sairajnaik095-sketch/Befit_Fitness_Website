function calculateBMI() {
    // Get input values
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // cm -> meters

    // Validation
    if (!weight || !height) {
        document.getElementById("bmiResult").innerText = "Please enter valid values!";
        return;
    }

    // BMI calculation
    const bmi = (weight / (height * height)).toFixed(1);
    let category = "";

    // BMI Category
    if (bmi < 18.5) category = "Underweight";
    else if (bmi >= 18.5 && bmi < 25) category = "Normal weight";
    else if (bmi >= 25 && bmi < 30) category = "Overweight";
    else category = "Obese";

    // Display Result
    document.getElementById("bmiResult").innerHTML = `Your BMI is <strong>${bmi}</strong> (${category})`;
}
