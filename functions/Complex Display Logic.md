# Complex Diplay Logic

Qualtrics' inbuilt display logic, while powerfull is quite tedious to work with for complicated logic. The following function demonstrates an implementation of a complicated display logic.

```js
Qualtrics.SurveyEngine.addOnload(function () {
	// Hide the question as soon as the page loads
	this.getQuestionContainer().hide();

	//Variable to decide whether to show the question or not. Initially false
	let show_answer = false;

	//Create an embedded variable with all the valid choices using a seperator
	// In this a comma "," is used
	let valid_choices = "${e://Field/valid_choices}";
	valid_choices = valid_choices.split(",");

	//Get your entered choice. This is showning an embedded variable
	// Which you can set based on your question type.
	const entered_choice = "${e://Field/entered_choice}";

	// Check if the entered choice is equal to any of the valid choices
	valid_choices.forEach((item) => {
		if (item.trim() == entered_choice) {
			show_answer = true;
		}
	});

	//Show the question, if the condition is met
	if (show_answer == true) {
		this.getQuestionContainer().show();
	}

	//Optionally you can add a condition to click the next button
	// If you only have that one question on the page
	if (show_answer == false) {
		this.clickNextButton();
	}
});
```
