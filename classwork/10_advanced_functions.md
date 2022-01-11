---
title: 10. ჯავასკრიტპის advanced ფუნქციები
parent: სემინარები
---


ამ გვერდზე მოცემული მაგალითები სცადეთ კონსოლში

# ფუნქცია, როგორც არგუმენტი
ჯავასკრიპტში ზოგჯერ შეიძლება რაღაც ფუნქციაში არა მხოლოდ ობიექტები იყოს ცვლადი, არამედ ის ფუნქციები, რომელსაც იძახებს.

```js
let numberList = [5, 7, 15]
// გადაუყვება სიას და მის თითოეულ ელემენტს გადააწვდის
// processingFuction-ს. ეს ფუნქცია შეგვიძლია ყოველ გადაწოდებაზე
// სხვადასხვა იყოს, ისევე, როგორც myList
function processData(myList, processingFunction) {
	let processedData = []
	// გადავუყვეთ სიას
	for (let i=0; i < myList.length; i++) {
		// სიის მე-i-ე ელემენტი
		let element = myList[i]
		// გადავაწოდოთ ეს ელემენტი ფუნქციას 
		let processedElement = processingFunction(num)
		// შედეგი შევინახოთ ახალ სიაში
		processedData.push(processedElement)
	}
	// დავაბრუნოთ ახალი სია
	return processedData
}

// დააბრუნებს გაორმაგებულ რიცხვს
function double(num) {
	return num*2
}

// დააბრუნებს რიცხვზე ერთით მეტს 
function nextNumber(num) {
	return num + 1
}

processData(myList)
```

# ასინქრონული პროცესები.

## callback
იმ ფუნქციას, რომელსაც ასინქრონული პროცესი დასრულებისას გამოიძახებს (მაგალითად, სერვერიდან რესურსი დაბრუნდა და მზადაა მის გამოსაჩენად), callback ეწოდება.

შემდეგი ორი ფუნქციის სინტაქსის ცოდნა სავალდებულო არ არის, მაგრამ უნდა გესმოდეთ რას აკეთებს და რომელია callback.


### setTimeOut
გამოიძახებს გადაწოდებულ callback ფუნქციას მითითებული დროის შემდეგ (რიცხვი ნიშნავს მილიწამს, 1 წამი არის 1000 მილიწამი)
```js
function completeTask() {
	alert('operation completed!')
}

// completeTask არის callback
setTimeOut(completeTask, 1000)
```

### setInterval
გამოიძახებს გადაწოდებულ callback ფუნქციას მითითებულ დროში ერთხელ (რიცხვი ნიშნავს მილიწამს, 1 წამი არის 1000 მილიწამი)
```js
let count = 0

function increaseCount() {
	count++
	console.log("counter is " + count)
	if (count > 10) {
		// ამ ფუნქციის გამოძახებით counter ში 
		// შენახული setInterval გაითიშება 
		counter.clear()
	}
}
// დავითვალოთ ათამდე ყოველ ერთ წამში ერთხელ
// callback ამ შემთხვევაში არის increaseCount
let counter = setInterval(increaseCount, 1000)
```

### მაგალითი
index.html
```html
<h1>current count is: <span id="counter"></span></h1>
<script type="text/javascript" src="./index.js"></script>
```

index.js
```js
let counter = 0

function increaseCounter() {
	counter++
	document.getElementById('counter').innerText = counter
}

// ყოველ წამში ერთხელ გაზრდის counter-ს
setInterval(increaseCounter, 1000)

function alertTimeOut() {
	alert('თქვენი სესიის დრო ამოიწურა')
}

// სამი წამის შემდეგ მომხმარებელს შეატყობინებს, რომ სესიის
// დრო ამოიწურა
setTimeout(alertTimeOut, 3000)
```


