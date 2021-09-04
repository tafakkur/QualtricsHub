# Hide the question for some time

Hides the Question and Choices for pre-defined amount of time and then displays it.

```js
Qualtrics.SurveyEngine.addOnload(function () {
	this.questionContainer.hide(); // Hide the question as soon as the page loads
});

Qualtrics.SurveyEngine.addOnReady(function () {
	let delayTime = 6000; //This is the time of delay in ms
	let that = this;
	setTimeout(function () {
		that.getQuestionContainer().show();
	}, delayTime); // Function to show the question
});
```
