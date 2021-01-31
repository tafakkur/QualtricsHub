Qualtrics.SurveyEngine.addOnload(function () {
	if (document.getElementById("EndOfSurvey")) {
		// In case you show a response summary at the end.
		throw "Survey has ended!";
	}
	nb = document.getElementById("NextButton");
	nb.hide();
	max_q = Number("${q://QID18/ChoiceTextEntryValue}") + 1; // Determines the maximum number of questions
	ques_seq = []; // This will keep track of the question sequence in case of randomization. You will find this as the embedded data
	q_tracker = 1; // Keep a track of how many questions have been displayed

	// Collect all questions on the page
	all_q = document.querySelectorAll("div[id^='QID']:not(.Separator)");

	// This is to hide all the questions.
	for (var i = 1; i < all_q.length; i++) {
		var tb = all_q[i].querySelectorAll(".InputText");
		tb.forEach((item) => (item.style.width = "120px"));
		tb[tb.length - 1].insertAdjacentHTML(
			"afterend",
			"<button class='next_ques' style='margin:20px;'>Next Question</button>"
		);
		all_q[i].hide();
	}

	document.querySelector("#start_quiz").onclick = function () {
		all_q[0].hide();
		all_q[1].show();
	};

	document.querySelectorAll(".next_ques").forEach((item) => {
		item.onclick = show_next;
	});

	function show_next() {
		ques_seq.push(all_q[q_tracker].id); // Add the id of the current question to the sequence
		all_q[q_tracker].hide(); // Hide the current question
		q_tracker += 1; // Increment the question tracker by 1
		if (q_tracker < max_q) {
			// If there are still questions left
			all_q[q_tracker].show(); // Show the next question
		} else if (q_tracker == max_q) {
			// If all questions are displayed
			all_q[q_tracker - 1].hide();
			all_q[0].show();
            all_q[0].innerHTML = `You have answered all the questions.<br>
                                  You can either review your answers or submit without reviewing.<br><br>
                                  <button id="review_answers" style="margin: 30px;">Review Answers</button>
                                  <button id="submit_quiz" style="margin: 30px;">Submit Quiz</button>`;

			document.getElementById("submit_quiz").onclick = function () {
				nb.click();
			};

			document.getElementById("review_answers").onclick = function () {
				all_q[0].hide();
				document
					.querySelectorAll(".next_ques")
					.forEach((item) => item.hide());

				ques_seq.forEach((item) => {
					document.getElementById(item).show();
				});
				nb.value = "Submit Quiz";
				nb.show();
			};
		}
	}
});
