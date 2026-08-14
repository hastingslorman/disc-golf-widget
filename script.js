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
    "disc_28.png"
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


nextButton.addEventListener("click", function() {

    currentDisc++;

    if (currentDisc >= discs.length) {
        currentDisc = 0;
    }

    showDisc();

});


previousButton.addEventListener("click", function() {

    currentDisc--;

    if (currentDisc < 0) {
        currentDisc = discs.length - 1;
    }

    showDisc();

});


let touchStartX = 0;


discCard.addEventListener("touchstart", function(event) {

    touchStartX = event.touches[0].clientX;

});


discCard.addEventListener("touchend", function(event) {

    const touchEndX = event.changedTouches[0].clientX;

    const swipeDistance = touchEndX - touchStartX;


    if (swipeDistance < -50) {

        currentDisc++;

        if (currentDisc >= discs.length) {
            currentDisc = 0;
        }

        showDisc();

    }


    if (swipeDistance > 50) {

        currentDisc--;

        if (currentDisc < 0) {
            currentDisc = discs.length - 1;
        }

        showDisc();

    }

});


showDisc();