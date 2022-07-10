input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.East)
    basic.pause(1000)
    basic.showString("D")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
    basic.pause(1000)
    basic.showString("I")
})
basic.forever(function () {
	
})
