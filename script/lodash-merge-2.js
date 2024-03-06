let _ = require('lodash');

const object1 = {
  hoverlabel: {
    bgcolor: 'black',
    bordercolor: 'blue',
    font: {
      color: 'green'
    }
  }
}

const object2 = undefined

console.log(_.merge(object1, object2))
