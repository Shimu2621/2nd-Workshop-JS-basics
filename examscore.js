const num = 95;

if(num > 90){
    console.log("you got an A");
} else if(num > 80){
    console.log("you got a B");
} else if(num > 70){
    console.log("you got a C");
} else{
    console.log("you need improve to it");
}


// && -> AND Operatore
// ||-> OR Operatore

const score = 50;

if(score >= 90){
    console.log("You got A");
} else if(score < 90  && score  >= 80){
    console.log("You got B");
} else if(score < 80 && score >= 70){
    console.log("You got C");
} else{
    console.log("Try harder next time");
}