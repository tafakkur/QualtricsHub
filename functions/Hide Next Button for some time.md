# Hide Next Button for some time

Hides the Next Button for pre-defined amount of time and then displays it. This can now also be accomplished using the `timing` question.

```js
Qualtrics.SurveyEngine.addOnload(function () {
	this.hideNextButton(); //Hide the question as soon as the page loads
});

Qualtrics.SurveyEngine.addOnReady(function () {
	let delayTime = 6000; //This is the time of delay in ms
	let that = this;
	setTimeout(function () {
		that.showNextButton();
	}, delayTime); // Function to show the next button
});
```
