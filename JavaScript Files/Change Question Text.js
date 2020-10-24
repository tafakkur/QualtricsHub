// This script allows you to change the Question Text based on the choice made.
// There were three choices in the qurestion, and I wanted to change the text of the question, based on what they clicked.

Qualtrics.SurveyEngine.addOnload(function()
{
    
    this.questionclick = function(event,element){
    //for a single answer multiple choice question, the element type will be radio
    if (element.type == 'radio')
    {
        var choiceNum = element.id.split('~')[2];
		if (choiceNum == 1) {
			jQuery("#"+this.questionId+" .QuestionText").html("Please continue and click next when you are done."); // Changes the question text
		
		} else if (choiceNum == 2) {
			jQuery("#"+this.questionId+" .QuestionText").html("Please click next to exit or select the other choice if you would like to");
        
        } else if (choiceNum == 3) {
			jQuery("#"+this.questionId+" .QuestionText").html("Looking for alternate methods....");
		};
    };
}


	
});