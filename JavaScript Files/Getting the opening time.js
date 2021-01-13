Qualtrics.SurveyEngine.addOnReady(function () {
	rows = this.getChoiceContainer().querySelectorAll("tr.ChoiceRow");
	summer = (sum, val) => sum + val;

	input_boxes = [];
	for (i = 0; i < rows.length; i++) {
		bx = rows[i].querySelectorAll("input");
		for (j = 0; j < bx.length; j++) {
			input_boxes.push(bx[j]);
		}
	}
    input_boxes.forEach((item) => item.addEventListener("input", get_hours));

    function get_hours() {
		open_for = [];
		for (i = 0; i < rows.length; i++) {
			tot = [];
			for (j = 0; j < 2; j++) {
				m = i * 2 + j;
				t = input_boxes[m].value.split(":");
				timing = Number(t[0]) * 60 + Number(t[1]);
				tot.push(timing);
			}
			open_for.push(tot[1] - tot[0]);
		}

		open_hours = (open_for.reduce(summer) / 60).floor();
        open_mins = open_for.reduce(summer) - (open_hours * 60) ;

        open_text = open_hours + " Hours";
        if(open_mins){
            open_text += " and " + open_mins + " minutes";
        }
        
        Qualtrics.SurveyEngine.setEmbeddedData("hours_open", open_text);
    }
});
