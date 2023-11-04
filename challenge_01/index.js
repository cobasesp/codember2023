const fs = require("fs");
const messagePath = './challenge_01/message.txt'

fs.readFile(messagePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      decryptMessage(data);
    }
});

function decryptMessage(txt) {
    let wordList = [];
    let repeatedWords = {};

    let message = txt.split(" ");

    for (let i = 0; i < message.length; i++) {
        const element = message[i];

        if(wordList.indexOf(element) == -1){
            wordList.push(element);
            repeatedWords[element] = 0;
        }

        repeatedWords[element]++;
    }

    let finalString = "";
    for (let i = 0; i < wordList.length; i++) {
        const word = wordList[i];

        finalString += word + repeatedWords[word];
    }

    console.log(finalString);
}