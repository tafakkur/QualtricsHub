Qualtrics.SurveyEngine.addOnReady(function () {
	let w_loc = window.location.pathname.split("/");
	let quest = this;
	let mario = document.querySelector("#mario_button");
	let buttons = quest.questionContainer.querySelectorAll(".q-checkbox");
	if (w_loc.indexOf("SV_8HBDY4VRJnFn40J") > -1) {
		mario.onclick = function () {
			mario.toggleClassName("active");
			mario.toggleClassName("glow");
			if (mario.hasClassName("active")) {
                mario.innerText = "Fast Select Mode Active";
                quest.questionContainer.style.border = "7px solid red";
				buttons.forEach((but) => {
                    but.parentElement.onmouseover = function () {
                        this.querySelector("input").click();
					};
				});
			} else {
                mario.innerText = "Activate Fast Select Mode";
                quest.questionContainer.style.border = "none";
				buttons.forEach((but) => {
					but.parentElement.onmouseover = function () {};
				});
			}
		};
	}
});
