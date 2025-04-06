async function getQuote() {
  const quoteElement = document.getElementById("quote");
  quoteElement.innerText = "Loading...";

  try {
    const res = await fetch("https://api.quotable.io/random", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!res.ok) throw new Error("API error");

    const data = await res.json();
    quoteElement.innerText = `"${data.content}" — ${data.author}`;
  } catch (error) {
    quoteElement.innerText = "⚠️ Failed to load quote. Please try again later.";
  }
}

getQuote();

