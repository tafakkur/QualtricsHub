if (document.getElementById("EndOfSurvey")) { // In case you show a response summary at the end.
    throw 'Survey has ended!'
}
all_q = []; 
st_time = 0;
ques_seq = []; // This will keep track of the question sequence in case of randomization. You will find this as the embedded data
res_time = []; // This will the final response time variable. You will find this as the embedded data
q_tracker = 1; // Keep a track of which question has been displayed

// Getting the questions from page. 
document.querySelector("#Questions").childElements().forEach((item) => {
        if (!item.id.includes("Separator")) {
            all_q.push(item);
            ques_seq.push(item.id);
            item.hide();
            item.style.textAlign = "center";
        }
    });
    
// This is to hide all buttons. 
for (i = 1; i < all_q.length; i++) {
    all_q[i].querySelectorAll("label").forEach((item) => item.hide());
}

// Show the first question. Descriptive Text
all_q[0].show();

// Detect if the spacebar is being pressed
Event.observe(document, "keydown", init_questions);

function init_questions(e) {
    if (e.keyCode == 32) { // Spacebar was pressed
        
        // Change the Text to only show answer commands
        all_q[0].innerHTML =
            '<div class="InnerInner BorderColor">  <div class="QuestionText BorderColor"><div>Press <b>A</b> for "Yes" and <b>L</b> for "No".</div>';
            
        all_q[q_tracker].show(); // Display the first question
        st_time = Date.now(); // Get the time at which it was displayed
        Event.stopObserving(document, "keydown", init_questions); // Stop tracking the keyboard for the first question
        Event.observe(document, "keydown", next_question); // Start tracking the keyboard for other questions
    }
}


function next_question(e) {
    var choice_num = null;
    if (e.keyCode == 65) { // 'A' was pressed
        choice_num = 1; // Choose Yes
    } else if (e.keyCode == 76) { // 'L' was pressed
        choice_num = 2; // Choose No
    }
    if (choice_num) {
        res_time.push(Date.now() - st_time); // Store the elapsed time in a variable
        all_q[q_tracker].querySelectorAll("input")[choice_num - 1].click(); // Select the appropriate choice
        all_q[q_tracker].hide(); // Hide the current question
        q_tracker += 1; // Increment the question tracker by 1
        if (q_tracker < all_q.length) { // If there are still questions left
            all_q[q_tracker].show(); // Show the next question
            st_time = Date.now(); // Update the display time
        } else if (q_tracker == all_q.length) { // If all questions are displayed
            Qualtrics.SurveyEngine.setEmbeddedData("response_array",res_time);
            Qualtrics.SurveyEngine.setEmbeddedData("question_seq",ques_seq);
            Event.stopObserving(document, "keydown", next_question); // Stop tracking the keyboard
            document.querySelector("#NextButton").click(); // Click the next button
        }
    }
}