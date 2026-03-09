# GameHub
by Anthony Guerrero

Made with W3Schools and code from Professor Barry Cumbie

> An information hub for video games.

## User Story ##
**As A** Video game fan

**I want** In-depth information of video games, from genre to people involved to development history.

**So That** I can rely on an accurate and robust archive for any number of reasons, like research.

[Source Code](https://github.com/ajguerrero39-hub/midterm-project)

[True App](https://ajguerrero39-hub.github.io/midterm-project/)

## Concept For This App ##

<img width = "1000" height = 10000 src = https://github.com/ajguerrero39-hub/midterm-project/blob/f9f61b816c9cbcbbc0c2a711f0450d0b7445cfb6/assets/Screenshot%202026-03-05%20224452.png/>

Instead of a store setting, I wanted it to be more open to people who wish to voice their opinions, like Google Reviews, but as a dedicated site.
## Code Sample

This is how searching works

First, from `scripts/index-search.js`, this creates the default (full) list of Titles, then waits for input
```js
renderSearchResults(gameData);
searchInput.addEventListener("input", handleSearch);
```
Next, when the user inputs into the search bar, the script takes it and begins filtering the list based off of it in real time

```js
function handleSearch() {

  const query = searchInput.value.trim().toLowerCase();
  
  
  const results = gameData.filter(word =>
    word.toLowerCase().startsWith(query)
  );

  renderSearchResults(results);
}
```
Finally, the final list is "printed out"
```js
function renderSearchResults(items) {
  searchResults.innerHTML = "";

  items.forEach(word => {
    const li = document.createElement("li");
    li.textContent = word;
    searchResults.appendChild(li);
  });
}
```
Tested on desktop and mobile with no issues.
