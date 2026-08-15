const discs = [
    "disc_1.png",
    "disc_2.png",
    "disc_3.png",
    "disc_4.png",
    "disc_5.png",
    "disc_6.png",
    "disc_7.png",
    "disc_8.png",
    "disc_9.png",
    "disc_10.png",
    "disc_11.png",
    "disc_12.png",
    "disc_13.png",
    "disc_14.png",
    "disc_15.png",
    "disc_16.png",
    "disc_17.png",
    "disc_18.png",
    "disc_19.png",
    "disc_20.png",
    "disc_21.png",
    "disc_22.png",
    "disc_23.png",
    "disc_24.png",
    "disc_25.png",
    "disc_26.png",
    "disc_27.png",
];

let currentDisc = 0;

const discImage = document.getElementById("disc-image");
const discCounter = document.getElementById("disc-counter");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const discCard = document.querySelector(".disc-card");


function showDisc() {
    discImage.src = "images/" + discs[currentDisc];
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