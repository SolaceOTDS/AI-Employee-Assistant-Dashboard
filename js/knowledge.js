const knowledgeSearch = document.getElementById("knowledgeSearch");
const knowledgeCards = document.querySelectorAll(".knowledge-card");

knowledgeSearch.addEventListener("input", function() {
    const searchText = knowledgeSearch.value.toLowerCase();

    knowledgeCards.forEach(function(card) {
        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});