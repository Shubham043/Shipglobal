
document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", function () {
        const content = this.nextElementSibling;
        const isOpen = content.classList.contains("open");

        document
            .querySelectorAll(".accordion-content.open")
            .forEach((openContent) => {
                openContent.classList.remove("open");
                openContent.previousElementSibling.classList.remove("active");
                openContent.style.maxHeight = null;
            });

        if (!isOpen) {
            content.classList.add("open");
            content.style.maxHeight = content.scrollHeight + "px";
            this.classList.add("active");
        }
    });
});
