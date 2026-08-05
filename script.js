
//alert("Script Loaded");
// Search Function
const searchInput = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");

if (searchInput && searchBtn) {

    searchBtn.addEventListener("click", searchData);

    searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            searchData();
        }
    });

    function searchData() {
        let value = searchInput.value.toLowerCase();
        let items = document.querySelectorAll(".card ul li");

        items.forEach(item => {
            if (item.textContent.toLowerCase().includes(value)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    }
}

// Active Menu
const menu = document.querySelectorAll(".navbar a");

menu.forEach(link => {
    link.addEventListener("click", function () {
        menu.forEach(a => a.classList.remove("active"));
        this.classList.add("active");
    });
});

// Top Boxes Hover
const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.transform = "scale(1.05)";
        box.style.transition = ".3s";
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "scale(1)";
    });
});

// Card Hover
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";
        card.style.transition = ".3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });
});

// Footer Year
const footer = document.querySelector("footer p");

if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `© ${year} Online Cyber 2.0 | All Rights Reserved`;
}