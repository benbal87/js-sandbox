// https://www.youtube.com/watch?v=riDVvXZ_Kb4&t=1s

const food = {
  init: function (type) {
    this.type = type
  },
  eat: function () {
    console.log('you ate the ' + this.type)
  }
}

// Object.create creates a new object and assigns food as it's prototype.

const waffle = Object.create(food)
const carrot = Object.create(food)

food.eat = function () {
  console.log('YOU TOTALLY ATE THE ' + this.type.toUpperCase())
}

// waffle and carrot only fall back to it's prototype food if it lacks the property eat and init
// if it is not, it will use it's own

waffle.init('waffle')
waffle.eat()

carrot.init('carrot')
carrot.eat()