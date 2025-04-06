async function getQuote() {
  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    document.getElementById("quote").innerText = `"${data.content}" — ${data.author}`;
  } catch (error) {
    document.getElementById("quote").innerText = "Failed to load quote. Try again.";
  }
}

getQuote();
