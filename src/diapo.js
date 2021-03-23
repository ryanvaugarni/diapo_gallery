document.addEventListener("DOMContentLoaded",()=>{
    console.log(200)
    let slide
    slide = document.querySelector(".slide_show")
    console.log(slide)

    slide.addEventListener("click",(e)=>{
        console.log(e.target)
        slide.classList.toggle("slide_stop")
    })
})