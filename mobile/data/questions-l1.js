/* Lecture 1: OOP and Class Diagrams (PDF pages 11-15; the other pages are course administration). */
EC.lecture(1, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp, draw = Q.draw, code = Q.code, pick = Q.pick;
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

  /* ---------- Section A ---------- */
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

  /* ---------- Section C ---------- */
  tf(11, 'e', "OOP organizes programs using classes and objects.", true, "Slide 11.");
  tf(11, 'e', "Actions are stored in attributes, and data is defined through methods.", false, "It is the opposite.");
  tf(11, 'e', "Dart supports OOP.", true, "Slide 11.");
  tf(12, 'e', "An object is a blueprint used to create classes.", false, "A class is a blueprint used to create objects.");
  tf(12, 'e', "All objects of the same class must have the same attribute values.", false, "They can have different values.");
  tf(12, 'm', "An object is a specific instance of a class.", true, "Slide 12.");
  tf(13, 'm', "In `Student sara = Student();`, `sara` is the class.", false, "`sara` is an object of the Student class.");
  tf(13, 'e', "In `int age = 20;`, the attribute stores a whole number.", true, "Slide 13.");
  tf(14, 'm', "A Course can have several Student objects.", true, "Slide 14.");
  tf(14, 'e', "Class diagrams show only one class and never the connections between classes.", false, "They also show connections.");
  tf(15, 'e', "Attributes store data, such as name and age.", true, "Slide 15.");
  tf(15, 'm', "Student is an object, and sara is a class.", false, "Student is the class, sara is the object.");

  /* ---------- Section B ---------- */
  fill(11, 'e', "OOP organizes programs using [[classes|class]] and [[objects|object]].", "Slide 11.", { set: true });
  fill(11, 'e', "In OOP, data is stored in [[attributes|attribute]], and actions are defined through [[methods|method]].", "Slide 11.");
  fill(11, 'e', "Objects contain data and can perform [[actions|action]].", "Slide 11.");
  fill(11, 'e', "The programming language [[Dart]] supports OOP, which helps structure Flutter applications.", "Slide 11.");
  fill(12, 'e', "A class is a [[blueprint]] used to create objects.", "Slide 12.");
  fill(12, 'e', "An object is a specific [[instance]] of a class.", "Slide 12.");
  fill(13, 'm', "In the code, the class name is [[Student]].", "Slide 13.", { code: STUDENT });
  fill(13, 'm', "In the code, the data type of `age` is [[int|integer]].", "Slide 13.", { code: STUDENT });
  fill(13, 'm', "In the code, the keyword that starts the blueprint is [[class]].", "Slide 13.", { code: STUDENT });
  fill(13, 'm', "Complete the code so that it creates an object of the class: [[Student()|Student]].", "`Student ali = Student();`", { code: 'Student ali = ________;' });
  fill(13, 'h', "The attribute that stores text in this class has the data type [[String]].", "Slide 13.", { code: BOOK });
  fill(14, 'm', "In the lecture example, each student has a [[name]] and an [[age]].", "Slide 14.", { set: true });
  fill(14, 'e', "In the lecture example, each course has a [[title]].", "Slide 14.");
  fill(15, 'e', "A [[class diagram|class diagrams]] shows a class and its connections to other classes.", "Slide 15.");
  fill(14, 'm', "Complete the class diagram: (1) [[title]], (2) [[Student]].", "Slide 14.", { qfig: 'classBlank' });

  /* ---------- Section D ---------- */
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

  /* ---------- Section E ---------- */
  exp(12, 'm', "Explain the difference between a class and an object, with an example.",
    [["A class is a blueprint used to create objects", "blueprint"], ["An object is a specific instance of a class", "instance"], ["Objects of the same class can have different attribute values", "different attribute", "different value"], ["Example: class Student; objects Sara (age 20) and Ali (age 21)", "sara", "ali", "student"]],
    "A class is a blueprint used to create objects. An object is a specific instance of a class. Objects from the same class can have different attribute values. Example: the class Student has the objects Sara, age 20, and Ali, age 21.");
  exp([11, 13], 'm', "Explain how OOP stores data and actions, using the Student class as an example.",
    [["Objects contain data and can perform actions", "data", "contain data"], ["Data is stored in attributes", "attribute"], ["Actions are defined through methods", "method"], ["Example: name and age are attributes of Student", "name and age", "name", "age"]],
    "Objects contain data and can perform actions. Data is stored in attributes, and actions are defined through methods. For example, name and age are attributes of the Student class.");
  draw([13, 14], 'm', "Draw a class diagram for Course and Student, with their attributes and the connection between them.", 'classDiagram',
    [["Class Student", "student"], ["Attributes name and age", "name", "age"], ["Class Course with the attribute title", "title"], ["Connection: one Course has several Student objects", "several", "many", "connection", "line"]],
    "Two boxes: Course (title) and Student (name, age). A line connects them: one Course has several Student objects.");
  code(13, 'm', "Write a Dart class called Student with two attributes: name (text, 'Ali') and age (whole number, 21).",
    [["`class Student {`", "!class student"], ["`String` type for the name", "!string name"], ["The value 'Ali'", "!name ali"], ["`int` type for the age", "!int age"], ["The value 21", "#21"]],
    "class Student {\n  String name = 'Ali';\n  int age = 21;\n}");
  code(13, 'h', "Write a Dart class called Course with one attribute title (text, 'Mobile Applications'), then create an object of it called c1.",
    [["`class Course {`", "!class course"], ["`String title`", "!string title"], ["The value 'Mobile Applications'", "!mobile applications"], ["An object of type Course named c1", "!course c1"], ["Created with `Course()`", "!c1 course"]],
    "class Course {\n  String title = 'Mobile Applications';\n}\n\nCourse c1 = Course();");
  code(13, 'h', "The code below should define a class and create an object, but it has mistakes. Write the correct code.",
    [["The class keyword before Student", "~class Student {"], ["`String` for the text attribute", "~String name ="], ["`int` for the whole number", "~int age = 20"], ["The object has the type Student and the name sara", "~Student sara ="], ["The object is created with `Student()`", "~sara = Student()"]],
    "class Student {\n  String name = 'Sara';\n  int age = 20;\n}\n\nStudent sara = Student();", { code: "Student class {\n  int name = 'Sara';\n  String age = 20;\n}\n\nsara = class Student;" });
  pick([12, 14], 'm', "A library app must store 500 books. Every book has a title and a number of pages. What is the best design? Why?",
    ["Write 500 different classes, one for each book", "Write one Book class and create 500 objects", "Write one object with 500 classes"], 1,
    [["A class is a blueprint, so one class can create many objects", "blueprint", "one class", "many objects", "create objects"], ["Each object can have different attribute values (title, pages)", "different", "own value", "attribute"]],
    "A class is a blueprint, so one Book class can create many objects. Each object can have different attribute values, such as its own title and pages.");
  pick(11, 'm', "In a Phone class, a programmer must decide what `brand` and `call()` are. Which choice is correct? Why?",
    ["`brand` is a method and `call()` is an attribute", "`brand` is an attribute and `call()` is a method", "`brand` and `call()` are both objects"], 1,
    [["Data is stored in attributes (brand)", "data", "stores"], ["Actions are defined through methods (call)", "action"]],
    "The brand is data, and data is stored in attributes. Calling is an action, and actions are defined through methods.");
  pick(14, 'm', "You want to show that one course has several students, before you write any code. What is the best tool? Why?",
    ["A class diagram", "A single attribute", "A string value"], 0,
    [["It shows classes", "shows class", "classes", "a class"], ["It shows the connections between classes", "connection", "relationship"]],
    "A class diagram shows the classes and the connections between them, such as one Course connected to several Student objects.");
});
