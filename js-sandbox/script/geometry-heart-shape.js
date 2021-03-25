function calculateRatio(squareSideLength) {
    const innerSquareSideLength = Math.sqrt(((squareSideLength / 2) ** 2) * 2)
    console.log('innerSquareSideLength', innerSquareSideLength, typeof innerSquareSideLength)

    const overhanging =
        (innerSquareSideLength / 2) - Math.sqrt(((innerSquareSideLength / 2) ** 2) - ((squareSideLength / 4) ** 2))
    console.log('overhanging', overhanging)

    const totalSideLengthWithAdditionalLength = 2 * overhanging + squareSideLength
    console.log('totalSideLengthWithAdditionalLength', totalSideLengthWithAdditionalLength)

    return squareSideLength / totalSideLengthWithAdditionalLength
}

const ratio = calculateRatio(400)
console.log('ratio', ratio)
// 0.8284271247461901

const metricColors = {
    contributors: '#FB8524',
    commitsCount: '#CC9916',
    codeVolumeSum: '#F3C62D',
    codingHoursSum: '#4F7CA9',
    velocity: '#23B1D9',
    efficiency_1: '#12B6CB',
    efficiency_2: '#B33FCC',
    numberOfRepositories: '#A9DE79',
    churn: '#4F59A9',
    pullRequestMergeRatio: '',
    averagePullRequestCycleTime: '',
    numberOfPullRequests: ''
}

function getMetricColorsObj(colors) {
    const result = {}
    Object.keys(colors).forEach(metricKey => {
        result[metricKey] = {
            color: colors[metricKey],
            borderTopStyle: `border-top: 5px solid ${colors[metricKey]};`
        }
    })
    return result
}

const metricColorsObj = getMetricColorsObj(metricColors)
console.log('metricColorsObj', metricColorsObj)
