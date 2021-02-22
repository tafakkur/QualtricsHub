Qualtrics.SurveyEngine.addOnReady(function () {
	var q_weights = {
		1: [100, 150, 125, 0],
		2: [50, 80, 30, 0],
		3: [70, 100, 40, 0],
	};

	var all_questions = [];
	document
		.querySelectorAll("div[id^=QID]:not(.Separator)")
		.forEach((item) => all_questions.push(item));

	var display_cals = all_questions[all_questions.length - 1];
	display_cals.readOnly = true;
	display_cals.style.cursor = "not-allowed";

	function cal_sum() {
		var sum = 0;
		all_questions.forEach((question, which_q) => {
			question.querySelectorAll(".q-checkbox").forEach((chkbox, which_o) => {
				if (chkbox.className.includes("q-checked")) {
					sum += Object.values(q_weights)[which_q][which_o];
				}
			});
		});
		display_cals.querySelector(".InputText").value = sum;
	}
	var config = { attributes: true, subtree: true };

	var option_watcher = new MutationObserver(cal_sum);
	all_questions.forEach((question) => {
		option_watcher.observe(question, config);
	});
	document.querySelector("#NextButton").onclick = function () {
		option_watcher.disconnect();
	};
});
