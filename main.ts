input.onButtonPressed(Button.A, function () {
    Choose()
    if (choose == 1) {
        basic.showIcon(IconNames.Yes)
        points += 3
    } else if (choose == 2) {
        basic.showString("T")
    } else {
        basic.showIcon(IconNames.No)
        if (points > 0) {
            points += -1
        }
    }
    basic.showNumber(points)
})
function Choose () {
    choose = randint(1, 3)
    if (choose == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (choose == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
}
input.onButtonPressed(Button.B, function () {
    Choose()
    if (choose == 2) {
        basic.showIcon(IconNames.Yes)
        points += 3
    } else if (choose == 3) {
        basic.showString("T")
    } else {
        basic.showIcon(IconNames.No)
        if (points > 0) {
            points += -1
        }
    }
    basic.showNumber(points)
})
input.onGesture(Gesture.Shake, function () {
    Choose()
    if (choose == 3) {
        basic.showIcon(IconNames.Yes)
        points += 3
    } else if (choose == 1) {
        basic.showString("T")
    } else {
        basic.showIcon(IconNames.No)
        if (points > 0) {
            points += -1
        }
    }
    basic.showNumber(points)
})
let choose = 0
let points = 0
points = 0
