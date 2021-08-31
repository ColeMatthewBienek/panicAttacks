var MORSE_CODE = {
 '-.-.--': '!',
  '.-..-.': '"',
  '...-..-': '$',
  '.-...': '&',
  '.----.': '\'',
  '-.--.': '(',
  '-.--.-': ')',
  '.-.-.': '+',
  '--..--': ',',
  '-....-': '-',
  '.-.-.-': '.',
  '-..-.': '/',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '..--..': '?',
  '.--.-.': '@',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--.-': '_',
  '...---...': 'SOS' 
}


//split at the three space delimiter
function splitAtThree (morseCode) {
    console.log('split at three: ',morseCode.split(/ {3}/g))
    return morseCode.split(/ {3}/g)
}

//split the words into letters
function splitWords (morseCode) {
    var letters = []
    morseCode.forEach(function(words) {
       letters.push(words.split(' '))
    })
    console.log('split words ',letters)
    return letters
}


//translate the letters
function translateMorse (morseCode) {
   var translated= []
   morseCode.forEach(function(word){
       translated.push(MORSE_CODE[word])
   })
    
    return translated
}

function sentenceBuild (words) {
    var waitForIt = []
    words.forEach(function(ele) {
        waitForIt.push(ele.join(''))
    })
    console.log('Wait...',waitForIt)
    return waitForIt
}

//controlling function=>will call the others
function decodeMorse (morseCode) {
    //split the symbls at word breaks
    var decode = splitAtThree(morseCode)
    
    //split words into letters
    var splitIntoLetters = splitWords(decode)
    
    //translate and store words as seperate elements
    var almostDone = []
    splitIntoLetters.forEach(function(word){
        almostDone.push(translateMorse(word))
    })
   
    //clean up the sentence and join the array with a space between elements
    var nearlyThere = sentenceBuild(almostDone) 
    var allDone = nearlyThere.join(' ')
    console.log('maybe...',allDone)
    return allDone.trim()
}


decodeMorse('.... . -.--   .--- ..- -.. .')
