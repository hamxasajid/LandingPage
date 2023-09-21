document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    const navButton = document.querySelector('.button');

    toggleButton.addEventListener('click', function () {
        navButton.classList.toggle('active');
    });
});
