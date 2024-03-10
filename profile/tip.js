function calculateTip() {

	let amount = document.querySelector('#amount').value;
	let persons = document.querySelector('#persons').value;
	let service = document.querySelector('#services').value;

	console.log(service);

	if (persons === '' && amount === '' && service === 'Select') {
		alert("Please enter valid values");
		return;
	}

	if (persons === '1')
		document.querySelector('#each').style.display = 'none';
	else
		document.querySelector('#each').style.display = 'block';

	let total = (amount * service) / persons;
	total = total.toFixed(2);

	document.querySelector('.tip').style.display = 'block';
	document.querySelector('#total').innerHTML = total;
}

function clearMe() {

    document.querySelector("#amount").value = '';

    document.querySelector("#persons").value = '';
    document.querySelector("#services").value = '';

    document.querySelector('#each').style.display = 'none';
    document.querySelector('.tip').style.display = 'none';

    document.querySelector('#total').innerHTML = '';
}
