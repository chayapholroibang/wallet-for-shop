radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        kamray += -1
        basic.showLeds(`
            . . . # .
            . . . # .
            # . . # .
            . # . # .
            . . # . .
            `)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . . # .
            . . . # .
            # . . # .
            . # . # .
            . . # . .
            `)
        kamray += 1
    }
})
let kamray = 0
