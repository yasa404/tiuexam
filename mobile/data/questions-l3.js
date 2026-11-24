/* Lecture 3: Stateless and Stateful Widget Apps (PDF pages 4-34; page numbers are PDF pages). */
EC.lecture(3, function (Q) {
  var mcq = Q.mcq, list = Q.list, def = Q.def, match = Q.match;
  var COURSE = `class CoursePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('IT Courses')),
      body: Center(
        child: Text('Mobile Applications'),
      ),
    );
  }
}`;
  var PROGRESS = `class ProgressPage extends StatefulWidget {
  @override
  State<ProgressPage> createState() {
    return _ProgressPageState();
  }
}`;
  var STATE = `class _ProgressPageState extends State<ProgressPage> {
  int lessons = 0;

  // addLesson() and build() go here.
}`;
  var BUTTON = `ElevatedButton(
  onPressed: addLesson,
  child: Text('Complete lesson'),
)`;
  var ADD = `void addLesson() {
  setState(() {
    lessons = lessons + 1;
  });
}`;
  var RESET = `void resetLessons() {
  setState(() {
    lessons = 0;
  });
}`;
  var ADD2 = `void addLesson() {
  setState(() {
    lessons = lessons + 2;
  });
}`;
  var SHOW = `int lessons = 0;

// Inside the children list in build():
Text('Completed lessons: $lessons'),`;
  var BODY = `body: Center(child: Column(
  mainAxisAlignment: MainAxisAlignment.center,
  children: [
    Text('Mobile Applications'),
    Text('Completed lessons: $lessons'),
    ElevatedButton(
      onPressed: addLesson,
      child: Text('Complete lesson'),
    ),
  ],
)),`;

  /* ---------- Multiple choice ---------- */
  mcq(4, 'e', "Which one is the Dart entry point?",
    ["`main()`", "`build()`", "`setState()`", "`createState()`"], "Slide 4.");
  mcq(5, 'e', "Flutter documentation is…",
    ["a website with guides and code examples", "a widget that shows a title on the screen", "a file that stores the state of the app", "a button that resets the counter to 0"], "Slide 5.");
  mcq(5, 'e', "What should you search for in the Flutter documentation?",
    ["The exact widget name, such as ElevatedButton", "The name of your university department", "The full text of your own main.dart file", "The colour of the app bar on your phone screen"], "Slide 5.");
  mcq(6, 'e', "A class lets us…",
    ["name and reuse a part of the interface", "delete the widgets of the interface", "open the Flutter documentation website", "change the device in the status bar"], "Slide 6.");
  mcq(6, 'e', "What does `extends` do?",
    ["Connects our class to a Flutter widget type", "Makes the text of our widget larger", "Starts our app on the device we have chosen", "Adds one to the counter variable"], "Slide 6.");
  mcq(6, 'm', "What does `build()` return?",
    ["The widgets that describe the interface", "The number of taps on the button", "The name of the private Dart library", "The list of all the errors in the code"], "Slide 6.");
  mcq(6, 'e', "Who calls `build()`?",
    ["Flutter, when it needs the description of the interface", "The user, by typing its name in the search box", "The AppBar, when the title is too long", "The documentation, when the class page is opened there"], "Slide 6.");
  mcq(7, 'e', "A StatelessWidget has…",
    ["no mutable State object of its own", "a State object that changes on each tap", "two State objects and one counter", "no build() method in its class"], "Slide 7.");
  mcq(7, 'e', "When can a StatelessWidget rebuild?",
    ["When its inputs or context change", "Never, after the first build", "Only when the app is deleted", "Only when setState() is inside it"], "Slide 7.");
  mcq(7, 'm', "Which statement about StatelessWidget is correct?",
    ["It can contain stateful child widgets", "It cannot contain any child widgets", "It must contain a createState() method", "It can contain only images and icons"], "Slide 7.");
  mcq(7, 'e', "Which is a useful example of a StatelessWidget?",
    ["A course heading", "A lesson counter", "A Reset button with a count", "A score that increases"], "Slide 7.");
  mcq(8, 'm', "What does `@override` do in this code?",
    ["Marks our version of build()", "Deletes the old build() method", "Starts the Flutter interface", "Makes the class private"], "Slide 8.", { code: COURSE });
  mcq(8, 'm', "What does `BuildContext` describe?",
    ["The place of the widget in the widget tree", "The size of the text on the phone screen", "The whole number stored in the counter field", "The label shown on the button"], "Slide 8.");
  mcq(9, 'm', "Which widget does `build()` return in this code?",
    ["`Scaffold`", "`Text`", "`Center`", "`AppBar`"], "`return Scaffold(...)`.", { code: COURSE });
  mcq(8, 'h', "Which type of widget is CoursePage?",
    ["StatelessWidget", "StatefulWidget", "ElevatedButton", "ProgressPageState"], "It extends StatelessWidget.", { code: COURSE });
  mcq(10, 'e', "State is…",
    ["data that may change while the app runs", "data that never changes while the app runs", "the place of a widget in the tree", "the name of the Dart library"], "Slide 10.");
  mcq(10, 'e', "Which Dart type stores a whole number, such as 0 or 3?",
    ["`int`", "`String`", "`State`", "`Widget`"], "Slide 10.");
  mcq(10, 'm', "What must Flutter do to show a change in the state?",
    ["Rebuild the relevant interface", "Delete the relevant interface", "Open the Flutter documentation", "Create a new Flutter project"], "Slide 10.");
  mcq(11, 'h', "What does `createState()` do?",
    ["Creates the State object of the widget", "Deletes the State object of the widget", "Increases the counter by one", "Displays the text of the counter"], "Slide 11.", { code: PROGRESS });
  mcq(11, 'e', "What does the State object hold?",
    ["Changing data and build()", "Only the AppBar title", "The documentation links", "The name and the colour of the project"], "Slide 11.");
  mcq(11, 'm', "What does the leading `_` in `_ProgressPageState` do?",
    ["Makes the name private to this Dart library", "Makes the class a new StatelessWidget type", "Makes the counter start again from 0", "Makes the name visible to all Dart libraries"], "Slide 11.");
  mcq(12, 'm', "What does `State<ProgressPage>` do in this code?",
    ["Links the state to its widget type", "Creates a new counter variable in build()", "Calls the addLesson() method", "Returns the Scaffold widget"], "Slide 12.", { code: STATE });
  mcq(12, 'e', "Where should the `lessons` variable live?",
    ["In the State class, outside build()", "Inside the build() method, before return", "In the StatefulWidget class", "In the AppBar of the Scaffold"], "Slide 12.");
  mcq(12, 'h', "What happens if `lessons` is a local variable inside `build()`?",
    ["It would reset on each build", "It would keep its value forever", "It would be private to the library", "It would add two on each tap"], "Slide 12.");
  mcq(13, 'e', "In an ElevatedButton, which property supplies the label?",
    ["`child`", "`onPressed`", "`state`", "`home`"], "Slide 13.", { code: BUTTON });
  mcq(13, 'e', "In an ElevatedButton, which property receives the method to call on a tap?",
    ["`onPressed`", "`child`", "`children`", "`title`"], "Slide 13.");
  mcq(13, 'm', "Why do we write `onPressed: addLesson` without parentheses?",
    ["To pass the method without calling it now", "To call the method once before the first tap", "To make the method private", "To delete the method after the tap"], "Slide 13.");
  mcq(14, 'e', "What does `setState` do?",
    ["Runs the change and schedules a rebuild", "Runs the change and then closes the app", "Creates a new widget class", "Opens the widget documentation"], "Slide 14.");
  mcq(14, 'h', "In this code, what is `() { ... }` inside `setState`?",
    ["A function with no arguments", "A list of several widgets", "A comment in the Dart code", "A class that has no name at all"], "Slide 14.", { code: ADD });
  mcq(14, 'm', "The value of `lessons` is 4. What is it after one call of this method?",
    ["5", "4", "1", "0"], "4 + 1 = 5.", { code: ADD });
  mcq(15, 'e', "What does `$lessons` do inside a string?",
    ["Inserts the current value into the text", "Adds one to the current value of lessons", "Resets the current value to 0", "Displays the word lessons as text"], "Slide 15.");
  mcq(15, 'h', "What is displayed at the start by this code?",
    ["Completed lessons: 0", "Completed lessons: $lessons", "Completed lessons: 1", "Completed lessons:"], "lessons starts at 0.", { code: SHOW });
  mcq(15, 'm', "The button adds one lesson per tap. What is displayed after three taps?",
    ["Completed lessons: 3", "Completed lessons: 0", "Completed lessons: 1", "Completed lessons: 6"], "Slide 15.", { code: SHOW });
  mcq(16, 'h', "What is the value of `lessons` after this method runs?",
    ["0", "1", "3", "It does not change"], "The reset value is 0.", { code: RESET });
  mcq([16, 18], 'm', "The counter starts at 0 and adds one per tap. After two taps and a reset, what value appears?",
    ["0", "2", "1", "3"], "Slide 18.");
  mcq(16, 'e', "Which setting should a Reset button use?",
    ["`onPressed: resetLessons`", "`onPressed: addLesson`", "`children: resetLessons`", "`title: resetLessons`"], "Slide 16.");
  mcq(30, 'm', "The counter starts at 0. With this code, what is shown after two clicks?",
    ["4", "2", "3", "1"], "0 + 2 + 2 = 4.", { code: ADD2 });
  mcq(30, 'h', "The counter starts at 0. With this code, what is shown after three clicks, one reset, and one more click?",
    ["2", "8", "6", "0"], "Reset gives 0, then + 2.", { code: ADD2 });
  mcq(22, 'm', "In a Dart file in VS Code, what do `stless` and `stful` offer?",
    ["Class templates via autocomplete", "Two different kinds of app bars", "A list of the connected devices", "Links to the documentation"], "Slide 22.");
  mcq(22, 'e', "Which key launches the app with Run > Start Debugging?",
    ["F5", "F1", "Ctrl+S", "Ctrl+F"], "Slide 22.");
  mcq(21, 'm', "In VS Code, where do you run “Flutter: New Project”?",
    ["In the Command Palette", "In the bottom status bar", "In the Problems panel", "In the AppBar of the app"], "View > Command Palette.");
  mcq(29, 'e', "What usually happens to the counter value after hot reload?",
    ["It keeps the current value", "It becomes 0 again", "It becomes negative", "It increases by one more"], "Slide 29.");
  mcq(29, 'e', "What happens to the counter after Flutter: Hot Restart?",
    ["The app restarts with lessons = 0", "The counter keeps its value", "The counter value is doubled", "The project is deleted from VS Code"], "Slide 29.");
  mcq(31, 'm', "Where should the method resetLessons() be pasted?",
    ["Inside _ProgressPageState, before @override for build()", "Inside the children list, after the first button", "Inside the ProgressPage class, before createState()", "Above the import line, at the top of the main.dart file"], "Slide 31.");
  mcq(32, 'e', "Where should the Reset button be placed?",
    ["Inside the children list", "Inside the setState function", "Outside the State class", "Inside the import statement"], "Slide 32.");
  mcq(33, 'e', "Where can you find code errors in VS Code?",
    ["View > Problems", "View > Command Palette", "Run > Start Debugging", "File > New Project"], "Slide 33.");
  mcq(28, 'h', "Which text in this body changes when the button is tapped?",
    ["The second Text", "The first Text", "The button label", "All three texts"], "It contains $lessons.", { code: BODY });
  mcq([13, 14], 'm', "Which step is missing in this diagram?",
    ["setState changes the value", "main() starts a new app", "The button widget is deleted", "pubspec.yaml is opened"], "Slide 14.", { qfig: 'tapFlowBlank' });

  /* ---------- Short answer ---------- */
  def(7, 'e', 2, "Define StatelessWidget and give a useful example.",
    [["Has no mutable State object of its own", "no mutable", "no state object"], ["Example: a course heading", "heading", "title", "logo"]],
    "A StatelessWidget has no mutable State object of its own. A course heading is a useful example.");
  def(10, 'e', 2, "Define state and give the example from the progress app.",
    [["Data that may change while the app runs", "may change", "can change", "change while"], ["The lessons variable (current count)", "lessons", "count"]],
    "State is data that may change while the app runs. In the progress app the lessons variable stores the current count.");
  def(14, 'm', 2, "What does setState() tell Flutter?",
    [["Runs the change in the state", "runs the change", "state changed", "state has changed", "change"], ["Schedules a rebuild of the interface", "rebuild"]],
    "setState() runs the change and schedules a rebuild, so build() then reads the updated value.");
  def(13, 'm', 2, "Why do we use onPressed: addLesson without parentheses?",
    [["It passes the method to the button", "passes the method", "pass the method"], ["Without calling it now; it is called on a tap", "without calling", "on a tap", "not call"]],
    "onPressed: addLesson passes the method without calling it now. The method is called on a tap.");
  def(12, 'm', 2, "Why must the lessons variable be kept outside build()?",
    [["It is a field in the State class", "field", "state class"], ["A local variable inside build() would reset on each build", "reset"]],
    "lessons is a field in the State class and must stay outside build(), because a local variable inside build() would reset on each build.");
  def(15, 'm', 2, "What does $lessons do inside a string? Give the text after one tap.",
    [["Inserts the current value into the text", "insert", "current value"], ["Completed lessons: 1", "#1"]],
    "$lessons inserts the current value into the text. After one tap it shows Completed lessons: 1.");
  def(29, 'm', 2, "What is the difference between hot reload and hot restart for the counter?",
    [["Hot reload usually keeps the current value", "keep"], ["Hot restart starts the app with lessons = 0", "#0", "zero", "starts again"]],
    "Hot reload usually keeps the current counter value. Hot restart restarts the app with lessons = 0.");
  list([4], 'e', 3, "List three parts of our course app and what each one does.",
    [["main() is the Dart entry point", "main"], ["runApp() starts the Flutter interface", "runapp"], ["MaterialApp contains our app screen", "materialapp"], ["Scaffold provides an AppBar and a body", "scaffold"], ["Text displays information", "text"]], { n: 3 });
  list([11, 12], 'm', 2, "List the two classes needed for the progress page.",
    [["ProgressPage (the StatefulWidget)", "=progresspage", "statefulwidget", "progresspage extends", "stateful"], ["_ProgressPageState (the State class)", "progresspagestate", "state class"]]);
  list(33, 'e', 3, "List three things to check when the app has errors.",
    [["Use the supplied files if a fragment is incomplete", "supplied", "incomplete"], ["Keep lessons and the methods inside the State class", "state class", "inside the state"], ["Use View > Problems", "problems"], ["Check commas and brackets near the first error", "comma", "bracket"]], { n: 3 });
  def([7, 11, 34], 'm', 4, "Compare StatelessWidget and StatefulWidget.",
    [["StatelessWidget has no mutable State object of its own", "no mutable", "no state object"], ["Its build() uses its inputs and the surrounding context", "inputs", "context"], ["StatefulWidget stores changing data in a State object", "changing data"], ["createState() creates the State object", "createstate"]],
    "A StatelessWidget has no mutable State object of its own; its build() uses its inputs and the surrounding context. A StatefulWidget stores changing data in a State object, and createState() creates that State object.");
  def([13, 14, 15], 'm', 4, "Explain what happens, step by step, when the user taps the “Complete lesson” button.",
    [["The tap calls addLesson() (onPressed)", "addlesson", "onpressed"], ["setState runs the change: lessons = lessons + 1", "setstate"], ["It schedules a rebuild", "rebuild"], ["build() reads the updated value and the text shows the new count", "updated", "new count", "new value"]],
    "The tap calls addLesson() because of onPressed. Inside it, setState runs lessons = lessons + 1 and schedules a rebuild. build() then reads the updated lessons value, and the text shows the new count.");
  def([5, 17], 'm', 4, "Explain how to use the Flutter documentation to learn a widget such as ElevatedButton.",
    [["Open the documentation (api.flutter.dev or the widget catalog)", "api flutter dev", "documentation", "catalog"], ["Search for the exact widget name", "exact", "search"], ["Open the class page and find the example code", "example code", "class page"], ["Identify the properties (onPressed and child); a fragment belongs inside an app", "onpressed", "child", "fragment"]],
    "Open the documentation at api.flutter.dev and search for the exact widget name. Open the class page and find its example code. Identify properties such as onPressed and child. A widget fragment belongs inside an app and may need other code.");
  def([7, 10, 11], 'm', 3, "An app must count how many lessons a student has completed, and the number changes after each tap. Which widget type is the best? Why?",
    [["StatefulWidget", "stateful"], ["The data changes while the app runs (state)", "changes", "changing", "state changes"], ["It stores the data in a State object and can call setState", "state object", "setstate", "stores"]],
    "A StatefulWidget is the best. The count changes while the app runs, and a StatefulWidget stores changing data in a State object and can call setState.");
  def(12, 'h', 3, "A counter shows 0 after every rebuild because `int lessons = 0;` is written inside build(). What is the fix? Why?",
    [["Move lessons to the State class, outside build()", "state class", "outside build", "outside"], ["A local variable inside build() resets on each build", "reset", "each build", "every build"], ["A field in the State class keeps its value", "keeps", "field", "keep its"]],
    "Move lessons to the State class, outside build(). A local variable inside build() resets on each build, but a field in the State class keeps its value.");
  def(14, 'm', 3, "A tap changes `lessons` from 0 to 1, but the screen still shows 0. What is the fix? Why?",
    [["Put the change inside setState", "setstate"], ["It schedules a rebuild", "rebuild", "schedule"], ["build() then reads the updated value", "updated", "new value", "reads"]],
    "Put the change inside setState. setState schedules a rebuild, and build() then reads the updated value.");
  def([14, 15], 'm', 2, "The counter starts at 0. Which number is shown after three taps on the button? Which line of this method changes it?",
    [["3", "#3"], ["`lessons = lessons + 1;`", "!lessons lessons 1"]],
    "3. The line lessons = lessons + 1; changes it.", { code: ADD });
  def(30, 'm', 2, "The counter starts at 0 and the button calls this method. What is shown after one click and after two clicks?",
    [["After one click: 2", "#2"], ["After two clicks: 4", "#4"]],
    "After one click it shows 2, and after two clicks it shows 4.", { code: ADD2 });
  def([16, 18], 'm', 2, "The counter starts at 0. The user taps “Complete lesson” twice and then taps Reset. Which value appears, and why?",
    [["0", "=0", "zero", "0 appears", "appears 0", "value is 0", "it is 0", "shows 0", "0 because", "0 is shown"], ["resetLessons() sets lessons to 0 inside setState", "lessons to 0", "!lessons 0", "sets lessons", "setstate", "reset to 0", "back to 0", "count to 0", "it to 0"]],
    "0 appears, because resetLessons() sets lessons to 0 inside setState.", { code: RESET });
  def([8, 9], 'm', 2, "Is CoursePage stateless or stateful, and which widget does its build() method return?",
    [["Stateless (it extends StatelessWidget)", "is stateless", "stateless because", "stateless and", "it extends", "!statelesswidget", "=stateless", "stateless scaffold"], ["Scaffold", "scaffold"]],
    "CoursePage is stateless because it extends StatelessWidget. Its build() method returns a Scaffold.", { code: COURSE });
  def(28, 'm', 2, "Look at the widget tree. Which widget has three children, and which child is a button?",
    [["Column", "column"], ["ElevatedButton", "elevatedbutton", "elevated button"]],
    "The Column has three children. The button is ElevatedButton.", { qfig: 'progressTree' });
  def(13, 'm', 2, "Look at this code. What is the job of onPressed and of child?",
    [["onPressed: the method to call on a tap", "method", "tap"], ["child: the label of the button", "label"]],
    "onPressed receives the method to call on a tap. child supplies the label of the button.", { code: BUTTON });
  def(15, 'm', 2, "Write the Text widget that shows 'Completed lessons: ' followed by the current value of lessons.",
    [["`Text('Completed lessons:`", "!text completed lessons"], ["`$lessons`", "~$lessons", "~${lessons}"]],
    "Text('Completed lessons: $lessons')");
  def([11, 12], 'h', 2, "Read these class lines. Which class is the widget, and which class holds the changing data?",
    [["ProgressPage is the widget", "progresspage is the widget", "widget is progresspage", "=progresspage", "the widget"], ["_ProgressPageState holds the changing data", "progresspagestate"]],
    "ProgressPage is the widget, and _ProgressPageState holds the changing data.", { code: "class ProgressPage extends StatefulWidget { ... }\n\nclass _ProgressPageState extends State<ProgressPage> {\n  int lessons = 0;\n}" });

  /* ---------- Matching ---------- */
  match([6, 8, 11, 14], 'm', "Match each Dart or Flutter name with its meaning.",
    [["`extends`", "Connects our class to a Flutter widget type"], ["`build()`", "Returns the widgets that describe the interface"], ["`BuildContext`", "Describes the widget’s place in the widget tree"], ["`@override`", "Marks our version of a method"], ["`createState()`", "Creates the State object"], ["`setState()`", "Runs a change and schedules a rebuild"], ["Leading `_`", "Makes a name private to the Dart library"]]);
  match([7, 10, 13, 15, 34], 'e', "Match each term with its description.",
    [["State", "Data that may change while the app runs"], ["StatelessWidget", "Has no mutable State object of its own"], ["StatefulWidget", "Stores changing data in a State object"], ["`int`", "Type for a whole number"], ["`$lessons`", "Inserts the current value into a text"], ["`ElevatedButton`", "Reacts to a tap and has a label"]]);
  match([13, 14, 15, 16, 30], 'm', "Match each line of code with its effect.",
    [["`lessons = lessons + 1;`", "Increases the count by one"], ["`lessons = lessons + 2;`", "Increases the count by two"], ["`lessons = 0;`", "Resets the count"], ["`onPressed: addLesson`", "Names the method to call on a tap"], ["`child: Text('Reset')`", "Supplies the label of a button"], ["`Text('Completed lessons: $lessons')`", "Shows the current count"]]);
  match([21, 22, 29, 33], 'm', "Match each tool or command in VS Code with its use.",
    [["Command Palette", "Where we run Flutter: New Project"], ["F5", "Launches the app (Start Debugging)"], ["Hot reload", "Usually keeps the counter value"], ["Hot restart", "Starts the app again with lessons = 0"], ["`stless`", "Offers a StatelessWidget template"], ["`stful`", "Offers a StatefulWidget template"], ["View > Problems", "Shows the errors in the code"]]);
});
