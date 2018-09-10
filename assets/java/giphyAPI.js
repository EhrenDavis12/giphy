

var giphyAPI = {
    getGiphyAPI: function (searchWord, callBackFunction) {
        searchWord = giphyAPI.cleanSearchString(searchWord) || "facePalm";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            searchWord + "&api_key=w2TbIZFx8ZPKjMUHPf28Hu8R1kSt1DZN" +
            "&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                let results = response.data;
                console.debug("getGiphyAPI and results:");
                console.debug(results);
                localStorage.setItem("lastCall", JSON.stringify(results));
                callBackFunction(results);
            });

    },

    getLocalSample: function (searchWord, callBackFunction) {
        let sampleAPI = JSON.parse(localStorage.getItem("lastCall"));

        if (sampleAPI === null){
            giphyAPI.getGiphyAPI(searchWord, callBackFunction);
        }
        else{
            console.debug("getLocalSample and results:");
            console.debug(sampleAPI);
            callBackFunction(sampleAPI)
        }
    },

    cleanSearchString: function (str) {
        try {
            let returnWord = str.trim();
            returnWord = returnWord.replace(/ /g, "");
            return returnWord;
        } catch{
            return null;
        }
    }
}