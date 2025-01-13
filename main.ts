input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendNumber(4)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(99)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(5)
    basic.pause(100)
    radio.sendNumber(6)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(3)
})
basic.forever(function () {
	
})
