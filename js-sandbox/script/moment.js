const moment = require('moment')

// const timeStampsOk = [
//     1622073600000,
//     1622160000000,
//     1622505600000,
//     1622592000000,
//     1622678400000,
//     1622764800000,
//     1623024000000,
//     1623196800000,
//     1623283200000,
//     1623801600000,
//     1623888000000,
//     1623974400000,
//     1624320000000,
//     1624406400000,
//     1624579200000,
//     1624838400000,
//     1625011200000,
//     1625097600000,
//     1625184000000,
//     1625443200000,
//     1626220800000,
//     1626393600000,
//     1627603200000,
//     1627862400000,
//     1627948800000,
//     1628035200000,
//     1628121600000,
//     1628553600000,
//     1628640000000,
//     1628726400000,
//     1628812800000,
//     1628985600000,
//     1629072000000,
//     1629158400000,
//     1621987200000,
//     1622851200000,
//     1623628800000,
//     1624492800000,
//     1628899200000
// ]
// for (const timeStamp of timeStampsOk) {
//     console.log(timeStamp, ' | ', moment.utc(timeStamp).format('YYYY-MM-DD  HH:MM:SS'))
// }

const utcMomentStr = moment().utc().format('YYYY-MM-DD HH:mm:ss')

const momentUtc = moment.utc(utcMomentStr).toDate()
const local = moment(momentUtc).local().format('YYYY-MM-DD HH:mm:ss')

console.log(utcMomentStr)
console.log(local)
// console.log(moment().format('YYYY-MM-DD HH:MM:SS'))
