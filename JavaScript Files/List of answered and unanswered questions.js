Qualtrics.SurveyEngine.addOnReady(function () {
	document.querySelector("#NextButton").onclick = function () {
		let page_ans = [],
			page_uans = [];
		document.querySelectorAll("div[id^=QID][class*=QID]").forEach((question) => {
			let chosen = question.querySelectorAll(".q-checked");
			if (chosen.length == 0) {
				page_uans.push(question.id);
			} else if (chosen.length > 0) {
				page_ans.push(question.id);
			}
		});
		let old_ans = String(Qualtrics.SurveyEngine.getEmbeddedData("answered"))
			.split(",")
			.filter((el, ind, ar) => {
				if (ar.indexOf(el) != ind || el == "null") return false;
				else return el;
			});
		let old_uans = String(Qualtrics.SurveyEngine.getEmbeddedData("unanswered"))
			.split(",")
			.filter((el, ind, ar) => {
				if (ar.indexOf(el) != ind || el == "null") return false;
				else return el;
			});

		page_ans.forEach((item) => old_ans.push(item));
		page_uans.forEach((item) => old_uans.push(item));

		old_uans = old_uans
			.filter((a) => {
				if (old_ans.indexOf(a) > -1) return false;
				else return a;
			})
			.filter((el, ind, ar) => {
				if (ar.indexOf(el) != ind || el == "null") return false;
				else return el;
			});
		old_ans = old_ans.filter((el, ind, ar) => {
			if (ar.indexOf(el) != ind || el == "null") return false;
			else return el;
		});

		Qualtrics.SurveyEngine.setEmbeddedData("unanswered", old_uans.join());
		Qualtrics.SurveyEngine.setEmbeddedData("answered", old_ans.join());
	};
});
