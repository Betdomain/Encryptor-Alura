
let userSentence = "Esta es una frase de prueba";
let arraySplit = userSentence.split('');


for (let i = 0; i < arraySplit.length; i++){
    if (arraySplit[i] == 'e'){
        arraySplit[i] = 'enter';
    }
    else if (arraySplit[i] == 'i'){
        arraySplit[i] = 'imes';
    }
    else if (arraySplit[i] == 'a'){
        arraySplit[i] = 'ai';
    }
    else if (arraySplit[i] == 'o'){
        arraySplit[i] = 'ober';
    }
    else if (arraySplit[i] == 'u'){
        arraySplit[i] = 'ufat';
    }

}

let arrayEncrypted = arraySplit.join("");

console.log(arrayEncrypted);

arrayEncrypted = arrayEncrypted.replace(/enter/g, "e");
arrayEncrypted = arrayEncrypted.replace(/imes/g, "i");
arrayEncrypted = arrayEncrypted.replace(/ai/g, "a");
arrayEncrypted = arrayEncrypted.replace(/ober/g, "o");
arrayEncrypted = arrayEncrypted.replace(/ufat/g, "u");

console.log(arrayEncrypted);

