# Add Social Media Link in the Survey

This code allows you to add a hyperlink to an image in a Qualtrics survey.
My primary use case has been to create sharing buttons for social media platforms at the end of the survey.
<br><br>
[*Link to Working Demo*](https://iima.au1.qualtrics.com/jfe/form/SV_aaWPtD2N7WEQIXr) 
<br><br>
*Screenshot*:

<kbd>     
    <img src="../screenshots/share-on-social-media.png" title="Share Survey on Social Media" alt="Share Survey on Social Media" style="width:50%; border: 2px solid"/> 
</kbd>
<br><br>

*Question Text*:<br>

Create a Descriptive Text Question with just some guiding text like: 
<pre style="color:grey">	Please click on the links below to share this survey on social media</pre>

<br>

*Question Javascript:*

```
Qualtrics.SurveyEngine.addOnReady(function () { 
	qid = "#" + this.questionId;
	survey_link = encodeURI("${e://Field/Q_URL}");

    wa_link = "https://api.whatsapp.com/send?text=survey_link";
    rd_link = "https://www.reddit.com/submit?title=Awesome&newwindow=1&selftext=true&text=My awesome survey %0A Survey Link: survey_link";

    wa_link = wa_link.replace("survey_link",survey_link);
    rd_link = rd_link.replace("survey_link",survey_link);
    
    rd_image = "https://raw.githubusercontent.com/tafakkur/use-files/main/reddit.png";
    wa_image = "https://raw.githubusercontent.com/tafakkur/use-files/main/whatsapp.png";
    
    wa = "<a href=\'" + wa_link + "\' target='_blank'><img src=\'" + wa_image + "\' ><br><br></a>";
    rd = "<a href=\'" + rd_link + "\' target='_blank'><img src=\'" + rd_image + "\' ><br><br></a>";
    
    
	document.querySelector(qid).insertAdjacentHTML('beforeend',wa);
	document.querySelector(qid).insertAdjacentHTML('beforeend',rd);
});
```
<br><br>

**For End of Survey:**
```
<script>
    survey_link = encodeURI("${e://Field/Q_URL}");

    wa_link = "https://api.whatsapp.com/send?text=survey_link";
    rd_link = "https://www.reddit.com/submit?title=Awesome&newwindow=1&selftext=true&text=My awesome survey %0A Survey Link: survey_link";

    wa_link = wa_link.replace("survey_link",survey_link);
    rd_link = rd_link.replace("survey_link",survey_link);
    
    rd_image = "https://raw.githubusercontent.com/tafakkur/use-files/main/reddit.png";
    wa_image = "https://raw.githubusercontent.com/tafakkur/use-files/main/whatsapp.png";
    
    wa = "<a href=\'" + wa_link + "\' target='_blank'><img src=\'" + wa_image + "\' ><br><br></a>";
    rd = "<a href=\'" + rd_link + "\' target='_blank'><img src=\'" + rd_image + "\' ><br><br></a>";
    
    
    document.querySelector("#EndOfSurvey").insertAdjacentHTML('beforeend',wa);
    document.querySelector("#EndOfSurvey").insertAdjacentHTML('beforeend',rd);
</script>
    
Thank you for taking the survey. Please click the links below to share it on social media:<br><br>

```

<br><br><br>

**Notes:**

- The script below and the demo just take you to the social media site. To enable one-click sharing, you'll need to create *sharing* links. There are various sites you can use to create them.
- BOTH attributes need to added:
	- *href* refers to the URL where you want the participants to go
	- *target : _blank* opens the link a new window. If you don't add this, the link opens in the same window and Qualtrics doesn't allow social media sites to load.