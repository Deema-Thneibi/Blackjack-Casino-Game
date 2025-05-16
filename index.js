// Variables
let card4 = {};
let cardBack = "";
let availableCards;
let playerSum = 0;
let dealerSum = 0;
let playerCardCount = 0;
let dealerCardCount = 0
const player_cards_class = document.querySelector(".player .cards");
const dealer_cards_class = document.querySelector(".dealer .cards");
const player_sum_cards = document.querySelector(".player span");
const dealer_sum_cards = document.querySelector(".dealer span");
const standButton = document.querySelector(".standButton");
const hitButton = document.querySelector(".hitButton");
const messageParagClass = document.querySelector(".message p");
const messageClass = document.querySelector(".message");
const cards = [
    {
        id: 1,
        value: 2,
        img: "./cards/2-C.png",
    },
    {
        id: 2,
        value: 2,
        img: "./cards/2-D.png",
    },
    {
        id: 3,
        value: 2,
        img: "./cards/2-H.png",
    },
    {
        id: 4,
        value: 2,
        img: "./cards/2-S.png",
    },

    //  3
    {
        id: 5,
        value: 3,
        img: "./cards/3-C.png",
    },

    {
        id: 6,
        value: 3,
        img: "./cards/3-D.png",
    },

    {
        id: 7,
        value: 3,
        img: "./cards/3-H.png",
    },

    {
        id: 8,
        value: 3,
        img: "./cards/3-S.png",
    },

    //  4
    {
        id: 9,
        value: 4,
        img: "./cards/4-C.png",
    },

    {
        id: 10,
        value: 4,
        img: "./cards/4-D.png",
    },

    {
        id: 11,
        value: 4,
        img: "./cards/4-H.png",
    },

    {
        id: 12,
        value: 4,
        img: "./cards/4-S.png",
    },


    //  5
    {
        id: 13,
        value: 5,
        img: "./cards/5-C.png",
    },

    {
        id: 14,
        value: 5,
        img: "./cards/5-D.png",
    },

    {
        id: 15,
        value: 5,
        img: "./cards/5-H.png",
    },

    {
        id: 16,
        value: 5,
        img: "./cards/5-S.png",
    },


    //  6
    {
        id: 17,
        value: 6,
        img: "./cards/6-C.png",
    },

    {
        id: 18,
        value: 6,
        img: "./cards/6-D.png",
    },

    {
        id: 19,
        value: 6,
        img: "./cards/6-H.png",
    },

    {
        id: 20,
        value: 6,
        img: "./cards/6-S.png",
    },


    //  7
    {
        id: 21,
        value: 7,
        img: "./cards/7-C.png",
    },

    {
        id: 22,
        value: 7,
        img: "./cards/7-D.png",
    },

    {
        id: 23,
        value: 7,
        img: "./cards/7-H.png",
    },

    {
        id: 24,
        value: 7,
        img: "./cards/7-S.png",
    },


    //  8
    {
        id: 25,
        value: 8,
        img: "./cards/8-C.png",
    },

    {
        id: 26,
        value: 8,
        img: "./cards/8-D.png",
    },

    {
        id: 27,
        value: 8,
        img: "./cards/8-H.png",
    },

    {
        id: 28,
        value: 8,
        img: "./cards/8-S.png",
    },


    //  9
    {
        id: 29,
        value: 9,
        img: "./cards/9-C.png",
    },

    {
        id: 30,
        value: 9,
        img: "./cards/9-D.png",
    },

    {
        id: 31,
        value: 9,
        img: "./cards/9-H.png",
    },

    {
        id: 32,
        value: 9,
        img: "./cards/9-S.png",
    },

    //  10
    {
        id: 33,
        value: 10,
        img: "./cards/10-C.png",
    },

    {
        id: 34,
        value: 10,
        img: "./cards/10-D.png",
    },

    {
        id: 35,
        value: 10,
        img: "./cards/10-H.png",
    },

    {
        id: 36,
        value: 10,
        img: "./cards/10-S.png",
    },


    //  1
    {
        id: 37,
        value: 1,
        img: "./cards/A-C.png",
    },

    {
        id: 38,
        value: 1,
        img: "./cards/A-D.png",
    },

    {
        id: 39,
        value: 1,
        img: "./cards/A-H.png",
    },

    {
        id: 40,
        value: 1,
        img: "./cards/A-S.png",
    },


    //  J
    {
        id: 41,
        value: 10,
        img: "./cards/J-C.png",
    },

    {
        id: 42,
        value: 10,
        img: "./cards/J-D.png",
    },

    {
        id: 43,
        value: 10,
        img: "./cards/J-H.png",
    },

    {
        id: 44,
        value: 10,
        img: "./cards/J-S.png",
    },


    //  K
    {
        id: 45,
        value: 10,
        img: "./cards/K-C.png",
    },

    {
        id: 46,
        value: 10,
        img: "./cards/K-D.png",
    },

    {
        id: 47,
        value: 10,
        img: "./cards/K-H.png",
    },

    {
        id: 48,
        value: 10,
        img: "./cards/K-S.png",
    },

    //  Q
    {
        id: 49,
        value: 10,
        img: "./cards/Q-C.png",
    },

    {
        id: 50,
        value: 10,
        img: "./cards/Q-D.png",
    },

    {
        id: 51,
        value: 10,
        img: "./cards/Q-H.png",
    },

    {
        id: 52,
        value: 10,
        img: "./cards/Q-S.png",
    },
]



// functions
const startGame = () => {
    document.querySelector("header").style.display = "none";
    document.querySelector("main").style.display = "block";
    deal();
}


const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const card = availableCards[randomIndex];
    availableCards.splice(randomIndex, 1);
    return card;
};



const deal = () => {
    standButton.style.cursor = "pointer";
    hitButton.style.cursor = "pointer";
    standButton.style.pointerEvents = "auto";
    hitButton.style.pointerEvents = "auto";
    standButton.style.opacity = "1";
    hitButton.style.opacity = "1";

    player_sum_cards.textContent = 0;
    dealer_sum_cards.textContent = 0;

    availableCards = [...cards];
    playerSum = 0;
    dealerSum = 0;
    playerCardCount = 0;
    dealerCardCount = 0;
    player_cards_class.innerHTML = "";
    dealer_cards_class.innerHTML = "";

    const card1 = getRandomCard();
    const card2 = getRandomCard();
    const card3 = getRandomCard();
    card4 = getRandomCard();

    const playerCards = [card1, card2];
    const dealerCards = card3;


    // 1. عرض البطاقات أولاً
    player_cards_class.innerHTML = playerCards.map(card => `
        <div class="card"><img src="${card.img}" alt="card${card.value}" /></div>
    `).join("");

    dealer_cards_class.innerHTML = `
        <div class="card"><img src="${dealerCards.img}" alt="card${dealerCards.value}" /></div>
        <div class="card" id="cardBack"><img src="./cards/BACK.png" alt="cardBack" /></div>
    `;

    // 2. نؤخر الحساب لحين اختيار قيمة A
    setTimeout(() => {
        playerCards.forEach(card => {
            if (card.value === 1) {
                const chosen = chooseValueOfCard1();
                playerSum += chosen;
            } else {
                playerSum += card.value;
            }
        });

        if (dealerCards.value === 1) {
            dealerSum = 11;
        } else {
            dealerSum = dealerCards.value
        }

        // 3. عرض المجموع
        player_sum_cards.textContent = playerSum;
        dealer_sum_cards.textContent = dealerSum;
    }, 100); // ننتظر  عشان تكون البطاقات ظهرت قبل prompt
    cardBack = document.querySelector("#cardBack");
    dealerCardCount++;
    playerCardCount++;

};



const chooseValueOfCard1 = () => {
    return parseInt(prompt(`You got an Ace!\n\nChoose its value:\n1 or 11`, "11")) === 1 ? 1 : 11;
};


const stand = () => {
    standButton.style.cursor = "not-allowed";
    hitButton.style.cursor = "not-allowed";
    standButton.style.pointerEvents = "none";
    hitButton.style.pointerEvents = "none";
    standButton.style.opacity = "0.6";
    hitButton.style.opacity = "0.6";

    cardBack.innerHTML = `<img src="${card4.img}" alt = "card${card4.value}"/>`
    dealerSum = dealerSum + (card4.value === 1 ? 11 : card4.value);
    dealer_sum_cards.textContent = dealerSum; // 10

    setTimeout(() => {
        while (dealerSum < 17) {
            const card = getRandomCard();
            dealer_cards_class.innerHTML += `
        <div class="card"><img src="${card.img}" alt="card${card.value}" /></div>
    `;
            if (card.value === 1) {
                dealerSum += 11;
            } else {
                dealerSum += card.value
            }
            dealerCardCount++;
        }
        dealer_sum_cards.textContent = dealerSum;
    }, 500)

    if (playerSum > dealerSum && playerSum <= 21) {
        setTimeout(() => {
            successMessage("🎉 You win with a higher hand! 🏆");
        }, 2000)
    }

    else if (playerSum === 21 && playerCardCount === 2) {
        setTimeout(() => {
            successMessage("🎉 Blackjack! You win! 🏆");
        }, 2000)
    }

    else if (dealerSum > 21) {
        setTimeout(() => {
            successMessage("🎉 Dealer busted! You win! 🏆");
        }, 2000)
    }

    else if (playerSum > 21) {
        setTimeout(() => {
            errorMessage("❌ You busted! Dealer wins 😔");
        }, 2000)
    }

    else if (dealerSum > playerSum && dealerSum <= 21) {
        setTimeout(() => {
            errorMessage("❌ Dealer wins with a higher hand. 😔");
        }, 2000)
    }

    else if (dealerSum === 21 && dealerCardCount === 2) {
        setTimeout(() => {
            errorMessage("❌ Dealer got Blackjack. You lose. 😔");
        }, 2000)
    }

    else if (dealerSum === playerSum && dealerSum <= 21 && playerSum <= 21) {
        setTimeout(() => {
            tieMessage("⚖️ It's a tie! (Push)");
        }, 2000)
    }
}


const successMessage = (message) => {
    messageClass.style.display = "flex";
    messageParagClass.textContent = message;
    messageParagClass.style.backgroundColor = " #075f1a";
    setTimeout(() => {
        messageClass.style.display = "none";
        deal();
    }, 3000);
}

const errorMessage = (message) => {
    messageClass.style.display = "flex";
    messageParagClass.textContent = message;
    messageParagClass.style.backgroundColor = "#5f0707";
    setTimeout(() => {
        messageClass.style.display = "none";
        deal();
    }, 3000);

}

const tieMessage = (message) => {
    messageClass.style.display = "flex";
    messageParagClass.textContent = message;
    messageParagClass.style.backgroundColor = "#5f4b07";
    setTimeout(() => {
        messageClass.style.display = "none";
        deal();

    }, 3000);
}

const hit = () => {
    if (playerSum > 21) {
        hitButton.style.cursor = "not-allowed";
        hitButton.style.pointerEvents = "none";
        hitButton.style.opacity = "0.6";
        return;
    }
    const card = getRandomCard();
    player_cards_class.innerHTML += `
        <div class="card"><img src="${card.img}" alt="card${card.value}" /></div>
    `;


    // 2. نؤخر الحساب لحين اختيار قيمة A
    setTimeout(() => {
        if (card.value === 1) {
            const chosen = chooseValueOfCard1();
            playerSum += chosen;
        } else {
            playerSum += card.value;
        }

        // 3. عرض المجموع
        player_sum_cards.textContent = playerSum;
        if (playerSum > 21) {
            hitButton.style.cursor = "not-allowed";
            hitButton.style.pointerEvents = "none";
            hitButton.style.opacity = "0.6";
        }
    }, 100); // ننتظر  عشان تكون البطاقات ظهرت قبل prompt

    playerCardCount++;
}

document.querySelector(".playButton").addEventListener("click", startGame);
document.querySelector(".dealButton").addEventListener("click", deal);
standButton.addEventListener("click", stand);
hitButton.addEventListener("click", hit);


