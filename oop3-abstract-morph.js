/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class from being instantiated with an instance.  In the Creature class, include two abstract methods.  move(), and act().  These methods are NOT allowed to be invoked from the Abstract class, so throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age
*/

class Creature {
  constructor() {
    if (this.constructor == Creature) {
      throw new Error('Cannot instantiate abstract Creature class.');
    }
  }

  move() {
    throw new Error('Cannot call abstract function "move".');
  }

  act() {
    throw new Error('Cannot call abstract function "act".');
  }
}

class Human extends Creature {
  name;
  age;

  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }

  move() {
    console.log(`${this.name} moves from point A to point B.`);
  }

  act() {
    console.log(`${this.name} acts on their hunger and eats an apple.`);
  }

  code() {
    console.log(
      `${this.name} writes some perfect code to create a pristine program.`
    );
  }
}

class Bird extends Creature {
  color;
  species;

  constructor(color, species) {
    super();
    this.color = color;
    this.species = species;
  }

  move() {
    console.log(`The ${this.species} moves from point A to point B.`);
  }

  act() {
    console.log(
      `The ${this.species} acts on instinct and hangs out in trees, far from predators.`
    );
  }

  fly() {
    console.log(
      `The ${this.species} flies across the sky and lands on a branch.`
    );
  }
}

class Reptile extends Creature {
  species;
  age;

  constructor(species, age) {
    super();
    this.species = species;
    this.age = age;
  }

  move() {
    console.log(`The ${this.species} moves from point A to point B.`);
  }

  act() {
    console.log(`The ${this.species} acts on its instinct and hunts its prey.`);
  }

  bask() {
    console.log(`The ${this.species} basks in the sunlight.`);
  }
}

const h1 = new Human('Tom Collins', 38);
h1.move();
h1.act();
h1.code();

const b1 = new Bird('blue', 'Tucan');
b1.move();
b1.act();
b1.fly();

const r1 = new Reptile('Anole', 2);
r1.move();
r1.act();
r1.bask();

/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to you to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
  name;

  eat() {
    console.log(this.name + ' is eating');
  }

  sleep() {
    console.log(this.name + ' is sleeping');
  }

  code() {
    console.log(this.name + ' is coding');
  }

  repeat() {
    console.log(this.name + ' is repeating the above steps, yet another time');
  }

  explain() {
    //this function should contain a console.log() explaining what you had to do to get the correct functions to work, and the reasoning behind what you did.
    console.log(
      'By making all the functions as normal functions (not arrow functions), when the function is called by the subclass, the overrided function in the subclass will fire instead of the classes in the parent class.'
    );
  }
}

class Teacher extends Person {
  //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.

  constructor(name) {
    super(name);
    this.name = name;
  }

  eat() {
    console.log(this.name + ' loves to teach before eating');
  }

  sleep() {
    console.log(this.name + ' sleeps after preparing the lesson plan');
  }

  code() {
    console.log(this.name + ' codes first, then teaches it the next day.');
  }

  repeat() {
    console.log(this.name + ' teaches, codes, eats, sleeps, and repeats');
  }
}

class Student extends Person {
  //set up your methods in this student class, so all of these methods will override the methods from the super class.
  //eat method should print out - <stduent name> studies, then eats
  //sleep method should print out, <student name> studies coding so much, that they dream about it in their sleep
  //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now has become a coding guru!
  //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and puts it all on repeat.

  constructor(name) {
    super(name);
    this.name = name;
  }

  eat() {
    console.log(`${this.name} studies, then eats`);
  }

  sleep() {
    console.log(
      `${this.name} studies coding so much, that they dream about it in their sleep`
    );
  }

  code() {
    console.log(
      `${this.name} was first overwhelmed by coding, but kept at it, and now has become a coding guru!`
    );
  }

  repeat() {
    console.log(
      `${this.name} keeps on studying, coding, eating, and sleeping, and puts it all on repeat.`
    );
  }
}

const teacher = new Teacher('Dr. Teacher');

teacher.explain();

const student = new Student('Pupil Student');

student.explain();

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.eat();
student.sleep();
student.code();
student.repeat();

//****************************************************************************************************************************************************************************************
//Bonus Exercise:

//3. Consider the following class:

class Cook {
  prepare(food1, food2, food3) {
    console.log('The cook is cooking ' + food1, food2, food3);
  }

  prepare = function () {
    console.log('The cook is cooking');
  };

  explain = () => {
    console.log(
      'what could you do to get the prepare function to print out the food items that are being passed in to the function?  Once you figure it out, Write down your thought process in this explain method.'
    );
  };
}

const cook = new Cook();

cook.prepare('turkey', 'salami', 'pizza');

cook.explain();
