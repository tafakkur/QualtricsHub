# Check sum on the page

A variation of the constant sum question that allows you to check the sum on the page itself and hence not wait for the user to click the next button for validation.

```js
Qualtrics.SurveyEngine.addOnload(function () {
	//Disable the next button
	// You can delete this if you are fine with the sum as being zero
	this.disableNextButton();
});

Qualtrics.SurveyEngine.addOnReady(function () {
	//Get the Question Id
	const qid = this.questionId;
	// Get the number of choices
	let n_choices = Qualtrics.SurveyEngine.registry[qid].getChoices();

	const base_msg = jQuery("#" + qid + " .QuestionText").html();

	// Detect a change in any of the choices
	n_choices.forEach((item) => {
		// console.log("input detected");
		document.querySelector("#QR\\~" + qid + "\\~" + item).oninput = function () {
			chk_sum();
		};
	});

	let that = this;
	function chk_sum() {
		let max_sum = parseInt("${e://Field/max_sum}");
		let current_sum = 0;

		let padding_pre = '<br> <a style="color:red;">';
		let padding_post = "</a>";
		let err_msg = "The total should be more than zero and less than " + max_sum + " to proceed";

		//Iterate over each of choices
		n_choices.forEach((item) => {
			curr_val = parseInt(document.querySelector("#QR\\~" + qid + "\\~" + item).value);
			// Check for empty blocks
			if (isNaN(curr_val)) {
				if (document.querySelector("#QR\\~" + qid + "\\~" + item).value == "") {
					curr_val = 0;
				} else {
					err_msg = "Please enter only valid integer numbers.";
				}
			}
			//Check for invalid characters
			if (document.querySelector("#QR\\~" + qid + "\\~" + item).value.search(/\D/) != -1) {
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
			jQuery("#" + qid + " .QuestionText").html(base_msg);
		} else {
			that.disableNextButton();
			jQuery("#" + qid + " .QuestionText").html(err_msg);
		}
	}
});
```