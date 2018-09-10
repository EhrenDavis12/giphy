
function stateHandler(state) {
    switch (state) {
        case "startScreen":
            console.debug("state: startScreen");
            htmlDisplayHandler.startScreen();
            break;
        default:
            console.debug("state: default");
            htmlDisplayHandler.startScreen();
            break;
    }
}

function getHTML(prop) {
    return $(htmlDisplayHandler[prop]);
}

var htmlDisplayHandler = {
    jumboWords: ".jumboWords",
    textDescription: "#textDescription",
    searchBox: "#searchBox",
    addSearchBtn: "#addSearchBtn",
    buttonHolder: "#buttonHolder",
    getGiphy: ".getGiphy",
    giphyRow: "#giphyRow",
    giphyItem: ".giphyItem",

    startScreen: function () {
        getHTML("jumboWords").text(getMessage("jumboWords"));
        getHTML("textDescription").text(getMessage("textDescription"));
    }
}