
const wrapper = document.querySelector(".content-wrapper");
const sections = document.querySelectorAll(".section");
const buttons = document.querySelectorAll("nav button");
console.log(buttons);

buttons[2].style.color = "#9883E5";

function navigateTo(index) {
    // Reset all buttons to black
    buttons.forEach(button => button.style.color = "black");

    const positions = [200, 100, 0, -100, -200];

    console.log(`Navigating to index: ${index}`); // Debugging output

    if (index >= 0 && index < positions.length) {
        wrapper.style.transform = `translateX(${positions[index]}vw)`;
        console.log(`Applying transform: translateX(${positions[index]}vw)`);
    }

    // Apply selected color to the clicked button
    buttons[index].style.color = "#9883E5";
}
