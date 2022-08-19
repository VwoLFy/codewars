function encrypt(text, n) {

    if (!text || n < 0 ) return text;
    
    for (let i = 1; i <= n; i++) {
        let encryptText = '';

        for (let index = 1; index < text.length; index++) {
            encryptText += text[index++];
        }
        for (let index = 0; index < text.length; index++) {
            encryptText += text[index++];
        }

        text = encryptText;        
    }
    
    return text;
}

function decrypt(encryptedText, n) {

    if (!encryptedText || n < 0 ) return encryptedText;

    for (let i = 1; i <= n; i++) {
        let decryptText = '';

        for (let index = 0; index < (encryptedText.length / 2); index++) {
            decryptText += encryptedText[Math.floor(encryptedText.length / 2) + index];
            if (index < Math.floor(encryptedText.length / 2)) decryptText += encryptedText[index];
        }

        encryptedText = decryptText;        
    }
    
    return encryptedText;

}

alert( encrypt("01234", 3) );
alert( decrypt("hsi  etTi sats!", 1) );