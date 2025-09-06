// Get elements
const form = document.getElementById("mood-form");
const moodSelect = document.getElementById("mood");
const descriptionTextArea = document.getElementById("description");
const submitBtn = document.getElementById("submit-btn");
const moodLogDiv = document.getElementById("mood-log");
const moodList = document.getElementById("mood-list");
const clearBtn = document.getElementById("clear-btn");

// Event handling for submit button
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Custom form validation
  if (validateForm()) {
    // Add mood log entry
    addMoodLogEntry();
  }
});

// Custom form validation function
function validateForm() {
  const mood = moodSelect.value;
  const description = descriptionTextArea.value.trim();
  if (mood === "") {
    alert("Please select a mood");
    return false;
  }
  if (description === "") {
    alert("Please enter a description");
    return false;
  }
  return true;
}

// Add mood log entry function
function addMoodLogEntry() {
  const mood = moodSelect.value;
  const description = descriptionTextArea.value.trim();
  const li = document.createElement("li");
  li.textContent = `${mood}: ${description}`;
  moodList.appendChild(li);
  // Clear form fields
  moodSelect.value = "";
  descriptionTextArea.value = "";
}

// Event handling for clear button
clearBtn.addEventListener("click", () => {
  // Clear mood log
  moodList.innerHTML = "";
});


// Update mood log entry count
function updateMoodLogCount() {
  const count = moodList.children.length;
  moodLogCount.textContent = `Mood log entries: ${count}`;
}

// Update mood log entry count when adding or clearing entries
moodList.addEventListener("DOMSubtreeModified", updateMoodLogCount);

// Interactive feature 2: Random mood suggestion
const moodSuggestionBtn = document.createElement("button");
moodSuggestionBtn.textContent = "Get random mood suggestion";
moodLogDiv.appendChild(moodSuggestionBtn);

moodSuggestionBtn.addEventListener("click", () => {
  const moods = ["happy 😊", "sad 😢", "neutral 😐","depressed 😞","heartbroken 💔"];
  const randomMood = moods[Math.floor(Math.random() * moods.length)];
  alert(`Try feeling ${randomMood} today!`);
});
