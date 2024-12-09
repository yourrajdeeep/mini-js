let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("back-btn");
let nextBtn = document.getElementById("next-btn");


scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = "smooth";
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += -900;
});