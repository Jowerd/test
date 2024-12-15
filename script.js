document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.getElementById("searchBox");
    const jobItems = document.querySelectorAll(".job-item");

    searchBox.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();

        jobItems.forEach(job => {
            const jobText = job.textContent.toLowerCase();
            if (jobText.includes(searchTerm)) {
                job.style.display = "block";
            } else {
                job.style.display = "none";
            }
        });
    });
});