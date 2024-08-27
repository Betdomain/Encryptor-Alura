function getInput(){
    let userSentence = document.getElementById('inputTextMain').value;
    let arraySplit = userSentence.split('');
    return;
}



function encryptMessage(){
        
    let userSentence = document.getElementById('inputTextMain').value;
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
document.getElementById('resultText').value = arrayEncrypted;

console.log(arrayEncrypted);
}


function decryptMessage(){
let userSentence = document.getElementById('inputTextMain').value;
let arrayEncrypted= userSentence;

arrayEncrypted = arrayEncrypted.replace(/enter/g, "e");
arrayEncrypted = arrayEncrypted.replace(/imes/g, "i");
arrayEncrypted = arrayEncrypted.replace(/ai/g, "a");
arrayEncrypted = arrayEncrypted.replace(/ober/g, "o");
arrayEncrypted = arrayEncrypted.replace(/ufat/g, "u");

document.getElementById('resultText').value = arrayEncrypted;



console.log(arrayEncrypted);
}

function copy() {
    var textarea = document.getElementById("resultText");
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    alert("el mensaje ha sido copiado");
    
  }

