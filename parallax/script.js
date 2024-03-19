document.addEventListener("mousemove", parallax);
function parallax(e){
    console.log(e)
    this.querySelectorAll(".cl").forEach(cl => {
        const speed = cl.getAttribute('speed')

        const x = (window.innerWidth - e.pageX*speed)/50
        const y = (window.innerHeight - e.pageY*speed)/50

        cl.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
}