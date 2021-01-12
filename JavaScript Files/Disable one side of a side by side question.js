Qualtrics.SurveyEngine.addOnReady(function () {
	choices = document.querySelectorAll(".Choice");

	this.questionclick = function (event, el) {
		c_el = el.id.split("#")[1].split("~");
		if (c_el[0] == 1) {
			if (c_el[2] == 2) {
				d_el = choices[c_el[1] - 1].querySelectorAll(".SBS2");
				for (i = 0; i < d_el.length; i++) {
					d_el[i].children[0].disable();
					d_el[i].children[1].style.background = "lightgrey";
					d_el[i].children[1].style.borderColor = "lightgrey";
					d_el[i].children[1].style.opacity = "25%";
				}
			} else if (c_el[2] == 1) {
				d_el = choices[c_el[1] - 1].querySelectorAll(".SBS2");
				for (i = 0; i < d_el.length; i++) {
					d_el[i].children[0].enable();
					d_el[i].children[1].style.background = "";
					d_el[i].children[1].style.borderColor = "";
					d_el[i].children[1].style.opacity = "";
				}
			}
		}
	};
});
