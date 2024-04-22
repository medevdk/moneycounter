'use strict';


const inp100 = document.getElementById('input-100')
const inp50 = document.getElementById('input-50')
const inp20 = document.getElementById('input-20')
const inp10 = document.getElementById('input-10')
const inp5 = document.getElementById('input-5')
const inp1 = document.getElementById('input-1')
const total = document.querySelector('.total');

var value = [];

const keyTAB = 9
const keyENTER = 13

CalculateTotal();

inp100.addEventListener('keypress', function(e) {
	validate(e);
});

inp50.addEventListener('keypress', function(e) {
	validate(e);
});

inp20.addEventListener('keypress', function(e) {
	validate(e);
});

inp10.addEventListener('keypress', function(e) {
	validate(e);
});

inp5.addEventListener('keypress', function(e) {
	validate(e);
});

inp1.addEventListener('keypress', function(e) {
	validate(e);
});


inp100.addEventListener('keyup' , function(e) {
	value[0] = this.value * 100;

	var res = '';
	if(this.value != '') res = ConvertToCurrency(value[0])

	document.querySelector('#result-100').innerHTML = res;
	CalculateTotal();
})

inp50.addEventListener('keyup' , function(e) {
	value[1] = this.value * 50;

	var res = '';
	if(this.value !='') res = ConvertToCurrency(value[1]);

	document.querySelector('#result-50').innerHTML = res;
	CalculateTotal();
})

inp20.addEventListener('keyup' , function(e) {
	value[2] = this.value * 20;

	var res = '';
	if(this.value != '') res = ConvertToCurrency(value[2])
	
	document.querySelector('#result-20').innerHTML = res;
	CalculateTotal();
})

inp10.addEventListener('keyup' , function(e) {
	value[3] = this.value * 10;

	var res = '';
	if(this.value != '') res = ConvertToCurrency(value[3])

	document.querySelector('#result-10').innerHTML = res;
	CalculateTotal();
})

inp5.addEventListener('keyup' , function(e) {
	value[4] = this.value * 5;

	var res = '';
	if(this.value != '') res = ConvertToCurrency(value[4])

	document.querySelector('#result-5').innerHTML = res;
	CalculateTotal();
})

inp1.addEventListener('keyup' , function(e) {
	value[5] = this.value * 1;

	var res = '';
	if(this.value != '') res = ConvertToCurrency(value[5])

	document.querySelector('#result-1').innerHTML = res;
	CalculateTotal();
})

//Works for ENTER, not yet for TAB
function tabToNext() {
	var input = document.querySelectorAll('.input');
	var maxIndex = input.length
	var currTabIndex = document.activeElement.tabIndex;

	for(var i = 1	; i <= maxIndex; i++) {
		if(currTabIndex == maxIndex) {
			input[0].focus();
			break
		}
		if(i == currTabIndex) input[i].focus();	
	}
}

function CalculateTotal() {
	var res = value.reduce(function(x,y) {return x + y}, 0);
	// res = res.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
	// total.innerHTML = '$' + res;
	total.innerHTML = ConvertToCurrency(res);
	// total.innerHTML = '$' + value.reduce(function(x,y) {return x + y}, 0);
}

function ConvertToCurrency(number) {
	return '$' + number.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
}

//Accept only numeric input -> SO
function validate(evt) {

	if(evt.keyCode == keyENTER || evt.keyCode == keyTAB) {
		tabToNext()
	}

	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;

	key = String.fromCharCode(key);
	var regex = /[0-9]|\./;
	if(!regex.test(key)) {
		theEvent.returnValue = false;
		if(theEvent.preventDefault) theEvent.preventDefault();
	}
}






