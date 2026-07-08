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
    return sum;
}
 return sum;

}
console.log(sumCalc(10)); //55 

console.Log(sum); // this is not possible for the console toh access because the funcction is not called and also it cannot access the variable inside the function! 



let str= ("I AM IIT PATNA STUDENT OF 2025 BATCH");

function unique(str){
    let newstr="";
    for(let i=0; i<str.length; i++){
        if (!newstr.includes(str[i])){
            newstr+=str[i];
        }
    }
          console.log(newstr);
}

unique(str);

// object banane ka syntax 

const student ={
    // saari baatein likh sakte ho and yahi pe arrays bhi store kar sakte ho
    name: "amit adhikari",
    rollNumber:24,
    stamdard:"12th"
};

console.log(student); // aise print karwa sakta sabhi ko and issi ke ander kai saare objects bhi ban sakte hai and har kisi ko alag
// alag alag print kar sakte ho

//funtions ka syntax 

function add(number1,number2){
    let result = number1 + number2;
    return result;
}

console.log(add(3,4));



let arr=["amitadhikai"];

function newstr(){
    let resultstr=("");
    for(let i=0;i<arr.length; i++){
        if(!resultstr.includes(arr[0][i])){
        resultstr+=arr[0][i];
        }
    }
    return resultstr;

}

console.log(newstr());

//this in javascript

const student={
    maths:70,
    eng:80,

    getavg(){
        let avg= (this.math+this.eng)/2;
        console.log(avg);
        
    }
};

const object = {
    message ="hello world!",
    logMessage(){
        console.log(this.message);
    }
};

setTimeout(object.logMessage,1000);


function literals (){
    for (let i=0; i<10; i++){
        let pattern = "";
        for(let j=0; j<=i;j++){
            pattern += j;
            
        }
        console.log(pattern);
    }
}
literals();
