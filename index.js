
function checkRefresh(){
  if (!sessionStorage.getItem("rollDice")) {
    sessionStorage.setItem("rollDice", "extra")

  } else{
    rollTheDice()
  }
}

function rollTheDice(){

  var randomNumber1 = Math.floor(Math.random()*6)+1;
  var randomNumber2 = Math.floor(Math.random()*6)+1;

  document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
  document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

  if(randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerHTML= "🚩Player one Wins!";
  }
  else if(randomNumber1 < randomNumber2){
    document.querySelector(".container h1").innerHTML= "Player two Wins!🚩";
  }
  else{
    document.querySelector(".container h1").innerHTML= "Its a Draw!";
  }
}

document.querySelector("body").onload = checkRefresh();
