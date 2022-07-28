var firstValue=document.querySelector("#first");
var secondValue=document.querySelector("#second");
var output=document.querySelector("#result");
var error1=document.querySelector("#errormsg1");
var error2=document.querySelector("#errormsg2");
firstValue.addEventListener("keyup",()=>{
    
    if((event.keyCode>=48 &&event.keyCode<=57) || event.keyCode==8) {
        error1.textContent="";
    }
    else{
        error1.textContent ="Only Numbers are allowed!!";
            error1.style.color = "red";
        
    }
    
})

secondValue.addEventListener("keyup",()=>{
    if((event.keyCode>=48 &&event.keyCode<=57) || event.keyCode==8) {
        error2.textContent="";
    }
    else{
        error2.textContent = "Only Numbers are allowed!!";
            error2.style.color = "red";
        
    }
    
    
})
 
 function add(){
     var num1=firstValue.value;
     var num2=secondValue.value;
     var out=Number(num1)+Number(num2);
    output.innerHTML="Addition is <b>"+out+"</b>";

}
function sub(){
    var num1=firstValue.value;
    var num2=secondValue.value;
    var out=Number(num1)-Number(num2);
   output.innerHTML="Subtraction is <b>"+out+ "</b>";

}
function mul(){
    var num1=firstValue.value;
    var num2=secondValue.value;
    var out=Number(num1)*Number(num2);
   output.innerHTML="Multiplication is <b>"+out+"</b>";

}
function div(){
    var num1=firstValue.value;
    var num2=secondValue.value;
    var out=Number(num1)/Number(num2);
   output.innerHTML="division is <b>"+out+ "</b>";

}
function mod(){
    var num1=firstValue.value;
    var num2=secondValue.value;
    var out=Number(num1)%Number(num2);
   output.innerHTML="Modulous is <b> "+out+ "</b>";

}
