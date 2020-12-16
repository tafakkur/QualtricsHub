// This script is a demo of adding/modifying Embedded Data variables based on events on the page.

// The script shown below allows you to add/modify Embedded Data variables as soon as the choices are submitted.

// This allows more flexibility than the "Set Embedded Data" option in the "Survey Flow" section, as that works at block level, while this one works at Page level. 

// By modifying it a bit and adding it to the addOnReady() or  addOnLoad() section, you can even recorded choices that were selected and then unselected.

Qualtrics.SurveyEngine.addOnPageSubmit(function (type) { // To record the selection when the page is submitted
	if (type == "next") {
		var selChoice = this.getSelectedChoices(); // Get the selected choices
		var choiceRef = "";
		var choiceText = "";
		for (let i = 0; i < selChoice.length; i++) {  //Loop over all the choices selected in the question
			choiceRef = "#" + this.questionId + "-" + selChoice[i] + "-label > span"; // Create a reference for the choices 
            choiceText = document.querySelector(choiceRef).innerHTML; //Get the value (The actual text displayed)of the choices from the webpage
            
            // Set Embedded Data
            
			if (choiceText.includes("Share")) {
				Qualtrics.SurveyEngine.setEmbeddedData("Share", "TRUE");
            } else
                Qualtrics.SurveyEngine.setEmbeddedData("Share", "FALSE");

		}
	}
});
