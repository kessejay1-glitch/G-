// ===============================
// SEARCH FUNCTION lol
// ===============================

const input = document.getElementById("searchInput");

function performSearch() {

const query = input.value.trim();
if (!query) return;

// If it looks like a URL
const isUrl = query.includes(".") && !query.includes(" ");

if (isUrl) {
window.location.href = "https://" + query;
} else {
window.location.href =
"https://www.google.com/search?q=" +
encodeURIComponent(query);
}

}

// Button click (if you add a search button later)
document.addEventListener("click", (e) => {
if (e.target.id === "searchBtn") {
performSearch();
}
});

// Enter key support
input.addEventListener("keydown", (e) => {
if (e.key === "Enter") {
performSearch();
}
});

// ===============================
// SHORTCUT SUPPORT (Optional Enhancement)
// ===============================

document.querySelectorAll(".tile").forEach(tile => {

tile.addEventListener("click", () => {

const url = tile.getAttribute("data-url");

if (url) {
window.location.href = url;
}

});

});
