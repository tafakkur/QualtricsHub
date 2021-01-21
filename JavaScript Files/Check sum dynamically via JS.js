Qualtrics.SurveyEngine.addOnload(function () {
	//Diables the next button at the start
	// You can delete this if you are fine with the sum as being zero
	this.disableNextButton();
});

Qualtrics.SurveyEngine.addOnReady(function () {
	//Get the Question Id
	qc = this.getQuestionContainer();
	// Get the number of choices
	input_boxes = qc.querySelectorAll("Input:not([name*='Total']");

	base_msg = qc.querySelector(".QuestionText").innerHTML;

	// Detect a change in any of the choices
	input_boxes.forEach((item) => {
		item.oninput = function () {
			chk_sum();
		};
	});

	that = this;
	function chk_sum() {
		var max_sum = 25;
		var current_sum = 0;

		padding_pre = '<br> <span style="color:red;">';
		padding_post = "</span>";
		err_msg = "The total should be more than zero and less than " + max_sum + " to proceed";

		//Iterate over each of choices
		input_boxes.forEach((item) => {
			curr_val = Number(item.value);
			// Check for empty blocks
			if (isNaN(curr_val)) {
				if (item.value == "") {
					curr_val = 0;
				} else {
					err_msg = "Please enter only valid integer numbers.";
				}
			}
			//Check for invalid characters
			if (item.value.search(/\D/) != -1) {
				err_msg = "Please enter only valid integer numbers.";
				curr_val = max_sum + 1;
			}
			current_sum += curr_val;
		});
		err_msg = base_msg + padding_pre + err_msg + padding_post;

		//Checks for zero and the value being more than zero and less than the max_sum
		// If you are fine with zero then delete "current_sum >0 &&"
		if (current_sum > 0 && current_sum <= max_sum) {
			that.enableNextButton();
			qc.querySelector(".QuestionText").innerHTML = base_msg;
		} else {
			that.disableNextButton();
			qc.querySelector(".QuestionText").innerHTML = err_msg;
		}
	}
});
