window.addEventListener("scroll", function () {
    let myDiv = document.querySelector("session-status");
    myDiv.style.top = window.scrollY + "px"; // Moves it with scrolling
});