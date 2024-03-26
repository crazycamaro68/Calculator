let value1;
let value2;
let opt;
let joinedNumber;
let final;


function add(value1, value2){
    let total = value1 + value2;
    return total;
}
function sub(value1, value2){
    let total = value1 - value2;
    return total;
}
function mulitply(value1, value2){
    let total = value1 * value2;
    return total;
}
function divide(value1, value2){
    let total = value1 / value2;
    return total;
}

function operate(opt, value1, value2){
    
    if(opt == "+"){
        let total = add(value1, value2);
        return total;
    }else if(opt == "-"){
        let total = sub(value1, value2);
        return total;
    }else if(opt == "*"){
        let total = mulitply(value1, value2);
        return total;
    }else if(opt =="/"){
        let total = divide(value1, value2);
        return total;
    }else{
        alert("invalid");
    }
}
let newNumber = []
let numObjects = document.querySelectorAll(".num");
let operateObjects = document.querySelectorAll(".operate");
let screen = document.querySelector("#output");
let equalsButton = document.querySelector('#equals');
let clearButton = document.querySelector('#clear');

numObjects.forEach(elm => {elm.addEventListener("click", numberMaker)});
operateObjects.forEach(element => {element.addEventListener("click", operationAssign)})
equalsButton.addEventListener('click', numberMakerTwo);
clearButton.addEventListener('click', clearScreen);

function numberMaker(enteredNumber){
    let pressedButton = enteredNumber.srcElement.textContent
    newNumber.push(pressedButton);
    if(newNumber.length > 8){
        alert('Number is too long, please try again.')
        newNumber = [];
    }
    joinedNumber = Number(newNumber.join(""));
    screen.textContent = joinedNumber;
    return joinedNumber;
}
function numberMakerTwo(){
    value2 = joinedNumber;
    final = operate(opt, value1, value2);
    screen.textContent = final;
    return final;
}
function operationAssign(enterOperator){
    if(final == undefined){
        value1 = joinedNumber;
    }else{
        value1 = final;
    }
    
    joinedNumber = 0;
    newNumber = [];
    screen.textContent = joinedNumber;
    opt = enterOperator.srcElement.textContent
    return value1, opt;
}
function clearScreen(){
    value1, value2, opt = 0;
    final = undefined;
    newNumber = [];
    screen.textContent = 0;
}

