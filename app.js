var button=document.querySelector(".spoiler button") 
var spoiler=document.querySelector(".spoiler-content") 
button.addEventListener("click",function(e){
       spoiler.classList.add("visible")
       button.style.display="none"
       e.preventDefault()
})