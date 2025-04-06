const fallbackQuotes = [
  { q: "Believe you can and you're halfway there.", a: "Theodore Roosevelt" },
  { q: "Do one thing every day that scares you.", a: "Eleanor Roosevelt" },
  { q: "Your time is limited, so don't waste it living someone else's life.", a: "Steve Jobs" },
  { q: "The best way to predict the future is to invent it.", a: "Alan Kay" },
  { q: "Happiness is not something ready-made. It comes from your own actions.", a: "Dalai Lama" }
];

async function getQuote() {
  const quoteElement = document.getElementById("quote");
  quoteElement.innerText = "Loading...";

  try {
    const res = await fetch("https://zenquotes.io/api/random");
    if (!res.ok) throw new Error("API Error");

    const data = await res.json();
    const quote = data[0].q;
    const author = data[0].a;

    quoteElement.innerText = `"${quote}" — ${author}`;
  } catch (error) {
    // Pick a random fallback quote
    const random = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    quoteElement.innerText = `"${random.q}" — ${random.a}`;
  }
}

getQuote();



