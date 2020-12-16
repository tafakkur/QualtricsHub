Qualtrics.SurveyEngine.addOnReady(function()
{
    choice_table = this.getChoiceContainer();
    //Numbering starts from 0. So the header is the 0th row, the first statement row 1 etc. 
    //This will create an empty row above statement 4. YOu can change it accordingly. 
    new_row = choice_table.insertRow(4);
    
    //rows[0] refersto the header. 
    // So this takes the header row fills up the empty row just created. 
	new_row.innerHTML = choice_table.rows[0].innerHTML;

});