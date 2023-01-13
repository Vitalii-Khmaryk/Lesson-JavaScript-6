let fib = (n) => {
  if (n <= 1) {
    return n;
  }
  else{
    let a1=1;
    let b2=0;
    let c;
    let str="";
      for(let i=1;i<=n;i++)
      {
        c=a1+b2;
        a1=b2;
        b2=c;
        str+=c+" ";
      }
      console.log(`${str}`);
      }
};
fib(10);





let f = function (kNumb,znam) {
let firstNumb=1;
let result;
 result=firstNumb*(1-znam**kNumb)/(1-znam);
return result;
};
console.log(f(4,3));



let func = function (kNumb,znam) {
let startNumber = 1;
let i = 0;
let sum=1;
while (i < kNumb) {
    console.log(`${sum}`);
    startNumber *= znam;
    sum+=startNumber;
    i++;
}
}
func(4,3);



let n = +prompt('number #1');
let num2 = +prompt('number #2');
let simpleNumber = function (n,num2) {

for (let i=n;i<=num2;i++){

  for (let j = 2; j <= i; j++) {
    if (i % j === 0 && j < i) {
      break;
    } else if (j === i) {
      console.log(i); 
    } 
  }
}
}
simpleNumber(n,num2);


