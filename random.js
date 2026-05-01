let quotes = [
      "Believe in yourself",
    "Stay positive",
    "Never give up",
    "Dream big",
    "Do it today",
    "Nothing is impossible"
];
let color = ["red", "blue", "pink","green","yellow"];
function showQuote() {
    const colorIndex = Math.floor(Math.random() * quotes.length);
    const randomIndex = Math.floor(Math.random() * quotes.length);
      document.getElementById("quote").innerText = quotes[randomIndex];
      document.body.style.color = color[colorIndex];
      document.getElementById("quote").innerText = quotes[colorIndex];

    }