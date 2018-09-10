
function main() {
    stateHandler("startScreen");
}

function addSearch() {
    var searchString = getHTML("searchBox").val();
    if (searchString !== "") {
        console.debug("addSearch: " + searchString);
        var btn = $("<button>");
        btn = btn.text(searchString)
        btn = btn.addClass('btn getGiphy');
        getHTML("buttonHolder").append(btn);
    }
}

function giphyBtnRequest(searchString) {
    console.debug("giphyBtnRequest: " + searchString);
    giphyAPI.getLocalSample("face Palm", displayResults);
}

function displayResults(results) {
    console.debug("displayResults");
    getHTML("giphyRow").empty();
    for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var image = $("<img  class='giphyItem'>");
        image.attr("src", results[i].images.fixed_height_still.url);
        image.attr("data-active", results[i].images.fixed_height.url);
        image.attr("data-inactive", results[i].images.fixed_height_still.url);
        image.attr("data-state", "inactive");

        gifDiv.prepend(p);
        gifDiv.prepend(image);

        getHTML("giphyRow").prepend(gifDiv);
    }
}

function switchGiphyState(giphyItem){
    let state = giphyItem.attr("data-state");
    if (state === "inactive"){
        giphyItem.attr("data-state", "active");
        giphyItem.attr("src", giphyItem.attr("data-active"));
    }else{
        giphyItem.attr("data-state", "inactive");
        giphyItem.attr("src", giphyItem.attr("data-inactive"));
    }
}