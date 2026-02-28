const pages = document.querySelectorAll(".page");
let currentPage = 0;

const startMusic = document.getElementById("music.mp4");
const picsMusic = document.getElementById("music.mp3");
const finalMusic = document.getElementById("music.mp5");

startMusic.src = "music.mp4";
picsMusic.src = "music.mp3";
finalMusic.src = "music.mp5";


  function stopAllMusic(except) {
    // Starting page
    if(except !== 'start') {
        startMusic.pause();
        startMusic.currentTime = 0;
    }

    // Final page
    if(except !== 'final') {
        finalMusic.pause();
        finalMusic.currentTime = 0;
    }

    // Pics pages → only stop if except is NOT 'pics'
    if(except !== 'pics') {
        picsMusic.pause();
        picsMusic.currentTime = 0;
    }
}

function controlMusic(index) {
    // Starting page
    if(index === 0){
        stopAllMusic('start'); 
        startMusic.play();
    } 
    // Pics pages → 1 to 5
    else if(index >= 1 && index <= 5){
        stopAllMusic('pics');  // picsMusic stop cheyyakunda
        if(picsMusic.paused){   // only play if not already playing
            picsMusic.play();
        }
    } 
    // Video page → 6
    else if(index === 6){
        stopAllMusic(); // stop all
    } 
    // Final page → last
    else if(index === pages.length - 1){
        stopAllMusic('final'); 
        finalMusic.play();
    }
}

function showPage(index) {
    pages.forEach(page => {
        page.classList.remove("active");
    });

    pages[index].classList.add("active");

    controlMusic(index);

    if(index === pages.length - 1){
        launchConfetti();
    }
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

function launchConfetti() {
    for(let i=0; i<120; i++){
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor =
            "hsl(" + Math.random()*360 + ", 100%, 50%)";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}

/* Floating Hearts */
document.addEventListener("DOMContentLoaded", function() {

    const heartsContainer = document.getElementById("hearts-container");

    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "🍼 🧸" ;

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 400);

});
function startSite() {
    showPage(0);

    startMusic.play()
};
