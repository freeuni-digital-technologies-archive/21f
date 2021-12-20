---
title: მეორე ქვიზის კითხვები
parent: ინფორმაცია, რესურსები
---

## დავალება 5
### 2 ქ

ქვემოთ ჩამოთვლილი ელემენტებიდან, რომელს შეეცვლება სტილი მოცემული css-ით?

```html
<style>
	.myid {
		background: gray;
	}
</style>
<div>
	<p id=".myid" class="myclass">paragraph</p>
	<span id="myid" class=".myid">some span</span>
	<h1 class=".myid">heading</h1>
	<h2 id=".myid" class=".myid">another heading</h2>
	<h3 class="myid">heading3</h3>
</div>
```

- [ ] span და h3
- [ ] ყველას
- [ ] არცერთს
- [ ] span, h1, h2
- [x] h3
- [ ] არცერთი პასუხი არ არის სწორი

### 1 ქ
რომელ ელემენტში არის შეცდომა? (თეგი არასწორია ან თეგს მოცემული ატრიბუტი არ აქვს ან ატრიბუტს არ შეიძება ქონდეს ასეთი მნიშვნელობა)
```html
<p1 id="elem1">paragraph</p1>
<img id="elem2" src="./myimage.png">
<a id="elem3" src="https://google.com">link</a>
<h2 id="elem4">heading</h2>
```
- [ ] ყველა ელემენტში არის შეცდომა
- [ ] არცერთ ელემენტში არ არის შეცდომა
- [x] არცერთი პასუხი არ არის სწორი
- [x] elem1 და elem3
- [ ] elem2 და elem3
- [ ] elem2 და elem4


## დავალება 6

### 2 ქ
გვსურს დავწეროთ ფუნქცია, რომელიც იპოვის გადაცემული id-ის მქონე ელემენტს და დაგვიბრუნებს მის value ატრიბუტის მნიშვნელობას რიცხვად. 
რომელი ფუნქცია შეასრულებს ამ პირობას
```js 
function f1(id) {
	let v = document.getElementById(id).value
	Number(v)
}

function f2(id) {
	let v = document.getElementById(id).value
	v
}

function f3(id) {
	Number(document.getElementById(id).value)
}
```
- [ ] ყველა
- [ ] f1 და f3
- [ ] f1
- [ ] f3
- [x] არცერთი
- [ ] არცერთი პასუხი არ არის სწორი

### 1 ქ
რა ტიპის მნიშვნელობას დაგვიბრუნებს კონსოლი, თუ შევიყვანთ ამ ხაზებს?
ჩათვალეთ, რომ number1 და number2 input არსებობს.
```js
let a = document.getElementById('number1').value
let b = document.getElementById('number2').value
a + b
```

- [x] სტრინგი
- [ ] რიცხვი
- [ ] ბული
- [ ] DOM ობიექტი

## დავალება 7

### 2 ქ
გვსურს დავითვალოთ, რამდენჯერ გამოვიძახეთ ფუნქცია. რომელი კოდი შეასრულებს ამ პირობას?
```js
function f1() {
	let counter1 = 0
	counter1++
}

function f2() {
	counter2++
	let counter2 = 0
}
```

- [ ] f1 
- [ ] f2
- [ ] ორივე
- [x] არცერთი



### 1 ქ
რომელი ხაზი იპოვის ფიდში გამოქვეყნებულ მე-postId პოსტს? (პოსტების id არის იმავე ფორმატის, როგორც დავალებაში)
```js
document.getElementById('post' + postId) // line1
document.getElementById(postId) // line2
document.getElementById('post-' + postId) // line3
```
- [ ] line1 და line3
- [ ] line1
- [ ] line2
- [x] line3
- [ ] ყველა
- [ ] არცერთი