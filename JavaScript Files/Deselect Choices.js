// This is JS to allow participants to deselect their choices on the single answer type questions
// Courtesy mattyb513 Ref: https://www.qualtrics.com/community/discussion/1387/deselecting-a-radio-button

// You'll need to first create a Deselct Button. 


// Add this to your Question Text
<button id="Deselect1">Deselect All</button>

// Question JS

Qualtrics.SurveyEngine.addOnload(function () {
	var questionId = this.questionId; //Get the Question Id
	// Get the choices. This is needed as sometimes Qualtrics just goes crazy with choice numbers
	nChoices = Qualtrics.SurveyEngine.registry[questionId].getChoices();

	jQuery("#Deselect1").click(function () {
		nChoices.forEach((item) => {
			Qualtrics.SurveyEngine.registry[questionId].setChoiceValue(item,false);
			});
	});
});
