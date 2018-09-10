
var messagesDictionary = {
    jumboWords: "Git Giphy With It!",
    textDescription: "Add to Giphy buttons:"
}

function getMessage(prop){
    return messagesDictionary[prop] || "Message Not Found";
}