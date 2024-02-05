let tl=gsap.timeline();
tl.from("nav",{
    opacity:0,
    delay:0.5,
    duration:1,
});
tl.from("nav div h1",{
    y:-100,
    stagger:0.5,
    duration:0.75,
});
tl.from(".section #subsection1 h1",{
    x:-100,
   stagger:0.5,
    duration:0.75,
    opacity:0,
});
tl.from(".section .img img",{
    scale:0.5,
    opacity:0,
    duration:0.5,
    
});
tl.from(".section2 .card",{
    opacity:0,
    y:100,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
    trigger:".section2 .card",
    scroller:"body",
    //markers:true,
    start:"top 80%",
    end:"top 60%",
    scrub: 2,
    }
})
