
Qualtrics.SurveyEngine.addOnload(function()
{
    base_element = document.querySelector(".SkinInner")
    base_element.insertAdjacentHTML('afterbegin', '<div id="sticky_vid" style="position: sticky; top:0;" align="middle">');
    new_element = document.querySelector("#sticky_vid")
    new_element.innerHTML = `<iframe width="560" height="315" style="position: relative" src="https://www.youtube.com/embed/2V2MAOGVh0Y" frameborder="0"></iframe>`
    
    base_element.style.zIndex = 1;
    new_element.style.zIndex = 10;

});
