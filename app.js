//TO-DO:
// Make rock do something

// variables go here

function chooserock(rockid){
    document.getElementById("rock").setAttribute("src","rocks/rock"+rockid+".png")
    document.getElementById("rock").style.visibility = "visible"
    document.getElementById("choice").style.visibility = "hidden"
}