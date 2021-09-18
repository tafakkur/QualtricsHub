Qualtrics.SurveyEngine.addOnReady(function () {
	let quest = this,
		all_inputs = quest.questionContainer.querySelectorAll("[type='radio'],[type='checkbox']");
	all_inputs.forEach((ip) => {
		ip.oninput = function (e) {
			setTimeout(() => {
				// Change the question here
				let check = confirm("Yes or no");
				if (!check) {
					quest.getSelectedChoices().forEach((ch) => {
						quest.setChoiceValue(ch, false);
					});
				}
			}, 100);
		};
	});
	setTimeout(() => {
		all_inputs.forEach((ip) => {
			ip.oninput = function (e) {};
		});
		// Change this to the delay in ms
	}, 6000);
});
