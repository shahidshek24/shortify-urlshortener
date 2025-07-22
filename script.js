async function shortenURL() {
  const longUrl = document.getElementById("longUrl").value.trim();
  const resultDiv = document.getElementById("result");

  // Validation
  if (!longUrl || !longUrl.startsWith("http")) {
    resultDiv.textContent = "Please enter a valid URL starting with http:// or https://";
    resultDiv.style.color = "red";
    return;
  }

  // Call TinyURL API
  try {
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`);
    const shortUrl = await response.text();
    resultDiv.innerHTML = `Shortened URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
    resultDiv.style.color = "green";
  } catch (error) {
    resultDiv.textContent = "Error: Unable to shorten the URL. Try again later.";
    resultDiv.style.color = "red";
  }
}
