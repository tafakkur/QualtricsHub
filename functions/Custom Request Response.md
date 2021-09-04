# Custom Request Response Message

This function doesn't change the request response message, but instead throws a custom message. The use of this with request/force response in not recommended.

```js
Qualtrics.SurveyEngine.addOnReady(function () {
	const qid = this.questionId;
	tot_choices = Qualtrics.SurveyEngine.registry[qid].getChoices().length;
	var sel_choices = 0;

	that = this;
	this.questionclick = function () {
		sel_choices = that.getSelectedChoices().length;
	};

	document.querySelector("#NextButton").onmousedown = function () {
		check_answers();
	};

	function check_answers() {
		if (sel_choices == tot_choices) {
			that.clickNextButton();
		} else {
			//Selecting Okay will result in continuing
			if (confirm("Custom message here") == true) {
				that.clickNextButton();
			}
		}
	}
});
```
