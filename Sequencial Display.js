// Reference to all input fields
const inputs = [
  document.getElementById("input1"),
  document.getElementById("input2"),
  document.getElementById("input3"),
  document.getElementById("input4"),
  document.getElementById("input5"),
  document.getElementById("input6"),
  document.getElementById("input7"),
  document.getElementById("input8"),
  document.getElementById("input9"),
  document.getElementById("input10"),
];

// Reference to the button
const startButton = document.getElementById("start-button");

// Add click event listener to the button
startButton.addEventListener("click", () => {
  let delay = 0;

  // Loop through each input and update it after a delay
  inputs.forEach((input, index) => {
    setTimeout(() => {
      input.value = "--->";
      input.style.fontWeight = "bold";
    }, delay);

    // Increase delay for the next input
    delay += 1000; // 1 second interval
  });
});
