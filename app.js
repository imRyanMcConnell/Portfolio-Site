const wrapper = document.querySelector(".content-wrapper");
const sections = document.querySelectorAll(".section");
const buttons = document.querySelectorAll("nav button");
const heroContainer = document.querySelector(".hero-container");

console.log(buttons);

let currentIndex = 2; // Start at the middle index

buttons[currentIndex].style.color = "#9883E5";

function navigateTo(index) {
    if (index < 0 || index >= buttons.length) return; // Prevent out-of-bounds navigation

    // Reset all buttons to black
    buttons.forEach(button => button.style.color = "black");

    const positions = [200, 100, 0, -100, -200];

    console.log(`Navigating to index: ${index}`);

    wrapper.style.transform = `translateX(${positions[index]}vw)`;
    console.log(`Applying transform: translateX(${positions[index]}vw)`);

    // Show the hero container when not on index 0
    if (index != 2) {
        heroContainer.style.transform = "translateX(510px)"
    } else {
        heroContainer.style.transform = "translateX(-510px)"
    }

    // Apply selected color to the clicked button
    buttons[index].style.color = "#9883E5";

    currentIndex = index; // Update current index
}

// Add keyboard navigation functionality
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        navigateTo(currentIndex + 1);
    } else if (event.key === "ArrowLeft") {
        navigateTo(currentIndex - 1);
    }
});
