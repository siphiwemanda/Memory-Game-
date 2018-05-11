/*used the following functions
sweetalert https://sweetalert.js.org/guides/ for the alert function
animate css https://daneden.github.io/animate.css/ for the anninmation on css
*/

//intialising game
  var match=0;
  var moves=0;
  var stars = 3
  var timeVar;
  var totalSeconds = 0;
  var hour;
  var minute;
  var seconds;

  var cardcard = document.getElementsByClassName('card')
  var cardlist = Array.from(cardcard)

  var clicked=[];
  shuffle(cardlist)
  cardlist.forEach(listener);
  document.getElementsByClassName('restart')[0].addEventListener('click', reload);

//Reloading the game when the reload button is clicked
function reload() {
    location.reload();
    shuffle(cardlist)
}

//add event listner to every card
function listener(x){x.addEventListener("click", onclick);}


//stops timer,brings up an alert box and reloads the game
function Endgame(){

  clearInterval(timeVar);
var siphiwe=document.getElementById("timer").innerHTML;
window.setTimeout (function (){swal("Amazing!", "You have completed the game. It took you  " + moves + "  moves. You finished in " +  minute + " minutes " + seconds + " seconds" + " and got " + stars + " stars", "success", {
  button: "Play Again?",
})
.then((value) => {
  location.reload();
});
;}, 1000);

}

//Timer in hour, minutes and seconds
function Timer() {
   ++totalSeconds;
   hour = Math.floor(totalSeconds /3600);
   minute = Math.floor((totalSeconds - hour*3600)/60);
   seconds = totalSeconds - (hour*3600 + minute*60);

   document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
}

//get clicked card and call futher functions
function onclick(evt){
  clickedcard=evt.target;

      increment();
      showcard();
      addopencard();
}


//sets the stars
function score(){

  if (moves == 17) {document.getElementsByClassName('fa-star')[2].setAttribute("class", "fa fa-star-o");
  stars--;}
  if (moves == 26) {document.getElementsByClassName('fa-star')[1].setAttribute("class", "fa fa-star-o");
  stars--;}
  if (moves == 35) {document.getElementsByClassName('fa-star')[0].setAttribute("class", "fa fa-star-o");
  stars--;}
}

//increases the number of moves and set's the timer upon the first move. takes moves and adds it to the HTML
function increment(){
  moves++;
  if(moves==1){
  timeVar = setInterval(Timer, 1000);}

  var x = document.querySelector('.moves');
  x.innerText = moves;
 score();

}

//Function to add clicked card to clicked array. If 2 elements in array call function to see if there is a match
function addopencard(){
clicked.push(clickedcard);
clickedcard.removeEventListener("click", onclick);
if(clicked.length==2){
doumatch(clicked[0], clicked[1]);}
}

//showcard function
function showcard(){
  clickedcard.setAttribute("class", "card open show");
}


//turns matched cards to green and if all cards matched will call Endgame
function matchedfinish(i, j){

i.setAttribute("class", "card match");
      console.log("meep");
j.setAttribute("class", "card match");
match++;
//cardlist[i].removeEventListener('click')
if(match==8) Endgame();

}


//if matched call animations
function matchedanimate(i, j){

  i.classList.add("animated", "jello");
        console.log("jiggle");
  j.classList.add("animated", "jello");
       window.setTimeout(function(){
matchedfinish(i, j);}, 1000);
}

//if not matched  add back the event listner, return the css to the orginal colours
function notmatchedfinish(i, j){

  i.style.backgroundColor = "";
  j.style.backgroundColor = "";

  i.setAttribute("class", "card");
      console.log("meep");
  j.setAttribute("class", "card");
i.addEventListener("click", onclick);
j.addEventListener("click", onclick);
}


// if not matched animate and turn the css red
function notmatchedanimate(i, j){

  i.style.backgroundColor = "#ff6666";
  j.style.backgroundColor = "#ff6666";

  i.classList.add("animated", "shake");

        console.log("jiggle");
  j.classList.add("animated", "shake");


       window.setTimeout(function(){
  notmatchedfinish(i, j);}, 1000);
}


//check if the cards matched
function doumatch(i, j){

if (i.firstElementChild.className===j.firstElementChild.className){
      matchedanimate(i, j);
    }
else{
      notmatchedanimate(i, j);
}

clicked.pop();
clicked.pop();
}


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length
    var temporaryValue
    var randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex].firstElementChild.className;
        array[currentIndex].firstElementChild.className = array[randomIndex].firstElementChild.className;
        array[randomIndex].firstElementChild.className = temporaryValue;
    }

    return array;
}
