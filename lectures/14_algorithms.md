

# ალგორითმები
- **ფსევდოკოდი**

<!-- https://onecompiler.com/javascript/3xnkqbju6 -->

## მაქსიმუმის და მინიმუმის პოვნა
```
max იყოს პირველი ელემენტი
ყოველ შემდეგ ელემენტზე:
	შევადაროთ ელემენტი და max
		თუ მეტია, max-ის მნიშვნელობას შევცვლით
```

```js
let myarr = [2, 41, 321, 2, 56, 64]

function max(myList) {
	let max = myList[0]
	// პრობლემა ხომ არ არის, რომ i-ს 0-დან ვიწყებთ?
	for (let i=0; i < myList.length; i++) {
		// რა შეიცვლება, თუ >= ს დავწერთ?
		if (myList[i] > max) {
			max = myList[i]
		}
	}
	return max
}

max(myarr) // დააბრუნებს max-ს
```


## სიის სორტირება
ვიწყებთ პირველი ელემენტიდან
	ვპოულობთ მინიმალურ ელემენტს მას შემდეგ
	ვუცვლით ადგილს
	გადავდივართ და ვიმეორებთ შემდეგი ელემენტიდან


```js
let myarr = [2, 41, 321, 2, 56, 64]

function sort1(myList) {
	for (let i = 0; i < myList.length; i++) {
		swap(myList, i, findMin(myList, i + 1))
	}
  return myList
}

/**
 * იპოვის მინიმალური ელემენტის ინდექსს
 */
function findMin(myList, index) {
	let minIndex = index
	for (let i=index; i < myList.length; i++) {
		if (myList[i] < myList[minIndex]) {
			minIndex = i
		}
	}
	return minIndex
}


function swap(myList, j, k) {
	let temp = myList[j]
	myList[j] = myList[k]
	myList[k] = temp
}

console.log(sort1(myarr))
// [2, 2, 41, 56, 64, 321]
```




### bubble sort

<!-- https://www.happycoders.eu/algorithms/bubble-sort/ -->

### insertion sort





<!-- ერთნაირი კომპლექსურობა -->

### სხვა ალგორითმები
- https://www.youtube.com/watch?v=kPRA0W1kECg
- quick sort https://www.geeksforgeeks.org/quick-sort/

## ალგორითმების კომპლექსურობა
- კვადრატული
- წრფივი
- ლოგარითმული


რა იქნება იმაზე უკეთესი, რომ ყოველ ჯერზე 


# მონაცემთა სტრუქტურები
წინა მაგალითში განხილული ალგორითმები გათვლილია დაულაგებელ სიებზე.
ამ შემთხვევაში მინიმუმის პოვნასაც კი წრფივი კომპლექსურობა აქვს!

## ორობითი ხე

<!-- 
<https://viterbi-web.usc.edu/~adamchik/15-121/lectures/Trees/pix/pix03.bmp>

 -->

