let wishbtn = document.getElementById("wish");
let congratulationsbtn = document.getElementById("congratulations")
let settingsbtn = document.getElementById("settingbtn");
let logoutbtn = document.getElementById("logoutbtn")

wishbtn.addEventListener("click",function onWish(){
    alert ("Happy Birthday to you 🎂")
})

congratulationsbtn.addEventListener("click",function onJoining(){
    alert("Congratulations on joining our company! We're thrilled to have you on board. 🎉🎉")
})

settingsbtn.addEventListener("click",function onSettings(){
    alert("You have succesfully changed your settings !!")
})

logoutbtn.addEventListener("click",function onLogout(){
    alert("You have succesfully logged out !!")


})