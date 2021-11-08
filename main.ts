let Stored_Dice_3 = 0
let Stored = 0
let Stored_Dice_1 = 0
let Stored_Dice_5 = 0
let Stored_Dice_2 = 0
let Stored_Dice_4 = 0
let Shake_Count = 0
let Dice_1 = 0
let Dice_2 = 0
let Dice_3 = 0
let Dice_4 = 0
let Dice_5 = 0
input.onPinPressed(TouchPin.P0, function () {
    if (Stored_Dice_3 > 0) {
        Stored_Dice_3 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        Stored_Dice_3 = Stored
    }
})
input.onButtonPressed(Button.A, function () {
    if (Stored_Dice_1 > 0) {
        Stored_Dice_1 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        Stored_Dice_1 = Stored
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (Stored_Dice_5 > 0) {
        Stored_Dice_5 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        Stored_Dice_5 = Stored
    }
})
input.onButtonPressed(Button.B, function () {
    if (Stored_Dice_2 > 0) {
        Stored_Dice_2 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        Stored_Dice_2 = Stored
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (Stored_Dice_4 > 0) {
        Stored_Dice_4 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        Stored_Dice_4 = Stored
    }
})
input.onGesture(Gesture.Shake, function () {
    Shake_Count = Shake_Count + 1
    Dice_1 = randint(1, 6)
    Dice_2 = randint(1, 6)
    Dice_3 = randint(1, 6)
    Dice_4 = randint(1, 6)
    Dice_5 = randint(1, 6)
})
basic.forever(function () {
    if (true) {
    	
    } else {
    	
    }
})
