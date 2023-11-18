/*
Compilador

"#" Incrementa el valor numérico en 1.
"@" Decrementa el valor numérico en 1.
"*" Multiplica el valor numérico por sí mismo.
"&" Imprime el valor numérico actual.
*/

const fs = require("fs");
const messagePath = './challenge_02/message.txt';

fs.readFile(messagePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      compiler(data);
    }
});

function compiler(data) {
    let messageArray = data.split("");
    let compiledMessage = "";
    let currentNumber = 0;

    for (let i = 0; i < messageArray.length; i++) {
        const char = messageArray[i];
        
        switch (char) {
            case '#': // Incrementa
                currentNumber++;
                break;
            
            case '@': // Decrementa
                currentNumber--;
                break;
                
            case '*': // Multiplica por si mismo
                currentNumber = currentNumber * currentNumber;
                break;
                
            case '&': // Imprime
                compiledMessage += currentNumber.toString();
                break;
        }
    }

    console.log('Mensaje compilado...');
    console.log(compiledMessage);
}