// https://jsonplaceholder.typicode.com/posts

function httpGet(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
    	if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}


function log(postAsJSON) {
	let obj = JSON.parse(postAsJSON)
	console.log(obj)
	addPostElement(obj)
}

httpGet('https://jsonplaceholder.typicode.com/posts/1', log)


function addPostElement(postObject) {
	let postsFeed = document.getElementById('posts-feed')
    let postElem = '<div class="post-text">'+ postObject.body + '</div>'
    postsFeed.insertAdjacentHTML('afterbegin', postElem)
}
