function duckSearch() {
    var searchField = document.getElementById("searchField");
    if (searchField && searchField.value) {
        var query = escape("site:christ-off.github.io " + searchField.value);
        window.location.href = "https://duckduckgo.com/?q=" + query;
    }
}