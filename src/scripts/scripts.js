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
