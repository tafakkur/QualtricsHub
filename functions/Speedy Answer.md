# Check for fast answers

This function allows you to reconfirm the respondents answer if they were too fast. The idea here is to allow the respondent to slowdown a bit, helping improve data quality.

If the respondent answers too quickly, the code below asks them to confirm their choice, if they say no, the choices are cleared.

```js
Qualtrics.SurveyEngine.addOnReady(function () {
	// Change this value to increase/decrease the time. It is in ms.
	let check_time = 6000;
	let quest = this,
		all_inputs = quest.questionContainer.querySelectorAll("[type='radio'],[type='checkbox']");
	all_inputs.forEach((ip) => {
		ip.oninput = function (e) {
			setTimeout(() => {
				// Change the question here
				let check = confirm("Yes or no");
				if (!check) {
					quest.getSelectedChoices().forEach((ch) => {
						quest.setChoiceValue(ch, false);
					});
				}
			}, 100);
		};
	});
	setTimeout(() => {
		all_inputs.forEach((ip) => {
			ip.oninput = function (e) {};
		});
	}, check_time);
});
```
