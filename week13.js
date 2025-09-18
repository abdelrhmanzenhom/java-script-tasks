let classesToAdd=document.querySelector(".classes-to-add");
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
}

classesToRemove.onblur=function(){
     let classArr=classesToRemove.value.split(" ");
     if(classArr.length!=0&&classArr[0]!="")
    for(let i=0;i<classArr.length;i++){
        current.classList.remove(classArr[i].toLowerCase());
      
    }
    console.log(current.classList);
    printt();
    classesToRemove.value="";
}