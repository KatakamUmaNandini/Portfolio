document.getElementsByClassName("hours")[0].innerHTML = "00";
document.getElementsByClassName("minutes")[0].innerHTML = "00";
document.getElementsByClassName("seconds")[0].innerHTML = "00";
var x = document.getElementsByClassName("start")[0];
var s;
function start(){
    if(parseInt(document.getElementsByClassName("seconds")[0].innerHTML) < 9){
        document.getElementsByClassName("seconds")[0].innerHTML="0" + (parseInt(document.getElementsByClassName("seconds")[0].innerHTML) + 1);
    }
    else if(parseInt(document.getElementsByClassName("seconds")[0].innerHTML) == 59){
        document.getElementsByClassName("seconds")[0].innerHTML="00";
        if(document.getElementsByClassName("minutes")[0].innerHTML < 9){
            document.getElementsByClassName("minutes")[0].innerHTML="0"+(parseInt(document.getElementsByClassName("minutes")[0].innerHTML) + 1);
        }
        else if(document.getElementsByClassName("minutes")[0].innerHTML == 59){
            document.getElementsByClassName("minutes")[0].innerHTML = "00";
            if(document.getElementsByClassName("hours")[0].innerHTML < 9){
                document.getElementsByClassName("hours")[0].innerHTML="0"+(parseInt(document.getElementsByClassName("hours")[0].innerHTML) + 1);
            }
            else{
                document.getElementsByClassName("hours")[0].innerHTML=parseInt(document.getElementsByClassName("minutes")[0].innerHTML) + 1;
            }
        }
        else{
            document.getElementsByClassName("minutes")[0].innerHTML=parseInt(document.getElementsByClassName("minutes")[0].innerHTML);
        }
    }
    else{
        document.getElementsByClassName("seconds")[0].innerHTML=parseInt(document.getElementsByClassName("seconds")[0].innerHTML)+1;
    }
}  
function sfun(){
    s = setInterval(start,1000);
} 
// function mfun(){
//     setInterval()
// }
function reset(){
    clearInterval(s);
    document.getElementsByClassName("seconds")[0].innerHTML="00";
    document.getElementsByClassName("minutes")[0].innerHTML="00";
    document.getElementsByClassName("hours")[0].innerHTML="00";
    // x.setAttribute("onclick","");
}
function stop(){
    clearInterval(s);
}
