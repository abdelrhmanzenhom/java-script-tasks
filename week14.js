/* let userInput=prompt("print number from-to");
1-10
inputArr=userInput.split('-');

let max=Math.max(inputArr[0],inputArr[1]);
let min=Math.min(inputArr[0],inputArr[1]);
for(let i=min;i<=max;i++){
    console.log(i);
} */

/* let closeButton = document.querySelector(".close-butt");
closeButton.addEventListener("click", function () {
  closeButton.parentElement.style.display = "none";
});



setTimeout(function () {
  closeButton.parentElement.style.display = "block";
}, 5000); */
/* let div=document.getElementById("ten");

let int=setInterval(function(){
div.innerHTML-=1;
if(div.innerHTML==5)window.open("https://elzero.org","","width=50%")
if(div.innerHTML==0){clearInterval(int);}
},1000) */


let userTask=document.querySelector(".input");
let addTaskButt=document.querySelector(".add");
let tasks=document.querySelector(".tasks");
let tasksArr=[]

if(window.localStorage.getItem("tasks")){
  tasksArr=JSON.parse(window.localStorage.getItem("tasks"));
  console.log(tasksArr)
  //console.log(tasksArr)
tasksArr.forEach(function(e,i,arr){
all(e["id"],e["title"])
  
})

}

addTaskButt.addEventListener('click',function(){
 window.localStorage.clear()

  let obj={};
  obj.id=Date.now()
  obj.title=userTask.value;
  
  userTask.value=""

  
tasks.innerHTML=""
  tasksArr.push(obj);
  tasksArr.forEach((e)=>{
    all(e["id"],e["title"]);
  })
   
 
    //  window.localStorage.setItem("tasks",JSON.stringify(tasksArr));
  })
   





function all(id,val){
  
 // console.log(tasksArr);
  let div =document.createElement("div");
  let deletButt=document.createElement("button");
  deletButt.setAttribute("style",`
        border: 0;
         border-radius: 10px;
        background-color: orangered;
        color: white;
        cursor: pointer;
    `)
    deletButt.innerHTML="delete"

  
  div.setAttribute("style",`
    background-color:white;
    padding:20px;
    margin:15px;
    display:flex;
    justify-content: space-between;

    `)

  div.innerHTML=val;
  if(div.innerHTML){
  div.appendChild(deletButt);
  tasks.appendChild(div);
  
   //let obj={};
  //obj.title=val;
  //tasksArr.push(obj);
  deletButt.addEventListener('click',function(){
   
   tasksArr= tasksArr.filter(function(e){
    
      return e["id"]!=id;
    })
    console.log(tasksArr)
     div.remove();
      window.localStorage.setItem("tasks",JSON.stringify(tasksArr));
  })
  window.localStorage.setItem("tasks",JSON.stringify(tasksArr));
 }

}

 

