// Function to update the greeting based on the time of day
function getGreeting() {
  const hours = new Date().getHours(); 
  const greetingElement = document.getElementById("greeting");

  if (hours < 12) {
    greetingElement.textContent = "Good Morning! Ready to find your next computer?";
  } else if (hours < 18) {
    greetingElement.textContent = "Good Afternoon! Let's explore tech that fits your needs!";
  } else {
    greetingElement.textContent = "Good Evening! Find the perfect computer before bed!";
  }
}

// Function to show the sales message based on the date
function showSalesMessage() {
  const salesElement = document.getElementById("Sales");
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); 
  const currentDay = currentDate.getDate();

  // Check if the date is before January 1 (Holiday Deals)
  if (currentMonth === 11 || (currentMonth === 0 && currentDay < 1)) {
    salesElement.textContent = "🎄 Holiday Deals! Get the best prices before January 1!";
    startFlashingEffect(salesElement);
  }
  // Winter Sales from January 1 to March 31
  else if (currentMonth >= 0 && currentMonth <= 2) {
    salesElement.textContent = "❄️ Winter Sales! Stay warm with hot deals through March!";
  }
  // General Sales Message After March 31
  else {
    salesElement.textContent = "🔥 Check out our year-round best tech deals!";
  }
}

// Function to make the "Holiday Deals" text flash between red and green
function startFlashingEffect(element) {
  let isRed = true;

  setInterval(() => {
    if (isRed) {
      element.style.color = "green";
    } else {
      element.style.color = "red";
    }
    isRed = !isRed;
  }, 2000); 
}

// Run both functions when the page loads
window.onload = function () {
  getGreeting();        
  showSalesMessage();   
};
