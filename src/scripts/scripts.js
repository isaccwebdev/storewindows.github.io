const elements = document.querySelectorAll('.fade-in');

const fadeInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeInObserver.unobserve(entry.target);
        }
    });
});

elements.forEach(element => {
    fadeInObserver.observe(element);
});
window.addEventListener("load", function() {
    var loadingScreen = document.getElementById("loading-screen");
    var content = document.getElementById("content");
    
    setTimeout(function() {
        loadingScreen.style.display = "none";
        content.classList.remove("hide");
    }, 2000);
});