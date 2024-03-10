function calc() {
    let dms = document.getElementById("dms").value;
    let dsa = document.getElementById("dsa").value;
    let web = document.getElementById("web").value;
    let coa = document.getElementById("coa").value;
    let ebi = document.getElementById("ebi").value;
    let pom = document.getElementById("pom").value;

    let totalgrades = parseFloat(dms) + parseFloat(dsa) + parseFloat(web) + parseFloat(coa) + parseFloat(ebi) 
    + parseFloat(pom);
    
    let perc = ((totalgrades)/6).toFixed(3);

    let grade = "";

    if (perc <= 100 && perc >= 90) {
        grade = 'A+';
    }

    if (perc <= 89 && perc >= 80) {
        grade = 'A';
    }

    if (perc <= 79 && perc >= 70) {
        grade = 'B+';
    }

    if (perc <= 69 && perc >= 60) {
        grade = 'B';
    }

    if (perc <= 59 && perc >= 50) {
        grade = 'C';
    }

    if (perc <= 49 && perc >= 40) {
        grade = 'D';
    }

    if(perc < 33) {
        document.querySelector("#display").innerHTML =
        ` Out of 600 your total is  ${totalgrades}  
        and percentage is ${perc}%. <br>  
        . <br> <br> `;
        document.querySelector("#display2").innerHTML =  `RESULT: FAIL`;
    }

    else if(ebi == "") {
        document.querySelector("#display2").innerHTML = 
        'Please enter all your marks in the above fields.';
    }

    else {
    document.querySelector("#display").innerHTML =
        ` Out of 600 your total is  ${totalgrades}  
        and percentage is ${perc}%. <br>  
        Your grade is ${grade}. <br> <br>`
        document.querySelector("#display3").innerHTML =  `RESULT: PASS`;
    }
}
