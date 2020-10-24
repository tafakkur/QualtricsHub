// Remove the "Powered By Qualtrics" thingy. 
// It is available at multiple places, but since their script runs at addOnLoad, it fails.
// This runs at addOnReady and hence works.

<script>

Qualtrics.SurveyEngine.addOnReady(function()
{
        var plug = document.getElementById("Plug"); //Find "Powered By" on the page
        plug.style.cssText += ';display:none !important;'; //Set the defined element's display style to "none"

});

</script>