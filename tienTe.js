function convert() {
    let amount = +document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result;

    if (from === 'VND' && to === 'VND')   {
        result = amount;
        document.getElementById("result").innerHTML = result + 'VND';
    } else if (from === 'VND' && to === 'USD') {
        result = amount / 23000;
        document.getElementById("result").innerHTML = result + 'USD';
    } else if (from === 'USD' && to === 'VND') {
        result = amount * 23000;
        document.getElementById("result").innerHTML = result + 'VND';
    } else if (from === 'USD' && to === 'USD') {
        result = amount;
        document.getElementById("result").innerHTML = result + 'USD';
    }
}

