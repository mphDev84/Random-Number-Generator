
document.querySelector("#submitButton").addEventListener("click", randNum);

function randNum(min, max) {

    var min =  Number(document.querySelector("#lower-number").value);
var max =  Number(document.querySelector("#upper-number").value);
    
var num = Math.floor(Math.random() * ((max - min + 1))+min);
    document.querySelector("#numArea").innerHTML=num;
   var num2 =  max/2;
   var num3 = max/3;

        if (num<=num3){
            document.querySelector("#numArea").style.fontFamily="fantasy";
        }else if (num<=num2&&num>num3){
            document.querySelector("#numArea").style.fontFamily="ariel";
          } else{
        document.querySelector("#numArea").style.fontFamily="monospace";

        }
  };