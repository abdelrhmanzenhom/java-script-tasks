/* let set=new Set([10]);
set.add(20).add(set.size);

let last=Array.from(set)
console.log(set)
console.log(last[2]) */

/* let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
let set=new Set(myFriends.sort())
console.log(set)
// Needed Output
//(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed'] */

/* 
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

const map=new Map(Object.entries(myInfo));

console.log(map)
console.log(map.size)
console.log(map.has("role"))
// Needed Output
/* Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
3
true */ 
/* let theNumber = 100020003000;

let set=new Set(Array.from(theNumber.toString()).filter(function(e,i){
    return e!=0
}).map(function(e){
    return +e;
}))
console.log(...set)
// Needed Output 123 */

/* let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
console.log(chars.splice(0,3).copyWithin(0,0,4)) */

// Needed Output
//['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
