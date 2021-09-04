# Sort Choices: Value

This function sorts choices based on their values.

```js
Qualtrics.SurveyEngine.addOnPageSubmit(function () {
	const qid = this.questionId;
	const tot_choices = Qualtrics.SurveyEngine.registry[qid].getChoices().length;

	let choice_set = {};
	for (i = 1; i <= tot_choices; i++) {
		option_score = document.getElementsByName("QR~" + qid + "~" + i)[0].value;
		option_name = document.getElementById("header~" + qid + "~" + i).innerText.trim();
		choice_set[option_name] = option_score;
	}
	const sorted_choices = Object.fromEntries(
		Object.entries(choice_set).sort(([, a], [, b]) => b - a)
	);

	let i = 1;
	for (keys in sorted_choices) {
		Qualtrics.SurveyEngine.setEmbeddedData("top_" + i, keys);
		i++;
	}
});
```
