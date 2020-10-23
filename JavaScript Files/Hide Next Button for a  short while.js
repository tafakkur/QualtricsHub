// Hides the Next Button for pre-defined amount of time and then displays it.

Qualtrics.SurveyEngine.addOnload(function()
{
    
    this.hideNextButton(); //Hide the question as soon as the page loads

});

Qualtrics.SurveyEngine.addOnReady(function()
{
    
	var delayTime = 6000 //This is the time of delay
    var that = this;
    setTimeout(function(){that.showNextButton();}, delayTime); // Function to show the next button
	

});