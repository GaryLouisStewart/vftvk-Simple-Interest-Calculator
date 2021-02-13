function compute(){
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;


    interest = principal * years * rate / 100;
    abs_year = convertyears(years);

    output = '<br/> If you deposit <mark>' + principal + '</mark>,<br/> at an interest rate of <mark>' + rate + '%</mark>.<br/> You will receive an amount of <mark>' + interest + '</mark>,<br/> in the year <mark>' + abs_year + '</mark><br/>'

    document.getElementById("result").innerHTML = output;
}

function displayrange(newvalue) {
    document.getElementById("range-value").innerHTML=newvalue + "%";
}

function convertyears(year) {
    d = new Date();
    y = parseInt(d.getFullYear()) + parseInt(year);
    return y
}

function returnDropdownValue(selectObject) {
    var value = selectObject.value;
    return parseInt(value)
}

function validatePrincipal() {
    var principal = document.getElementById("principal").value;

    if (principal <= 0 ){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    else {
        return true;
    }
}
