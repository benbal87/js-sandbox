let countDownRecursion = (numberToCountDownFrom) => {
    if (numberToCountDownFrom === -1) {
        return
    }

    console.log('number is: ', numberToCountDownFrom)

    countDownRecursion(numberToCountDownFrom - 1)
}

countDownRecursion(10)
