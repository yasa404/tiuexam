/* Lecture 2: Introduction to Flutter (PDF pages 4-32). */
EC.lecture(2, function (Q) {
  var mcq = Q.mcq, list = Q.list, def = Q.def, match = Q.match;
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

  /* ---------- Multiple choice ---------- */
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

  /* ---------- Short answer ---------- */
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
  Q.skip('list');
  list(5, 'e', 3, "List the platforms that Flutter can target.",
    [["Mobile", "mobile"], ["Web", "web"], ["Desktop", "desktop"]]);
  list(30, 'e', 3, "List three common errors in Dart code.",
    [["Missing comma", "comma"], ["Quotation marks not in matching pairs", "quot"], ["Opening and closing brackets do not match", "bracket"], ["Wrong upper or lower case in names", "case"]], { n: 3 });
  list(14, 'h', 4, "List four symbols used in Dart code and their jobs.",
    [["Parentheses ( ) hold arguments", "parenthes"], ["Braces { } contain the function’s code", "brace"], ["Commas separate arguments and list items", "comma"], ["A colon names a setting", "colon"], ["A semicolon ends the statement", "semicolon"], ["Square brackets [ ] hold a list", "square", "bracket"]], { n: 4 });
  def(15, 'm', 4, "Explain the difference between StatelessWidget and StatefulWidget, with examples.",
    [["StatelessWidget: simple and predictable UI, no changing state", "no changing state", "predictable", "simple"], ["StatelessWidget examples: logo, title, fixed text", "logo", "title", "fixed text"], ["StatefulWidget: interactive UI with changing state", "interactive", "has changing state"], ["StatefulWidget examples: counter, Like button", "counter", "like button"]],
    "A StatelessWidget gives a simple and predictable UI with no changing state, for example a logo, title or fixed text. A StatefulWidget gives an interactive UI and has changing state, for example a counter or Like button.");
  def([7, 8], 'm', 4, "Explain the role of MaterialApp, Scaffold, AppBar and body in a simple app.",
    [["MaterialApp provides the application’s Material structure", "material structure"], ["Scaffold provides a basic screen layout", "screen layout", "basic layout"], ["AppBar displays the title at the top", "title at the top", "top"], ["The body contains the main screen content", "main screen content", "main content"]],
    "MaterialApp provides the application's Material structure. Scaffold provides a basic screen layout. AppBar displays the title at the top. The Scaffold body contains the main screen content.");
  def([14, 30], 'm', 4, "A student’s app does not run. Explain four things to check in the code.",
    [["Commas between arguments and list items", "comma"], ["Quotation marks in matching pairs", "quot"], ["Opening and closing brackets match", "bracket"], ["Names are case-sensitive (Text and text differ)", "case"]],
    "Check that there is a comma between arguments and list items, that quotation marks come in matching pairs, that opening and closing brackets match, and that names use the correct case because Dart is case-sensitive.");
  def(15, 'm', 3, "A screen shows only the university logo and a fixed title that never change. Which widget type is the best? Why?",
    [["StatelessWidget", "stateless"], ["There is no changing state", "no changing", "not change", "no state", "nothing changes"], ["The UI is simple and predictable", "simple", "predictable"]],
    "A StatelessWidget is the best. There is no changing state, so the UI is simple and predictable.");
  def([6, 11], 'm', 3, "You must show the course name, the code and the department one below another. Which widget is the best? Why?",
    [["Column", "column"], ["It arranges widgets vertically", "vertical", "below"], ["children accepts a list of widgets", "list", "several", "children"]],
    "A Column is the best because it arranges widgets vertically, and its children property accepts a list of widgets.");
  def(8, 'm', 2, "Which text appears at the top of this app, and which text appears in the body?",
    [["Top: My Courses", "my courses"], ["Body: Mobile Apps", "mobile apps"]],
    "My Courses appears at the top (AppBar), and Mobile Apps appears in the body.", { code: APP });
  def([7, 8], 'm', 2, "Look at the widget tree. Which two widgets are directly under Scaffold?",
    [["AppBar", "appbar", "app bar"], ["Center", "center", "centre"]],
    "The two widgets are AppBar and Center.", { qfig: 'appTree' });
  def(12, 'm', 2, "Look at the widget tree. Which widget arranges the two texts, and which text is shown first?",
    [["Column", "column"], ["Mobile Apps is first (list order)", "mobile apps"]],
    "The Column arranges the two texts, and Mobile Apps is shown first.", { qfig: 'columnTree' });
  def([29, 30], 'm', 2, "Find the mistake in this code and write how to fix it.",
    [["A comma is missing", "comma"], ["After Text('Mobile Apps')", "after the first", "after text mobile apps", "mobile apps"]],
    "A comma is missing after Text('Mobile Apps').", { code: MISSING });
  def(30, 'h', 2, "This line has two mistakes. What are they?",
    [["text must be Text with a capital T (case-sensitive)", "capital", "case", "uppercase"], ["The closing quotation mark is missing", "quot"]],
    "text must be Text with a capital T because Dart is case-sensitive, and the closing quotation mark is missing.", { code: "text('IT319)," });
  def(13, 'm', 2, "Write the Dart code that displays the text 'Flutter' with font size 28.",
    [["`Text('Flutter'`", "~Text('Flutter'"], ["`style: TextStyle(fontSize: 28)`", "~style: TextStyle(fontSize: 28"]],
    "Text('Flutter', style: TextStyle(fontSize: 28))");
  def(13, 'e', 2, "In `fontSize: 24`, why does 24 have no quotation marks, and what does fontSize set?",
    [["24 is a number", "number"], ["fontSize sets the text size", "size"]],
    "24 is a number, so it has no quotation marks. fontSize sets the text size.");
  def(17, 'e', 2, "What is hot reload, and when do we use it?",
    [["It updates many code changes", "update", "code change"], ["In a local Flutter project (while the app runs)", "local", "running", "runs"]],
    "Hot reload updates many code changes while the app runs in a local Flutter project.");

  /* ---------- Matching ---------- */
  match([6, 7], 'e', "Match each widget with its job.",
    [["`Text`", "Displays words"], ["`Center`", "Positions its child in the middle of the available area"], ["`Column`", "Arranges several widgets vertically"], ["`Scaffold`", "Provides a basic screen layout"], ["`AppBar`", "Displays the title at the top"], ["`MaterialApp`", "Provides the application’s Material structure"]]);
  match([8, 9, 10, 11], 'm', "Match each part of the code with its meaning.",
    [["`import`", "Makes a library’s tools available"], ["`main()`", "Entry point of the program"], ["`runApp()`", "Starts the Flutter interface"], ["`//`", "Begins a comment"], ["`body`", "Main content of the screen"], ["`child`", "Accepts one widget"], ["`children`", "Accepts a list of widgets"]]);
  match([11, 14], 'm', "Match each symbol with its use in Dart.",
    [["Parentheses `( )`", "Hold arguments"], ["Square brackets `[ ]`", "Hold a list"], ["Braces `{ }`", "Contain the function’s code"], ["Comma `,`", "Separates arguments and list items"], ["Colon `:`", "Names a setting"], ["Semicolon `;`", "Ends a statement"], ["Quotation marks `' '`", "Surround a string"]]);
  match([5, 16, 17], 'm', "Match each name with its description.",
    [["Flutter", "Toolkit for building app interfaces"], ["Dart", "Programming language"], ["`lib/main.dart`", "Usual starting file"], ["`pubspec.yaml`", "Lists dependencies and project settings"], ["Hot reload", "Updates many code changes in a local project"], ["DartPad", "Runs Flutter code in the browser"]]);
  match([12, 13, 15], 'm', "Match each name with its description.",
    [["`style`", "Controls the appearance of a text"], ["`TextStyle`", "Holds text settings"], ["`fontSize`", "Sets how large the text is"], ["`mainAxisAlignment`", "Centres the children of a Column vertically"], ["StatelessWidget", "For a logo or a fixed title"], ["StatefulWidget", "For a counter or a Like button"]]);
});
