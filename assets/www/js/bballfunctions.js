var nscore;
  var draggedBballRemoval; 					

  window.setInterval (BlinkIt, 250);
  var color = "#ffffff";
  function BlinkIt () {
    var blink = document.getElementById ("blink");
    color = (color == "#0000FF")? "#ffff00" : "#0000FF";
    blink.style.color = color;    
  }
  
  function ballSelection(clicked_bball_id)
  {
  document.getElementById("drop_zone").innerHTML="";			//empties the dropzone when wrong answer i.e. only 1 ball ata time in the net
  
  draggedBballRemoval = document.getElementById(clicked_bball_id);  
  var dunk = document.getElementById("drop_zone");
  dunk.appendChild(document.getElementById(clicked_bball_id).cloneNode(true)).classList.add('wobble-vertical');     //the ball sent to the dropzone (net)
  dunk.style.opacity = '0.8';  
  				
  draggedBballRemoval.style.opacity = '0';   // remove bball   The best option - keeps the shape of the <td> tag. 
  
   // Find the object bball1 and only bball1 in the target drop_zone
    if($('#drop_zone').find('#bball1').size() == 1 && randomBall  == 1 && level == 1) //.length detects the number of elements currently matched. The .size() method will return the same value.
    {
     correctAnswer(level);      
    }
  
    /*if the object bball2 and only bball2 is in the target drop_zone draggedData equals 2 */
    else if($('#drop_zone').find('#bball2').size() == 1 && randomBall == 2 && level == 1) //.length detects the number of elements currently matched. The .size() method will return the same value.
    {  
    correctAnswer(level);   
    }
  
    else if($('#drop_zone').find('#bball3').size() == 1 && randomBall == 3 && level == 1) 
    { 
    correctAnswer(level);   
    }

    else if($('#drop_zone').find('#bball4').size() == 1 && randomBall == 4 && level == 1) 
    { 
     correctAnswer(level);   
    }
    
	/********************************** Normal ************************************************************/
	else if($('#drop_zone').find('#bball1').size() == 1 && randomBall  == 1 && level == 2)
    {
    correctAnswer(level);      
    }
  
    else if($('#drop_zone').find('#bball2').size() == 1 && randomBall == 2 && level == 2) 
    {  
    correctAnswer(level);   
    }
  
    else if($('#drop_zone').find('#bball3').size() == 1 && randomBall == 3 && level == 2) 
    {
    correctAnswer(level);   
    }

    else if($('#drop_zone').find('#bball4').size() == 1 && randomBall == 4 && level == 2) 
    { 
    correctAnswer(level);   
    }  
        
    /********************************** Difficult ************************************************************/
	else if($('#drop_zone').find('#bball1').size() == 1 && randomBall  == 1 && level == 3)
    {
    correctAnswer(level);      
    }
  
    else if($('#drop_zone').find('#bball2').size() == 1 && randomBall == 2 && level == 3) 
    {  
    correctAnswer(level);   
    }
  
    else if($('#drop_zone').find('#bball3').size() == 1 && randomBall == 3 && level == 3) 
    {
    correctAnswer(level);   
    }

    else if($('#drop_zone').find('#bball4').size() == 1 && randomBall == 4 && level == 3) 
    { 
    correctAnswer(level);   
    }  
    /*********************************************************************************************************/  
    
    else {    
    //document.getElementById("bball1").className = "shake";    
    document.getElementById("notification_panel").style.fontSize="large";     
    document.getElementById("notification_panel").innerHTML="Wrong Answer! <br> Try again";
    document.getElementById("notification_panel").style.color="yellow"; 
    document.getElementById("notification_panel").style.backgroundColor="transparent";     
    document.getElementById("notification_panel").style.textShadow="-1px 0 red, 0 1px red, 1px 0 red, 0 -1px red, 4px 4px 7px red";  // , [x-offset] [y-offset] [blur] [color]       
    }  
}
  
function correctAnswer(levelnumber) {												  
    document.getElementById("notification_panel").setAttribute("style", "color:#0000FF; font-size:36px; font-weight:bold;");
    document.getElementById("notification_panel").innerHTML="<span id='blink'>CORRECT</span>";    
                              						    						  
    setTimeout(function() {
     document.getElementById("notification_panel").innerHTML="";
     document.getElementById("drop_zone").innerHTML="";
     var rand=Math.floor((Math.random()*4)+1);  //rand will be a random between 1 and 4     
     
      if (rand === 1 && levelnumber===1) { addEasy(); additionFunction(); }                                            
      else if (rand === 2 && levelnumber===1) { subEasy(); subtractionFunction(); }
      else if (rand === 3 && levelnumber===1) { multiEasy(); multiplicationFunction(); }
      else if (rand === 4 && levelnumber===1) { divEasy(); divisionFunction(); }
    
      if (rand === 1 && levelnumber===2) { addNorm(); additionFunction(); }                                           
      else if (rand === 2 && levelnumber===2) { subNorm(); subtractionFunction(); }
      else if (rand === 3 && levelnumber===2) { multiNorm(); multiplicationFunction(); }
      else if (rand === 4 && levelnumber===2) { divNorm(); divisionFunction(); }
     
      if (rand === 1 && levelnumber===3) { addDiff(); additionFunction(); }                                           
      else if (rand === 2 && levelnumber===3) { subDiff(); subtractionFunction(); }
      else if (rand === 3 && levelnumber===3) { multiDiff(); multiplicationFunction(); }
      else if (rand === 4 && levelnumber===3) { divDiff(); divisionFunction(); }
    
     bball1.style.opacity = '1';
     bball2.style.opacity = '1';
     bball3.style.opacity = '1';
     bball4.style.opacity = '1'; 
     /******************************************/
    }, 800);  //end of setTimeout                                    
    updateScore();      
  }// end of correctAnswer function    
