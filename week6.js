/* let myAdmins=["Ahmed","Osama","Sayed","Stop","Samera"];
let myEmployees=["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia","Anwar"];


let x=0;
for(let i=0;i<myAdmins.length;i++){
    if(myAdmins[i]=="Stop"){
        break;
    }
    x++;

}
document.write(`<div>We have ${x} Admins</div>`);

for(let i=0;i<x;i++){
document.write(`The Admin For Team ${i+1} Is ${myAdmins[i]}`)
document.write(`<h3>Team Members: </h3>`)
let indx=1;
for(let j=0;j<myEmployees.length;j++)
{if(myEmployees[j].startsWith(myAdmins[i][0]))
    document.write(`<p>- ${indx++} ${myEmployees[j]}</p>`)
}
} */

/* let start = 10;
let end = 100;
let exclude = 40;


for(;start<=end;start+=10){
    if(start==exclude)continue;
    console.log(start);
}
 */
/* let start = 1;
let end = 6;
let breaker = 2;

for(;start<=end;start++){
        for()
} */

/* let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"

for(let i=0;i<friends.length;i++){
    if(friends[i][0]==letter)continue;
    console.log(`${i+1} => ${friends[i]}`)
} */

/*     let start = 0;
let swappedName = "elZerO";

for(;start<swappedName.length;start++){

} */

/* function sayHello(theName, theGender) {
  // Your Code Here
  if(theGender=="Male")console.log(`Hello Mr ${theName}`)
else if(theGender=="Female")
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh" */
function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  if(secondNum==undefined)console.log("second number not found")
}


// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
