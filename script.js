let randomNumber1=Math.floor(Math.random()*6)+1;
let randomImage="images/dice"+randomNumber1+".png";
let image1=document.querySelectorAll("img")[0].setAttribute("src",randomImage);

let randomNumber2=Math.floor(Math.random()*6)+1;
let randomImage2="images/dice"+randomNumber2+".png";
let image2=document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 is winner";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 is winner";
}
else{
    document.querySelector("h1").innerHTML="Draw";

}