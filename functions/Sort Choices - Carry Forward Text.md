# Sort Choices: Carry Forward Text

This function sorts the choices in the destination question when using carry forward choices.

```js
Qualtrics.SurveyEngine.addOnPageSubmit(function () {
	const qid = this.questionId;
	let available_choices = Qualtrics.SurveyEngine.QuestionInfo[qid].Choices;

	let tot_choices = [];
	for (keys in available_choices) {
		tot_choices.push(keys);
	}

	let choice_set = {};
	let i = 1;
	tot_choices.forEach((item) => {
		option_score = document.getElementsByName("QR~" + qid + "~" + item)[0].value;
		option_name = document.getElementById("header~" + qid + "~" + i).innerText.trim();
		choice_set[option_name] = option_score;
		i++;
	});

	const sorted_choices = Object.fromEntries(
		Object.entries(choice_set).sort(([, a], [, b]) => b - a)
	);

	i = 1;
	for (keys in sorted_choices) {
		Qualtrics.SurveyEngine.setEmbeddedData("top_" + i, keys);
		i++;
	}
});
```
