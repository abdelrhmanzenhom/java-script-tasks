/* let classesToAdd=document.querySelector(".classes-to-add");
let classesToRemove=document.querySelector(".classes-to-remove");
let current=document.querySelector("[title='Current']");
let printClasses=document.querySelector(".classes-list div")


classesToAdd.onblur=function(){
    let classArr=classesToAdd.value.split(" ");
    
    if(classArr.length!=0&&classArr[0]!="")
    for(let i=0;i<classArr.length;i++){
        current.classList.add(classArr[i].toLowerCase());
    }
   //console.log(current.classList);
  printt();
    classesToAdd.value="";
}
function printt(){
 printClasses.replaceChildren()
   for(let i=0;i<current.classList.length;i++){
   let span= document.createElement("span");
   span.innerHTML=current.classList[i];
    console.log(current.classList[i]);
    printClasses.appendChild(span);
   }
   if(!printClasses.hasChildNodes())printClasses.innerHTML="No Classes To Show";
}
window.onload=printt();
classesToRemove.onblur=function(){
     let classArr=classesToRemove.value.split(" ");
     if(classArr.length!=0&&classArr[0]!="")
    for(let i=0;i<classArr.length;i++){
        current.classList.remove(classArr[i].toLowerCase());
      
    }
    console.log(current.classList);
    printt();
    classesToRemove.value="";
} */
/* div=document.querySelector(".our-element");
p=document.querySelector("p");
document.body.removeChild(p);
divafter=document.createElement("div")
divbefor=document.createElement("div");
divbefor.classList.add("start");
divbefor.innerHTML="Start"
console.log(divafter)
divafter.classList.add("end")
divafter.innerHTML="End"
divafter.title="End Element";
divafter.setAttribute("data-value","Start");
div.after(divafter);
div.before(divbefor); */

/* let elzero=document.querySelector("div").lastChild.textContent.trim();
console.log(elzero) */

