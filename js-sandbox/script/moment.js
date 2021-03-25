const moment = require('moment')

// const timeStampsOk = [
//     1598918400000,
//     1601510400000,
//     1604188800000,
//     1606780800000,
//     1609459200000,
//     1612137600000
// ]
// console.log('first')
// for (const timeStamp of timeStampsOk) {
//     console.log(timeStamp, ' | ', moment(timeStamp).format('YYYY-MM-DD'))
// }

// const timeStampsError = [
//     1590969600000,
//     1593561600000
// ]
// console.log('second')
// for (const timeStamp of timeStampsError) {
//     console.log(timeStamp, ' | ', moment(timeStamp).format('YYYY-MM-DD'))
// }

// for (const timeStamp of timeStamps) {
//     console.log(timeStamp, ' | ', moment(timeStamp).format('YYYY-MM-DD'))
//     console.log(timeStamp, ' | ', moment(timeStamp).format('MMM.D YY'))
// }
//
// const dates = [
//     '2020-12-28',
//     '2009-08-21',
//     '2025-06-07',
//     '2017-08-09',
//     '2012-06-08',
//     '2002-05-04',
//     '2001-09-14'
// ]
//
// dates.sort((a, b) => {
//     const aValue = moment(a).valueOf()
//     const bValue = moment(b).valueOf()
//     return bValue - aValue
// })
//
// console.log(dates)

// const time = 1610389826000
// const momentTime = moment(time)
// const momentTimeFormatted = moment(time).format('YYYY-MM-DD')
// console.log(momentTimeFormatted)
//
// const result = momentTime.isSame(moment(), 'day')
// console.log(result)


// const dates = [
//     '2021-02-01',
//     '2021-02-08',
//     '2021-02-15',
//     '2021-02-22',
//     '2021-03-01',
//     '2021-03-08',
// ]
//
// for (const date of dates) {
//     console.log(moment(date).format('x'))
// }

// const dates = [
//     '2020-04-13',
//     '2020-04-14',
//     '2020-04-15',
//     '2020-04-16',
//     '2020-04-17',
//     '2020-04-18',
//     '2020-04-19',
//     '2020-04-20',
//     '2020-04-21',
//     '2020-04-22',
//     '2020-04-23',
//     '2020-04-24',
//     '2020-04-25',
//     '2020-04-26',
//     '2020-04-27',
//     '2020-04-28',
//     '2020-04-29',
//     '2020-04-30'
// ]
//
// console.log(dates.map(date => moment(date).toISOString()))
// console.log(dates.map(date => moment(date).format('x')))

// function getMetricCardsInterval() {
//     const getMomentUtc = momentTime => momentTime.format('YYYY-MM-DD');
//     const subtract = (momentObj, numberOfMonths) =>
//         momentObj.clone().subtract(numberOfMonths, 'months');
//     const getResult = (from, to) => ({ from, to });
//
//     const actualTo = moment();
//     const actualFrom = subtract(actualTo.clone().startOf('month'), 5);
//     return getResult(getMomentUtc(actualFrom), getMomentUtc(actualTo));
// }

// console.log(getMetricCardsInterval())


// console.log(moment().valueOf())
// const lastClosedTime = 1615543372771
const lastClosedTime = 'asdasd'
const date = new Date(lastClosedTime);
console.log('date', date.getTime());
// const lastClosedTimeMoment = moment(lastClosedTime)
// const diff = moment().diff(lastClosedTimeMoment, 'hours', true)
// console.log('diff', diff)
// console.log('diff', diff >= 12)
