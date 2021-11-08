---
title: 07. ჯავასკრიპტი - ცვლადები, ფუნქციები (მაგალითები კარელში)
parent: სემინარები
---

## ცვლადები
```js
function putNBalls() {
    var myNumber = 4; // ცვლადის შექმნა

    // დადებს 4 ბურთს
    for (var i=0; i < myNumber; i++) {
        putBall();
    }
    move();
    
    myNumber = myNumber*2; // 4*2 ანუ myNumber გახდება 8

    // დადებს 8 ბურთს
    for (var i=0; i < myNumber; i++) {
        putBall();
    }
    
}
```


### მაგალითი: მიმატება
მეორე და მესამე უჯრაზე დევს n და m ბურთი. მეოთხე უჯრაზე დავდოთ
n + m ბურთი

```js
function makeAddition() {
    move();
    var a = 0;
    while(ballsPresent()) {
        takeBall();
        a = a + 1; // a-ს გაზრდის 1-ით იმდენჯერ, რამდენი ბურთიც არის
    }
    move();
    var b = 0;
    while(ballsPresent()) {
        takeBall();
        b++; // იგივეა, რაც b = b + 1
    }
    move();
    
    for (var i = 0; i < a + b; i++) {
        putBall();
    }
    move();
```




### მაგალითი: როგორ მუშაობსfor loop
```js
function forLoop() {  
    var i = 0;
    while (i < 7) {
        putBall();
        i++;
    }
    move();
    
}
```

## bool მნიშვნელობები და ოპერატორები
```js
function moveUntilBallsPresent() {
    while(ballsPresent() && frontIsClear()) {
        move();
    }
}
```

## ფუნქციიდან მნიშვნელობის დაბრუნება
```js
function makeAddition2() {
    move();
    var a = countBalls(); // 3
    move();
    var b = countBalls(); // 2
    move();
    for (var i = 0; i < a + b; i++) {
        putBall();
    }
    move();
}

function countBalls() {
    var numberOfBalls = 0;
    while(ballsPresent()) {
        takeBall();
        numberOfBalls++;
    }
    return numberOfBalls; // რაც return-ის მერე წერია, ის ჩაიწერება numberOfBalls-ის მაგივრად
}
```



