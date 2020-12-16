Qualtrics.SurveyEngine.addOnReady(function () {
	//Get the Question Id
	const qid = this.questionId;
	// Get the number of choices
	n_choices = Qualtrics.SurveyEngine.registry[qid].getChoices();

	const base_msg = jQuery("#" + qid + " .QuestionText").html();
	padding_pre = '<br> <a style="color:red;">';
	padding_post = "</a>";
	err_msg = base_msg + padding_pre + "Please enter only valid integer numbers." + padding_post;

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
