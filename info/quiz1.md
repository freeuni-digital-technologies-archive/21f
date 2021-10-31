---
title: პირველი ქვიზის კითხვები
parent: ინფორმაცია, რესურსები
---

### 1. 2ქ
რამდენჯერ გამოიძახებს **turnLeft** ფუნქციას ქვემოთ მოცემული კოდი?

```js
function start() {
	for (let i=0; i<4; i++) {
		turnRight();
	}
}

function turnRight() {
	turnLeft();
	turnLeft();
	turnLeft();
}
```

- [ ] 4
- [ ] 7
- [x] არცერთი პასუხი არ არის სწორი
- [ ] კოდში არის სინტაქსური შეცდომა და არ გაეშვება
- [ ] კოდში არის ბაგი და მოხდება error (კედელთან დაჯახება ან ცარიელ უჯრაზე ბურთის აღება)

> let სინტაქსის გამო ასევე ჩათვლილია პასუხი "კოდში არის სინტაქსური შეცდომა და არ გაეშვება"

### 2. 2ქ.
გვინდა, რომ კარელმა 7 უჯრაზე ოთხ-ოთხი ბურთი დადოს. რომელი ფუნქცია შეასრულებს ამ პირობას?

```js
function f1() {
	for (let i = 0; i < 7; i++) {
		f2();
		move();
	}
}

function f2() {
	for (let i = 0; i < 4; i++) {
		putBall();
	}
}

function f3() {
	for (let i = 0; i < 28; i++) {
		putBall();
		move();
	}
}
```
- [ ] f2
- [ ] f2 და f3
- [x] f1 და f3
- [ ] ყველა
- [ ] არცერთი
- [ ] არცერთი პასუხი არ არის სწორი

> შესწორება: იმის გამო რომ კოდში გამოყენებულია let სინტაქსი, ხოლო codehs-ზე შეჩვეული ვართ var-ს, ეს კითხვა ასევე ჩაეთვალა ყველას, ვინც უპასუხა "არცერთი" ან "არცერთი პასუხი არ არის სწორი" (იმ ლოგიკით, რომ სხვანაირი სინტაქსი იყო). 

### 3. 1ქ.
რომელ უჯრაზე დაამთავრებს კარელი მუშაობას? კოორდინატები წერია ასეთ ფორმატში: 2x3 ნიშნავს მეორე რიგის (ქვემოდან ზემოთ) მესამე უჯრას (მარცხნიდან მარჯვნივ). მუშაობის დამთავრება გულისხმობს, რომ კარელი კედელს არ დაეჯახება. turnRight() ფუნქცია კარელმა იცის

```js
function start() {
	move();
	turnLeft();
	move();
	turnLeft();
	turnLeft();
	turnLeft();
	move();
	move();
	turnRight();
	move();
}
```
- [ ] კოდში არის სინტაქსური შეცდომა და არ გაეშვება
- [x] 1x4
- [ ] 2x5
- [ ] კარელი დაეჯახება კედელს 2x1 უჯრაზე
- [ ] კარელი დაეჯახება კედელს 1x3 უჯრაზე
- [ ] არცერთი პასუხი არ არის სწორი

> შენიშვნა: იმის გამო, რომ სამყაროს განზომილებები დაკონკრეტებული არ იყო, "არცერთი პასუხი არ არის სწორი" ამ ვარიანტს ჩავთვლი. თუმცა მომავალ ქვიზზე და ფინალურ გამოცდაზე გაითვალისწინეთ, რომ როდესაც რაიმე სახის წინაღობა, ხელის შემშლელი გარემოება ან ჩვეულებრივისგან შეცვლილი მოცემულობა (არცერთ ამოცანაზე არ დაგვიწყია 1x1 უჯრის გარდა არცერთზე) დაკონკრეტებული არაა, ე.ი არ არსებობს. 


### 4. 2ქ
რომელ უჯრაზე დაამთავრებს კარელი მუშაობას? კოორდინატები წერია ასეთ ფორმატში: 2x3 ნიშნავს მეორე რიგის (ქვემოდან ზემოთ) მესამე უჯრას (მარცხნიდან მარჯვნივ). მუშაობის დამთავრება გულისხმობს, რომ კარელი კედელს არ დაეჯახება. ჩათვალეთ, რომ jump() ფუნქცია იმპლემეტირებულია და მუშაობს სემინარზე განსაზღვრული პრინციპით.


```js
function start() {
	while(frontIsClear()) {
		move();
		jump();
	}
}

/* გადაახტება წინაღობას და გადავა
მომდევნო უჯრაზე*/ 
function jump() {
	// ...
}
```
- [ ] ბოლო უჯრაზე
- [ ] პირველ უჯრაზე
- [ ] მე-4 უჯრაზე
- [ ] მე-5 უჯრაზე
- [x] კარელი დაეჯახება კედელს
- [ ] არცერთი პასუხი არ არის სწორი

> შენიშვნა: კოდში move()-ის მაგივრად უნდა ყოფილიყო findNextWall(), რის შემთხვევაშიც კარელი მუშაობას ასრულებდა მე-5 უჯრაზე, ამიტომ იყო ეს პასუხი მითითებული. ამ კოდით კარელი დაეჯახება კედელს

> სამყაროს მონაცემები: მე-4 უჯრის შემდეგ არის კედელი.

### 5. 2ქ
რომელ უჯრაზე დაასრულებს კარელი მუშაობას და რამდენი ბურთი იქნება დასრულების შემდეგ მოცემულ სამყაროში ამ კოდის გაშვებისას?
```js
function start() {
	while(beepersPresent()) {
		move();
		putBall();
	}
}
```
- [ ] ყველა უჯრაზე იქნება ერთი ბურთი
- [ ] 1-3 უჯრაზე იქნება ორი ბურთი, 4-ზე ერთი ბურთი, დანარჩენზე არცერთი
- [ ] 1-3 უჯრაზე იქნება ორი ბურთი, დანარჩენზე არცერთი
- [ ] 1 უჯრაზე იქნება ერთი ბურთი, 2-3-ზე ორი ბურთი,  დანარჩენზე არცერთი
- [ ] 1-4 უჯრაზე იქნება ორი ბურთი, დანარჩენზე არცერთი
- [x] არცერთი პასუხი არ არის სწორი

> სამყაროს მონაცემები: 1-3 უჯრებზე დევს თითო ბურთი