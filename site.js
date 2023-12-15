function addCoors(e) {
    const sensitivity = 15;
    const x = e.clientX;
    const y = e.clientY;
    e.target.style.backgroundPosition = String((x - window.innerWidth/2) / sensitivity) + "px " + String((y - window.innerHeight/2) / sensitivity) + "px";
}