# Clear-Text-Entry-Box

Qualtrics.SurveyEngine.addOnReady\(function\(\){

```text
const qid = this.questionId;
n_choices = Qualtrics.SurveyEngine.registry[qid].getChoices().length;
// Set this according to where you are placing your text entry box
//This refers to the last choice, -1 to the second last choice etc....
text_choice = n_choices;

this.questionclick = function(event,element){
    var selected_choice = element.id.split('~')[2];
    if(selected_choice !=text_choice)
    {
        document.querySelector("#QR\\~" + qid + "\\~" + text_choice + "\\~TEXT").value = "";
    }
}
```

}\);

