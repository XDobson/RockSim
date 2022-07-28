//TO-DO:
// Make rock do something?

// variables go here
startOpacity = 0.5
window.toggle = 0

// Choose a rock, set rock to chosen rock, and set duplicate rock (for night cycle) also to chosen rock
function chooserock(rockid){
    document.getElementById("rock").setAttribute("src","rocks/rock"+rockid+".png")
    document.getElementById("rock").style.visibility = "visible"

    document.getElementById("rockOverlay").setAttribute("src","rocks/rock"+rockid+".png")
    document.getElementById("rockOverlay").style.visibility = "visible"
    document.getElementById("rockOverlay").style.opacity = 0

    document.getElementById("choice").style.visibility = "hidden"
}
// Day/Night loop that sets the overlays' opacity 
function daynight(opacity){
    document.getElementById("overlay").style.opacity = opacity
    document.getElementById("rockOverlay").style.opacity = opacity
    setTimeout(daynightLoop, 700, opacity)
}
function daynightLoop(opacity){
    if (opacity >= 1){window.toggle = 1}else  if (opacity <= 0){window.toggle = 0}
    if (window.toggle == 0){opacity += 0.01}else{opacity-=0.01}
    console.log("opacity is now",opacity);
    daynight(opacity)
}

// Begin the loop
daynight(startOpacity)