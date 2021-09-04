# Highlight Unanswered Questions on Request Response

This function allows you to highlight the unanswered rows of a matrix table in a request response scenario. Qualtrics only highlights the question, which may be an issue in case the matrix table is large.

**Note:** A much more flexible version of this function is available upon request.

```js
let my_interval;
Qualtrics.SurveyEngine.addOnReady(function () {
	let attempt = 1;
	document.querySelector("#NextButton").onclick = function () {
		my_interval = setInterval(() => {
			err_msg = document.querySelector("#ErrorMessage");
			if (err_msg != null) {
				solver();
				clearInterval(my_interval);
			}
		}, 10);
	};
	let quest = this;
	let n = jQuery("#" + this.questionId + " .ChoiceRow").length;
	function solver() {
		attempt++;
		for (let i = 0; i < n; i++) {
			if (
				jQuery("#" + quest.questionId + " .ChoiceRow:eq(" + i + ") td input[type='radio']:checked")
					.length == 0
			) {
				jQuery("#" + quest.questionId + " .ChoiceRow:eq(" + i + ")").css("background", "lightpink");
			}
		}
	}
	this.questionclick = function () {
		if (attempt > 1) {
			for (let i = 0; i < n; i++) {
				if (
					jQuery(
						"#" + quest.questionId + " .ChoiceRow:eq(" + i + ") td input[type='radio']:checked"
					).length != 0
				) {
					jQuery("#" + quest.questionId + " .ChoiceRow:eq(" + i + ")").css("background", "");
				}
			}
		}
	};
});

Qualtrics.SurveyEngine.addOnUnload(function () {
	clearInterval(my_interval);
});
```
