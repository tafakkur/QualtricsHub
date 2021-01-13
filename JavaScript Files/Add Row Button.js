Qualtrics.SurveyEngine.addOnReady(function () {
	show_row = 3;
	choice_rows = this.getChoiceContainer().querySelectorAll("[class*='Choice']");
	choice_rows[choice_rows.length - 1].insertAdjacentHTML(
		"afterend",
		"<input type='button' id='row_adder' value='+' name='+' />"
	);
	for (i = show_row; i < choice_rows.length; i++) {
		choice_rows[i].hide();
	}
	add_row = this.getChoiceContainer().querySelector("#row_adder");
	add_row.onclick = new_row;

	function new_row() {
		if (show_row < choice_rows.length) {
			choice_rows[show_row].show();
			show_row++;
        }
        else{
            alert("You've reached the maximum number of permissible rows");
        }
	}
});