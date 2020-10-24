// This is a script that I used to simulate an error in contacting an external website.
// The page had three questions:
//      1. Text: Shows text asking the respondents to wait for the website to load
//      2. Text: HTML iframe to create a box within which to show the website. 
//      3. Single Choice: Asks them what to when it fails.

// This is the flow:
//     1. Hide Q2 and Q3 on the page. Just show text asking people to wait. 
//     2. After a pre-defined time, hide Q1.
//     3. Wait just a short while (around 500 ms) and show Q2 and Q3. This ensures that the error message replaces the text and it doesn't have to move up.
//     4. Below the error (Q2), Q3 is displayed, which asks them to choose.
//     5. If they choose option 1 (which ideally they shouldn't in this case). The next button shows up, and the question text is changed.
//     6. If they choose option 2, the question text changes, giving them an option to re-consider. 
//     7. If they choose option 3, they are automatically redirected to the next page. 


// Question 1 Code:
Qualtrics.SurveyEngine.addOnload(function()
{
    this.hideNextButton();
	

});

Qualtrics.SurveyEngine.addOnReady(function()
{
    this.hideNextButton();
	var delayTime = 5000 //This is the time of delay
    var that = this;
    setTimeout(function(){that.getQuestionContainer().hide()}, delayTime); // Hide it after a while 

});


// Question 2 Code:
Qualtrics.SurveyEngine.addOnload(function()
{
	
	this.getQuestionContainer().hide(); // Hide at the begining.
	this.hideNextButton();
	
});

Qualtrics.SurveyEngine.addOnReady(function()
{
    
	var delayTime = 6000 //This is the time of delay (notice the difference of 1000ms)
    var that = this;
    setTimeout(function(){that.getQuestionContainer().show()}, delayTime);
	
});

// Question 3 Code:

Qualtrics.SurveyEngine.addOnload(function()
{
    
    this.questionclick = function(event,element){
    //for a single answer multiple choice question, the element type will be radio
    if (element.type == 'radio')
    {
        var choiceNum = element.id.split('~')[2];
		if (choiceNum == 1) {
			this.showNextButton(); // Shows the next Button
			this.hideChoices(); // Hides the choices
			jQuery("#"+this.questionId+" .QuestionText").html("Please continue and click next when you are done."); // Changes the question
		
		} else if (choiceNum == 2) {
			this.showNextButton();
			//this.hideChoices(); Commented out as I want them to reconsider
			jQuery("#"+this.questionId+" .QuestionText").html("Please click next to exit the website evaluation module, or select the other choice if you would like to");
		} else {
			this.clickNextButton(); //Auto click the next button
			this.hideChoices();
			jQuery("#"+this.questionId+" .QuestionText").html("Looking for alternate methods....");
		};
    };
}
	
	this.getQuestionContainer().hide();
	this.hideNextButton();

});

Qualtrics.SurveyEngine.addOnReady(function()
{
    
	var delayTime = 6000 //This is the time of delay
    var that = this;
    setTimeout(function(){that.getQuestionContainer().show()}, delayTime);
	

});