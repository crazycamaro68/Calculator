const add = (value1, value2) => {
    let total = value1 + value2;
    return total;
}
const sub = (value1, value2) =>{
    let total = value1 - value2;
    return total;
}
const mulitply = (value1, value2) =>{
    let total = value1 * value2;
    return total;
}
const divide = (value1, value2) =>{
    let total = value1 / value2;
    return total;
}

const operate = (opt, value1, value2) =>{
    
    if(opt == "add"){
        let total = add(value1, value2);
        return total;
    }else if(opt == "sub"){
        let total = sub(value1, value2);
        return total;
    }else if(opt == "mulitply"){
        let total = mulitply(value1, value2);
        return total;
    }else if(opt =="divide"){
        let total = divide(value1, value2);
        return total;
    }else{
        alert("invalid");
    }
}
