for (var num = 1; num <= 100; num++) {
	if (num%3 != 0 && num%5 != 0) respuesta = "<br />"
	if (num%3 == 0 && num%5 != 0) respuesta = " Fizz<br />"
	if (num%3 != 0 && num%5 == 0) respuesta = " Buzz<br />"
	if (num%3 == 0 && num%5 == 0) respuesta = " FizzBuzz<br />"
	document.write(num + respuesta)}