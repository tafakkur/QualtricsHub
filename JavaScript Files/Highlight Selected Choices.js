Qualtrics.SurveyEngine.addOnReady(function () {

    const qid = this.questionId;
    const all_choices = Qualtrics.SurveyEngine.registry[qid].getChoices();
    const base_colours = [
        "rgba(238, 50, 70, 0.3)",
        "rgba(245, 150, 30, 0.3)",
        "rgba(255, 203, 8, 0.3)",
        "rgba(178, 210, 53, 0.3",
        "rgba(0, 165, 81, 0.3)",
    ];

    // Sets the desired colours initially
    all_choices.forEach((item,index) => {
        document.querySelector("#" + qid + "-" + item + "-label").style.background = base_colours[index];
        document.querySelector("#" + qid + "-" + item + "-label").style.color = "#525252";
        });


    // Check if anyone clicks on the question
    this.questionclick = function(){
            // Get the currently selected choices
            var selected_choices = this.getSelectedChoices();
            
            // Restore all the colours to their original state
            // This is done, so that the options appear the same in case someone unselects a choice 
            all_choices.forEach((item,index) => {
                document.querySelector("#" + qid + "-" + item + "-label").style.background = base_colours[index];
                document.querySelector("#" + qid + "-" + item + "-label").style.color = "#525252";
            });

            // Give a different colour to the selected choices
            // background is for the Box and color is for the text
            // Change as desired
            selected_choices.forEach((item) => {
                document.querySelector("#" + qid + "-" + item + "-label").style.background = "DarkBlue";
                document.querySelector("#" + qid + "-" + item + "-label").style.color = "Yellow";
            });    
    }
});