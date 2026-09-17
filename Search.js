// ==========================================
// ONLINE CYBER 2.0 - SEARCH DATABASE
// ==========================================

const searchData = [

    {
        title: "SSC CHSL 2026",
        description: "SSC CHSL 2026 recruitment, eligibility, exam pattern and important dates.",
        category: "Latest Jobs",
        url: "ssc-chsl.html"
    },

    {
        title: "Bihar STET 2026",
        description: "Bihar STET 2026 notification, eligibility, syllabus and exam details.",
        category: "Latest Jobs",
        url: "bihar-stet.html"
    },

    {
        title: "Bihar Post Matric Scholarship",
        description: "Bihar Post Matric Scholarship eligibility, application process and important information.",
        category: "Scholarship",
        url: "scholarship.html"
    },

    {
        title: "Latest Government Jobs",
        description: "Latest government jobs, vacancy, eligibility, application date and notification.",
        category: "Latest Jobs",
        url: "latest-job.html"
    },

    {
        title: "Latest Admit Card",
        description: "Latest government exam admit card and download information.",
        category: "Admit Card",
        url: "Admit Card.html"
    },

    {
        title: "Latest Results",
        description: "Latest government exam results and result checking information.",
        category: "Results",
        url: "Results.html"
    },

    {
        title: "Bihar Sarkari Yojana",
        description: "Bihar government schemes, eligibility, benefits and application information.",
        category: "Sarkari Yojana",
        url: "Sarkari Yojana.html"
    }

];


// ==========================================
// SEARCH FUNCTION
// ==========================================

function searchWebsite() {

    const input = document.getElementById("searchInput");
    const resultsBox = document.getElementById("searchResults");

    const keyword = input.value.toLowerCase().trim();

    if (keyword === "") {
        resultsBox.innerHTML = "";
        return;
    }

    const results = searchData.filter(item => {

        return (
            item.title.toLowerCase().includes(keyword) ||
            item.description.toLowerCase().includes(keyword) ||
            item.category.toLowerCase().includes(keyword)
        );

    });


    // No result
    if (results.length === 0) {

        resultsBox.innerHTML = `
            <div class="no-result">
                ❌ No result found for "<b>${input.value}</b>"
            </div>
        `;

        return;
    }


    // Show results
    resultsBox.innerHTML = results.map(item => {

        return `
            <div class="search-result">

                <span class="search-category">
                    ${item.category}
                </span>

                <h3>${item.title}</h3>

                <p>${item.description}</p>

                <a href="${item.url}">
                    Read More →
                </a>

            </div>
        `;

    }).join("");

}


// ==========================================
// ENTER KEY SEARCH
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("searchInput");

    if (input) {

        input.addEventListener("keyup", function (event) {

            if (event.key === "Enter") {
                searchWebsite();
            }

        });

    }

});