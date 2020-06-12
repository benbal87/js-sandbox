// https://www.youtube.com/watch?v=ImwrezYhw4w

class Dog {
  constructor() {
    this.sound = 'woof'
  }
  talk() {
    console.log(this.sound)
  }
}

const sniffles = new Dog()
sniffles.talk() // outputs: "woof"

// if it is used this way, the bind is mandatory to force this to be sniffles
$('#blockId').click(sniffles.talk.bind(sniffles))

// another way is to use arrow syntay
$('#blockId').click(_ => sniffles.talk())


// ---------------------------------------------------------------------------------
// DOG rewritten into a factory function

const dog = () => {
  const sound = 'woof'
  return {
    talk: () => console.log(sound)
  }
}

const sniffles = dog()
sniffles.talk() // outputs: "woof"