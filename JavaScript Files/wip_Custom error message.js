Qualtrics.SurveyEngine.addOnReady(function()
{
    //Create a placeholder to display the reminder message
    // ques_cover = document.createElement("div");
    // ques_cover.setAttribute("id", "ques_cover");
    // ques_cover.setAttribute("class", "overlay");
    var overlay = jQuery('<div id="overlay"> </div>');
    overlay.appendTo(this.getQuestionContainer());
    // ques_cover.appendTo(this.getQuestionContainer());
    // this.getQuestionContainer().appendChild(ques_cover);

    
    var ov_css = `#overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        filter:alpha(opacity=50);
        -moz-opacity:0.5;
        -khtml-opacity: 0.5;
        opacity: 0.5;
        z-index: 10000;
    }`

    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = ov_css;
    document.head.appendChild(styleSheet);

    setTimeout(() => {
        overlay.remove();
        
    }, 3000);
    that = this;
    setTimeout(() => {
        overlay = jQuery('<div id="overlay"> </div>');
        overlay.appendChild(that.getQuestionContainer());
        
    }, 3000);
    setTimeout(() => {
        overlay.remove();
        
    }, 3000);

});

let my_interval;
Qualtrics.SurveyEngine.addOnReady(function(){
    let elem = document.querySelector("#Page > div");  
    let observer = new MutationObserver(mutationRecords => {
        // console.log(mutationRecords); // console.log(the changes)

        my_interval = setInterval(() => {
                err_msg = document.querySelector("#ErrorMessage");
                if (err_msg != null) {
                    err_msg.innerText = "Custom Message";
                    console.log(err_msg.innerText);
                    clearInterval(my_interval);
                    my_interval = null;
                }
            }, 100);
    });


      
    observer.observe(elem, {
        childList: true, // observe direct children
        subtree: true, // and lower descendants too
        characterDataOldValue: true // pass old data to callback
      });

});

let my_interval;
Qualtrics.SurveyEngine.addOnReady(function(){

    document.querySelector("#NextButton").onclick = function() {
        my_interval = setInterval(() => {
            err_msg = document.querySelector("#ErrorMessage");
            if (err_msg != null) {
                err_msg.innerText = "Custom Message";
                clearInterval(my_interval);
            }
        }, 10);
        
    };
});

Qualtrics.SurveyEngine.addOnUnload(function() {
	clearInterval(my_interval);
});
