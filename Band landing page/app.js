let sliderbox1 = document.querySelectorAll(".sliderbox1")

let currentSlides = 0;

function displaySlides(index){
    sliderbox1.forEach(slide =>  slide.style.display = 'none');
    sliderbox1[index].style.display='block'
}

function nextSlides(){
    currentSlides = (currentSlides +1) % sliderbox1.length ;
    displaySlides(currentSlides)
}

const interval = setInterval(nextSlides, 3000);

window.addEventListener('scroll', ()=>{
    if(window.scrollY >500){
        clearInterval(interval)
    }
})

displaySlides(currentSlides);


// else{
//         if(!interval){
//             setInterval(nextSlides, 3000);
//         }
//     }

let buyTickets = document.querySelectorAll('.buy-ticket')
let buyBtn = document.querySelector('.buy-btn')

buyTickets.forEach(buyTicket => {
    buyTicket.addEventListener('click',()=>{
        buyBtn.classList.add("active")
    })
    
})

let closeBtn = document.querySelector('.close-btn')

closeBtn.addEventListener('click',()=>{
    buyBtn.classList.remove("active")
})


let menuIcon = document.querySelector(".menu-icon")
let section1 =  document.querySelector(".section1")
let nav = document.querySelector('.nav')


menuIcon.addEventListener('click',() =>{
   section1.classList.toggle("section3"),
   nav.classList.toggle("nav-on-md")
})

// mdViews.forEach(mdView=>{
//     menuIcon.addEventListener('click',()=>{
//         section1.classList.add('section2'),
//         mdView.classList.add('section2')
//     })
// })