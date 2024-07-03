const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        // console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector('#center')
.addEventListener("mousemove",
    throttleFunction((details) => {
        //your code that should be executed according to your required times
        var div = document.createElement("div");
        div.classList.add('imagediv');
        div.style.left = details.clientX + 'px';
        div.style.top = details.clientY + 'px';

        var img = document.createElement("img");
        img.setAttribute("src", "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg")
        div.appendChild(img);

        document.body.appendChild(div);

        gsap.to(img, {
            y: "0",
            ease: Power1,
            duration: .6
        })
        gsap.to(img, {
            y: "100%",
            delay: .6,
            ease: Power2,
            
            
        })

        setTimeout(function(){
            div.remove()
        }, 2000)
    }, 400));