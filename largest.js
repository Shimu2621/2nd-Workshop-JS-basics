const num1 = 20; 
const num2 = 5; 
const num3 = 45;


let largest;

if(num1 >= num2 && num1 >= num3){
    largest = num1;
} else if(num2 >= num1 && num2 >= num3){
    largest = num2;
} else{
    largest = num3;
}

console.log("The largest value is:", largest);