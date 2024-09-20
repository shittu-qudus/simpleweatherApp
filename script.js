const menuBar = document.querySelector(".hamburger")
const menuIconBtn = document.querySelector(".menuIconBtn")
const menuCancelBtn = document.querySelector(".menuCancelBtn")



const handleClick = () =>  {

    menuBar.style.display = "block";
    menuIconBtn.style.display = "none"
}

const handleclicks = () => {

    menuBar.style.display = "none"
    menuIconBtn.style.display = "block";
    

    

}


menuIconBtn.addEventListener("click", handleClick)
menuCancelBtn.addEventListener("click", handleclicks)
