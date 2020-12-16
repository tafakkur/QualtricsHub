Qualtrics.SurveyEngine.addOnReady(function(){
    const qid = this.questionId;
    tot_choices = Qualtrics.SurveyEngine.registry[qid].getChoices().length;
    var sel_choices = 0;
    
    that = this;
    this.questionclick = function(){
        sel_choices = that.getSelectedChoices().length;
    }
    
    document.querySelector("#NextButton").onmousedown = function() {check_answers();};


    function check_answers(){
        if (sel_choices == tot_choices){that.clickNextButton();}
        else{
            //Selecting Okay will result in continuing
            if (confirm("Custom message here") == true) {
                that.clickNextButton();
            } 
        }
}
});