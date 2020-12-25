# Highlight-unanswered-questions-Request-Response

let my\_interval; Qualtrics.SurveyEngine.addOnReady\(function\(\){ let attempt = 1; document.querySelector\("\#NextButton"\).onclick = function\(\) { my\_interval = setInterval\(\(\) =&gt; { err\_msg = document.querySelector\("\#ErrorMessage"\); if \(err\_msg != null\) { console.log\("done"\); solver\(\); clearInterval\(my\_interval\); } }, 10\);

```text
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
```

}\);

Qualtrics.SurveyEngine.addOnUnload\(function\(\) { clearInterval\(my\_interval\); }\);

