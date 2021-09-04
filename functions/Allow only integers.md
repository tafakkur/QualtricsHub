# Allow only integers

Qualtrics' validation have a problem that the checks are only triggered when the repsondent clicks the next button. This function allows you enforce entering **only integers** while the respondent enters the answers, allows for faster feedback and a much better user experience.


```js
Qualtrics.SurveyEngine.addOnReady(function () {
	//Get the Question Id
	const qid = this.questionId;
	// Get the number of choices
	const n_choices = Qualtrics.SurveyEngine.registry[qid].getChoices();

	const base_msg = jQuery("#" + qid + " .QuestionText").html();
	const padding_pre = '<br> <a style="color:red;">';
	const padding_post = "</a>";
	let err_msg = base_msg + padding_pre + "Please enter only valid integer numbers." + padding_post;

	// Detect a change in any of the choices
	n_choices.forEach((item) => {
		document.querySelector("#QR\\~" + qid + "\\~" + item).oninput = function () {
			if (document.querySelector("#QR\\~" + qid + "\\~" + item).value.search(/\D/) != -1) {
				jQuery("#" + qid + " .QuestionText").html(err_msg);
			} else {
				jQuery("#" + qid + " .QuestionText").html(base_msg);
			}
		};
	});
});

```

