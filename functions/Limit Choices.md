# Limit Choices

These functions allow you to limit the number of choices a respondent can select, either at the question or page level.

## Limit Choices: Question Level

<a href="https://iima.au1.qualtrics.com/jfe/preview/SV_8HBDY4VRJnFn40J/BL_bqnEHewmrz1NnvL?Q_SurveyVersionID=current" target="_blank"><i> Link to Working Demo</i></a>

```js
Qualtrics.SurveyEngine.addOnReady(function () {
	const quest = this,
		qid = quest.questionId;
	let okay_choices1 = [];

	this.questionclick = function () {
		let sel_choices = quest.getSelectedChoices();
		// Set the maximum number of choices you want here
		if (sel_choices.length <= 3) {
			okay_choices1 = sel_choices;
		} else {
			alert("You can not select more than 3 choices.\nPlease deselect to select another.");
			sel_choices.forEach((item) => {
				Qualtrics.SurveyEngine.registry[qid].setChoiceValue(item, false);
			});
			okay_choices1.forEach((item) => {
				Qualtrics.SurveyEngine.registry[qid].setChoiceValue(item, true);
			});
		}
	};
});
```

## Limit Choices: Page Level

<a href="https://iima.au1.qualtrics.com/jfe/preview/SV_8HBDY4VRJnFn40J/BL_byjlkRkwlsym0nP?Q_SurveyVersionID=current" target="_blank"><i> Link to Working Demo</i></a>

```js
Qualtrics.SurveyEngine.addOnReady(function () {
	let all_checkboxes = document.querySelectorAll(".q-checkbox");
	all_checkboxes.forEach((cb) => (cb.parentElement.onmousedown = selected_choices));

	function selected_choices() {
		let num_chosen = document.querySelectorAll(".q-checkbox.q-checked").length;

		if (num_chosen >= 4 && !this.querySelector(".q-checked")) {
			this.click();
			alert("You can not select more than 4 choices. Please unselect one to select another");
		}
	}
});
```
