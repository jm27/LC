// Create clock function
function clock() {
  const clockNode = document.createElement("div");
  return setInterval(() => {
    let date = new Date();
    let tick = date.toLocaleTimeString();
    clockNode.textContent = tick;
  }, 1000);
}

clock();
// Callbacks functions are functions that get passed other functions and get call at a certain point.
