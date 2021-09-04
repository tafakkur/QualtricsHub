//Other Box Validation -->
Qualtrics.SurveyEngine.addOnReady(function () {
	function check_box_and_text() {
		setTimeout(() => {
			ip_choices.forEach((box) => {
				let sel = box.querySelector(".q-checked"),
					val = box.querySelector(".InputText").value.trim();
				if (sel !== null && val !== "") {
					box.querySelector(".InputText").placeholder = "Please enter a value";
					nb.disabled = false;
				} else if (sel !== null && val === "") {
					box.querySelector(".InputText").placeholder = "Please enter a value";
					nb.disabled = true;
				} else if (sel === null && val !== "") {
					box.querySelector(".InputText").placeholder = "";
					nb.disabled = true;
					box.querySelector(".InputText").value = "";
				} else if (sel === null && val === "") {
					box.querySelector(".InputText").placeholder = "";
					nb.disabled = false;
				}
			});
		}, 200);
	}
	let ip_box = document.querySelectorAll(".InputText"),
		ip_choices = [],
		nb = document.querySelector("#NextButton");

	if (ip_box.length > 0) {
		ip_box.forEach((box) => {
			let is_valid = box.parentElement.parentElement.querySelector(".q-checkbox, .q-radio");
			if (is_valid) ip_choices.push(is_valid.parentElement);
		});

		let all_options = document.querySelectorAll(".q-checkbox, .q-radio");

		all_options.forEach((opt) => {
			opt.parentElement.onclick = check_box_and_text;
		});

		ip_box.forEach((box) => (box.oninput = check_box_and_text));
	}
});
