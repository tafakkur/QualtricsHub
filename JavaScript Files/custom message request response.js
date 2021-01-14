Qualtrics.SurveyEngine.addOnReady(function(){
    const qid = this.questionId;
    req_choices = 2;
    var sel_choices = 0;
    
    that = this;
    this.questionclick = function(){
        sel_choices = that.getSelectedChoices().length;
    }
    
    document.querySelector("#NextButton").onmousedown = function() {check_answers();};


    function check_answers(){
        if (sel_choices == req_choices){that.clickNextButton();}
        else{
            //Selecting Okay will result in continuing
            cnf = confirm("You must select ONLY 2 options, you have selected " + sel_choices +".\n Do you still want to continue?" )
            if (cnf) {
                that.clickNextButton();
            } 
        }
}
});