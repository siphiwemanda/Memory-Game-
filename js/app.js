/*used the following functions
sweetalert https://sweetalert.js.org/guides/ for the alert function
animate css https://daneden.github.io/animate.css/ for the anninmation on css

*/
//cardlist
var match=0;
var moves=0;
var stars = 3
var cardcard = document.getElementsByClassName('card')
var cardlist = Array.from(cardcard)


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

var timeVar;
var totalSeconds = 0;

var hour;
var minute;
var seconds;

function Timer() {
   ++totalSeconds;
   hour = Math.floor(totalSeconds /3600);
   minute = Math.floor((totalSeconds - hour*3600)/60);
   seconds = totalSeconds - (hour*3600 + minute*60);

   document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
}

var p;
var clicked=[];
cardlist.forEach(listener);

function onclick(evt){
  clickedcard=evt.target;

      increment();
      showcard();
      addopencard();

}


function listener(x){

x.addEventListener("click", onclick);

}



function score(){

  if (moves == 17) {document.getElementsByClassName('fa-star')[2].setAttribute("class", "fa fa-star-o");
  stars--;}
  if (moves == 26) {document.getElementsByClassName('fa-star')[1].setAttribute("class", "fa fa-star-o");
  stars--;}
  if (moves == 35) {document.getElementsByClassName('fa-star')[0].setAttribute("class", "fa fa-star-o");
  stars--;}
}

function increment(){
  moves++;
  if(moves==1){
  timeVar = setInterval(Timer, 1000);

  }

  console.log(moves);
  var x = document.querySelector('.moves');
  x.innerText = moves;
 score();

}



//Function to add clicked card to opencard array. If 2 elements in array call function to see if there is a match
function addopencard(){
clicked.push(clickedcard);
clickedcard.removeEventListener("click", onclick);
if(clicked.length==2){
doumatch(clicked[0], clicked[1]);


}
}

//showcard function
function showcard(){
  clickedcard.setAttribute("class", "card open show");

      }

function matchedfinish(i, j){

i.setAttribute("class", "card match");
      console.log("meep");
j.setAttribute("class", "card match");
match++;
//cardlist[i].removeEventListener('click')
if(match==8) Endgame();

}

function matchedanimate(i, j){

  i.classList.add("animated", "jello");
        console.log("jiggle");
  j.classList.add("animated", "jello");
       window.setTimeout(function(){
matchedfinish(i, j);}, 1000);

}

function notmatchedfinish(i, j){

  i.style.backgroundColor = "";
  j.style.backgroundColor = "";

  i.setAttribute("class", "card");
      console.log("meep");
  j.setAttribute("class", "card");
i.addEventListener("click", onclick);
j.addEventListener("click", onclick);


}



function notmatchedanimate(i, j){

  i.style.backgroundColor = "#ff6666";
  j.style.backgroundColor = "#ff6666";

  i.classList.add("animated", "shake");

        console.log("jiggle");
  j.classList.add("animated", "shake");


       window.setTimeout(function(){
  notmatchedfinish(i, j);}, 1000);
}

//opencards

function doumatch(i, j){

if (i.firstElementChild.className===j.firstElementChild.className){
      console.log('you match'+clicked);
      matchedanimate(clicked[0], clicked[1]);
    }
else{
  console.log("not match")
      notmatchedanimate(clicked[0], clicked[1]);
}

clicked.pop();
clicked.pop();
}



// - shuffle the list of cards using the provided "shuffle" method below
// loop through each card and create its HTML
 //add each card's HTML to the page






//reload the page
document.getElementsByClassName('restart')[0].addEventListener('click', reload);
function reload() {
    location.reload();
    console.log('reload')
}


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(cardlist) {
    var currentIndex = cardlist.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}






/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
