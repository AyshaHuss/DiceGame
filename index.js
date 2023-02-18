//alert("HIIIIIIII");
var randNum1 = Math.ceil(Math.random()*6);
var randomImg1 = "images/dice"+randNum1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImg1);
var randNum2 = Math.ceil(Math.random()*6);
var randomImg2 = "images/dice"+randNum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImg2);

if(randNum1>randNum2){
    document.querySelector("h1").innerHTML = " 🚩  Player1 wins ";
}
else if(randNum2 > randNum1){
    document.querySelector("h1").innerHTML = "Player2 wins  🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw !!!";
}


