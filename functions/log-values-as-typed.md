# log-values-as-typed

// Log values as they are typed

document.getElementById\("submit"\).onclick = function\(\) {userInput\(\)}; arr = \[\]; function userInput\(\) { var input = document.getElementById\("userInput"\).value; arr.push\(input\); //seEmbeddedData doesn't need QuestionData //The name of the Embedded Data variable needs to be passed as a string //In you case, it was trying to parse the value of url\_list, which was undefined Qualtrics.SurveyEngine.setEmbeddedData\("url\_list", arr\); }

