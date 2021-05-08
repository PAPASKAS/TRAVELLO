//hamburger
function hamburger(){
    let hamb = document.querySelector(".open_hamb").style.display    
    let coord_hamb = 0
    let coord_closed_hamb = 170

    if(hamb === "" || hamb === "none"){
        document.querySelector(".open_hamb").style.display = "block"
        let open_hamb = setInterval(function(){
            if(coord_hamb < 170){
                coord_hamb+=5
                document.querySelector(".open_hamb").style.width = coord_hamb + "px"
            }
        },1)
        setTimeout(()=>clearInterval(open_hamb),150)
    }else{
        let closed_hamb = setInterval(function(){
            if(coord_closed_hamb > 0){
                coord_closed_hamb-=5
                document.querySelector(".open_hamb").style.width = coord_closed_hamb + "px"
            }
            else{
                document.querySelector(".open_hamb").style.display = "none"
            }
        },1)
        setTimeout(()=>clearInterval(closed_hamb),150)
        
    }
}



//slider
let quantity_slide = document.querySelectorAll(".move_slider > span").length
document.querySelector(".move_slider").style.left = 0
let current_slide = 0
let slides_on_screen = 3

function next(){
    let width_slide = document.querySelector(".move_slider > span").offsetWidth
    let width_slider = document.querySelector(".move_slider").offsetWidth

    if(width_slider > 880){
        slides_on_screen = 3
    }else if(width_slider >= 440 && width_slide <= 880){
        slides_on_screen = 2
    }else{
        slides_on_screen = 1
    }

    if(current_slide < quantity_slide - slides_on_screen){
        current_slide++
    }
    else{
        current_slide = 0
    }

    document.querySelector(".move_slider").style.left = -width_slide * current_slide + -25 * current_slide + "px";
}

function prev(){
    let width_slide = document.querySelector(".move_slider > span").offsetWidth
    let width_slider = document.querySelector(".move_slider").offsetWidth

    if(width_slider > 880){
        slides_on_screen = 3
    }else if(width_slider >= 440 && width_slide <= 880){
        slides_on_screen = 2
    }else{
        slides_on_screen = 1
    }

    if(current_slide === 0){
        current_slide = quantity_slide - slides_on_screen
    }
    else{
        current_slide--
    }

    document.querySelector(".move_slider").style.left = -width_slide * current_slide + -25 * current_slide + "px";
}