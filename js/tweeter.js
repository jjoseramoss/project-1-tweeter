var input = document.getElementById("input-tweet");

var displayChar = document.getElementById("remaining-char");
var tweetBtn = document.getElementById("tweet-btn");
var tweetLabel = document.getElementById("tweet-label");

const totalChar = 160;
var remainingChar = 160;

// Enforce a 160-character limit per tweet
// If the limit is exceeded, prevent submission by disabling the ‘tweet’ button
// Use the text in the label to show a clear message about this 160-char limit
function validateInput(i) {
  // Get Remaining Characters left
  var newInputLength = input.value.length;
  remainingChar = totalChar - newInputLength;

  // Disable tweet btn if no more char available
  if (remainingChar < 0) {
    displayChar.style.color = "red";

    // Add disabled attribute
    tweetBtn.setAttribute("disabled", "");

    // Disabled styling
    tweetBtn.classList.add("disabledBtn");
    tweetBtn.classList.remove("btn-hover");

    // Display label message
    tweetLabel.innerHTML = `Limit Reached: ${totalChar} characters max`;
  }
  // User has characters remaining
  else {
    displayChar.style.color = "black";
    tweetBtn.removeAttribute("disabled", "");
    tweetBtn.classList.remove("disabledBtn");
    tweetBtn.classList.add("btn-hover");
    tweetLabel.innerHTML = "";
  }
}

function updateText() {
  inputSize = input.value.length;
  remainingChar = totalChar - inputSize;

  // Update number of remaining char
  displayChar.textContent = remainingChar;
}

function submit() {
  alert(input.value);
}
