function Animal(name) {
  this.name = name || 'animal'
}

// ? name为何是undefined
Animal.prototype.eat = function (food) {
  console.log(this.name + '正在吃' + food)
}
// 原型链继承
function Cat() {
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
// Cat.prototype = new Animal() //! important
Cat.prototype.name = 'cat'

console.log(Cat.prototype === Animal.prototype);

// test
var cat = new Cat();
cat.eat('fish')
console.log(cat.name)
console.log(cat instanceof Animal)
console.log(cat instanceof Cat)
