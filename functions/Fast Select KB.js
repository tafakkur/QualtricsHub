Qualtrics.SurveyEngine.addOnReady(function () {
	let w_loc = window.location.pathname.split("/");
	let quest = this;
	let fast_mode = false;
	let mario = document.querySelector("#mario_heading");
	if (w_loc.indexOf("SV_8HBDY4VRJnFn40J") > -1) {
		quest.questionContainer.querySelector("legend").insertAdjacentHTML(
			"beforeend",
			`
        <style>.Skin label.q-checkbox {
            border-radius: 50%;
            border: 2px solid green !important;
        }
        .Skin label.q-checkbox.q-checked,
        .Skin label.q-checkbox.q-checked.q-focused {
            border: 2px solid green !important;
            background: green !important;
        }
        .Skin .SBS .Answers th {
            color: transparent;
        }
        .Skin .SBSMatrix th {
            font-weight: 900;
            text-align: center;
        }
        .Skin .SBS thead th span {
            top: 2rem;
            position: relative;
        }
    </style>`
		);

		let buttons = quest.questionContainer.getElementsByClassName("q-checkbox");
		for (but of buttons) {
			but.parentElement.onmouseover = function () {
				if (fast_mode) {
					let chk = this.querySelector("label");
					if (!chk.hasClassName("q-checked")) {
						chk.click();
					}
				}
			};
		}

		function toggle_fast_mode() {
			mario.toggleClassName("active");
			mario.toggleClassName("glow");
			if (!fast_mode) {
				fast_mode = true;
				mario.innerText = "Fast Select Mode Active";
				quest.questionContainer.style.border = "7px solid red";
			} else {
				fast_mode = false;
				mario.innerText = "Hold Shift to Activate Fast Select";
				quest.questionContainer.style.border = "none";
			}
		}

		window.onkeydown = function check_key(e) {
			if (e.shiftKey) {
				toggle_fast_mode();
				window.onkeydown = function check_key(e) {};
			}
		};
		window.onkeyup = function up_key(e) {
			toggle_fast_mode();
			window.onkeydown = function check_key(e) {
				if (e.shiftKey) {
					toggle_fast_mode();
					window.onkeydown = function check_key(e) {};
				}
			};
		};
	}
});
