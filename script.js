$("h1").after("<h2><button class='btn btn-lg btn-danger'>R o l l</button></h2>")
$("button").click(handleClick);
function handleClick(){
  var randomNumber1 = Math.floor(Math.random(1) * 6) + 1;
  var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 Wins🚩";
  } else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw🚩";
  } else {
    document.querySelector("h1").innerHTML = "Player2 Wins🌈";
  }
  $("button").text("Roll Again,Else Fuck OFF");
}
