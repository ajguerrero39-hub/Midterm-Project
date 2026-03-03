const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");

function renderSearchResults(items) {
  searchResults.innerHTML = "";

  items.forEach(word => {
    const li = document.createElement("li");
    li.textContent = word;
    searchResults.appendChild(li);
  });
}

function handleSearch() {

  const query = searchInput.value.trim().toLowerCase();
  
  
  const results = genreData.filter(word =>
    word.toLowerCase().startsWith(query)
  );

  renderSearchResults(results);
}

// Search as you type
renderSearchResults(genreData);
searchInput.addEventListener("input", handleSearch);

// Search on button click
// searchButton.addEventListener("click", handleSearch);
