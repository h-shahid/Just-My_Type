$(document).ready(function () {
  let sentences = [
    "ten ate neite ate nee enet ite ate inet ent eate",
    "Too ato too nOt enot one totA not anot tOO aNot",
    "oat itain oat tain nate eate tea anne inant nean",
    "itant eate anot eat nato inate eat anot tain eat",
    "nee ene ate ite tent tiet ent ine ene ete ene ate",
  ];
  let letterIndex = 0; //reset letter index to 0 to start beginning of new sentence
  let numWords = 54;
  let sentenceIndex = 0;
  let mistakes = 0; //to track mistakes
  let gameStart; //for timer
  let gameEnd; // for timer
  let keyPresses = 0;
  let restartButton = $("<input class='btn btn-finish' type='button' value='Restart" .onClick='window.location.reload()'>"")


  let currentSentence = sentences[sentenceIndex];
  let currentLetter = currentSentence[letterIndex];
  let targetLetterDiv = $("#target-letter");
  targetLetterDiv.text(currentLetter);
  $("#sentence").html(sentences[sentenceIndex]);

  //advance to next letter in sentence
  let nextLetter = currentSentence[letterIndex];

  //Start counter
  //   if (keyPresses < 1){
  //       gameStart = event.timeStamp;
  //       keyPresses++;
  //   }

  //1st keyboard, lowercase keys, nums & special characters accessed w/out shift

  $("#keyboard-upper-container").hide();
  //keys accessed while holding down the shift key
  $(document).keydown(function (e) {
    if (e.keyCode == 16) {
      $("#keyboard-lower-container").hide();
      $("#keyboard-upper-container").show();
    }
  });
  //will remove the highlight once key is no longer pressed
  $(document).keyup(function (e) {
    $(".highlight").removeClass("highlight");
    if (e.keyCode == 16) {
      $("#keyboard-lower-container").show();
      $("#keyboard-upper-container").hide();
    }
  });

  
  //$("#target-letter").append(currentLetter);
  let move = 17.5;

  $(document).keypress(function (e) {
    $("#" + e.keyCode).addClass("highlight");
    console.log(e.key, currentLetter);
    //checks accuracy and adds the glyphicons to the feedback div only until the sentence is ran through
    if (e.key == currentLetter) { 
      $("#feedback").append('<span class="glyphicon glyphicon-ok"></span>');
    } else {
      $("#feedback").append('<span class="glyphicon glyphicon-remove"></span>');
    }
  

    letterIndex++;
    currentLetter = currentSentence[letterIndex];
    targetLetterDiv.text(currentLetter);
    console.log("letter length", letterIndex);
    console.log("sentence length", sentences[sentenceIndex].length);
    $("#yellow-block").css({ left: move }); //moves yellow square
    move += 17.5;
    //check for end of sentence
    if (letterIndex == sentences[sentenceIndex].length) {
      $('#sentence').empty()
      sentenceIndex++;
      letterIndex = 0;
      move = 17.5;
      $("#sentence").html(sentences[sentenceIndex]);
    
    }
     // use if statement to check if currentSentence is greater than sentences.length.
        // If so, create the button and attach event listener to it that calls location.reload();
        
        if (sentenceIndex > sentences.length - 1) {
            $( "#target" ).click(function() {
                console.log( "Game Over!" );
                btn.eventListener('click', function())
              });
    gameEnd = true
    restartButton
}

    
  

  function next() {
    $("#yellow-block").css("left", "+=17.5px");
    currentLetter = currentSentence[letterIndex];
    $("#target-letter").text(currentLetter);
  }
});
})

//$("#sentence").empty(); //get the sentence div and empty it
//sentenceIndex++; 