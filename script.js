// Get DOM elements
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const bmiResult = document.getElementById('bmi-result');
const bmiCalculator = document.getElementById('bmi-calculator');
const radioMetric = document.getElementById('metric');
const radioImperial = document.getElementById('imperial');
const welcomeMsg = document.getElementById('welcome-msg');
const scoring = document.getElementById('scoring');

// Function to calculate BMI
const calculateBMI = (height, weight, isMetric) => {
    let heightInMeters, weightInKilograms;

    if (isMetric) {
        heightInMeters = height / 100; // Convert cm to meters
        weightInKilograms = weight;    // Weight is already in kilograms
    } else {
        heightInMeters = height * 0.0254; // Convert inches to meters
        weightInKilograms = weight * 0.453592; // Convert pounds to kilograms
    }

    const bmi = weightInKilograms / Math.pow(heightInMeters, 2);
    return bmi;
}

// Function to display BMI result
const displayBMIResult = (bmi) => {
    welcomeMsg.style.display = 'none';
    scoring.style.display = 'block';
    bmiCalculator.style.height = '24em'
    bmiResult.textContent = `Your BMI is ${bmi.toFixed(1)}`;
}

// Event listener for input fields and radio buttons
const updateBMI = () => {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    const isMetric = radioMetric.checked;

    if (height > 0 && weight > 0) {
        const bmi = calculateBMI(height, weight, isMetric);
        displayBMIResult(bmi);
    } else {
        bmiResult.textContent = "Please enter valid height and weight.";
    }
}

// Add event listeners
heightInput.addEventListener('input', updateBMI);
weightInput.addEventListener('input', updateBMI);
radioMetric.addEventListener('change', updateBMI);
radioImperial.addEventListener('change', updateBMI);

// Initial display
updateBMI();
