var txt = ''
var txt1 = ''
function clr(){
    document.getElementById("screen").value=""
    txt = ''
    txt1 = ''
}
function num(val){
    txt += val
    if(txt1 == 0){
        document.getElementById("screen").value += val
    }
    if(txt1 == 1){
        document.getElementById("screen").value = val
    }
    if((val== '+') || (val== '-') || (val== '*') || (val== '/')){
        txt1 = 1
    }
    else{
        txt1 = 0
    }
}
function equal(){
    var result = eval(txt)
    document.getElementById("screen").value = result
}