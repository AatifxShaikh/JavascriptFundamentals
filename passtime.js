//will try to read the howjscoderun.txt file and seperate the vowels and consonants

const fs = require('fs')
const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u'])
function procressedText(data) {
    let vowels = []
    let consonants = []
    for (let char of data.toLowerCase()) {
        if (vowelsSet.has(char)) {
            vowels.push(char);
        } else if (char >= 'a' && char <= 'z') {
            consonants.push(char)
        }
    }
    return { vowels, consonants }
}
fs.readFile('howJscoderuns.txt', 'utf-8', (err, inputD) => {
    if (err) throw err;
    const { vowels, consonants } = procressedText(inputD)
    console.log('Vowels', vowels);
    console.log('Consonants', consonants);




})