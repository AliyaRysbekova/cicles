input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(200)
    }
})
