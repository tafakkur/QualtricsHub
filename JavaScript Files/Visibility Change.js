//Check Visibility Change

Qualtrics.SurveyEngine.addOnload(function () {
    time_off = Number("${e://Field/time_off}");
    time_fs = Number("${e://Field/time_fs}");
	document.addEventListener("visibilitychange", function () {
		if (document.visibilityState != "visible") {
			Qualtrics.SurveyEngine.setEmbeddedData("tab_changed", "true");
			off_screen = setInterval(() => {
				time_off++;
			}, 100);
		}else{
				clearInterval(off_screen);
		}
	});

	document.addEventListener("fullscreenchange", function () {
		if (document.fullscreenElement !== null) {
			full_screen = setInterval(() => {
				time_fs++;
			}, 100);
		} else {
            clearInterval(full_screen);
		}
	});
	
	document.querySelector("#NextButton").onclick = function () {
        clearInterval(off_screen);
        clearInterval(full_screen);
		Qualtrics.SurveyEngine.setEmbeddedData("time_off", time_off);
        Qualtrics.SurveyEngine.setEmbeddedData("time_fs", time_fs);

	};
});