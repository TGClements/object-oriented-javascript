/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. 

*/

class Book {
  #author;
  #publisher;

  constructor() {}

  getAuthor() {
    return this.#author;
  }

  getPublisher() {
    return this.#publisher;
  }

  setAuthor(author) {
    this.#author = author;
  }

  setPublisher(publisher) {
    this.#publisher = publisher;
  }
}

class Author {
  #name;
  #books;

  constructor() {}

  getName() {
    return this.#name;
  }

  getBooks() {
    return this.#books;
  }

  setName(name) {
    this.#name = name;
  }

  setBooks(books) {
    this.#books = books;
  }
}

class Publisher {
  #authors;
  #books;

  constructor() {}

  getAuthors() {
    return this.#authors;
  }

  getBooks() {
    return this.#books;
  }

  setAuthors(authors) {
    this.#authors = authors;
  }

  setBooks(books) {
    this.#books = books;
  }
}

class Review {
  #rating;
  #user;

  constructor() {}

  getRating() {
    return this.#rating;
  }

  getUser() {
    return this.#user;
  }

  setRating() {
    this.#rating = rating;
  }

  setUser() {
    this.#user = user;
  }
}

/*
2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.
*/

class Umbrella {
  name;
  #companies = [];

  constructor(name) {
    this.name = name;
  }

  addNewCompany(company) {
    this.#companies.push(company);
    console.log(`${this.name} has added ${company.name} to their roster.`);
  }

  getAllCompanies() {
    console.log(`The companies of ${this.name} are: `);
    this.#companies.forEach((company, index) => {
      console.log(`${this.#companies[index].name}`);
    });
  }
}

class Company extends Umbrella {
  name;
  #sites = [];

  constructor(name) {
    super();
    this.name = name;
  }

  addSite(site) {
    this.#sites.push(site);
    console.log(`${this.name} has added ${site.name} as a Site.`);
  }

  getNumSites() {
    console.log(`${this.name} has ${this.#sites.length} sites.`);
  }
}

class Site extends Company {
  name;
  location;
  #employees = [];

  constructor(name, location) {
    super();
    this.name = name;
    this.location = location;
  }

  addEmployee(employee) {
    this.#employees.push(employee);
    console.log(`${this.name} has added ${employee.name} to their roster.`);
  }

  getNumEmployees() {
    return this.#employees.length;
  }
}

class Employee extends Site {
  name;
  job;
  title;
  #salary;

  constructor(name, job, title, salary) {
    super();
    this.name = name;
    this.job = job;
    this.title = title;
    this.#salary = salary;
  }

  sayJob() {
    console.log(`For my job, I ${this.job}`);
  }

  sayTitle() {
    console.log(`My job title is ${this.title}`);
  }
}

// Create umbrella
const deusGroup = new Umbrella('Deus Group');

// Create companies
const eCorp = new Company('E corp');
const fCorp = new Company('F corp');
const dArmy = new Company('Dark Army');

// Create sites (eCorp)
const eCorpWashington = new Site('E Corp - Washington', 'Washington, DC');
const eCorpSeattle = new Site('E Corp - Seattle', 'Seattle, WA');
const eCorpDallas = new Site('E Corp - Dallas', 'Dallas, TX');
// Create sites (fCorp)
const fCorpWashington = new Site('F Corp - Washington', 'Washington, DC');
const fCorpSeattle = new Site('F Corp - Seattle', 'Seattle, WA');
const fCorpDallas = new Site('F Corp - Dallas', 'Dallas, TX');

// Create sites (dArmy)
const dArmyShanghai = new Site('Dark Army - Shanghai', 'Shanghai, China');
const dArmyWashington = new Site('Dark Army - Washington, DC', 'Washington');
const dArmyBerlin = new Site('Dark Army - Berlin', 'Berlin, Germany');

const ceo0 = new Employee('Joshua Irvine', 'run the company', 'CEO', 500000);

const manager0 = new Employee(
  'Warren Gould',
  'manage the other employees',
  'Manager',
  400000
);

const secretary0 = new Employee(
  'Tess Lang',
  'keep track of schedules',
  'Secretary',
  300000
);

const engineer0 = new Employee(
  'Cosmo Lawson',
  'do the usual engineering stuff',
  'Engineer',
  200000
);

const engineer1 = new Employee(
  'Arun Choi',
  'do the usual engineering stuff',
  'Engineer',
  200000
);

const financialOfficer0 = new Employee(
  'Mahir Joyner',
  'keep track of the finances',
  'Financial Officer',
  100000
);

const janitor0 = new Employee(
  'Bert Yu',
  'make sure the buildings are clean',
  'Janitor',
  90000
);

const marketer0 = new Employee(
  'Trey Watt',
  'bring in new clients',
  'Marketer',
  80000
);

const hrPersonell0 = new Employee(
  'Taylor Calvert',
  'hire new employees',
  'HR Personell',
  70000
);

const lawyer0 = new Employee(
  'Kaden Anderson',
  'keep the company out of legal trouble',
  'Lawyer',
  60000
);

deusGroup.addNewCompany(eCorp);
deusGroup.addNewCompany(fCorp);
deusGroup.addNewCompany(dArmy);

deusGroup.getAllCompanies();

eCorp.addSite(eCorpWashington);
eCorp.addSite(eCorpSeattle);
eCorp.addSite(eCorpDallas);
eCorp.getNumSites();

fCorp.addSite(fCorpWashington);
fCorp.addSite(fCorpSeattle);
fCorp.addSite(fCorpDallas);
fCorp.getNumSites();

dArmy.addSite(dArmyShanghai);
dArmy.addSite(dArmyWashington);
dArmy.addSite(dArmyBerlin);
dArmy.getNumSites();

eCorpWashington.addEmployee(ceo0);
eCorpWashington.addEmployee(manager0);
eCorpSeattle.addEmployee(secretary0);
eCorpDallas.addEmployee(engineer0);
fCorpWashington.addEmployee(engineer1);
fCorpSeattle.addEmployee(financialOfficer0);
fCorpDallas.addEmployee(janitor0);
dArmyShanghai.addEmployee(marketer0);
dArmyWashington.addEmployee(hrPersonell0);
dArmyBerlin.addEmployee(lawyer0);

ceo0.sayJob();
ceo0.sayTitle();

manager0.sayJob();
manager0.sayTitle();

secretary0.sayJob();
secretary0.sayTitle();

engineer0.sayJob();
engineer0.sayTitle();

engineer1.sayJob();
engineer1.sayTitle();

financialOfficer0.sayJob();
financialOfficer0.sayTitle();

janitor0.sayJob();
janitor0.sayTitle();

marketer0.sayJob();
marketer0.sayTitle();

hrPersonell0.sayJob();
hrPersonell0.sayTitle();

lawyer0.sayJob();
lawyer0.sayTitle();

/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/

//your code here...
