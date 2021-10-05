---
title: 02. კარელი - პროგრამირების სტრუქტურები
parent: სემინარები
---


კვირის მასალა:

<https://codehs.com/lms/assignment/43749489>

**ვიდეოები ნახეთ ყველამ და ვიდეოს სავარჯიშოებიც (example რასაც აწერია) გააკეთეთ დამოუკიდებლად**

ამ გვერდზე მოცემულია სავარჯიშოების კოდი და ამოხსნის სხვადასხვა ვარიანტები და პირობების მოდიფიკაციები. აუცილებლად მიყევი სავარჯიშოებს ამ გვერდით, რომ ყველა მნიშვნელოვანი დეტალი გაიარო. დააკვირდი, რომ კოდში ფუნქცია start()-ს არ ვიყენებ და შენ უნდა გამოიძახო მთავარი ფუნქცია (პირველი რომელიც წერია ხოლმე) სტარტში. ფუნქციების რამდენიმე ვერსიები მარტივად რომ შეადარო ერთმანეთს, ამოცანის ამოხსნის ვარიანტები დანომრილია.

## 2.1.4 Pancakes
კარელმა უნდა დადოს 3 ბურთი ყოველ მე-3 უჯრაზე

### "მარტივი" კოდი

<details>
<summary>კოდის ჩვენება</summary>

```js
function pancakes1() {
    move();
    putBall();
    putBall();
    putBall();
    move();
    move();
    putBall();
    putBall();
    putBall();
    move();
    move();
    putBall();
    putBall();
    putBall();
    move();
    move();
}
```
</details>

რა მოხდება, თუ გვთხოვენ სამის მაგივრად ოთხი ბურთი დავდოთ თითოეულ უჯრაზე?


### ფუნქციის გამოყენება
<details>

<summary>კოდის ჩვენება</summary>

```js
function pancakesWithFunction() {
    makePancake();
    makePancake();
    makePancake();
}

function makePancake() {
    move();
    putBall();
    putBall();
    putBall();
    move();
}
```
</details>

### დეკომპოზიცია
<details>

<summary>კოდის ჩვენება</summary>

```js
function pancakesDecomposed() {
    makePancake();
    makePancake();
    makePancake();
}

function makePancake() {
    move();
    putBalls();
    move();
}

function putBalls() {
    putBall();
    putBall();
    putBall();
}
```
</details>



## 2.1.5: Backflip
<details>

<summary>კოდის ჩვენება</summary>

```js
function backFlip() {
    moveAndBackFlip();
    moveAndBackFlip();
}

function moveAndBackFlip() {
    move();
    move();
    doBackFlip();
}
function doBackFlip() {
    turnLeft();
    turnLeft();
    turnLeft();
    turnLeft();
}
```
</details>


## 3.3.6: Dizzy Karel
### მარტივი ამოხსნა
თუ დავაკვირდებით, რომ 8-ჯერ დატრიალება 32-ჯერ მარცხნივ შეტრიალებას ნიშნავს, ამოცანა ძალიან მარტივად ამოხსნება.

<details>

<summary>კოდის ჩვენება</summary>

```js

function dizzySimple() {
    for (var i = 0; i < 32; i++) {
        turnLeft();
    }
    move();
}
```
</details>

### nesting
ყოველთვის ამის საშუალებას არ მოგვცემს პირობა, ამიტომ 
<details>

<summary>კოდის ჩვენება</summary>

```js
function dizzyNested() {
    for (var i = 0; i < 8; i++) {
        for (var i = 0; i < 4; i++) {
            turnLeft();
        }
    }
}
```
</details>

### დეკომპოზიცია
"მუშა" კოდის დაწერის შემდეგ გავაკეთოთ კიდევ ერთი გადახედვა და დავფიქრდეთ, ხომ არ შეგვიძლია კოდის ხარისხი გავაუმჯობესოთ?

<details>

<summary>კოდის ჩვენება</summary>

```js
function dizzyDecomposed() {
    for (var i = 0; i < 8; i++) {
        backFlip();
    }
}

function backFlip() {
    for (var i = 0; i < 4; i++) {
        turnLeft();
    }
}
```
</details>

## 4.1.5: Is There a Ball?
ეს ამოცანა პატარაა, მაგრამ მაინც top down დიზაინით გავაკეთოთ. ამისთვის უბრალოდ პირობა "გადავწეროთ კოდში".


## 5.1.3: Move to Wall

## 5.1.5: Lay Row of Tennis Balls

### Off by one bug
<details>

<summary>კოდის ჩვენება</summary>

```js
function fillLineBuggy(){
    while(frontIsClear()) {
        putBall();
        move();
    }
}
```
</details>

### ორნაირი ამოხსნა
<details>

<summary>კოდის ჩვენება</summary>

```js
function fillLine1() {
    putBall();
    while(noBallsPresent()) {
        move();
        putBall();
    }
}

function fillLine2() {
    while(noBallsPresent()) {
        putBall();
        move();
    }
    putBall();
}
```

</details>


### ალტერნატიული ამოხსნა
<details>

<summary>კოდის ჩვენება</summary>

```js
function fillLine3() {
    while(noBallsPresent()) {
        putBall();
        if (frontIsClear()) {
            move();
        }
    }
}
```
</details>






