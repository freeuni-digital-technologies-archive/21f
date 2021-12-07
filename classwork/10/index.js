let counter = 0


function increaseCounter() {
	counter++
	document.getElementById('counter').innerText = counter
}

setInterval(increaseCounter, 1000)

function alertTimeOut() {
	alert('თქვენი სესიის დრო ამოიწურა')
}

setTimeout(alertTimeOut, 3000)

// https://jsonplaceholder.typicode.com/posts