
var cardFactory = {
    createCardByArrayOfJson: function (parentDiv, cardArrayOfJson) {
        let elementDiv = $("<div>");
        elementDiv.addClass("card");
        cardArrayOfJson.forEach(element => {
            cardFactory.createSubCardElement(elementDiv, element);
        });
        $(parentDiv).append(elementDiv);

    },

    createSubCardElement: function (parentDiv, jsonElement) {

        let elementDivType = cardFactory.getJsonProperty(jsonElement, "div");
        let elementText = cardFactory.getJsonProperty(jsonElement, "text");
        let elementArrayAttr = cardFactory.getJsonProperty(jsonElement, "attrs");

        let elementDiv = $(elementDivType);
        elementDiv.text(elementText);
        $.each(elementArrayAttr, function (key, value) {
            elementDiv.attr(key, value);
        });

        $(parentDiv).append(elementDiv);
    },

    getJsonProperty: function (json, prop) {
        return json[prop] || null;
    }
};

