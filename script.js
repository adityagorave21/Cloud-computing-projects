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
    // 🌟 Show a default quote instead of error
    quoteElement.innerText = `"Believe you can and you're halfway there." — Theodore Roosevelt`;
  }
}

getQuote();


