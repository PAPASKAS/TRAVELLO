//slider
let quantity_slide = document.querySelectorAll(".move_slider > span").length
let width_slide = document.querySelector(".move_slider > span").offsetWidth
document.querySelector(".move_slider").style.left = 0
let current_slide = 0

function next(){
    
    if(current_slide < quantity_slide - 3){
        current_slide++
    }
    else{
        current_slide = 0
    }

    document.querySelector(".move_slider").style.left = -width_slide * current_slide + -25 * current_slide + "px";
}
function prev(){
    
    if(current_slide === 0){
        current_slide = quantity_slide - 3
    }
    else{
        current_slide--
    }

    document.querySelector(".move_slider").style.left = -width_slide * current_slide + -25 * current_slide + "px";
}