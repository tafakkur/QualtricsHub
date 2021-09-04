# Clear Text Entry Box

This function allows you clear the text entry box if it is empty. This is to overcome a quirk of Qualtrics, where if you have a text entry box in a matrix/MC question and the option is unselected, proceeding to the next page throws an error.

```js
Qualtrics.SurveyEngine.addOnReady(function () {
	const qid = this.questionId;
	let n_choices = Qualtrics.SurveyEngine.registry[qid].getChoices().length;
	// Set this according to where you are placing your text entry box
	//This refers to the last choice, -1 to the second last choice etc.
	let text_choice = n_choices;

	this.questionclick = function (event, element) {
		let selected_choice = element.id.split("~")[2];
		if (selected_choice != text_choice) {
			document.querySelector("#QR~" + qid + "~" + text_choice + "~TEXT").value = "";
		}
	};
});
```
