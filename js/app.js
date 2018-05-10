
//cardlist

var cardcard = document.getElementsByClassName('card')
var cardlist = Array.from(cardcard)


//cardlistner function
cardlist.forEach(listener)
var p;
var clicked=[];
function listener(x, getPosition,event){

    x.addEventListener("click", function(){
        console.log("you clicked " + getPosition)
        p = getPosition;
        clicked.push(p);
        showcard(p);



        });
};

var opencards;
var opencardlist;

function createopencardlist(){

  opencards = document.getElementsByClassName('card open show');
  opencardlist = Array.from(opencards);


}

//showcard function
function showcard(p){


  document.getElementsByClassName('card')
        [p].setAttribute("class", "card open show")

        //var opencards = document.getElementsByClassName('card open show');
        //var opencardlist = Array.from(opencards);

createopencardlist();


if(clicked.length==2) {
  doumatch();
document.getElementsByClassName('card')
      [clicked[0]].setAttribute("class", "card");
document.getElementsByClassName('card')
     [clicked[1]].setAttribute("class", "card");
clicked.pop();
clicked.pop();
   }



  };


//opencards

function doumatch(){


  if (opencardlist[0].firstElementChild.className===opencardlist[1].firstElementChild.className){
      console.log('you match'+clicked);

    //document.getElementsByClassName('card open show')[0]setAttribute('class', 'card match')
    document.getElementsByClassName('card')
          [clicked[0]].setAttribute("class", "card open show");
    document.getElementsByClassName('card')
         [clicked[1]].setAttribute("class", "card open show");


  }
  else{
      console.log('you dont match ');
      cardlist[0].setAttribute("class", "card open show")
  //document.getElementsByClassName('className')[1].
        //setAttribute.('class','card')
}

}

doumatch();
  //for (var i = 0; i <opencardlist; i++) {
      //if opencardlist[0].getElementsByClassName('card open show') === opencardlist[0].getElementsByClassName('card open show')


//opencardlist.forEach(matchyes)

//function matchyes (x){
  //  document.getElementsByName('card')[x].setAttribute('class', 'card match') };






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
