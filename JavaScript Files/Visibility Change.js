//Check Visibility Change

Qualtrics.SurveyEngine.addOnReady(function () {
    time_off = 0;
    time_fs = 0;
	document.addEventListener("visibilitychange", function () {
		if (document.visibilityState != "visible") {
			Qualtrics.SurveyEngine.setEmbeddedData("tab_changed", "true");
			off_screen = setInterval(() => {
				time_off++;
				console.log(time_off);
			}, 100);
		}else{
				clearInterval(off_screen);
				console.log(time_off);
		}
	});
	document.addEventListener("fullscreenchange", function () {
		if (document.fullscreenElement !== null) {
			full_screen = setInterval(() => {
				time_fs++;
				console.log(time_fs);
			}, 100);
		} else {
            clearInterval(full_screen);
			console.log(time_fs);
			console.log("fs disabled");
		}
	});
	document.querySelector("#NextButton").onclick = function () {
        clearInterval(off_screen);
        clearInterval(full_screen);
		Qualtrics.SurveyEngine.setEmbeddedData("gone_for", time_off);
        Qualtrics.SurveyEngine.setEmbeddedData("full_screen", time_fs);
        console.log(time_fs);
        console.log(time_off);

	};
});