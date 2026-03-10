const projects=document.querySelectorAll(".project")

window.addEventListener("scroll",()=>{

projects.forEach(p=>{

const top=p.getBoundingClientRect().top
const screen=window.innerHeight

if(top<screen-50){

p.style.opacity=1
p.style.transform="translateY(0)"

}

})

})