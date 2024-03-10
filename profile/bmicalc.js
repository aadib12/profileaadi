function bmi() { 

    var userWeight = document.getElementById("weightnumb").value;
    var userHeight = document.getElementById("heightnumb").value;
    
    var bmiValue = userWeight / (Math.pow(userHeight, 2));
    
    var output = document.getElementById("bmiValue");
    
    output.textContent = bmiValue.toFixed(2);
    // alert("Your BMI is: " + bmiValue.toFixed(2));
    }

