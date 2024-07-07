const generateMemeBtn = document.querySelector(".generate-meme-btn")
const memeImg = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-title");
const memeAuthor = document.querySelector(".meme-author");


console.log(memeImg)

const updateDetails = (url, title, author) => {
    memeImg.setAttribute("src", url);
    memeAuthor.innerHTML = author;
    memeTitle.innerHTML = title
}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then(
        (response) => response.json()
    )
    .then(data => {
        updateDetails(data.url, data.title, data.author)
    })
}
generateMemeBtn.addEventListener("click", generateMeme);

document.addEventListener("click", (e) => {
    const {target} = e;
    if(!target.matches("button a")){
        return;
    }
    e.preventDefault()
    urlRoute();
})

const urlRoutes = {
    404: {
        template: "/404.html",
        title: "",
        description: ""

    },
    "/" : {
        template: "/index.html",
        title: "",
        description: ""
    },
    "/creatememe":{
        template: "./creatememe.html",
        title: "",
        description: ""
    }

}
const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "",event.target.href);
    urlLocationHandler();
}

const urlLocationHandler = async () => {
    const location = window.location.pathname
    if(location.length == 0){
        location = "/";

    }
    const route = urlRoutes[location] || urlRoutes[404];
    const html = await fetch(route.template).then((response) => {
        response.text()
    })
    document.getElementById("content").innerHTML = html;
}

window.onpopstate = urlLocationHandler;
window.route = urlRoute;
urlLocationHandler()