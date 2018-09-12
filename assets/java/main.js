
var devMode = false;

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
    if (devMode)
        {giphyAPI.getLocalSample("face Palm", displayResultsUsingCardFactory);}
    else
        {giphyAPI.getGiphyAPI(searchString, displayResultsUsingCardFactory);}

}

function displayResultsUsingCardFactory(results) {
    results = giphyAPI.getDataFromResponse(results);

    console.debug("displayResults");
    getHTML("giphyRow").empty();

    for (var i = 0; i < results.length; i++) {
        let jsonCard = buildGiphyCard(results[i]);
        cardFactory.createCardByArrayOfJson(getHTML("giphyRow"), jsonCard);
    }
}

function buildGiphyCard(element){
    return jsonCard = [
        {
            "div": "<img>",
            "text": "",
            "attrs": {
                "class": "giphyItem",
                "src": element.images.fixed_height_still.url,
                "data-active": element.images.fixed_height.url,
                "data-inactive": element.images.fixed_height_still.url,
                "data-state": "inactive"
            }
        },
        { "div": "<p>", "text": "Rating: " + element.rating }
    ];
}

function switchGiphyState(giphyItem) {
    let state = giphyItem.attr("data-state");
    if (state === "inactive") {
        giphyItem.attr("data-state", "active");
        giphyItem.attr("src", giphyItem.attr("data-active"));
    } else {
        giphyItem.attr("data-state", "inactive");
        giphyItem.attr("src", giphyItem.attr("data-inactive"));
    }
}