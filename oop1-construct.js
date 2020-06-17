//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property is called "purpose", and stores a string.
// This string should clearly explain why classes are used in Object Oriented Programming.  The first method is called explain().  This method should print
// the contents stored in the purpose 'field' of the class.  The second method is called pieces().  This 2nd method should print out the various parts that
// are essential to building a class.  Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

//your code here...
class WhyClass {
  purpose;

  constructor() {
    this.purpose =
      'Classes are used in OOP so you dont have to rewrite things and you can encapsulate multiple forms of data.';
  }

  explain() {
    console.log(this.purpose);
  }

  pieces() {
    console.log(
      'The essential parts of building a class are: properties, functions, and a constructor.'
    );
  }
}

const newClass = new WhyClass();
newClass.explain();
newClass.pieces();

/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife on your excursion.  To jog your memory, some 
different types of wildlife that you observed are found in the following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  Each creature should have 3 unique characteristics, and 
2 unique actions that it can do. */

class Dolphin {
  constructor(lifespan, size, weight) {
    this.lifespan = lifespan;
    this.size = size;
    this.weight = weight;
  }
  swim() {
    console.log('The dolphin swims.');
  }
  jump() {
    console.log('The dolphin jumps.');
  }
}

class Sloth {
  constructor(lifespan, size, weight) {
    this.lifespan = lifespan;
    this.size = size;
    this.weight = weight;
  }
  moveSlow() {
    console.log('The sloth moves slowly.');
  }
  hang() {
    console.log('The sloth hangs upside-down.');
  }
}

class Armadillo {
  constructor(lifespan, size, weight) {
    this.lifespan = lifespan;
    this.size = size;
    this.weight = weight;
  }
  curl() {
    console.log('The armadillo curls into a ball.');
  }
  roll() {
    console.log('The armadillo rolls while in a ball.');
  }
}

class Otter {
  constructor(lifespan, size, weight) {
    this.lifespan = lifespan;
    this.size = size;
    this.weight = weight;
  }
  float() {
    console.log('The otter floats on its back.');
  }
  dive() {
    console.log('The otter dives down deep.');
  }
}

class Jaguar {
  constructor(lifespan, size, weight) {
    this.lifespan = lifespan;
    this.size = size;
    this.weight = weight;
  }
  stalk() {
    console.log('The jaguar stalks its prey.');
  }
  climbTree() {
    console.log('The jaguar climbs a tree.');
  }
}

class Marmoset {
  constructor(lifespan, size, weight) {
    this.lifespan = lifespan;
    this.size = size;
    this.weight = weight;
  }
  hangByTail() {
    console.log('The marmoset hangs from a tree by its tail.');
  }
  chatter() {
    console.log('The marmoset chatters to its neighbor.');
  }
}

const d1 = new Dolphin(10, 'large', 'medium');
d1.swim();
d1.jump();

const s1 = new Sloth(5, 'medium', 'heavy');
s1.moveSlow();
s1.hang();

const a1 = new Armadillo(7, 'small', 'light');
a1.curl();
a1.roll();

const o1 = new Otter(6, 'small', 'medium');
o1.float();
o1.dive();

const j1 = new Jaguar(14, 'large', 'large');
j1.stalk();
j1.climbTree();

const m1 = new Marmoset(8, 'small', 'small');
m1.hangByTail();
m1.chatter();

/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
 */

class Shape {
  name;
  sides;
  base;
  height;
  radius;
  length;
  width;

  constructor(name, sides, base, height, radius, length, width) {
    this.name = name;
    this.sides = sides;
    this.base = base;
    this.height = height;
    this.radius = radius;
    this.length = length;
    this.width = width;
  }
}

// Triangle class
class Triangle extends Shape {
  constructor(name, sides, base, height, radius, length, width) {
    super(name, sides, base, height, radius, length, width);
  }

  calcArea() {
    console.log(
      `${this.name}'s area is calculated to be : ${
        0.5 * this.base * this.height
      }`
    );
  }

  calcPerimeter() {
    console.log(
      `${this.name}'s perimeter is calculated to be : ${
        this.base + (this.sides[1] + this.sides[2])
      }`
    );
  }
}

const triangle = new Triangle(
  'triangle',
  [4, 7, 7],
  null,
  null,
  null,
  null,
  null
);
triangle.base = triangle.sides[0];
triangle.height = 6.71;
console.log(triangle);
triangle.calcArea();
triangle.calcPerimeter();

// Rectangle Class
class Rectangle extends Shape {
  constructor(name, sides, base, height, radius, length, width) {
    super(name, sides, base, height, radius, length, width);
  }

  calcArea() {
    console.log(
      `${this.name}'s area is calculated to be : ${this.length * this.width}`
    );
  }

  calcPerimeter() {
    console.log(
      `${this.name}'s perimeter is calculated to be : ${
        2 * this.length + 2 * this.width
      }`
    );
  }
}

const rectangle = new Rectangle('rectangle', 4, null, null, null, 2, 5);
console.log(rectangle);
rectangle.calcArea();
rectangle.calcPerimeter();

// Circle Class
class Circle extends Shape {
  constructor(name, sides, base, height, radius, length, width) {
    super(name, sides, base, height, radius, length, width);
  }

  calcArea() {
    console.log(
      `${this.name}'s area is calculated to be : ${(
        Math.PI *
        this.radius ** 2
      ).toFixed(2)}`
    );
  }

  calcCircumference() {
    console.log(
      `${this.name}'s circumference is calculated to be : ${(
        2 *
        Math.PI *
        this.radius
      ).toFixed(2)}`
    );
  }
}

const circle = new Circle('circle', 1, null, null, 5, null, null);
console.log(circle);
circle.calcCircumference();
circle.calcArea();

// Heron's formula to find area of a triangle from 3 given sides
// Start
return (
  0.25 *
  Math.sqrt(
    (this.sides[0] + this.sides[1] + this.sides[2]) *
      (-this.sides[0] + this.sides[1] + this.sides[2]) *
      (this.sides[0] - this.sides[1] + this.sides[2]) *
      (this.sides[0] + this.sides[1] - this.sides[2])
  )
).toFixed(2);
// End

/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal.


//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple instances of earth.  Modify the class so the properties are usuable WITHOUT instantiating the class.

*/

class Earth {
  name;
  planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

  constructor(name, num) {
    this.name = name;
    this.planetNum = num;
  }
}

const earth = new Earth('earth', 3);
console.log(earth);
