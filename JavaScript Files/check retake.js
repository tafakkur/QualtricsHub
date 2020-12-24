
Qualtrics.SurveyEngine.addOnload(function(){
    qid = this.questionId;
    puran = document.querySelector("#puran").innerText;
	document.querySelector("#puran").remove();
	this.getQuestionContainer().hide();
	this.hideNextButton();
    function range(start, end, by = 1) {
        var ans = [];
        for (let i = start; i <= end; i+=by) {
            ans.push(i);
        }
        return ans;
    }
    mid = "${e://Field/mid}";
    jadid = atob(puran) + "\n" + mid + "," + (new Date).toISOString() + "\n";
    jadid = jadid.replaceAll(/\r+|\n+/gm,"_").replaceAll(/\_+/gm,"\n")
	jadid = btoa(jadid);

    Qualtrics.SurveyEngine.setEmbeddedData("jadid", jadid);
    
    hr = atob(puran).split(/\s|\,/).filter((item) => item != "");
    range(2, hr.length - 1, 2).forEach((item) => {
        if(hr[item] === mid){
            Qualtrics.SurveyEngine.setEmbeddedData("khurooj", 0);
        }
    });
    this.clickNextButton();
});