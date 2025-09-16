/* var one=

console.log(document.getElementById("elzero"))
console.log()
console.log()
console.log(document.getElementsByTagNameNS("div","div"))
console.log(document.querySelectorAll("#elzero"))
console.log(document.querySelectorAll(".element"))
console.log(document.querySelectorAll("[name=js]"))
console.log(document.querySelectorAll("div"))
console.log(document.querySelector("div"))
console.log(document.querySelector("[name = js]"))
console.log(document.querySelector(".element"))
console.log(document.querySelector("#elzero"))
console.log(document.getElementsByTagName("div"))
console.log(document.getElementsByName("js"))
console.log(document.getElementsByClassName("element")) */

/* var image=document.images;
console.log(image);
for(let i=0;i<image.length;i++){
image[i].src="s";
image[i].alt="Elzero Logo"
} */


/* let inputs=document.querySelector("[name=dollar]");
let pra=document.querySelector(".result")
inputs.addEventListener("input",function(){
    console.log(inputs.value)
    let egp=inputs.value*15.6;
    pra.innerHTML=`{${inputs.value}} USD Dollar = {${egp.toFixed(2)}} Egyptian Pound`

}) */
/* 
let one= document.querySelector(".one")
let two=document.querySelector(".two")
let temp=one.title;
one.title=two.title;
two.title=temp;
console.log(one.title,two.title)
let first=one.title.slice(0,1).toUpperCase();

one.textContent=first+one.title.slice(1);
two.textContent=two.title+" "+two.attributes.length */

/* let images=document.images;
for(let i=0;i<images.length;i++){
    if(images[i].hasAttribute("alt")){
        images[i].alt="Old";
    }
    else{
        images[i].alt="Elzero New"
    }
} */


    let result= document.querySelector(".results");
    let action=document.querySelector("[type=submit]");
    let numOfElemnt=document.querySelector("[type=number");
    let ElementsText=document.querySelector("[type=text]");
    let list=document.querySelector("[name=type]");

    
let form=document.querySelector("form");
list.setAttribute("style","width:400px; padding:5px;");
numOfElemnt.setAttribute("style","width:400px; padding:5px;")
ElementsText.setAttribute("style","width:400px; padding:5px;")
form.setAttribute("style","display:flex;flex-wrap:wrap;width:100%;flex-direction: column;gap:10px;align-items: center;");
action.setAttribute("style","width:400px;padding:10px;background-color:orange;border:none;border-radius: 5px;")
result.setAttribute("style","width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px;")
    action.addEventListener('click',function(e){
        
e.preventDefault();

console.log(ElementsText.value)
result.innerHTML="";
if(list.value=="Div"){

for(let i=0;i<numOfElemnt.value;i++){
   
let element=document.createElement("div");
element.innerHTML=ElementsText.value;
element.setAttribute("style","background-color:orangered;width:30%;padding:10px;color:white;border-radius:5px;text-align:center;");
result.appendChild(element);
}

}
else if(list.value=="Section"){
    for(let i=0;i<numOfElemnt.value;i++){
   
let element=document.createElement("section");
element.setAttribute("style","background-color:orangered;width:30%;padding:10px;color:white;border-radius:5px;text-align:center;")
element.innerHTML=ElementsText.value;
result.appendChild(element);
}
}


    });

