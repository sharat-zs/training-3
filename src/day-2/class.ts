export class Pet {
  constructor(private name: string) {}

  test() {
    return 5
  }

  sayName = () => {
    return this.name
  }
}

class Dog extends Pet {
  constructor(name: string, private readonly breed: string) {
    super(name)
  }

  bark() {
    return 'woof'
  }
}

const pet = new Pet('harry')
const x = pet.sayName
x()

const dog = new Dog('tommy', 'breed')
dog.bark()
dog.sayName()

export const y = {
  name: 'harry',
  sayName() {
    return this.name
  }
}

const z = Object.create(y)
z.sayName()
