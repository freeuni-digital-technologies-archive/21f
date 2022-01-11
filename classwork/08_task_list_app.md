---
title: 08. task list აპლიკაცია
parent: სემინარები
---

მაგალითის გასარჩევად შექმენით index.html და index.js ფაილები და გაუშვით კოდი.

index.html
```html
<div id="app">
	<button onclick="addNewItem()">add new item</button>
	<div id="task-items">
		<h1>I have to do...</h1>
	</div>
</div>
```

<details markdown="1">

<summary>მთლიანი html ფაილის ჩვენება</summary>

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>task list აპლიკაცია</title>
	<style>
		.task-item {
			padding: 20px;
			font-family: sans-serif;
			background-color: #97c2b9;
			color: white;
		}
	</style>
</head>
<body>
	<div id="app">
		<button onclick="addNewItem()">add new item</button>
		<div id="task-items">
			<h1>I have to do...</h1>
		</div>
	</div>
	
	<script type="text/javascript" src="./task.js"></script>
</body>
</html>
```
</details>


task.js
```js
function addNewItem() {
	var task = prompt("რა გაქვს გასაკეთებელი?")
	console.log(task)
	var taskItems = document.getElementById('task-items')
	console.log(taskItems)
	var taskElement = '<div class="task-item">' + task + '</div>'
	taskItems.insertAdjacentHTML('beforeend', taskElement)
}
```