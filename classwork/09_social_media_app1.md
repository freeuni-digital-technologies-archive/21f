---
title: 09. სოციალური მედიის აპლიკაცია ნაწილი 1 
parent: სემინარები
---

## საწყისი ფაილები
index.html
```html
<!DOCTYPE html>
 <html>
 <head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <title>სოციალური მედიის აპლიკაცია</title>
 </head>
 <body>
     <h1>სოციალური მედიის აპლიკაცია</h1>



     <script src="./index.js"></script>

 </body>
 </html>
```


index.js
```js
console.log('index.js works!')
```


## აპლიკაციის ჩონჩხი
```html
<div id="app">
     <input id="post-text">
     <button>გამოქვეყნება</button>
     <h2>გამოქვეყნებული პოსტები</h2>
     <div id="posts">
</div>
</div>
```

## publishPost ფუნქციის შექმნა
```js
function publishPost() {
	let text = document.getElementById('post-text').value
	console.log(text)
}
```


## ფუნქციის დაკავშირება ღილაკთან
```html
<input id="post-text">
<button id="publish-post">გამოქვეყნება</button>
<h2>გამოქვეყნებული პოსტები</h2>
```

publishPost() ფუნქციის შემდეგ ჩაამატეთ ეს ხაზი
```js
document.getElementById('publish-post').onclick = publishPost
```

## პოსტის გამოქვეყნება
```html
<h2>გამოქვეყნებული პოსტები</h2>
<div id="posts-feed">
</div>
```

```js
function publishPost() {
	 let text = document.getElementById('post-text').value
	 let postsFeed = document.getElementById('posts-feed')
	 postsFeed.insertAdjacentHTML('afterbegin', text + '<br>')
}
```

## პოსტის div-ის დამატება
```js
function publishPost() {
     let postText = document.getElementById('post-text').value
     let postsFeed = document.getElementById('posts-feed')
     let postElem = '<div class="post-text">'+ postText + '</div>'
     postsFeed.insertAdjacentHTML('afterbegin', postElem)
}
```