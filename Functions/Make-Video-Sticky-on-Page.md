# Sticky Video
This function allows you to make a video/image/text sticky on the page, so that it displays at all times, even when the participants scroll down.
The demo function below is for adding a YouTube video using an iframe, but `innerHTML` can be modified to anything.
<br><br>
[*Link to Working Demo*](https://iima.au1.qualtrics.com/jfe/preview/SV_2rCRZYIQqNq0nzv/BL_ba2DyuPGT8DLF6B?Q_SurveyVersionID=current) 
<br><br>
*Screenshot*:

<img src="../screenshots/sticky_video.png" title="matrix-with-header-row-at-custom-location" alt="matrix-with-header-row-at-custom-location" style="width:50%;display: block; border: 2px solid"/>

<br><br>

*Question Javascript:*

```
Qualtrics.SurveyEngine.addOnload(function()
{
    base_element = document.querySelector(".SkinInner")
    base_element.insertAdjacentHTML('afterbegin', '<div id="sticky_vid" style="position: sticky; top:0;" align="middle">');
    new_element = document.querySelector("#sticky_vid")
    // Change the text below to add the element of your choice
    new_element.innerHTML = `<iframe width="560" height="315" style="position: relative" src="https://www.youtube.com/embed/Y0XbC_ZTl3M" frameborder="0"></iframe>`
    
    // This is important, otherwise, the element you add will be at the back
    base_element.style.zIndex = 1;
    new_element.style.zIndex = 10;

});
```