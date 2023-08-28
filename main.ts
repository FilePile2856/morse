input.onButtonPressed(Button.A, function () {
    string = "" + string + "."
    console.log(string)
basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    for (let i = 0; i <= char.length - 1; i++) {
        if (string == morse[i]) {
            out = char[i]
            radio.sendString(out)
            basic.showString(out)
            console.log(out)
break;
        }
    }
    out = ""
    string = ""
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    string = "" + string + "-"
    console.log(string)
basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
})
let char: string[] = []
let morse: string[] = []
let out = ""
let string = ""
morse = [
".-",
"-...",
"-.-.",
"-..",
".",
"..-.",
"--.",
"....",
"..",
".---",
"-.-",
".-..",
"--",
"-.",
"---",
".--.",
"--.-",
".-.",
"...",
"-",
"..-",
"...-",
".--",
"-..-",
"-.--"
]
char = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
]
radio.setGroup(1)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.clearScreen()
