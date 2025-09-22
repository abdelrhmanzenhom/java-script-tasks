/* let myString="1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,20,Z";

let soution=myString.split(",").filter(function(e){
    return isNaN(e)&&e!='_'&&e!='Z';
}).map(function(e){
    return e.length==true?e:e.charAt(--e.length)
}).
reduce(function(acc,next){
      if(next.toUpperCase()==next)return `${acc} ${next}`
return `${acc}${next}`
})

console.log(soution); */


/* let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
mix=mix.map(function(e){
    return isNaN(e)?e:''
})

.reduce(function(f,s){
    
    return `${f}${s}`
}

)
console.log(mix)
// Elzero */

/* let myString = "EElllzzzzzzzeroo";
myString=myString.split("").filter(function(e,i,arr){

return arr[i]!=arr[i+1]
}).join("")
console.log(myString)
 */
// Elzero

/* let myArray = ["E", "l", "z", ["e", "r"], "o"];

myArray=myArray.reduce(function(acc,nex,i,arr){
    
    return `${acc}${nex}`
}).split(',').reduce(function(acc,nex){
    
    return `${acc}${nex}`

})
console.log(myArray) */

/* let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
numsAndStrings=numsAndStrings.filter(function(v,i){
    return !isNaN(v);
}).map(function(e){
    return e*-1
})
console.log(numsAndStrings)
// [-1, -10, 10, 20, -5, -3] */

let nums = [2, 12, 11, 5, 10, 1, 99];
nums=nums.reduce(function(acc,curr,i,arr){
if(curr%2)return acc+curr;
return acc*curr;
},1)
console.log(nums)
// 500