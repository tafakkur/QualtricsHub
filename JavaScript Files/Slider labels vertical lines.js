Qualtrics.SurveyEngine.addOnload(function () {
	var ques_cont = this.getQuestionContainer();
	var my_lines = [];
	var lbc = ques_cont
		.querySelector(".labels-container")
		.querySelector(".labels");
	var all_labs = lbc.innerText.split(/\t/gm);
	var slc = ques_cont.querySelector(".slider-container");

	function draw_lines() {
		my_lines.forEach((item) => {
			if (document.getElementById(item.id)) {
				document.getElementById(item.id).remove();
			}
		});
		my_lines = [];

		line_ht = slc.getBoundingClientRect()["height"] / 2 + "px";
		line_top = lbc.getBoundingClientRect()["bottom"] + "px";

		for (var i = 0; i < all_labs.length; i++) {
			var id = "line_" + (i + 1);

			var div_html =
				'<div id="' +
				id +
				'" style="width: 2px; background: grey; position: fixed; z-index: -1;"></div>';

			lbc.insertAdjacentHTML("afterbegin", div_html);
			var this_line = ques_cont.querySelector("#" + id);
			this_line.style.height = line_ht;
			this_line.style.top = line_top;

			my_lines.push(this_line);
		}

		for (var i = 0; i < my_lines.length; i++) {
			var el = lbc.querySelectorAll("li")[i];
			if (el.hasClassName("first")) {
				my_lines[i].style.left =
					el.getBoundingClientRect().left + 3 + "px";
			} else if (el.hasClassName("last")) {
				my_lines[i].style.left =
					el.getBoundingClientRect().right - 3 + "px";
			} else {
				var av = el.getBoundingClientRect();
				av = av.left + av.width / 2;
				my_lines[i].style.left = av + "px";
			}
		}
    }
    draw_lines();
    window.onresize = draw_lines;
});