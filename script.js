document.addEventListener("DOMContentLoaded", function () {

    console.log("OnlineLibrary сайты іске қосылды!");

    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            card.style.boxShadow =
                "0 15px 40px rgba(124,58,237,0.3)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.boxShadow = "none";
        });

    });

});