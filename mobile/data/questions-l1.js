/* Lecture 1: OOP and Class Diagrams (PDF pages 11-15; the other pages are course administration). */
EC.lecture(1, function (Q) {
  var mcq = Q.mcq, list = Q.list, def = Q.def, match = Q.match;
  var STUDENT = `class Student {
  String name = 'Sara';
  int age = 20;
}`;
  var CREATE = `Student sara = Student();`;
  var BOOK = `class Book {
  String title = 'Flutter';
  int pages = 300;
}

Book b1 = Book();`;

  /* ---------- Multiple choice ---------- */
  mcq(11, 'e', "Object-Oriented Programming organizes programs using…",
    ["classes and objects", "tables and queries", "pages and hyperlinks", "colours and themes"], "Slide 11.");
  mcq(11, 'e', "In OOP, what do objects contain and do?",
    ["They contain data and can perform actions", "They contain only text and cannot perform any actions", "They contain web pages and open them in a browser", "They contain only pictures and display them"], "Slide 11.");
  mcq(11, 'e', "In OOP, data is stored in…",
    ["attributes", "methods", "actions", "diagrams"], "Slide 11.");
  mcq(11, 'e', "In OOP, actions are defined through…",
    ["methods", "attributes", "strings", "blueprints"], "Slide 11.");
  mcq(11, 'e', "Why is OOP useful in this course?",
    ["Dart supports OOP, which helps structure Flutter applications", "Flutter does not need any programming language if OOP is used", "OOP makes the phone screen larger so that more widgets can fit", "OOP replaces Dart with a different language for every platform"], "Slide 11.");
  mcq(12, 'e', "A class is…",
    ["a blueprint used to create objects", "a specific instance of another object", "a value stored in an attribute", "an action done by a method"], "Slide 12.");
  mcq(12, 'e', "An object is…",
    ["a specific instance of a class", "a blueprint used to create classes", "a connection between two diagrams", "a file that stores Dart packages"], "Slide 12.");
  mcq(12, 'm', "Two objects are created from the same class. Which statement is correct?",
    ["They can have different attribute values", "They must have the same attribute values", "They must belong to two different classes", "They cannot both exist in one program"], "For example Sara, age 20, and Ali, age 21.");
  mcq(12, 'e', "“Sara, age 20” and “Ali, age 21” are two … of the class Student.",
    ["objects", "attributes", "methods", "diagrams"], "Slide 12.");
  mcq(12, 'm', "In the Student example, `name` and `age` are…",
    ["attributes", "objects", "classes", "methods"], "Slide 12.");
  mcq(13, 'm', "What is the class name in this code?",
    ["`Student`", "`name`", "`String`", "`Sara`"], "The word after `class`.", { code: STUDENT });
  mcq(13, 'h', "What are `name` and `age` in this code?",
    ["Attributes of the class", "Objects of the class", "Methods of the class", "Names of two other classes"], "They store data.", { code: STUDENT });
  mcq(13, 'm', "Which line creates an object of the Student class?",
    ["`Student sara = Student();`", "`class Student sara = Student {}`", "`String sara = 'Student';`", "`sara Student = class();`"], "Slide 13.");
  mcq(13, 'h', "What is `sara` in this line?",
    ["An object of the Student class", "An attribute of the Student class", "A method of the Student class", "A class that contains Student"], "Slide 13.", { code: CREATE });
  mcq(13, 'm', "In this code, which type is used for the attribute that stores text?",
    ["`String`", "`int`", "`class`", "`Student`"], "`String name`.", { code: STUDENT });
  mcq(13, 'h', "In this code, which type is used for the attribute that stores a whole number?",
    ["`int`", "`String`", "`class`", "`Sara`"], "`int age`.", { code: STUDENT });
  mcq(13, 'h', "What is `b1` in this code?",
    ["An object of the class Book", "An attribute of the class Book", "The name of a second class", "A method with no arguments"], "Same pattern as `Student sara = Student();`.", { code: BOOK });
  mcq(13, 'h', "Which two names are attributes in this code?",
    ["`title` and `pages`", "`Book` and `b1`", "`String` and `int`", "`Flutter` and `Book`"], "They store the data of a Book.", { code: BOOK });
  mcq(13, 'h', "A programmer writes `Student ali = Student();` after the class below. What is the value of `name` in `ali`?",
    ["`Sara`", "`ali`", "`Student`", "It has no value"], "The class gives the attribute the value 'Sara'.", { code: STUDENT });
  mcq(14, 'e', "Besides the classes themselves, class diagrams also show…",
    ["connections between classes", "the colours of the screens", "the errors in the Dart code", "the speed of the program"], "Slide 14.");
  mcq(14, 'e', "Which relationship is described in the lecture?",
    ["A Course can have several Student objects", "A Student can have only one attribute", "A Course can never have a Student object", "A Student is a blueprint used to create a Course"], "Slide 14.");
  mcq(14, 'm', "In the Course and Student example, which attribute belongs to the course?",
    ["Title", "Age", "Name of the student", "Number of methods"], "Each course has a title.");
  mcq(14, 'h', "What does this diagram show an example of?",
    ["one Course object connected to several Student objects", "one Student object connected to several Course objects", "three classes that are created from one object", "three attributes that belong to one Student object"], "Slide 14.", { qfig: 'courseObjects' });
  mcq(15, 'e', "Which of these shows a class and its connections to other classes?",
    ["Class diagram", "Attribute", "Method", "Object"], "Slide 15.");
  mcq(15, 'm', "Which pair is matched correctly?",
    ["Class – Student, object – sara", "Class – sara, object – Student", "Class – age, object – name", "Class – name, object – Student"], "Slide 15.");
  mcq([11, 12], 'h', "A shop app stores “price = 5” for a product and can “print the receipt”. Which is the attribute and which is the method?",
    ["Attribute: price; method: print the receipt", "Attribute: print the receipt; method: price", "Price and print the receipt are attributes", "Price and print the receipt are methods"], "Attributes store data; methods define actions.");
  mcq(14, 'm', "What does the line between the two classes in this diagram show?",
    ["A connection between the classes", "That both classes are one object", "That one of the classes is deleted", "An error in the Dart code"], "Class diagrams show connections.", { qfig: 'classDiagram' });

  /* ---------- Short answer ---------- */
  def(11, 'e', 2, "Define Object-Oriented Programming (OOP).",
    [["Organizes programs", "organizes programs", "organise", "organize", "structure"], ["Using classes and objects", "classes and objects", "objects"]],
    "Object-Oriented Programming (OOP) organizes programs using classes and objects.");
  def(12, 'e', 2, "Define class and object.",
    [["Class: a blueprint used to create objects", "blueprint"], ["Object: a specific instance of a class", "instance"]],
    "A class is a blueprint used to create objects. An object is a specific instance of a class.");
  def(11, 'e', 2, "Define attribute and method.",
    [["Attributes store the data of an object", "store", "data"], ["Methods define the actions of an object", "action"]],
    "Attributes store the data of an object. Methods define the actions that an object can perform.");
  def([14, 15], 'm', 2, "What does a class diagram show?",
    [["A class (and its attributes)", "a class", "shows a class", "classes"], ["Its connections to other classes", "connection", "relationship", "connected"]],
    "A class diagram shows a class and its connections to other classes.");
  def(13, 'm', 2, "In `Student sara = Student();`, what is Student and what is sara?",
    [["Student is the class", "student is the class", "class"], ["sara is an object of the class", "object"]],
    "Student is the class, and sara is an object of the Student class.");
  list([12, 13], 'e', 2, "List the two attributes of the Student class in the lecture.",
    [["name", "name"], ["age", "age"]]);
  list([11, 15], 'm', 4, "List four terms of OOP that the lecture explains.",
    [["Class", "class"], ["Object", "object"], ["Attribute", "attribute"], ["Method", "method"], ["Class diagram", "diagram"]], { n: 4 });
  def(12, 'm', 4, "Explain the difference between a class and an object, with an example.",
    [["A class is a blueprint used to create objects", "blueprint"], ["An object is a specific instance of a class", "instance"], ["Objects of the same class can have different attribute values", "different attribute", "different value"], ["Example: class Student; objects Sara (age 20) and Ali (age 21)", "sara", "ali", "student"]],
    "A class is a blueprint used to create objects. An object is a specific instance of a class. Objects from the same class can have different attribute values. Example: the class Student has the objects Sara, age 20, and Ali, age 21.");
  def([11, 13], 'm', 4, "Explain how OOP stores data and actions, using the Student class as an example.",
    [["Objects contain data and can perform actions", "data", "contain data"], ["Data is stored in attributes", "attribute"], ["Actions are defined through methods", "method"], ["Example: name and age are attributes of Student", "name and age", "name", "age"]],
    "Objects contain data and can perform actions. Data is stored in attributes, and actions are defined through methods. For example, name and age are attributes of the Student class.");
  def([12, 14], 'm', 3, "A library app must store 500 books. Every book has a title and a number of pages. What is the best design? Why?",
    [["One Book class and 500 objects", "one class", "one book class", "a book class", "single class", "class book"], ["A class is a blueprint, so one class can create many objects", "blueprint", "many objects", "create objects"], ["Each object can have different attribute values", "different", "own value", "own title", "attribute"]],
    "Write one Book class and create 500 objects. A class is a blueprint, so one class can create many objects, and each object can have different attribute values, such as its own title and pages.");
  def(11, 'm', 2, "In a Phone class, is `brand` an attribute or a method? Is `call()` an attribute or a method?",
    [["brand is an attribute (data)", "brand is an attribute", "brand attribute", "brand is data", "brand stores"], ["call() is a method (action)", "call is a method", "call method", "call is an action"]],
    "brand is an attribute, because it stores data. call() is a method, because it defines an action.");
  def(12, 'e', 2, "Can two objects of the same class have different attribute values? Give an example.",
    [["Yes, they can have different values", "yes", "can have different"], ["Example: Sara, age 20, and Ali, age 21", "sara", "ali", "for example"]],
    "Yes, objects of the same class can have different attribute values. For example, Sara is 20 and Ali is 21.");
  def(13, 'm', 2, "Write the two attributes of this class with their data types.",
    [["name: String", "name string", "string name", "name is string", "name is a string"], ["age: int", "age int", "int age", "age is int", "age is an int"]],
    "name is a String. String name. age is an int. int age.", { code: STUDENT });
  def(13, 'm', 2, "Write one line of Dart code that creates an object called ali from the class Student.",
    [["`Student ali`", "!student ali"], ["`= Student();`", "~ali = Student()"]],
    "Student ali = Student();");
  def(14, 'm', 2, "Look at the diagram. Explain the relationship it shows between the course and the students.",
    [["One Course object", "one course", "a course", "course"], ["can have several Student objects", "several", "many", "three"]],
    "One course can have several Student objects: Mobile Applications is connected to Sara, Ali and Ahmed.", { qfig: 'courseObjects' });
  def(14, 'm', 2, "What information does the lecture’s class diagram store for a course and for a student?",
    [["Course: title", "title"], ["Student: name and age", "name and age", "name", "age"]],
    "A course has a title. A student has a name and an age.");
  def(11, 'e', 2, "Why is OOP useful when we write Flutter apps?",
    [["Dart supports OOP", "dart supports", "dart"], ["It helps structure Flutter applications", "structure", "organize", "organise"]],
    "Dart supports OOP, and it helps structure Flutter applications.");

  /* ---------- Matching ---------- */
  match([11, 12, 14], 'e', "Match each term with its description.",
    [["OOP", "Organizes programs using classes and objects"], ["Class", "A blueprint"], ["Object", "A specific instance"], ["Attribute", "Stores data, such as a name or an age"], ["Method", "Defines an action"], ["Class diagram", "Shows classes and their connections"]]);
  match(13, 'm', "Match each part of this code with its role.",
    [["`Student`", "Class name"], ["`name`", "Attribute that stores text"], ["`age`", "Attribute that stores a whole number"], ["`String`", "Data type for text"], ["`int`", "Data type for whole numbers"], ["`'Sara'`", "Value of the text attribute"], ["`20`", "Value of the whole-number attribute"]], { code: STUDENT });
  match([12, 14], 'm', "Match each example from a school app with the correct term.",
    [["Student", "Class"], ["Sara, age 20", "Object"], ["age", "Attribute"], ["register()", "Method"], ["A drawing that connects Course and Student", "Class diagram"]]);
  match(13, 'h', "Match each line of code with what it does.",
    [["`class Course {`", "Starts the definition of a class"], ["`String title = 'Flutter';`", "Adds an attribute with a text value"], ["`int hours = 3;`", "Adds an attribute with a whole-number value"], ["`Course c1 = Course();`", "Creates an object of the class"], ["`}`", "Ends the definition of the class"]]);
});
