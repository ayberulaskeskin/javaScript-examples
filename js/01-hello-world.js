

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
title.classList.replace("old-info","new-info")
console.log(title.classList)