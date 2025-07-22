//timer of game
let sec = 0;
  window.onload = () => setInterval(() => {
    sec++;
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    document.getElementById('timer').textContent = `${m}:${s}`;
  }, 1000);
// Array of emojis to use
var emojiList = [
    "😀",
    "🐶",
    "🍕",
    "🚗",
    "🌟",
    "🐱",
    "🎈",
    "🧠"
];
// doubling the list to make two common emojis
emojiList = emojiList.concat(emojiList);
//randomizing the array
emojiList.sort(function(){
    return 0.5 - Math.random()
})
//appent the emoji data to the cards
var main = document.querySelector('.main')
    emojiList.forEach((emoji) => {
    var card = document.createElement("div")
    card.className="card p-6 bg-white rounded shadow-2xl "
    // card.id = `card-${index}`
    card.textContent = "?";
    card.setAttribute('data-emoji' , emoji)
    card.onclick =clickedOne;
    main.appendChild(card)
});
let firstCard = null;
let secondCard = null;
function clickedOne(e){
    e.preventDefault();
    this.classList.add("flipped");
    var attr = this.getAttribute('data-emoji')
    this.textContent = attr;    
    if (!firstCard) {
        firstCard = this;
        return;
    } else {
        secondCard = this;
    }
    var firstAttr = firstCard.getAttribute('data-emoji');
    var secondAttr = secondCard.getAttribute('data-emoji');
    //Checking if the card matches or not
    if (firstAttr===secondAttr) {
        // console.log("matched")
        finished();
        resetCards();
    } else {
        // console.log("different")
        setTimeout(()=>{
            firstCard.classList.remove("flipped");
            firstCard.textContent = "?";
            secondCard.classList.remove("flipped");
            secondCard.textContent = "?";
            resetCards();
        },1000)
    }
}
// reset the card variable when two matches or unmatches
function resetCards(){
     firstCard = null;
     secondCard = null; 
}
// check if the game is finished 
function finished() { 
    var isComplete = document.getElementsByClassName("flipped");
    isComplete = isComplete.length;
    if(isComplete==16){
        var announcer = document.querySelector(".announcer");
        youWon = document.createElement("div");
        youWon.className = "bg-gradient-to-r from-slate-300 to-cyan-900 bg-clip-text text-transparent"
        youWon.textContent = "Winner ! ";
        announcer.appendChild(youWon);
        celebration();
        fireworks();
        setTimeout(()=>{
            location.reload();    
        },3000)
    }
}


//extra animations 

function celebration(){
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
        return clearInterval(interval);
    }

    var particleCount = 100 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
}

function fireworks() { 
    var end = Date.now() + (1 * 1000);

    var colors = ['#da778e', '#FEA101', "#7AFA2B"];

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}