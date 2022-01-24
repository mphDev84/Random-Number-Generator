
document.querySelector("#submitButton").addEventListener("click", randNum);

function randNum(min, max) {

var min =  Number(document.querySelector("#lower-number").value);
var max =  Number(document.querySelector("#upper-number").value);
var num = Math.floor(Math.random() * ((max - min + 1))+min);
    document.querySelector("#numArea").innerHTML=num;
  
//here I have set up a little if/else block that changes font-family depending on the random number selected
        if (num%2===0){
            document.querySelector("#numArea").style.fontFamily="fantasy";
        }else if (num%3===0){
            document.querySelector("#numArea").style.fontFamily="ariel";
          } else{
        document.querySelector("#numArea").style.fontFamily="monospace";

        }
  };