/*used the following functions
sweetalert https://sweetalert.js.org/guides/ for the alert function
animate css https://daneden.github.io/animate.css/ for the anninmation on css

*/



//cardlist
var match=0;
var moves=0;
var cardcard = document.getElementsByClassName('card')
var cardlist = Array.from(cardcard)


function Endgame(){
//window.setTimeout (function () {alert ("Congratulations, you've matched the game. you get" +  'stars  ' + '  time it took'); }, 1000);
window.setTimeout (function (){swal("Good job!", "You have completed the game. You finished in 5 minuets and got two stars", "success", {
  button: "Play Again?",
})
.then((value) => {
  location.reload();
});
;}, 1000);}




var timerVar = setInterval(Timer, 1000);
var totalSeconds = 0;

function Timer() {
   ++totalSeconds;
   var hour = Math.floor(totalSeconds /3600);
   var minute = Math.floor((totalSeconds - hour*3600)/60);
   var seconds = totalSeconds - (hour*3600 + minute*60);


  document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;

}

/*function startCounter() {
    interval = setInterval( function(){

    document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;

  })

}*/


//cardlistner function
cardlist.forEach(listener)
var p;
var clicked=[];
function listener(x, getPosition,event){

    x.addEventListener("click", function(){
        console.log("you clicked " + getPosition)
        increment();
        p = getPosition;
        showcard(p);
        addopencard();
        startCounter()


        /*function listener(x, getPosition){

            x.addEventListener("click", function(){
                console.log("you clicked " )
                increment();
                p = getPosition;
                showcard(p);
                addopencard();*/


        });
}


function score(){

  if (moves == 17) {document.getElementsByClassName('fa-star')[2].setAttribute("class", "fa fa-star-o");}
  if (moves == 26) {document.getElementsByClassName('fa-star')[1].setAttribute("class", "fa fa-star-o");}
  if (moves == 35) {document.getElementsByClassName('fa-star')[0].setAttribute("class", "fa fa-star-o");}


}

function increment(){
  moves++;
  //if(moves==1){setInterval(Timer, 1000)};
  console.log(moves);
  var x = document.querySelector('.moves');
  x.innerText = moves;
 score();

}



//Function to add clicked card to opencard array. If 2 elements in array call function to see if there is a match
function addopencard(){
clicked.push(p);
if(clicked.length==2){
doumatch();


}
}

//var opencards;
//var opencardlist;

//function createopencardlist(){

  //opencards = document.getElementsByClassName('card open show');
  //opencardlist = Array.from(opencards);


//}

//showcard function
function showcard(p){
  document.getElementsByClassName('card')
        [p].setAttribute("class", "card open show");

      }



function matchedfinish(i, j){

document.getElementsByClassName('card')
      [i].setAttribute("class", "card match");
      console.log("meep");
document.getElementsByClassName('card')
     [j].setAttribute("class", "card match");
match++;
//cardlist[i].removeEventListener('click')
if(match==8) Endgame();

}


function matchedanimate(i, j){

  document.getElementsByClassName('card')
        [i].classList.add("animated", "jello");
        console.log("jiggle");
  document.getElementsByClassName('card')
       [j].classList.add("animated", "jello");
       window.setTimeout(function(){
matchedfinish(i, j);}, 1000);

}

function notmatchedfinish(i, j){

  document.getElementsByClassName('card')
      [i].setAttribute("class", "card");
      console.log("meep");
  document.getElementsByClassName('card')
     [j].setAttribute("class", "card");


}



function notmatchedanimate(i, j){

  document.getElementsByClassName('card')
        [i].classList.add("animated", "shake");
        console.log("jiggle");
  document.getElementsByClassName('card')
       [j].classList.add("animated", "shake");
       window.setTimeout(function(){
  notmatchedfinish(i, j);}, 1000);



}

//opencards

function doumatch(){

if (document.getElementsByClassName('card')[clicked[0]].firstElementChild.className===document.getElementsByClassName('card')[clicked[1]].firstElementChild.className){
      console.log('you match'+clicked);
      matchedanimate(clicked[0], clicked[1]);
    }
else{

      notmatchedanimate(clicked[0], clicked[1]);
}

clicked.pop();
clicked.pop();
}



//set the pointer using https://www.kirupa.com/html5/getting_mouse_click_position.htm
function getPosition(el) {
  var xPosition = 0;
  var yPosition = 0;

  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
      var yScrollPos = el.scrollTop || document.documentElement.scrollTop;

      xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
      yPosition += (el.offsetTop - yScrollPos + el.clientTop);
    } else {
      xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    x: xPosition,
    y: yPosition
  };
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
