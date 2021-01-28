Qualtrics.SurveyEngine.addOnload(function () {
	if (document.getElementById("EndOfSurvey")) {
		// In case you show a response summary at the end.
		throw "Survey has ended!";
	}

	var opts = { A: 65, L: 76 };
	var good = Object.entries(opts)[Math.floor(Math.random() * 2)];
	var bad = good[0] == "L" ? Object.entries(opts)[0] : Object.entries(opts)[1];

	var good_bad_html = "<br><br><b>" + good[0] + '</b> for <em>Good</em> <br><br><b>' + bad[0] + "</b> for <em>Bad</em>";

	// Collect all questions on the page
	var all_q = document.querySelectorAll("div[id^='QID']:not(.Separator)");

	// Centre align all the words
	all_q.forEach((item) => (item.style.textAlign = "center"));

	// This will keep track of the question sequence in case of randomization. You will find this as the embedded data
	var ques_seq = [];
	var word_seq = [];
	var choice_seq = [];
	var res_time = [];
	var st_time = 0;

	// Keep a track of which question has been displayed
	var q_tracker = 1;

	// Hide all the questions
	for (var i = q_tracker; i < all_q.length; i++) {
		all_q[i].hide();
	}

	// Define an observer to check for visibility changes in the questions
	const display_checker = new MutationObserver(function (mutation) {
		Event.stopObserving(document, "keydown", next_question);

		// Hide the question after 2 seconds and start tracking the keyboard
		setTimeout(() => {
			all_q[q_tracker].querySelector(".QuestionText").hide();
			all_q[0].show();
			st_time = Date.now();
			Event.observe(document, "keydown", next_question);
		}, 2000);
	});

	// Add the observer to each question
	for (var i = q_tracker; i < all_q.length; i++) {
		display_checker.observe(all_q[i], {
			attributes: true,
		});
	}

	// Detect if the spacebar is being pressed
	Event.observe(document, "keydown", init_questions);

	function init_questions(e) {
		if (e.keyCode == 32) {
			// Spacebar was pressed
			// Change the Text to only show answer commands
			var delay_time = 3;
			all_q[0].querySelector(".QuestionText").innerHTML =
				"<div>Please read the word for 2 secs and then press" + good_bad_html + "<br><br><br>The first question will appear in <b id='delay'>" + delay_time + "</b> seconds</div>";
			delay_time -=1;
			var delay_text = document.querySelector("#delay");
			x = setInterval(() => {
				delay_text.innerText = delay_time;
				delay_time -=1;
				if(delay_time<0){
					clearInterval(x);
				}
			}, 1000);

			// Stop tracking the keyboard for the first question
			Event.stopObserving(document, "keydown", init_questions);

			// Display the first question
			setTimeout(() => {
				all_q[0].hide();
				all_q[0].querySelector(".QuestionText").innerHTML = "Press" + good_bad_html;
				all_q[q_tracker].show();
				all_q[q_tracker].querySelector(".QuestionBody").hide();
			}, 4000);
		}
	}

	function next_question(e) {
		var choice_num = null;
		if (e.keyCode == good[1]) {
			// 'A' was pressed
			choice_num = 1; // Choose Good
			choice_seq.push(" Good ");
		} else if (e.keyCode == bad[1]) {
			// 'L' was pressed
			choice_num = 2; // Choose Bad
			choice_seq.push(" Bad ");
		} 
		if (choice_num) {
			res_time.push(Date.now() - st_time); // Store the elapsed time in a variable
			all_q[q_tracker].querySelectorAll("input")[choice_num - 1].click(); // Select the appropriate choice
			all_q[q_tracker].hide(); // Hide the current question
			ques_seq.push(all_q[q_tracker].id);
			word_seq.push(all_q[q_tracker].querySelector(".QuestionText").innerText);

			q_tracker += 1; // Increment the question tracker by 1
			if (q_tracker < all_q.length) {
				// If there are still questions left
				all_q[q_tracker].show(); // Show the next question
				all_q[q_tracker].querySelector(".QuestionBody").hide();
				all_q[0].hide();
			} else if (q_tracker == all_q.length) {
				// If all questions are displayed
				ques_seq = ques_seq.join();
				word_seq = word_seq.join();
				choice_seq = choice_seq.join();
				res_time = res_time.join();
				Qualtrics.SurveyEngine.setEmbeddedData("response_array",res_time);
				Qualtrics.SurveyEngine.setEmbeddedData("question_seq",ques_seq);
				Qualtrics.SurveyEngine.setEmbeddedData("word_seq",word_seq);
				Qualtrics.SurveyEngine.setEmbeddedData("choice_seq",choice_seq);

				Event.stopObserving(document, "keydown", next_question); // Stop tracking the keyboard
				document.querySelector("#NextButton").click(); // Click the next button
			}
		}
	}
});