// This is JS to allow participants to deselect their choices on the single answer type questions
// Courtesy mattyb513 Ref: https://www.qualtrics.com/community/discussion/1387/deselecting-a-radio-button

// You'll need to first create a Deselect Button. 


// This for a single question. For Matrix type, find below

// Add this to your Question Text. For styling. you can skip this if you want
// If you just want a normal button with text, add some text at this location
//  <button id="Deselect1"> ADD TEXT HERE </button> 
<style> 
    #Deselect1 { 
        background-image: url("/Images/deselect_line.png");/* Add link to your image here */ 
        background-size: cover; 
        width: 254px; 
        height: 22px;
        border: none;} 
</style> 

<div>
    <b>Click on the button to deselect your choices.</b><button id="Deselect1"></button>
</div>


// Question JS

Qualtrics.SurveyEngine.addOnload(function () {
	var qid = this.questionId; //Get the Question Id
	// Get the choices. This is needed as sometimes Qualtrics just goes crazy with choice numbers
	all_choices = Qualtrics.SurveyEngine.registry[qid].getChoices();

	jQuery("#Deselect1").click(function () {
		all_choices.forEach((item) => {
			Qualtrics.SurveyEngine.registry[qid].setChoiceValue(item,false);
			});
	});
});




// For Matrices

Qualtrics.SurveyEngine.addOnload(function(){
    qid = this.questionId;
    scale_points = Object.keys(Qualtrics.SurveyEngine.QuestionInfo[qid].Answers).length;

    // Get the location of the Deselect Button
    choices = Qualtrics.SurveyEngine.QuestionInfo[qid].Choices;
    deselect_position=[];
    Object.keys(choices).forEach((item)=>{
        if(choices[item].Text.includes("Deselect1")) deselect_position.push(item);
    });
    deselect_position = parseInt(deselect_position);

    // Clear the choices
    jQuery("#Deselect1").click(function () {
        for(i=1;i<=scale_points;i++){
            console.log(i);
            console.log(deselect_position);
            Qualtrics.SurveyEngine.registry[qid].setChoiceValue(deselect_position,i,false);
        }
    });
});