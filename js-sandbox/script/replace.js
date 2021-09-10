console.log("AA_AA".toLowerCase().replace('_', ''))

const s = '/accounts/<wid>/projects/<pid>/teams/<tid>/repos/<rid>/developers/<did>/commits'

const wid = 123
const pid = 456
const tid = 789
const rid = 951
const did = 'benbal87@gmail.com'

const sr = s
    .replace('<wid>', wid.toString())
    .replace('<pid>', pid.toString())
    .replace('<tid>', tid.toString())
    .replace('<rid>', rid.toString())
    .replace('<did>', did)

console.log(sr)
