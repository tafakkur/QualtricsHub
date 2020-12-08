Qualtrics.SurveyEngine.addOnload(function () {
	var time_calc;
});

Qualtrics.SurveyEngine.addOnReady(function () {
    
    //Get the remaning time
    var rem_time = "${e://Field/remaining_time}";
    rem_time = parseInt(rem_time);
	that = this;
	time_calc = setInterval(function () {
		rem_time = rem_time - 1;
        
        // Update the remaining time every second
        Qualtrics.SurveyEngine.setEmbeddedData("remaining_time", rem_time);

		if (rem_time <= 0) {
			clearInterval(time_calc);
            // This line will create and alert that time is up. Delete it or you may change its text as you please.
            alert("times up");

            // This will skip the other questions and go the end of the block
            // Ensure that you have display logic set up accordingly
            Qualtrics.SurveyEngine.setEmbeddedData("time_over", "TRUE");
            // Auto advance
            that.clickNextButton();
		}
	}, 1000);
});

Qualtrics.SurveyEngine.addOnUnload(function()
{
    clearInterval(time_calc);
});
