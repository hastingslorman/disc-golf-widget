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
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const discCard = document.querySelector(".disc-card");

function showDisc() {
    discImage.src = "images/" + discs[currentDisc];
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


// -------------------------
// SMOOTH SWIPE FUNCTION
// -------------------------

let touchStartX = 0;
let touchCurrentX = 0;
let isDragging = false;

discCard.addEventListener("touchstart", function(event) {
    touchStartX = event.touches[0].clientX;
    touchCurrentX = touchStartX;
    isDragging = true;

    discCard.style.transition = "none";
}, { passive: true });


discCard.addEventListener("touchmove", function(event) {
    if (!isDragging) return;

    touchCurrentX = event.touches[0].clientX;

    const distance = touchCurrentX - touchStartX;

    // Make the card follow your finger
    const rotation = distance * 0.04;

    discCard.style.transform =
        `translateX(${distance}px) rotate(${rotation}deg)`;

}, { passive: true });


discCard.addEventListener("touchend", function() {
    if (!isDragging) return;

    isDragging = false;

    const distance = touchCurrentX - touchStartX;

    // -------------------------
    // SWIPE LEFT
    // -------------------------

    if (distance < -100) {

        discCard.style.transition =
            "transform 0.35s cubic-bezier(.2,.8,.2,1)";

        discCard.style.transform =
            "translateX(-120vw) rotate(-15deg)";

        setTimeout(function() {

            currentDisc++;

            if (currentDisc >= discs.length) {
                currentDisc = 0;
            }

            showDisc();

            discCard.style.transition = "none";
            discCard.style.transform =
                "translateX(120vw) rotate(15deg)";

            requestAnimationFrame(function() {
                requestAnimationFrame(function() {

                    discCard.style.transition =
                        "transform 0.35s cubic-bezier(.2,.8,.2,1)";

                    discCard.style.transform =
                        "translateX(0) rotate(0deg)";
                });
            });

        }, 350);
    }

    // -------------------------
    // SWIPE RIGHT
    // -------------------------

    else if (distance > 100) {

        discCard.style.transition =
            "transform 0.35s cubic-bezier(.2,.8,.2,1)";

        discCard.style.transform =
            "translateX(120vw) rotate(15deg)";

        setTimeout(function() {

            currentDisc--;

            if (currentDisc < 0) {
                currentDisc = discs.length - 1;
            }

            showDisc();

            discCard.style.transition = "none";
            discCard.style.transform =
                "translateX(-120vw) rotate(-15deg)";

            requestAnimationFrame(function() {
                requestAnimationFrame(function() {

                    discCard.style.transition =
                        "transform 0.35s cubic-bezier(.2,.8,.2,1)";

                    discCard.style.transform =
                        "translateX(0) rotate(0deg)";
                });
            });

        }, 350);
    }

    // -------------------------
    // NOT ENOUGH TO SWIPE
    // -------------------------

    else {

        discCard.style.transition =
            "transform 0.3s cubic-bezier(.2,.8,.2,1)";

        discCard.style.transform =
            "translateX(0) rotate(0deg)";
    }

});