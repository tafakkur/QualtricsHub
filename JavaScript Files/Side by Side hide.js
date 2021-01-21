Qualtrics.SurveyEngine.addOnReady(function () {
	n_choices = this.getChoices().length;
	q1_input = this.getQuestionContainer().querySelectorAll(".SBS1.AnswerCell Input");

	q1_input.forEach((box) => {
		box.oninput = function () {
			get_val(box.name, box.value);
		};
	});

	other_inputs = this.getQuestionContainer().querySelectorAll(".AnswerCell:not(.SBS1)");
	n_answers = other_inputs.length / n_choices;

	function get_val(el_name, el_value) {
		row_num = Number(el_name.split("~")[2]) - 1;
		st_ans = row_num * n_answers;
		en_ans = (row_num + 1) * n_answers;
		if (el_value == "0") {
			for (i = st_ans; i < en_ans; i++) {
                other_inputs[i].hide();
			}
		} else {
			for (i = st_ans; i < en_ans; i++) {
                other_inputs[i].show();
			}
		}
	}
});
