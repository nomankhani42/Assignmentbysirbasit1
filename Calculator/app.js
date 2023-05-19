var display=document.getElementById('display')

function getNum(num){
display.value+=num;
}

function calculation(){
    display.value=eval(display.value);
}

function cleardisplay(){
    display.value='';
}