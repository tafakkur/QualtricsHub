Qualtrics.SurveyEngine.addOnload(function()
{
    //Create a placeholder to display the reminder message
    char_rem = document.createElement("p");
    char_rem.setAttribute("id", "char_reminder");
    char_rem.setAttribute("style", "color:LightGray;");
	this.getChoiceContainer().parentNode.appendChild(char_rem);

});

Qualtrics.SurveyEngine.addOnReady(function()
{
	const qid = this.questionId;
	document.querySelector("#QR\\~" + qid).oninput = function () {limited();};
	
	function limited(){
		curr_len = document.querySelector("#QR\\~" + qid).value.length; 
        
        //Set the max_len as an embedded data field equal to maximum length in validation options 
        max_len = "${e://Field/max_len}";
        //Nothing will be displayed if the characters are less than 10
        //If you want to always have the reminder, then delete the statement below and remove the if condition
        reminder = "";
		if(curr_len>10){
			rem_len = max_len - curr_len;
			reminder = rem_len + "/20 characters remaining";
		}
		document.querySelector("#char_reminder").innerText = reminder;
	}
	
});