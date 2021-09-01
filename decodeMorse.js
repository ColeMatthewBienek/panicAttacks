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

// Splits a morse code sentence into an array of individual morse-encoded words
var getWordList = morseCode => morseCode.trim()
                                        .split('   ')

// Replaces the encoded words with plain-english words
var decodeWords = morseWords => morseWords.map(decodeWord)
                                          .join(' ')

// Decodes a single word from morse code to plain english
var decodeWord = codedWord => codedWord.split(' ')
                                       .map(decodeLetter)
                                       .join('')

// Translates a single morse code element to an english character
var decodeLetter = codedLetter => MORSE_CODE[codedLetter]

// Translates a morse-encoded sentence into plain english
var decodeMorse = morseCode => decodeWords(getWordList(morseCode))



console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
