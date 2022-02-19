let bt1 = document.getElementById("btn1");
function input(obj){
   if(obj.innerText=='X'){
       bt1.value+='*';
   }
   else
   bt1.value+=obj.innerText;
}
function del(){
  bt1.value="";
}
function result(){
    let answer=eval(bt1.value).toFixed(10);
    bt1.value = answer; 
}











// 2nd way
// const result=document.querySelector("input");
// function show(obj){
//     if(obj.innerText=='X')
//         result.value+='*';
//     else
//         result.value+=obj.innerText;
// }

// const acBtn=document.querySelector(".ac");

// acBtn.addEventListener('click',()=>{
//     result.value="";
// })


// function compute(){
//     let answer=eval(result.value).toFixed(4);
//     result.value=answer;
// }
