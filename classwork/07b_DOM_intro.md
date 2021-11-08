---
title: 07b. შესავალი DOM ჯავასკრიპტში
parent: სემინარები
---

ამ მასალის შესაბამისი ვიდეოები ხანის აკადემიაზე:
- [JS და DOM](https://ka.khanacademy.org/computing/computer-programming/html-css-js/js-and-the-dom/pt/putting-js-in-a-webpage)
- [DOM წვდომის მეთოდები](https://ka.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-access/pt/finding-elements-by-id)


ქვემოთ მოცემულია სემინარზე განხილული მაგალითები. იმისთვის, რომ ნახოთ რას აკეთებს მოცემული კოდი:


კოდის გასაშვებად:
- შექმენით ახალი index.html ფაილი ედიტორის მეშვეობით, გადააკოპირეთ საწყისი კოდი. თითოეული მაგალითს javascript კოდი ჩაწერეთ  script tag-ში. სხვა კოდის ჩაწერამდე წინა წაშალეთ, ან გადააკოპირეთ index.html ფაილი, გადაარქვით სახელი და იქ გააგრძელეთ მუშაობა.
- თუ რომელიმე ნაწილში html კოდი წერია, ნიშავს რომ `<body>` თეგის მერე `<script>` თეგამდე ეს html უნდა ჩაამატოთ (იმისთვის, რომ ჯავასკრიპტმა იმუშაოს)

## კოდი საწყისი html ფაილისთვის
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>ჯავასკრიპტის მაგალითები</title>
</head>
<body>
    <script>
    // აქ წერ ჯავასკრიპტს
	</script>
</body>
</html>
```

## კონსოლის გამოყენება
გახსენით საიტი, გადადით inspect-ში და დააჭირეთ console-ს. აქ შეგიძლიათ ჯავასკრიპტის ჩაწერა. მაგალითად, სცადეთ ეს ხაზები (სათითაოდ)
```js
var a = 0;
2 + 2
a++
a
```


## alert, prompt, confirm
ჯერ კონსოლში ჩაწერე, ხოლო შემდეგ index.html ფაილის სკრიპტ თეგში
```js
alert("მნიშვნელოვანი მესიჯი")
```
```js
var name = prompt("რა გქვია?")
console.log(name)
```

```js
var name = prompt("რა გქვია?")
var logName = confirm("დავწერო შენი სახელი კონსოლში?")
if (logName) {
	console.log(name)	
}
```

## document.body.innerHTML

```js
var name = prompt("რა გქვია?")
document.body.innerHTML = "გამარჯობა, " + name
```


```js
var age = prompt("რამდენი წლის ხარ?")
if (age < 18) {
    document.body.innerHTML = "თქვენ გეკუთვნით ფასდაკლება"
} else {
    document.body.innerHTML = "თქვენ მოსწავლის ფასდაკლება აღარ გეკუთვნით"
}
```


## document.body.getElementById
```html
<p>გამარჯობა, 
    <span id="username"></span>
</p>
<p>ჩუპა ჩუპსის ფასი არის <span id="price"></span> თეთრი</p>
<script>
	// აქ ჩაწერე ჯავასკრიპტი
</script> 
```

```js
var name = prompt("რა გქვია?")
document.getElementById("username").innerHTML = name
var isStudent = confirm("მოსწავლე ხარ?")
var price = 60
if (isStudent) {
    price = 20
} 
var priceElement = document.getElementById("price")
priceElement.innerHTML = price
```


## insertAdjacentHTML
```html
<div id="count">
</div>
<button></button>
```

```js
var paragraphCount = prompt("რამდენი პარაგრაფი დავამატო?")
var elem = document.getElementById('count')
for (var i =0; i< paragraphCount; i++) {
	elem.insertAdjacentHTML('beforeend', i + 1 + "<br>")
}
```


## button onclick
```html
<div id="count">
</div>
<button onclick="increaseCounter()">მიმატება</button>
```

```js
var elem = document.getElementById('count')
var i = 0

function increaseCounter() {
    i++
    elem.innerHTML = i
}
```