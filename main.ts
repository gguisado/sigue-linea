basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(25, 25)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(0, 25)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(25, 0)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
        cuteBot.stopcar()
    }
})
