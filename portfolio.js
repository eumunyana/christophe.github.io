// Smooth scrolling for internal links
document.addEventListener("DOMContentLoaded", function() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            const offset = targetElement.getBoundingClientRect().top;
            const headerHeight = document.querySelector("header").offsetHeight;

            window.scrollTo({
                top: offset + window.scrollY - headerHeight,
                behavior: "smooth"
            });
        });
    });
});
