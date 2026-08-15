const discs = [
    {
        image: "disc_1.png",
        name: "MVP Reactor",
        flight: "5/5/-0.5/1.5",
        weight: "176g",
        type: "Midrange",
        description: "Straight with reliable fade",
        status: "Bagged"
    },
    {
        image: "disc_2.png",
        name: "Innova Beast",
        flight: "10/5/-2/2",
        weight: "173-175g",
        type: "Distance Driver",
        description: "Favorite disc",
        status: "Bagged"
    },
    {
        image: "disc_3.png",
        name: "Innova Destroyer",
        flight: "12/5/-1/3",
        weight: "173-175g",
        type: "Distance Driver",
        description: "Spike hyzer",
        status: "Bagged"
    },
    {
        image: "disc_4.png",
        name: "Innova Wraith",
        flight: "11/5/-1/3",
        weight: "170g",
        type: "Distance Driver",
        description: "Tight wooden lines",
        status: "Bagged"
    },
    {
        image: "disc_5.png",
        name: "Innova Mamba",
        flight: "11/6/-5/1",
        weight: "Unknown",
        type: "Distance Driver",
        description: "Understable",
        status: "Bagged"
    },
    {
        image: "disc_6.png",
        name: "Innova Xcaliber",
        flight: "12/5/0/4",
        weight: "171g",
        type: "Distance Driver",
        description: "Forehand-only",
        status: "Bagged"
    },
    {
        image: "disc_7.png",
        name: "Innova Thunderbird",
        flight: "9/5/0/2",
        weight: "Unknown",
        type: "Fairway Driver",
        description: "Technical forehand approach",
        status: "Bagged"
    },
    {
        image: "disc_8.png",
        name: "Innova Leopard 3",
        flight: "7/5/-2/1",
        weight: "171g",
        type: "Fairway Driver",
        description: "Trick approach",
        status: "Bagged"
    },
    {
        image: "disc_9.png",
        name: "Innova IT",
        flight: "7/6/-2/1",
        weight: "Unknown",
        type: "Fairway Driver",
        description: "Mini Mamba",
        status: "Bagged"
    },
    {
        image: "disc_10.png",
        name: "Innova Mako 3",
        flight: "5/5/0/0",
        weight: "175g",
        type: "Midrange",
        description: "Straight, workable approach",
        status: "Bagged"
    },
    {
        image: "disc_11.png",
        name: "Innova Toro",
        flight: "4/2/1/3",
        weight: "170g",
        type: "Midrange",
        description: "Zone OS clone",
        status: "Bagged"
    },
    {
        image: "disc_12.png",
        name: "Discraft Buzzz",
        flight: "5/4/-1/1",
        weight: "176g",
        type: "Midrange",
        description: "Overstable approach",
        status: "Bagged"
    },
    {
        image: "disc_13.png",
        name: "Axiom Disc Pixel",
        flight: "2/4/0/0.5",
        weight: "160g",
        type: "Putter",
        description: "Low-ceiling putts",
        status: "Bagged"
    },
    {
        image: "disc_14.png",
        name: "Kastaplast Berg",
        flight: "1/1/1/2",
        weight: "175g",
        type: "Approach",
        description: "Plop",
        status: "Bagged"
    },
    {
        image: "disc_15.png",
        name: "Discraft Luna",
        flight: "3/3/0/3",
        weight: "175g",
        type: "Putter",
        description: "Best putter ever",
        status: "Bagged"
    },
    {
        image: "disc_16.png",
        name: "Innova KC Pro Aviar",
        flight: "2/3/0/2",
        weight: "175g",
        type: "Putter",
        description: "Longer putts",
        status: "Bagged"
    },
    {
        image: "disc_17.png",
        name: "Innova Mamba",
        flight: "11/6/-5/1",
        weight: "167g",
        type: "Distance Driver",
        description: "Understable",
        status: "Retired"
    },
    {
        image: "disc_18.png",
        name: "Innova Destroyer",
        flight: "12/5/-1/3",
        weight: "173-175g",
        type: "Distance Driver",
        description: "Spike hyzer",
        status: "Retired"
    },
    {
        image: "disc_19.png",
        name: "Innova TL",
        flight: "7/4/-1/1",
        weight: "173-175g",
        type: "Fairway Driver",
        description: "Straight and controllable",
        status: "Archived"
    },
    {
        image: "disc_20.png",
        name: "Westside Discs Swan 1 Reborn",
        flight: "3/3/4/0",
        weight: "173g",
        type: "Putter",
        description: "Understable putter",
        status: "Archived"
    },
    {
        image: "disc_21.png",
        name: "Dynamic Discs Warden",
        flight: "2/4/0/0.5",
        weight: "173g",
        type: "Putter",
        description: "Classic",
        status: "Archived"
    },
    {
        image: "disc_22.png",
        name: "Innova Atlas",
        flight: "5/4/0/1",
        weight: "Unknown",
        type: "Midrange",
        description: "Straight over-mold",
        status: "Retired"
    },
    {
        image: "disc_23.png",
        name: "Innova Teebird",
        flight: "7/5/0/2",
        weight: "Unknown",
        type: "Fairway Driver",
        description: "Stable and straight",
        status: "Archived"
    },
    {
        image: "disc_24.png",
        name: "Discraft Glitch",
        flight: "1/7/0/0",
        weight: "151g",
        type: "Putter",
        description: "Lord Zulu",
        status: "Archived"
    },
    {
        image: "disc_25.png",
        name: "Kastaplast Berg",
        flight: "1/1/1/2",
        weight: "175g",
        type: "Approach",
        description: "Purely decorative",
        status: "Archived"
    },
    {
        image: "disc_26.png",
        name: "Discraft Comet",
        flight: "4/5/-2/1",
        weight: "177g",
        type: "Midrange",
        description: "Understable Midrange",
        status: "Archived"
    },
    {
        image: "disc_27.png",
        name: "Innova Wraith",
        flight: "11/5/-1/3",
        weight: "143g",
        type: "Distance Driver",
        description: "Too light",
        status: "Archived"
    }
];


let currentDisc = 0;

const discImage = document.getElementById("disc-image");
const discName = document.getElementById("disc-name");
const discInfo = document.getElementById("disc-info");
const discCounter = document.getElementById("disc-counter");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const discCard = document.querySelector(".disc-card");


function showDisc() {

    const disc = discs[currentDisc];

    discImage.src = "images/" + disc.image;

    discName.textContent = disc.name;

    discInfo.innerHTML = `
        <p><strong>Flight numbers:</strong> ${disc.flight}</p>
        <p><strong>Weight:</strong> ${disc.weight}</p>
        <p><strong>Type:</strong> ${disc.type}</p>
        <p><strong>Description:</strong> ${disc.description}</p>
        <p><strong>Status:</strong> ${disc.status}</p>
    `;

    discCounter.textContent =
        "Disc " + (currentDisc + 1) + " of " + discs.length;
}


// NEXT BUTTON

nextButton.addEventListener("click", function() {

    currentDisc++;

    if (currentDisc >= discs.length) {
        currentDisc = 0;
    }

    showDisc();

});


// PREVIOUS BUTTON

previousButton.addEventListener("click", function() {

    currentDisc--;

    if (currentDisc < 0) {
        currentDisc = discs.length - 1;
    }

    showDisc();

});


// SWIPE

let touchStartX = 0;
let isTouchingCard = false;


discCard.addEventListener("touchstart", function(event) {

    // Don't treat button presses as swipes

    if (event.target.closest("button")) {
        isTouchingCard = false;
        return;
    }

    isTouchingCard = true;
    touchStartX = event.touches[0].clientX;

});


discCard.addEventListener("touchend", function(event) {

    // Ignore button touches

    if (!isTouchingCard) {
        return;
    }

    const touchEndX = event.changedTouches[0].clientX;
    const swipeDistance = touchEndX - touchStartX;

    isTouchingCard = false;


    // Swipe left = next disc

    if (swipeDistance < -50) {

        currentDisc++;

        if (currentDisc >= discs.length) {
            currentDisc = 0;
        }

        showDisc();

    }


    // Swipe right = previous disc

    if (swipeDistance > 50) {

        currentDisc--;

        if (currentDisc < 0) {
            currentDisc = discs.length - 1;
        }

        showDisc();

    }

});


// Show first disc

showDisc();