let mmenu=document.querySelector(".open_menu");
let pannel=document.querySelector(".menu");
let w=window.innerWidth

// mobile menu
mmenu.addEventListener("click", (e)=>{
    if(!mmenu.classList.contains("active")){
        mmenu.classList.add("active")
        pannel.style.display="block"
    }else{
        mmenu.classList.remove("active")
        pannel.style.display="none"
    }
    
})
let btnlink=document.querySelectorAll(".link");
let headerH=document.querySelector("#header").offsetHeight;


window.addEventListener("resize", ()=>{
    w=window.innerWidth;
    headerH=document.querySelector("#header").offsetHeight;
    if(w>320 && pannel.hasAttribute("style")){
        pannel.removeAttribute("style")
    }
})

btnlink.forEach((link)=>{
    link.addEventListener("click", (e)=>{
    e.preventDefault();
    let target=e.currentTarget.getAttribute("href");
    let targetPosition=document.querySelector(target).offsetTop;
    if(w>1440){
        targetPosition=document.querySelector(target).offsetTop/*-headerH*/;
    }
    mmenu.classList.remove("active")
    pannel.removeAttribute("style")
    window.scrollTo({top: targetPosition, behavior:"smooth"})
    })
//   })
})

const secTop=document.querySelector(".section3").offsetTop;
scroll()
function scroll(){
    let scrollTop=window.scrollY
    let secLeft=(scrollTop-secTop)-1000
    if(scrollTop>=secLeft){
        gsap.to(".portfolio_in", {left:-secLeft, ease:"linear"})
    }
    requestAnimationFrame(scroll)
}









// window.addEventListener("scroll", ()=>{
//     w=window.innerWidth
//     let btnlink=document.querySelectorAll(".link")
//     console.log(w)
//     if(w>1440){
//         let secH=document.querySelector("#about_contents").offsetHeight
//         btnlink.forEach(function(btn, i){
//             btn.addEventListener("click", function(e){
//                 e.preventDefault();
//                 window.scrollTo({top: secH*i, behavior:"smooth"})
//             })
//         })
//     }else if(w<1440){
//         btnlink.forEach((link)=>{
//         link.addEventListener("click", (e)=>{
//         e.preventDefault();
//         let target=e.currentTarget.getAttribute("href");
//         let targetPosition=document.querySelector(target).offsetTop;
//         // console.log(target, targetPosition)
//         mmenu.classList.remove("active")
//         pannel.removeAttribute("style")
//         window.scrollTo({top: targetPosition-100, behavior:"smooth"})
//     })
// })

//     }
// })

// window.addEventListener("resize", ()=>{
//     w=window.innerWidth
//     if(w>320 && pannel.hasAttribute("style")){
//         pannel.removeAttribute("style")
//     }
// })


//behavior:"smooth"

    // let btnlink=document.querySelectorAll(".link")
    // let secH=document.querySelector("#about_contents").offsetHeight
    // btnlink.forEach(function(btn, i){
    //     btn.addEventListener("click", function(e){
    //         e.preventDefault()
    //         window.scrollTo({top: secH*i, behavior:"smooth"})
    //     })
    // })



// let btnLinks=document.querySelectorAll(".link");
//         btnLinks.forEach((link)=>{
//         link.addEventListener("click", (e)=>{
//         e.preventDefault();
//         let target=e.currentTarget.getAttribute("href");
//         let targetPosition=document.querySelector(target).offsetTop;
//         // console.log(target, targetPosition)
//         mmenu.classList.remove("active")
//         pannel.removeAttribute("style")
//         window.scrollTo({top: targetPosition-100, behavior:"smooth"})
//     })
// })

//header background color
let header=document.querySelector("#header");
window.addEventListener("scroll", function(){
    let top=window.scrollY;
    // console.log(header.offsetHeight)
    if(top>header.offsetHeight && w>=1025){
        header.classList.add("fixed")
    }else{
        header.classList.remove("fixed")
    }
})

let diverFish=document.querySelector("#portfolio_contents")
window.addEventListener("scroll",function(){
    let top=window.scrollY;
    // console.log(diverFish.offsetHeight);
    if(top>diverFish.offsetHeight){
        document.querySelector(".Web_portfolio_dive_wrap").classList.add("slide")
    }else{
        document.querySelector(".Web_portfolio_dive_wrap").classList.remove("slide")
    }
})

let profile=document.querySelector("#about_contents")
window.addEventListener("scroll",function(){
    let top=window.scrollY;
    // console.log(profile.offsetTop);
    if(top>profile.offsetTop-500){
        document.querySelector(".about_photo").classList.add("slide2")
        document.querySelector(".profile_wrap").classList.add("slide2")
    }else{
        document.querySelector(".about_photo").classList.remove("slide2")
        document.querySelector(".profile_wrap").classList.remove("slide2")
    }
})

let jellyFish=document.querySelector("#gallery_contents")
window.addEventListener("scroll",function(){
    let top=window.scrollY;
    // console.log(profile.offsetTop);
    if(top>jellyFish.offsetTop-500){
        document.querySelector(".gallery_octo").classList.add("jellyfish")
    }else{
        document.querySelector(".gallery_octo").classList.remove("jellyfish")
    }
})

let aboutTit=document.querySelector("#about_contents")
window.addEventListener("scroll",function(){
    let top=window.scrollY;
    // console.log(profile.offsetTop);
    if(top>aboutTit.offsetTop-500){
        document.querySelector(".about_tit h2").classList.add("show")
    }else{
        document.querySelector(".about_tit h2").classList.remove("show")
    }
})

// let portList=document.querySelector("#portfolio_contents")
// window.addEventListener("scroll",function(){
//     let top=window.scrollY;
//     // console.log(profile.offsetTop);
//     if(top>portList.offsetTop-500){
//         document.querySelector(".port_list").classList.add("play")
//     }else{
//         document.querySelector(".port_list").classList.remove("play")
//     }
// })


function spark(event){
    let i = document.createElement('i');
    i.style.left = (event.pageX) + 'px';
    i.style.top = (event.pageY) + 'px';
    i.style.scale = `${Math.random() * 2 + 1}`;
    i.style.setProperty('--x',getRandomTransitionValue());
    i.style.setProperty('--y',getRandomTransitionValue());


    document.body.appendChild(i);

    setTimeout(() => {
      document.body.removeChild(i);
    },2000)
  }

function getRandomTransitionValue(){
    return `${Math.random() * 400 - 200}px`;
  }

  document.addEventListener('mousemove', spark);


  

