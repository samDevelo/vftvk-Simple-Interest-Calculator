//function to calculate the interest rate
function compute()
{
    var principal = document.getElementById("principal").value;
        //validation form:
        //condition to check if the value entered is negative or 0, 
        //an error messagge notify the user to enter a positive number
        if (principal <= 0){
        alert("Enter a positive number")
        principal.focus();
        return false;
    }
    //document.getElementById , it is used to get the value in input by id
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //parseInt is used to convert string into int number
    var year = new Date().getFullYear()+parseInt(years);
    //calculation of the interest by applying the formula : (P*R*Y)/100
    var interest = principal * years * rate / 100;
    document.getElementById("result").innerHTML="If you deposit " + principal + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of " + interest + ",\<br\>in the year " + year + "\<br\>"
}
//function to return update rate onchange of the rate slider
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}