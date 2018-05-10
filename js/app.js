
//cardlist
var match=0;
var moves=0;
var cardcard = document.getElementsByClassName('card')
var cardlist = Array.from(cardcard)


function Endgame(){
alert("Congratulations... meep!!");

}

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




        });
}


function score(){

  if (moves >16) document.getElementsByClassName('fa-star')[2].setAttribute("class", "fa fa-star-o");
  if (moves >25) document.getElementsByClassName('fa-star')[1].setAttribute("class", "fa fa-star-o");
  if (moves >50) document.getElementsByClassName('fa-star')[0].setAttribute("class", "fa fa-star-o");


}

function increment(){
  moves++;
  console.log(moves);
  var x = document.querySelector('.moves');
  x.innerText = moves;
 //score();

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
        [p].setAttribute("class", "card open show");}



function matched(i, j){

  document.getElementsByClassName('card')
        [i].classList.add("animated", "jello");
        console.log("jiggle");
  document.getElementsByClassName('card')
       [j].classList.add("animated", "jello");



/*document.getElementsByClassName('card')
      [i].setAttribute("class", "card match");
      console.log("meep");
document.getElementsByClassName('card')
     [j].setAttribute("class", "card match");*/
match++;
}

function notmatched(i, j){


    document.getElementsByClassName('card')
        [i].setAttribute("class", "card");
        console.log("meep");
  document.getElementsByClassName('card')
       [j].setAttribute("class", "card");



}

//opencards

function doumatch(){

if (document.getElementsByClassName('card')[clicked[0]].firstElementChild.className===document.getElementsByClassName('card')[clicked[1]].firstElementChild.className){
      console.log('you match'+clicked);
      matched(clicked[0], clicked[1]);
    if(match==8) Endgame();}
else{

      notmatched(clicked[0], clicked[1]);
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
