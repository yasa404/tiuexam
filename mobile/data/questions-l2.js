/* Lecture 2: Introduction to Flutter (PDF pages 4-32). */
EC.lecture(2, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp, draw = Q.draw, code = Q.code, pick = Q.pick;
  var APP = `import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      appBar: AppBar(title: Text('My Courses')),
      body: Center(child: Text('Mobile Apps')),
    ),
  ));
}`;
  var COL = `body: Center(
  child: Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      Text('Mobile Apps',
        style: TextStyle(fontSize: 24)),
      Text('IT319'),
    ],
  ),
),`;
  var STYLE = `Text(
  'Mobile Apps',
  style: TextStyle(
    fontSize: 24,
  ),
)`;
  var MISSING = `children: [
  Text('Mobile Apps')
  Text('IT319'),
],`;

  /* ---------- Section A ---------- */
  mcq(5, 'e', "Flutter is…",
    ["a toolkit for building app interfaces", "a programming language like Java", "a database for storing the data of apps", "an operating system for phones"], "Slide 5.");
  mcq(5, 'e', "Which programming language do we use with Flutter?",
    ["Dart", "Python", "Java", "Swift"], "Slide 5.");
  mcq(5, 'e', "Which platforms can Flutter target?",
    ["Mobile, web and desktop", "Mobile phones only", "Web and desktop, but not mobile", "Desktop computers only"], "Slide 5.");
  mcq([5, 32], 'e', "Which sentence describes the roles of Flutter and Dart?",
    ["Flutter supplies the widgets, and Dart expresses the code", "Dart supplies the widgets, and Flutter expresses the code", "Flutter and Dart are two names for one database", "Dart draws the screen only on desktop computers"], "Slide 32.");
  mcq(6, 'e', "A widget describes…",
    ["part of an app’s interface", "the name of a new Dart file", "an error in the app’s code", "the speed of the user’s phone"], "Slide 6.");
  mcq(6, 'e', "Which widget displays words on the screen?",
    ["`Text`", "`Center`", "`Column`", "`Scaffold`"], "Slide 6.");
  mcq(6, 'e', "Which widget arranges several widgets vertically?",
    ["`Column`", "`Center`", "`Text`", "`AppBar`"], "Slide 6.");
  mcq(6, 'e', "Which widget positions its child in the centre of its available area?",
    ["`Center`", "`Column`", "`Scaffold`", "`MaterialApp`"], "Slide 6.");
  mcq(7, 'e', "Which widget provides a basic screen layout?",
    ["`Scaffold`", "`Text`", "`Center`", "`TextStyle`"], "Slide 7.");
  mcq(7, 'e', "Which widget displays the title at the top of the screen?",
    ["`AppBar`", "`Column`", "`Center`", "`TextStyle`"], "Slide 7.");
  mcq(7, 'm', "Which widget provides the application’s Material structure?",
    ["`MaterialApp`", "`Scaffold`", "`AppBar`", "`Column`"], "Slide 7.");
  mcq(7, 'e', "Where is the main screen content placed?",
    ["In the Scaffold `body`", "In the AppBar `title`", "In the `import` statement", "In the file `pubspec.yaml`"], "Slide 7.");
  mcq(8, 'h', "Where does the app start?",
    ["At `main()`", "At `Scaffold()`", "At `AppBar()`", "At `Text()`"], "Slide 8.", { code: APP });
  mcq(8, 'm', "What does `runApp()` do?",
    ["Starts the Flutter interface", "Imports the Material tools", "Displays an error message", "Changes the size of the text"], "Slide 8.");
  mcq(8, 'h', "Which text does this app show at the top of the screen?",
    ["My Courses", "Mobile Apps", "MaterialApp", "Scaffold"], "It is the AppBar title.", { code: APP });
  mcq(8, 'm', "Which text does this app show in the middle of the screen?",
    ["Mobile Apps", "My Courses", "MaterialApp", "Center"], "It is inside Center, in the body.", { code: APP });
  mcq(8, 'h', "In this app, which widget is the direct parent of `Text('Mobile Apps')`?",
    ["`Center`", "`Scaffold`", "`AppBar`", "`MaterialApp`"], "`Center(child: Text(...))`.", { code: APP });
  mcq(9, 'm', "What does `import 'package:flutter/material.dart';` do?",
    ["Makes Flutter’s Material tools available", "Starts the Flutter interface on the phone", "Creates a new file called material.dart", "Displays the word material on the screen"], "Slide 9.");
  mcq(9, 'e', "Which symbol begins a comment in Dart?",
    ["`//`", "`[ ]`", "`:`", "`;`"], "Slide 9.");
  mcq(10, 'e', "Which property sets the main screen content of a Scaffold?",
    ["`body`", "`title`", "`style`", "`fontSize`"], "Slide 10.");
  mcq(10, 'e', "Which property sets the AppBar’s title widget?",
    ["`title`", "`body`", "`home`", "`children`"], "Slide 10.");
  mcq(11, 'e', "What is the difference between `child` and `children`?",
    ["`child` accepts one widget; `children` accepts a list of widgets", "`child` accepts a list of widgets; `children` accepts one widget", "`child` is used for text only; `children` is used for images only", "`child` and `children` are two names for the same property"], "Slide 11.");
  mcq(11, 'm', "Which symbols hold the list of widgets in `children`?",
    ["Square brackets `[ ]`", "Parentheses `( )`", "Braces `{ }`", "Quotation marks `' '`"], "Slide 11.");
  mcq(12, 'h', "What does `mainAxisAlignment: MainAxisAlignment.center` do in this Column?",
    ["Centres the texts vertically", "Makes the texts larger", "Places the texts side by side", "Changes the order of the texts"], "Slide 12.", { code: COL });
  mcq(12, 'e', "What controls the order in which the texts are displayed in a Column?",
    ["The order of the list", "The size of the text", "The length of the text", "The name of the file"], "Slide 12.");
  mcq(12, 'h', "What is displayed under “Mobile Apps” in this code?",
    ["IT319", "24", "Column", "Center"], "The second item of the list.", { code: COL });
  mcq(13, 'e', "Which property sets the text size?",
    ["`fontSize`", "`title`", "`child`", "`home`"], "Slide 13.");
  mcq(13, 'm', "Why does `24` have no quotation marks in this code?",
    ["Because it is a number", "Because it is a comment", "Because it is a widget", "Because it is a string"], "Slide 13.", { code: STYLE });
  mcq(13, 'e', "Which class holds text settings such as the size?",
    ["`TextStyle`", "`AppBar`", "`MaterialApp`", "`Scaffold`"], "Slide 13.");
  mcq(14, 'e', "In Dart, `'Mobile Apps'` is a…",
    ["string", "number", "widget", "comment"], "A text value.");
  mcq(14, 'm', "In Dart widget calls, what do parentheses `( )` hold?",
    ["Arguments", "Comments", "A list of widgets", "The code of main"], "Slide 14.");
  mcq(14, 'e', "Which symbols contain the main function’s code?",
    ["Braces `{ }`", "Square brackets `[ ]`", "Parentheses `( )`", "Commas `,`"], "Slide 14.");
  mcq(14, 'e', "What separates arguments and list items?",
    ["Commas", "Semicolons", "Colons", "Braces"], "Slide 14.");
  mcq(14, 'm', "With which symbol does the `runApp(...)` statement end?",
    ["A semicolon", "A comma", "A colon", "A bracket"], "Slide 14.");
  mcq(15, 'm', "Which one is an example of a StatelessWidget?",
    ["A logo", "A counter", "A Like button", "A changing score"], "Logo, title, fixed text.");
  mcq(15, 'm', "Which one is an example of a StatefulWidget?",
    ["A Like button", "A title", "A logo", "A fixed text"], "Counter / Like button.");
  mcq(16, 'e', "Which is the usual starting file of a Flutter app?",
    ["`lib/main.dart`", "`pubspec.yaml`", "`first_flutter.dart`", "`material.dart`"], "Slide 16.");
  mcq(16, 'e', "Which file lists dependencies and project settings?",
    ["`pubspec.yaml`", "`lib/main.dart`", "`material.dart`", "`runApp.dart`"], "Slide 16.");
  mcq(17, 'e', "In a local Flutter project, what does hot reload do?",
    ["Updates many code changes", "Deletes the old project", "Installs the app on a new phone", "Creates a new language"], "Slide 17.");
  mcq(17, 'e', "What should you read first if the app does not run?",
    ["The first error", "The last error", "The title of the app", "The comments"], "Slide 17.");
  mcq(29, 'm', "What is missing in this code?",
    ["A comma after `Text('Mobile Apps')`", "A quotation mark before `IT319`", "A semicolon after `children: [`", "A brace before `Text('IT319')`"], "Commas separate list items.", { code: MISSING });
  mcq(30, 'e', "Dart names are case-sensitive. What does this mean?",
    ["`Text` and `text` are different names", "All of the names must be in capital letters", "`Text` and `text` are the same name", "All names need quotation marks"], "Slide 30.");
  mcq(30, 'h', "Which line is correct?",
    ["`Text('IT319'),`", "`text('IT319'),`", "`Text('IT319),`", "`Text['IT319'],`"], "Check the case, quotes and brackets.");
  mcq([7, 8], 'm', "Which widget is missing at (1) in this widget tree?",
    ["`Scaffold`", "`Column`", "`Text`", "`TextStyle`"], "MaterialApp → Scaffold.", { qfig: 'appTreeBlank' });

  /* ---------- Section C ---------- */
  tf(5, 'e', "Flutter is the programming language and Dart is the toolkit.", false, "Flutter is the toolkit, Dart is the language.");
  tf(5, 'e', "Flutter can target mobile, web and desktop platforms.", true, "Slide 5.");
  tf(6, 'e', "We combine small widgets to build a screen.", true, "Slide 6.");
  tf(6, 'e', "Column arranges widgets horizontally.", false, "Vertically.");
  tf(7, 'e', "Scaffold provides a basic screen layout.", true, "Slide 7.");
  tf(9, 'm', "`main()` is the program’s entry point.", true, "Slide 9.");
  tf(9, 'e', "Text after `//` is executed as code.", false, "`//` begins a comment.");
  tf(11, 'm', "`child` accepts a list of widgets.", false, "`children` accepts a list.");
  tf(12, 'e', "The list order in `children` controls the display order.", true, "Slide 12.");
  tf(13, 'e', "In `fontSize: 24`, the number must be written inside quotation marks.", false, "Numbers have no quotation marks.");
  tf(14, 'm', "A colon names a setting, such as `body:`.", true, "Slide 14.");
  tf(15, 'e', "A StatefulWidget has changing state.", true, "Slide 15.");
  tf(15, 'm', "A counter is a good example of a StatelessWidget.", false, "A counter needs changing state.");
  tf(16, 'e', "`pubspec.yaml` is the usual starting file for a Flutter app.", false, "`lib/main.dart` is.");
  tf(30, 'e', "A missing comma can stop the code from running.", true, "Slide 30.");
  tf(30, 'm', "Opening and closing brackets must match.", true, "Slide 30.");

  /* ---------- Section B ---------- */
  fill(5, 'e', "[[Flutter]] is a toolkit for building app interfaces, and [[Dart]] is the programming language we use with it.", "Slide 5.");
  fill(6, 'e', "A [[widget]] describes part of an app’s interface.", "Slide 6.");
  fill(6, 'e', "[[Column]] arranges several widgets vertically.", "Slide 6.");
  fill(7, 'e', "[[MaterialApp]] provides the application’s Material structure.", "Slide 7.");
  fill(7, 'e', "[[AppBar]] displays the title at the top.", "Slide 7.");
  fill(8, 'e', "[[runApp()|runApp]] starts the Flutter interface.", "Slide 8.");
  fill(9, 'e', "The program’s entry point is [[main()|main]].", "Slide 9.");
  fill(8, 'm', "Complete the code: (1) [[home]], (2) [[body]].", "`home:` holds the Scaffold and `body:` the main content.", { code: `MaterialApp(
  (1)____: Scaffold(
    appBar: AppBar(title: Text('My Courses')),
    (2)____: Center(child: Text('Mobile Apps')),
  ),
)` });
  fill(11, 'm', "Complete the code: [[children]].", "A list of widgets in square brackets.", { code: `Column(
  ________: [
    Text('Mobile Apps'),
    Text('IT319'),
  ],
)` });
  fill(11, 'm', "Complete the code: [[child]].", "Center accepts one widget.", { code: `Center(
  ________: Text('Mobile Apps'),
)` });
  fill(13, 'm', "Complete the code: (1) [[style]], (2) [[fontSize]].", "Slide 13.", { code: `Text('Mobile Apps',
  (1)____: TextStyle((2)____: 24)),` });
  fill(14, 'e', "A text value in Dart, such as `'Mobile Apps'`, is called a [[string]].", "Slide 14.");
  fill(14, 'e', "The `runApp(...)` statement ends with a [[semicolon]].", "Slide 14.");
  fill(15, 'e', "A [[StatelessWidget|stateless]] has no changing state, while a [[StatefulWidget|stateful]] has changing state.", "Slide 15.");
  fill(16, 'e', "The file [[pubspec.yaml|pubspec]] lists dependencies and project settings.", "Slide 16.");
  fill(16, 'e', "The usual starting file for a Flutter app is lib/[[main.dart|main]].", "Slide 16.");
  fill(17, 'e', "In a local Flutter project, [[hot reload]] updates many code changes.", "Slide 17.");
  fill(29, 'm', "The missing symbol in this code is a [[comma]].", "After the first Text widget.", { code: MISSING });
  fill([7, 8], 'm', "Complete the widget tree: (2) is the widget [[Center]], which centres its child.", "Slide 8.", { qfig: 'appTreeBlank' });

  /* ---------- Section D ---------- */
  def(5, 'e', 2, "Define Flutter and Dart.",
    [["Flutter: a toolkit for building app interfaces", "toolkit"], ["Dart: the programming language we use with Flutter", "language"]],
    "Flutter is a toolkit for building app interfaces. Dart is the programming language we use with Flutter.");
  def(6, 'e', 2, "Define widget and give an example.",
    [["Describes part of an app’s interface", "part of"], ["For example Text, Center or Column", "text", "center", "column", "scaffold", "appbar"]],
    "A widget describes part of an app's interface. Examples: Text, Center and Column.");
  def(11, 'm', 2, "What is the difference between child and children?",
    [["child accepts one widget", "one widget", "single widget"], ["children accepts a list of widgets", "list", "several", "many widgets"]],
    "child accepts one widget, while children accepts a list of widgets.");
  def([8, 9], 'm', 2, "What are the jobs of main() and runApp()?",
    [["main() is the program’s entry point", "entry point", "app starts", "starting point"], ["runApp() starts the Flutter interface", "flutter interface", "starts the interface"]],
    "main() is the program's entry point. runApp() starts the Flutter interface.");
  def(16, 'm', 2, "What is the purpose of lib/main.dart and pubspec.yaml?",
    [["lib/main.dart is the usual starting file", "starting file", "start"], ["pubspec.yaml lists dependencies and project settings", "dependenc", "settings"]],
    "lib/main.dart is the usual starting file for a Flutter app. pubspec.yaml lists dependencies and project settings.");
  list(7, 'e', 3, "List three main widgets of our first app and what is at the top of the widget tree.",
    [["MaterialApp", "materialapp", "material app"], ["Scaffold", "scaffold"], ["AppBar", "appbar", "app bar"], ["Text", "text"], ["Center", "center"]], { n: 3 });
  list(5, 'e', 3, "List the platforms that Flutter can target.",
    [["Mobile", "mobile"], ["Web", "web"], ["Desktop", "desktop"]]);
  list(30, 'e', 3, "List three common errors in Dart code.",
    [["Missing comma", "comma"], ["Quotation marks not in matching pairs", "quot"], ["Opening and closing brackets do not match", "bracket"], ["Wrong upper or lower case in names", "case"]], { n: 3 });
  list(14, 'h', 4, "List four symbols used in Dart code and their jobs.",
    [["Parentheses ( ) hold arguments", "parenthes"], ["Braces { } contain the function’s code", "brace"], ["Commas separate arguments and list items", "comma"], ["A colon names a setting", "colon"], ["A semicolon ends the statement", "semicolon"], ["Square brackets [ ] hold a list", "square", "bracket"]], { n: 4 });

  /* ---------- Section E ---------- */
  exp(15, 'm', "Explain the difference between StatelessWidget and StatefulWidget, with examples.",
    [["StatelessWidget: simple and predictable UI, no changing state", "no changing state", "predictable", "simple"], ["StatelessWidget examples: logo, title, fixed text", "logo", "title", "fixed text"], ["StatefulWidget: interactive UI with changing state", "interactive", "has changing state"], ["StatefulWidget examples: counter, Like button", "counter", "like button"]],
    "A StatelessWidget gives a simple and predictable UI with no changing state, for example a logo, title or fixed text. A StatefulWidget gives an interactive UI and has changing state, for example a counter or Like button.");
  exp([7, 8], 'm', "Explain the role of MaterialApp, Scaffold, AppBar and body in a simple app.",
    [["MaterialApp provides the application’s Material structure", "material structure"], ["Scaffold provides a basic screen layout", "screen layout", "basic layout"], ["AppBar displays the title at the top", "title at the top", "top"], ["The body contains the main screen content", "main screen content", "main content"]],
    "MaterialApp provides the application's Material structure. Scaffold provides a basic screen layout. AppBar displays the title at the top. The Scaffold body contains the main screen content.");
  exp([14, 30], 'm', "A student’s app does not run. Explain four things to check in the code.",
    [["Commas between arguments and list items", "comma"], ["Quotation marks in matching pairs", "quot"], ["Opening and closing brackets match", "bracket"], ["Names are case-sensitive (Text and text differ)", "case"]],
    "Check that there is a comma between arguments and list items, that quotation marks come in matching pairs, that opening and closing brackets match, and that names use the correct case because Dart is case-sensitive.");
  draw([7, 8], 'm', "Draw the widget tree of this app.", 'appTree',
    [["MaterialApp at the top", "materialapp"], ["Scaffold under it", "scaffold"], ["AppBar with Text 'My Courses'", "appbar"], ["Center with Text 'Mobile Apps'", "center"]],
    "MaterialApp → Scaffold. Scaffold has two branches: AppBar → Text 'My Courses', and (body) Center → Text 'Mobile Apps'.", { code: APP });
  draw([12, 28], 'm', "Draw the widget tree of this body.", 'columnTree',
    [["Center", "center"], ["Column under Center", "column"], ["First child: Text 'Mobile Apps'", "mobile apps"], ["Second child: Text 'IT319'", "it319"]],
    "Center → Column → two children: Text 'Mobile Apps' and Text 'IT319'.", { code: COL });
  code(8, 'h', "Write a complete Flutter app whose AppBar title is 'IT Courses' and whose body shows 'Flutter' in the centre of the screen.",
    [["The Material import", "!package flutter material"], ["`main()` that calls `runApp(MaterialApp(...))`", "!runapp materialapp"], ["`home: Scaffold(...)`", "!home scaffold"], ["AppBar with the title", "!title text it courses"], ["`body: Center(child: Text('Flutter'))`", "!body center child text flutter"]],
    "import 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(MaterialApp(\n    home: Scaffold(\n      appBar: AppBar(title: Text('IT Courses')),\n      body: Center(child: Text('Flutter')),\n    ),\n  ));\n}");
  code([12, 26, 27], 'm', "Write a `Column` that is centred vertically and shows three texts in this order: 'Mobile Applications' with font size 28, 'IT319', and 'Department: IT'.",
    [["`mainAxisAlignment: MainAxisAlignment.center`", "!mainaxisalignment center"], ["`children: [ ]`", "!children"], ["'Mobile Applications' with fontSize 28", "!fontsize 28"], ["'IT319' as the second text", "!text it319"], ["'Department: IT' as the third text", "!text department it"]],
    "Column(\n  mainAxisAlignment: MainAxisAlignment.center,\n  children: [\n    Text('Mobile Applications',\n      style: TextStyle(fontSize: 28)),\n    Text('IT319'),\n    Text('Department: IT'),\n  ],\n)");
  code([29, 30], 'h', "The code below has mistakes. Write the correct code.",
    [["`Column(` with a capital C", "~Column("], ["`children` (not child) for the list", "~children: ["], ["A comma after the first Text", "~),Text("], ["`Text` with a capital T and a matching quotation mark", "~Text('Flutter')"], ["`fontSize: 24` as a number", "~fontSize: 24"]],
    "Column(\n  children: [\n    Text('Dart',\n      style: TextStyle(fontSize: 24)),\n    Text('Flutter'),\n  ],\n)", { code: "column(\n  child: [\n    Text('Dart',\n      style: TextStyle(fontSize: '24'))\n    text('Flutter),\n  ],\n)" });
  pick(15, 'm', "A screen shows only the university logo and a fixed title that never change. Which widget type is the best? Why?",
    ["StatelessWidget", "StatefulWidget", "Two StatefulWidgets"], 0,
    [["There is no changing state", "no changing", "never change", "does not change", "fixed"], ["The UI is simple and predictable", "simple", "predictable"]],
    "A StatelessWidget is best because there is no changing state, so the UI is simple and predictable.");
  pick([6, 11], 'm', "You must show the course name, the code and the department one below another. Which widget is the best? Why?",
    ["Center with one child", "Column with children", "AppBar with a title"], 1,
    [["Column arranges several widgets vertically", "vertical", "below"], ["children accepts a list of widgets", "list", "several", "children"]],
    "Column is best because it arranges several widgets vertically, and its children property accepts a list of widgets.");
  pick(17, 'm', "You changed the text in a local Flutter project in VS Code and want to see the change quickly. What is the best action? Why?",
    ["Create a new project", "Use hot reload", "Delete pubspec.yaml"], 1,
    [["Hot reload updates many code changes", "update", "code change"], ["No need to start again / it is quick", "quick", "fast", "without", "no need", "running"]],
    "Hot reload updates many code changes in a local project, so the change appears quickly without creating a new project.");
});
