const clickDown = new Audio('sounds/click on2-output.mp3') ;
const clickUp = new Audio('sounds/click out2-output.mp3');
let firstNum="";
let secondNum="";
let operator=null;
let result=null ;
let currentNumber = "";
let resultString =""; 
const allBtns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const output = document.querySelector('.output');
const problem = document.querySelector('.problem');
const blink = document.querySelector(".blink");

function Roundnum(num, decimalPlaces = 0) {
    var p = Math.pow(10, decimalPlaces);
    return Math.round(num * p) / p;
}

const add=(a,b)=>{
    return a +b ;
}  

const subtract = (a,b)=>{
   return a - b ;
}

const multiply=(a,b)=>{
    return a*b ;
}

const divide =(a,b)=>{
    return a/b;
}

const operate=(a,opr,b)=>{
    a = parseFloat(a);
    b = parseFloat(b);
    switch (opr) {
        case "+":
            return add(a,b);
            break;

        case "-":
            return subtract(a,b);
            break;

        case "*":
            return multiply(a,b);
            break;

        case "/":
            return divide(a,b);
            break;     
    }

}



const numbers = document.querySelectorAll('.number');
numbers.forEach((button) => {
    button.addEventListener("click", (event) => {
        console.log('Button clicked:', event.target.textContent); 
        console.log("result length:",resultString.length);
        console.log("current number length:",currentNumber.length);
        console.log("--------------------------------------");
        if (currentNumber.length <5 && resultString.length < 5){currentNumber += event.target.textContent;        
        output.textContent = currentNumber; }
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((button) => {
    button.addEventListener("click", (event) => {
       

        if (firstNum == ""){
            firstNum = currentNumber;
        }else if (operator) {
            secondNum = currentNumber; 
            if(firstNum== ""|| secondNum =="" ||operator=== null ) return;  
            result = operate(firstNum,operator,secondNum);
            firstNum = Roundnum(result,2);
            output.textContent= Roundnum(result,2);
            problem.textContent= firstNum + operator + secondNum;

    
            
        }
        
        operator = event.target.value;
        currentNumber = "";
        console.log("operator:",operator);
        console.log("--------------------------------------");
        
        
    });
});

const equalbtn =  document.querySelector('.equal');
equalbtn.addEventListener("click", (event) => {
    
    secondNum = currentNumber;
  
       

 if(firstNum== ""|| secondNum =="" ||operator=== null ) return;  

result = operate(firstNum,operator,secondNum);
    
    console.log("first number:",firstNum);
    console.log("second number",secondNum);
    console.log("operator:" ,operator);
    console.log("--------------------------------------");
    
    resultString = Roundnum(result).toString();
    
    if(resultString.length  < 5 ){
        output.textContent = Roundnum(result,2);
    }else{
       output.classList.add("tooMany");
        output.textContent= "too many numbers /:"
        
    }
    
    problem.textContent= firstNum + operator + secondNum;
   firstNum = Roundnum(result,2);
   
   
   operator=null;
   currentNumber="";
   console.log("result :",result);
   console.log(firstNum);
   
    

        
    });

  const clearbtn = document.querySelector('.clear');
  clearbtn.addEventListener("click", ()=>{
    output.classList.remove("closed");
    screen.classList.remove("closed");
    problem.classList.remove("closed");
    blink.textContent=""
    output.classList.remove("tooMany");

    currentNumber="";
    firstNum="";
    secondNum="";
    operator=null;
    resultString="";

    output.textContent="0";
    problem.textContent="0";  
  })


 allBtns.forEach((button)=>{
    button.addEventListener("mousedown",()=>{
       clickDown.play();
    })
    button.addEventListener("mouseup",()=>{

        clickUp.play();
    })

 });

 const deletebtn = document.querySelector('.delete');
deletebtn.addEventListener("click",()=>{    
    currentNumber = currentNumber.slice(0,-1);

    if(result !== null) return;
    output.textContent=currentNumber;}
    
)
