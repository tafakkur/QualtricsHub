let my_interval;
Qualtrics.SurveyEngine.addOnReady(function(){
    let attempt = 1;
    document.querySelector("#NextButton").onclick = function() {
        my_interval = setInterval(() => {
            err_msg = document.querySelector("#ErrorMessage");
            if (err_msg != null) {
                console.log("done");
                solver();
                clearInterval(my_interval);
            }
        }, 10);
        
    };
    that =  this;
    var n = jQuery("#"+this.questionId+" .ChoiceRow").length;
    function solver (){
        attempt++;
          for(var i=0;i<n;i++){
              if(jQuery("#"+that.questionId+" .ChoiceRow:eq("+i+") td input[type='radio']:checked").length==0){
                  jQuery("#"+that.questionId+" .ChoiceRow:eq("+i+")").css("background","lightpink");
              }
          } 
      }
      this.questionclick = function(){
      if(attempt>1){
            console.log("test");
        for(var i=0;i<n;i++){
            if(jQuery("#"+that.questionId+" .ChoiceRow:eq("+i+") td input[type='radio']:checked").length!=0){
                jQuery("#"+that.questionId+" .ChoiceRow:eq("+i+")").css("background","");
            }
        }

      }
    }
});

Qualtrics.SurveyEngine.addOnUnload(function() {
    clearInterval(my_interval);
});