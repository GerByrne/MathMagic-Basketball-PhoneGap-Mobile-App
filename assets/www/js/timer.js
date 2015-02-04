count = 600;   
var t = null;
var timespan;
var currentScoreTop = 0;
var currentScoreStore = 0;
var storedEntries = [];
var highScoreList;
var gamescorelist;

function init(){ 
     timespan = document.getElementById('timespanId');     
     countDownDisplay();
     scoresListDisplay();
}

function countDownDisplay() {	                            
    if (count === 600) {																
     timespan.innerHTML = "";      
    }
    else {
     timespan.innerHTML = ~~(count/10)+" secs";   
    }  
}
   
function startTimer(){ 							
    if (t==null && count>0){     
     countdown();    
    }
}

function updateScore() {
    document.getElementById("inGameScoreTop").innerHTML="Score: " + (currentScoreTop+=10);
    document.getElementById("inGameScoreTable").innerHTML=(currentScoreStore+=10)+" Scored";     
}

function countdown() {
    countDownDisplay();       
    if (count == 0) {      
      if(currentScoreStore<10) {    
      document.getElementById("inGameScoreTable").innerHTML="No Score"; 
      alert('Time is up');        
     }      
    
	else { 
	  var username;      
	  var inputName=prompt("\t\tTime up\n\tYou Scored "+currentScoreStore+"\nEnter Your Name Here \n\t",""); 
				
      if (inputName!=null) {
		 username=inputName;		          
		 if(inputName==="null" || inputName==="")
		 username="No name"; 
		
	     ////////////////////////////////////// High Scores/ARRAY Logic/////////////////////////////////////////////////////////  
	     storedEntries = JSON.parse(localStorage.getItem("localstoragekey"));						//retrieve the original array as string	//convert/parse the original array into a new array
		 if(storedEntries == null) storedEntries = [];		
		   storedEntries.push(currentScoreStore+" "+username);   	   									    
		   storedEntries = storedEntries.sort(function(a,b){return parseInt(b)-parseInt(a)});
		   localStorage.setItem("localstoragekey", JSON.stringify(storedEntries));               	//store the original array as a string with the key id of localstoragekey
		   storedEntries.length=10;   	   
		 //////////////////////////////////////////////////
	  }//end if (inputName!=null)
	 } //end if else currentScoreStore	 
	resetScoreTable();  
	} //end if count
    else {   
      count--;      
      t = setTimeout("countdown()", 100);   	
    } //end else  
}

function scoresListDisplay(){
        /***************************************************************************************/
		/*  get the value of JSON.parse and, if it is not null, 0, NaN, undefined, false or '' */
		/*  initialise storedEntries with it; otherwise, initialise storedEntries with [].     */
		/***************************************************************************************/
		storedEntries = JSON.parse(localStorage.getItem("localstoragekey")) || [];
		highScoreList = gameTable.querySelector("section#gameTable ol.high-scores"); 
	    for(var i = 0; i < 10; i++){
          var st = storedEntries[i];                                   
          gamescorelist = document.createElement('li');
          gamescorelist.innerHTML = (typeof(st) != "undefined" ? st : "--" );  // if (typeof(st) != "undefined") is true.. then gamescorelist.innerHTML is given the value of the a variable st , otherwise gamescorelist.innerHTML is given the value of the ""
          highScoreList.appendChild(gamescorelist);   //append the child li (with the string values in the array) of the highScoreList orderd list
        }        
}

function clearLocalStorage() {
localStorage.clear();
resetScoreTable();
}

function resetScoreTable() {
document.getElementById("main").innerHTML="";  //remove main content
document.getElementById("bb").innerHTML = "";
scoresListDisplay();
document.getElementById("gameTable").className = "high-scores";
document.getElementById("header").style.display= "none"; 
document.getElementById("footer").style.display= "none";
document.getElementById("scoresTable").style.display= "block";
}  


window.onload = init; 

		

