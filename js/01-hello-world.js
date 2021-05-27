

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
ulDOM.appendChild(liDOM)
ulDOM.prepend(liDOM)