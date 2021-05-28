

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML="değiştirdim"
lastChild.innerHTML+=" ekledim "

let firstChild=document.querySelector("ul#list>li:first-child")
firstChild.innerHTML="değiştirdim"
firstChild.innerHTML+=" ekledim "
//let secondChild=document.querySelector("ul#list>li:third-child")
//secondChild.innerHTML="değiştirdim"
//secondChild.innerHTML+=" ekledim "

let ulDOM=document.querySelector("ul#list")
let liDOM=document.createElement("li")
liDOM.innerHTML="yeni oluşturduğum"
//ulDOM.appendChild(liDOM)
ulDOM.prepend(liDOM)//öğeyi başa ekledim
let title =document.querySelector("#title")
title.classList.add("old-info")
title.classList.add("text-primary")
title.classList.add("text-second")
title.classList.replace("old-info","real-info")
console.log(title.classList)
document.getElementById("addBtnClick").addEventListener("click", addClicked);
function addClicked(){
  
  title.classList.add('info');
  } 
  document.getElementById("removeBtnClick").addEventListener("click", removeClicked);
function removeClicked(){
  
  title.classList.remove('info','info-new')
  } 
  document.getElementById("replaceBtnClick").addEventListener("click", replaceClicked);
  function replaceClicked(){
    
    title.classList.replace('info','info-new');
  } 
  document.getElementById("containsBtnClick").addEventListener("click", containsClicked);
  function containsClicked(){
    
    alert(title.classList.contains("classList"));
  } 
  document.getElementById("itemBtnClick").addEventListener("click", itemClicked);
  function itemClicked(){
    
    alert(title.classList.item(0));
  } 


