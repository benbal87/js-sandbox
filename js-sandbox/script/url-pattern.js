global.UrlPattern = require('url-pattern')

const pattern = new UrlPattern('*/accounts/(:aid)/projects/(:pid)/report/(:rid)')
const url = 'http://localhost:8000/accounts/20/projects/29/report/128'
let match = pattern.match(url)
console.log('match:', match)
