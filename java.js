//This code run after click on card. 
//After click it will be add class for section "is-flipped"

//This is code for card1
    var card1 = document.querySelector('.card1');
 card1.addEventListener( 'click', function() {
 
     card1.classList.toggle('is-flipped');
   });

//This is code for card2
    var card2 = document.querySelector('.card2');
card2.addEventListener( 'click', function() {

    card2.classList.toggle('is-flipped');
  });

  //This is code for card3
  var card3 = document.querySelector('.card3');
  card3.addEventListener( 'click', function() {
  
      card3.classList.toggle('is-flipped');
    });