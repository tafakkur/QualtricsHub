# Deselect Choices

This function allows participants to deselect their choices on the single answer (radio) type questions

Courtesy mattyb513 Ref: [https://www.qualtrics.com/community/discussion/1387/deselecting-a-radio-button](https://www.qualtrics.com/community/discussion/1387/deselecting-a-radio-button)

Working Demo: [https://iima.au1.qualtrics.com/jfe/form/SV_3mJczLmUFE9c7L7](https://iima.au1.qualtrics.com/jfe/form/SV_3mJczLmUFE9c7L7)

You'll need to first create a Deselect Button.

## Deselect Button HTML

```html
<!-- This can be added to any choice/question text -->
<button id="Deselect">Deselect</button>
```

## For single answer type questions.

```js
Qualtrics.SurveyEngine.addOnReady(function () {
	//Get the Question Id
	let qid = this.questionId;

	// Get the choices. This is needed as sometimes Qualtrics just goes crazy with choice numbers
	let all_choices = Qualtrics.SurveyEngine.registry[qid].getChoices();

	jQuery("#Deselect").click(function () {
		all_choices.forEach((choice) => {
			Qualtrics.SurveyEngine.registry[qid].setChoiceValue(choice, false);
		});
	});
});
```

## For Matrices

```js
// Add the button above as one of the statements

Qualtrics.SurveyEngine.addOnReady(function () {
	let qid = this.questionId;
	let scale_points = Object.keys(Qualtrics.SurveyEngine.QuestionInfo[qid].Answers).length;

	// Get the location of the Deselect Button
	choices = Qualtrics.SurveyEngine.QuestionInfo[qid].Choices;
	deselect_position = [];
	Object.keys(choices).forEach((item) => {
		if (choices[item].Text.includes("Deselect")) deselect_position.push(item);
	});
	deselect_position = parseInt(deselect_position);

	// Clear the choices
	jQuery("#Deselect").click(function () {
		for (i = 1; i <= scale_points; i++) {
			Qualtrics.SurveyEngine.registry[qid].setChoiceValue(deselect_position, i, false);
		}
	});
});
```
