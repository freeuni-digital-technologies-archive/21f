---
title: 08. todo list აპლიკაცია
parent: სემინარები
---

index.html
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>todo list აპლიკაცია</title>
	<style>
		.todo-item {
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
		<div id="todo-items">
			<h1>I have to do...</h1>
		</div>
	</div>
	
	<script type="text/javascript" src="./todo.js"></script>
</body>
</html>
```

todo.js
```js
function addNewItem() {
	var todo = prompt("რა გაქვს გასაკეთებელი?")
	console.log(todo)
	var todoItems = document.getElementById('todo-items')
	console.log(todoItems)
	var todoElement = '<div class="todo-item">' + todo + '</div>'
	todoItems.insertAdjacentHTML('beforeend', todoElement)
}
```