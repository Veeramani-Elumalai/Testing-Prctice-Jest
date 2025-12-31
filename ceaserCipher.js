function ceaserCipher(str,shiftVal) {
    const plainAlphabets = "abcdefghijklmnopqrstuvwxyz";
    
    let encryptedStr = '';

    for(let i = 0; i < str.length; i++){
        const char = str[i];
        const lowerCase = char.toLowerCase();
        const index = plainAlphabets.indexOf(lowerCase);

        if (index === -1) {
            encryptedStr += char;
            continue;
        }
        const newIndex = (index + shiftVal) % 26;
        let shiftChar = plainAlphabets[newIndex]

        if(char === char.toUpperCase()){
            shiftChar = shiftChar.toUpperCase();
        }

        encryptedStr += shiftChar;
    }

    return encryptedStr;
}


module.exports = ceaserCipher;