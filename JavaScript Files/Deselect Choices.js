// This is JS to allow participants to deselect their choices on the single answer type questions
// Courtesy mattyb513 Ref: https://www.qualtrics.com/community/discussion/1387/deselecting-a-radio-button

// You'll need to first create a Deselct Button. 


// Add this to your Question Text
<button id="Deselect1">Deselect All</button>

// Question JS

Qualtrics.SurveyEngine.addOnload(function() {
	var questionId = this.questionId;
	
	jQuery('#Deselect1').click(function() {
		for (var i = 1; i < 4; i++) {
             //You'll need to change 4 to the number of choices you have. Sometimes for me Qualtrics goes crazy with its choice numbering, so i keep it at a high number like 500.
			Qualtrics.SurveyEngine.registry[questionId].setChoiceValue(i, false);
		}
	});

});