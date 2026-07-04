function dice() {
    let max=6;
    let randomNumber=Math.floor(Math.random()* max)+1;
    console.log(randomNumber);
}

dice();

function average(a,b,c){
    let avg= (a+b+c)/3;
   console.log(avg);
}

average();

function sumCalc(n){
let sum=0
    for (let i=1; i<=n; i++){
    sum+=i;
}
return sum;

}
console.log(sumCalc(10));
