// This is JS to allow participants to deselect their choices on the single answer type questions
// Courtesy mattyb513 Ref: https://www.qualtrics.com/community/discussion/1387/deselecting-a-radio-button
// Working Demo: https://iima.au1.qualtrics.com/jfe/form/SV_3mJczLmUFE9c7L7


// You'll need to first create a Deselect Button. 
// If you have multiple such buttons on the same page, you'll need to change their ids



// This for a single question. For Matrix type, find below

<div>
    <b>Click on the button to deselect your choices.</b><button id="Deselect1">Deselect Choices</button>
</div>



// Question JS
Qualtrics.SurveyEngine.addOnReady(function () {
	var qid_mchoice = this.questionId; //Get the Question Id
	// Get the choices. This is needed as sometimes Qualtrics just goes crazy with choice numbers
	all_choices = Qualtrics.SurveyEngine.registry[qid_mchoice].getChoices();

	jQuery("#Deselect1").click(function () {
		all_choices.forEach((item) => {
			Qualtrics.SurveyEngine.registry[qid_mchoice].setChoiceValue(item,false);
			});
	});
});




// For Matrices
// Add the button above as one of the statements
Qualtrics.SurveyEngine.addOnReady(function(){
    qid_matrix = this.questionId;
    scale_points = Object.keys(Qualtrics.SurveyEngine.QuestionInfo[qid_matrix].Answers).length;

    // Get the location of the Deselect Button
    choices = Qualtrics.SurveyEngine.QuestionInfo[qid_matrix].Choices;
    deselect_position=[];
    Object.keys(choices).forEach((item)=>{
        if(choices[item].Text.includes("Deselect1")) deselect_position.push(item);
    });
    deselect_position = parseInt(deselect_position);

    // Clear the choices
    jQuery("#Deselect1").click(function () {
        for(i=1;i<=scale_points;i++){
            Qualtrics.SurveyEngine.registry[qid_matrix].setChoiceValue(deselect_position,i,false);
        }
    });
});