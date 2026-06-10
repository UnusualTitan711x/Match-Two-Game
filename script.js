const EMOJIS = ["🐶", "🐱", "🦊", "🐸", "🦁", "🐧", "🦋", "🐙"];

let cards = [];
let flippedCards = [];
let matchedCount = 0;
let canFlip = true;

const board = document.getElementById("board");
const status_ = document.getElementById("status");
const restartBtn = document.getElementById("restart-btn");

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
}

// Creates a card element and returns it
function createCard(emoji) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.emoji = emoji;

    // Wrapper
    const inner = document.createElement("div");
    inner.classList.add("card-inner");

    // Front-side
    const front = document.createElement("div");
    front.classList.add("card-front");
    front.textContent = emoji;

    // Back-side
    const back = document.createElement("div");
    back.classList.add("card-back");
    back.textContent = "?";

    // Putting everything together
    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    // Adding click listener so it can do something when clicked
    card.addEventListener("click", onCardClick);

    return card;
}

function startGame() {
    // Initialize everything
    board.innerHTML = "";
    flippedCards = [];
    matchedCount = 0;
    canFlip = true;
    status_.textContent = "Find all the matching pairs!";

    const deck = shuffle([...EMOJIS, ...EMOJIS]);

    // Create a card for each element in the deck
    // Still don't understand this well
    cards = deck.map(emoji => {
        const card = createCard(emoji);
        board.appendChild(card); // add it to the board
        return card;
    })
}

function onCardClick(event) {
    const card = event.currentTarget;

    // Ignore if already flipped or matched
    if (!canFlip) return;
    if (card.classList.contains("flipped")) return;
    if (card.classList.contains("matched")) return;

    // Flip the card
    card.classList.add("flipped");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        // checkForMatch();
    }
}

restartBtn.addEventListener("click", startGame);

startGame();