# Custom sum on Page

This function demonstrates calculating a weighted or any customized sum on the page. The weights are assigned at the top for each of the three questions and based on the selection of the respondents the final value is calculated.

This was developed for someone who wanted to calculate the total calories based on the toppings selected in the desert.

```js
Qualtrics.SurveyEngine.addOnReady(function () {
	var q_weights = {
		1: [100, 150, 125, 0],
		2: [50, 80, 30, 0],
		3: [70, 100, 40, 0],
	};

	var all_questions = [];
	document.querySelectorAll("div[id^=QID]:not(.Separator)").forEach((question) => {
		if (question.className.includes("TE")) {
			display_cal = question.querySelector("input");
		} else {
			all_questions.push(question);
		}
	});

	display_cal.readOnly = true;
	display_cal.style.cursor = "not-allowed";

	function cal_sum() {
		var sum = 0;
		all_questions.forEach((question, which_q) => {
			question.querySelectorAll(".q-checkbox").forEach((chkbox, which_o) => {
				if (chkbox.className.includes("q-checked")) {
					sum += Object.values(q_weights)[which_q][which_o];
				}
			});
		});
		display_cal.value = sum;
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
```
