Qualtrics.SurveyEngine.addOnReady(function () {
	rows = this.getChoiceContainer().querySelectorAll("tr");

	input_boxes = [];
	display_boxes = [];
	for (i = 1; i < rows.length; i++) {
		bx = rows[i].querySelectorAll("input");
		for (j = 0; j < bx.length - 1; j++) {
			input_boxes.push(bx[j]);
		}
		display_boxes.push(bx[bx.length - 1]);
	}
	display_boxes.forEach((item) => {
		item.disable();
		item.style.width = "200px";
	});

	per_update = input_boxes.length / display_boxes.length;
	function update_value() {
		for (i = 0; i < display_boxes.length; i++) {
			tot = [];
			for (j = 0; j < per_update; j++) {
				m = i * per_update + j;
				t = input_boxes[m].value.split(":");
				timing = Number(t[0]) * 60 + Number(t[1]);
				tot.push(timing);
			}
			ot = (tot[1] - tot[0]) / 60;
			open_hrs = ot.floor();
			open_mins = ((ot - open_hrs) * 60).round();
			display_boxes[i].value =
                open_hrs + " Hours and " + open_mins + " Minutes";

			if (isNaN(open_hrs) || isNaN(open_mins)) {
				display_boxes[i].value = "";
			}
		}
	}

	input_boxes.forEach((item) => item.addEventListener("input", update_value));
});
