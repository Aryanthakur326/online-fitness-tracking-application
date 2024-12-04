document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("fitnessForm");
  const username = document.getElementById("username");
  const age = document.getElementById("age");
  const steps = document.getElementById("steps");

  const usernameError = document.getElementById("usernameError");
  const ageError = document.getElementById("ageError");
  const stepsError = document.getElementById("stepsError");
  const result = document.getElementById("result");

  // Validation helper function
  function validateInput(input, errorSpan, condition, message) {
    if (condition) {
      errorSpan.textContent = message;
      return false;
    } else {
      errorSpan.textContent = "";
      return true;
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validate each input
    const isNameValid = validateInput(
      username,
      usernameError,
      username.value.trim() === "",
      "Name is required."
    );

    const isAgeValid = validateInput(
      age,
      ageError,
      age.value <= 0 || age.value === "",
      "Please enter a valid age."
    );

    const isStepsValid = validateInput(
      steps,
      stepsError,
      steps.value <= 0 || steps.value === "",
      "Please enter a valid step count."
    );

    // If all inputs are valid
    if (isNameValid && isAgeValid && isStepsValid) {
      const userSteps = parseInt(steps.value, 10);
      let stepMessage = "You're on track!";

      if (userSteps < 5000) {
        stepMessage = "Let's aim for more steps tomorrow!";
      } else if (userSteps > 10000) {
        stepMessage = "Amazing! Keep it up!";
      }

      result.innerHTML = `
        <p class="success">Thank you, ${username.value}!</p>
        <p>Age: ${age.value}</p>
        <p>Daily Steps: ${steps.value}</p>
        <p>${stepMessage}</p>
      `;
    }
  });
});
