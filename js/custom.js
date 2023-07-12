const menuIcon = document.querySelector(".menu-icon")
const menuBox = document.querySelector(".nav-main ul")
const menuClose = document.querySelector(".menu-close")
const test = document.querySelectorAll(".nav-main ul li a")


menuIcon.addEventListener("click", ()=> {
    menuBox.classList.add("menuBox-visible")  
    setTimeout(function(){
        test.forEach(e => e.classList.add("testing"))
    }, 1000)
})
menuClose.addEventListener("click", ()=> {
    menuBox.classList.remove("menuBox-visible")
    test.forEach(e => e.classList.remove("testing"))
})
window.addEventListener("scroll", ()=> {
    menuBox.classList.remove("menuBox-visible")
    test.forEach(e => e.classList.remove("testing"))
})
