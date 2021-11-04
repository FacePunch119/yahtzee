let Stored_Dice_3 = 0
let Stored = 0
let Stored_Dice_1 = 0
let Stored_Dice_5 = 0
let Stored_Dice_2 = 0
let Stored_Dice_4 = 0
let Dice_1 = 0
let Dice_2 = 0
let Dice_3 = 0
let Dice_4 = 0
let Dice_5 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Yes)
    Stored_Dice_3 = Stored
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    Stored_Dice_1 = Stored
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Yes)
    Stored_Dice_5 = Stored
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    Stored_Dice_2 = Stored
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Yes)
    Stored_Dice_4 = Stored
})
input.onGesture(Gesture.Shake, function () {
    Dice_1 = randint(1, 6)
    Dice_2 = randint(1, 6)
    Dice_3 = randint(1, 6)
    Dice_4 = randint(1, 6)
    Dice_5 = randint(1, 6)
})
basic.forever(function () {
    basic.showString("D1")
    basic.showNumber(Dice_1)
    basic.showString("D2")
    basic.showNumber(Dice_2)
    basic.showString("D3")
    basic.showNumber(Dice_3)
    basic.showString("D4")
    basic.showNumber(Dice_4)
    basic.showString("D5")
    basic.showNumber(Dice_5)
})
