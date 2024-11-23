const toogle = document.getElementById("toggle-button") as HTMLButtonElement
const skill = document.getElementById ("skills") as HTMLElement

toogle.addEventListener("click", ()=>{
    if (skill.style.display === "none") {
        skill.style.display = "block"
    }else{
        skill.style.display = "none"
    }
})