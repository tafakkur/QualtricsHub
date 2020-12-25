# Hide-Question-for-a--short-while

// Hides the Question and Choices for pre-defined amount of time and then displays it.

Qualtrics.SurveyEngine.addOnload\(function\(\) { this.getQuestionContainer\(\).hide\(\); // Hide the question as soon as the page loads

}\);

Qualtrics.SurveyEngine.addOnReady\(function\(\) {

```text
var delayTime = 6000 //This is the time of delay
var that = this;
setTimeout(function(){that.getQuestionContainer().show()}, delayTime); // Function to show the question
```

}\);

