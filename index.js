let nextBtn = document.getElementById("btnNext");
let prevBtn = document.getElementById("btnPrev");


let slides = document.querySelectorAll(".slides");
slides.forEach((element, index) => {
    element.style.left = `${index*100} %`;
});

let count = 0;
nextBtn.addEventListener("click" , ()=>{
    console.log(count);
    count++;
    changingNextSildes();
    

});
prevBtn.addEventListener("click" , ()=>{
    console.log(count);
    count--;
    changingPrevSildes();
});

function changingNextSildes() {
    slides.forEach(e=>{
        e.style.transform = `translateX(-${count*100}%)`;

    })
}
function changingPrevSildes() {
    
    slides.forEach(e=>{
        e.style.transform = `translateX(-${count*100}%)`;

    })
}



