

$(document).ready(function () {

    main();

    $(document).on("click", htmlDisplayHandler.addSearchBtn, function(){
        addSearch();
    });

    $(document).on("click", htmlDisplayHandler.getGiphy, function(){
        giphyBtnRequest($(this).text());
    });

    $(document).on("click", htmlDisplayHandler.giphyItem, function(){
        switchGiphyState($(this));
    });

});


