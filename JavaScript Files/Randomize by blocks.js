Qualtrics.SurveyEngine.addOnReady(function () {
	x = document.querySelectorAll(".QuestionOuter");
	vids = [];
	for (i = 0; i < x.length; i++) {
		vids.push(x[i].classList[3]);
	}

	// Sort them and split them into blocks
	vids = vids.sort();
	block_a = vids.slice(0, 5);
    block_b = vids.slice(5);

	// Generate three unequal random numbers for Block A
	ra1 = Math.floor(Math.random() * 5);
	do {
		ra2 = Math.floor(Math.random() * 5);
	} while (ra2 == ra1);
	do {
		ra3 = Math.floor(Math.random() * 5);
	} while (ra3 == ra1 || ra3 == ra2);

    hide_a = [ra1, ra2, ra3];
    
	// Generate three unequal random numbers for Block B
	rb1 = Math.floor(Math.random() * 5);
	do {
        rb2 = Math.floor(Math.random() * 5);
	} while (rb2 == rb1);
	do {
        rb3 = Math.floor(Math.random() * 5);
	} while (rb3 == rb1 || rb3 == rb2);
    
	hide_b = [rb1, rb2, rb3];

	// Hide the selected questions
	hide_a.forEach((item) => {
        document.querySelector("#"+block_a[item]).hide();
	});

	hide_b.forEach((item) => {
        document.querySelector("#"+block_b[item]).hide();
	});
});