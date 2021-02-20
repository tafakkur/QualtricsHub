Qualtrics.SurveyEngine.addOnload(function () {
	this.hideNextButton();
	Qualtrics.SurveyEngine.setEmbeddedData("First", "Empathy");

	var vidlen = 120;
	var maxlen = vidlen * 4;
	time_off = 0;
	var that = this;

	document.addEventListener("fullscreenchange", function () {
		if (document.fullscreenElement != null) {
			Qualtrics.SurveyEngine.setEmbeddedData("full_screen", "TRUE");
		}
	});

	document.addEventListener("visibilitychange", function () {
		if (document.visibilityState != "visible") {
			Qualtrics.SurveyEngine.setEmbeddedData("tab_changed", "TRUE");
			off_screen = setInterval(() => {
				time_off++;
				Qualtrics.SurveyEngine.setEmbeddedData("time_off", time_off);
			}, 100);
		} else {
			clearInterval(off_screen);
		}
	});

	(function () {
		that.showNextButton();
	}.delay(vidlen));
	(function () {
		Qualtrics.SurveyEngine.setEmbeddedData("too_much_time", "TRUE");
		that.clickNextButton();
	}.delay(maxlen));
});
