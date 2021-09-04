# Log Values as Typed

Log values as they are typed

```js
document.getElementById("submit").onclick = function () {
	userInput();
};
let arr = [];
function userInput() {
	let input = document.getElementById("userInput").value;
	arr.push(input);
	//The name of the Embedded Data variable needs to be passed as a string
	Qualtrics.SurveyEngine.setEmbeddedData("url_list", arr);
}
```
