// This code allows you to add a hyperlink to an image in a Qualtrics survey.
// My primary use case has been to create sharing buttons for social media platforms at the end of the survey.

// ##### IMP ####
// You'll have to use a URL shortner, if Qualtrics detects a social media site, it won't allow the image to load.
// I've gotten it to work for ONLY Graphic Questions. Though they can be on the same page. If you find a way for other question types, please let me know.
// I've also not been able to get the mouse pointed to change. Qualtrics' system settings keep overriding any CSS I add.

// BOTH attributes need to added
// "href" refers to the URL where you want the participants to go
// "target : _blank" opens the link a new window. If you don't add this, the link opens in the same window and Qualtrics doesn't allow social media sites to load.

Qualtrics.SurveyEngine.addOnReady(function () { // Didn't work on Qualtrics.SurveyEngine.addOnload
	let QuestionId = "#" + this.questionId; // Get the Question ID
	jQuery(QuestionId).wrap(
		jQuery("<a>").attr({ 
			href: "your-url-goes-here", 
			target: "_blank", 
		})
	);
});
