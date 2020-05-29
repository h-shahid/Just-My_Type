$(document).ready(function () {
    let sentences = [
        "ten ate neite ate nee enet ite ate inet ent eate",
        "Too ato too nOt enot one totA not anot tOO aNot",
        "oat itain oat tain nate eate tea anne inant nean",
        "itant eate anot eat nato inate eat anot tain eat",
        "nee ene ate ite tent tiet ent ine ene ete ene ate",
      ];
      let letterIndex = 0  //reset letter index to 0 to start beginning of new sentence
      let sentenceIndex = 0
      let currentSentence = sentences[0]
      let currentLetter = currentSentence[letterIndex]
      let nextLetter = currentSentence[letterIndex]
      let mistakes = 0 //to track mistates 
      let gameStart  //for timer
      let gameEnd // for timer 
      let keyPresses = 0
      //currentLetterDiv.text(currentLetter)
      //let output = sentence[0].split('')
      //let numberOfWords = 5
      //let sentencesIndex = 0
    //let counter = sentencesIndex++
    //let keyPresses= ++
  //1st keyboard, lowercase keys, nums & special characters accessed w/out shift
  //let lower = $("lower")
  $("#keyboard-upper-container").hide();
  //keys accessed while holding down the shift key
  $(document).keydown(function (e) {
    if (e.keyCode == 16) {
      $("#keyboard-lower-container").hide();
      $("#keyboard-upper-container").show();
    }
  });
  $(document).keyup(function (e) {
    $(".highlight").removeClass("highlight"); //will remove the highlight once key is no longer pressed
    if (e.keyCode == 16) {
      $("#keyboard-lower-container").show();
      $("#keyboard-upper-container").hide();
    }
  });
  $("#yellow-block").css("left", "+=17.5px"); //moves yellow square 
  $('#sentence').append(currentSentence) 
  $('#target-letter').append(currentLetter)
  $(document).keypress(function (e) {
    $("#" + e.keyCode).addClass("highlight");
$('#target-letter').text(currentLetter)

});






     
  
  })
 // $("#feedback").add('<span class="glyphicon glyphicon-ok"></span>')