/* Lecture 4: Designing a Growing Flutter App (PDF pages 4-20; page numbers are PDF pages). */
EC.lecture(4, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp, draw = Q.draw, code = Q.code, pick = Q.pick;
  var SUMMARY = `CourseSummary(
  name: 'Mobile Applications',
  code: 'IT319',
  credits: 3,
)`;
  var YAML = `flutter:
  assets:
    - assets/images/logo.png`;

  /* ---------- Section A ---------- */
  mcq(4, 'm', "If a course catalogue grows from 2 courses to 20, what should we avoid copying twenty times?",
    ["The layout design", "The course names", "The course codes", "The credit values"], "One reusable widget can serve all courses.");
  mcq([4, 5], 'e', "Which information does each course have in the catalogue example?",
    ["Name, code and credit value", "Price, size and colour", "Address, phone and email", "Image, sound and video file"], "Slide 4.");
  mcq(6, 'e', "“The code is IT319” is an example of…",
    ["data", "presentation", "spacing", "a theme"], "What the course is.");
  mcq(6, 'e', "“The name appears in larger text” is an example of…",
    ["presentation", "data", "a model", "an asset"], "How it appears.");
  mcq(6, 'm', "Which change should NOT require changing the course information?",
    ["Changing a text colour", "Correcting the course name", "Changing the credit value", "Correcting the course code"], "Data and presentation are separate.");
  mcq(6, 'e', "Data describes … and presentation describes …",
    ["what the course is … how it appears", "how the course appears … what it is", "the colour … the spacing", "the code style … the file name"], "Slide 6.");
  mcq(7, 'e', "What does a `List<Course>` do?",
    ["Groups several Course objects in order", "Displays one image from the internet", "Declares the image assets in pubspec.yaml", "Changes the text style of a course"], "Slide 7.");
  mcq(7, 'e', "What does each item of a `List<Course>` hold?",
    ["The information for one course", "The layout of the whole screen", "The path of an image file", "The theme of the application"], "Slide 7.");
  mcq(7, 'm', "Adding course data should not require…",
    ["copying the whole screen layout", "a name and a code for the course", "a new item in the collection", "reading the collection again"], "Slide 7.");
  mcq(8, 'e', "What is an advantage of a reusable CourseSummary widget?",
    ["A spacing change happens in one place", "A spacing change needs several edits", "Each course has its own copied design", "Copies may slowly look different"], "Slide 8.");
  mcq(8, 'e', "What can slowly happen when a layout is copied for each course?",
    ["The copies may look different", "The copies become one widget", "The course data is deleted", "The images stop loading"], "Slide 8.");
  mcq(8, 'e', "When is reuse useful?",
    ["When the same kind of information appears more than once", "When the information appears only one time in the app", "When the app has no widgets and no screens at all", "When each course must have a completely different design"], "Slide 8.");
  mcq(9, 'm', "What is the job of the CourseSummary widget?",
    ["To display the details of one course", "To store all of the images of the app", "To download data from the internet", "To decide which courses are offered"], "Slide 9.");
  mcq(9, 'e', "Who decides which course information to pass to CourseSummary?",
    ["The surrounding screen", "The CourseSummary itself", "The image asset", "The pubspec.yaml file"], "Slide 9.");
  mcq(10, 'm', "What makes each value’s purpose clear in this code?",
    ["The named inputs", "The number of lines", "The quotation marks", "The closing bracket"], "Slide 10.", { code: SUMMARY });
  mcq(10, 'h', "Why can this fragment not run alone?",
    ["CourseSummary must be defined before it", "The credit value must be a string", "The name must have capital letters only", "The code needs an image asset first"], "Slide 10.", { code: SUMMARY });
  mcq(11, 'e', "What does a constructor do?",
    ["Creates the widget with the supplied values", "Deletes the widget after it is displayed", "Declares the image assets of the project", "Shows a message when the loading fails"], "Slide 11.");
  mcq(11, 'e', "What does `required` mean for an input?",
    ["The caller must supply this input", "The input can always be left out", "The input is an image from the internet", "The input changes after every tap"], "Slide 11.");
  mcq(11, 'e', "What does a `final` field mean?",
    ["That widget instance keeps the assigned value", "The screen can never be updated again", "The value is changed again on every rebuild", "The value must be a number, not a text"], "Slide 11.");
  mcq(11, 'h', "A widget has a `final` name. How can the screen show a different name?",
    ["A new widget instance receives different data", "The final field is changed by the user", "It is impossible to ever show a different name", "The old instance is renamed by Flutter"], "A final field does not mean the screen can never update.");
  mcq(11, 'e', "In `name: 'Mobile Applications'`, what is `name:`?",
    ["A named input", "A final class", "An asset path", "A theme colour"], "Slide 11.");
  mcq(12, 'h', "CourseSummary shows IT319 and then Web Development, IT220, 3 credits. Which inputs change?",
    ["The name and the code", "The text style and the spacing", "Only the credit value", "The layout of the widget"], "Both courses have 3 credits.");
  mcq(13, 'm', "Which location holds the Course data model in the example project?",
    ["`lib/models/course.dart`", "`lib/widgets/course_summary.dart`", "`lib/screens/courses_page.dart`", "`assets/images/`"], "Slide 13.");
  mcq(13, 'e', "Which location holds the reusable course display?",
    ["`lib/widgets/course_summary.dart`", "`lib/models/course.dart`", "`lib/screens/courses_page_list.dart`", "`assets/images/`"], "Slide 13.");
  mcq(13, 'e', "Which location holds the screen that uses course displays?",
    ["`lib/screens/courses_page.dart`", "`lib/models/course.dart`", "`lib/widgets/course_summary.dart`", "`pubspec.yaml`"], "Slide 13.");
  mcq(13, 'm', "What connects code across Dart files?",
    ["Import statements", "Image assets", "Text styles", "Named final fields"], "Slide 13.");
  mcq(14, 'e', "An asset is…",
    ["a file that travels with the app", "a list of several course objects", "a message for the user", "a constructor of a reusable widget"], "Slide 14.");
  mcq(14, 'e', "What does a bundled image NOT need in order to display?",
    ["Downloading it from the internet", "A correct asset declaration", "The correct path of the image file", "A file inside the project"], "Slide 14.");
  mcq(14, 'm', "An image was copied into a folder of the project but does not appear. What may be missing?",
    ["Its asset declaration", "Its course code", "Its credit value", "Its named input label"], "Copying is only part of the setup.");
  mcq(15, 'm', "In which file is an asset declared?",
    ["`pubspec.yaml`", "`main.dart`", "`course.dart`", "`logo.png`"], "Under `flutter:`.");
  mcq(15, 'e', "Which is the correct order for including a logo?",
    ["Save the image, declare the asset, display it, check the result", "Display it, save the image, check the result, declare the asset", "Check the result, declare the asset, save the image, display it", "Declare the asset, check the result, display it, save the image"], "Slide 15.");
  mcq(16, 'm', "What matters in this file?",
    ["Spacing and indentation", "The order of the colours", "The size of the screen", "The number of courses"], "Slide 15.", { code: YAML });
  mcq(16, 'h', "Which code displays this image?",
    ["`Image.asset('assets/images/logo.png')`", "`Image.asset('logo.png')`", "`Image.network('assets/images/logo.png')`", "`Text('assets/images/logo.png')`"], "The path must match exactly.", { code: YAML });
  mcq(17, 'e', "Which kind of image is useful for a fixed university logo?",
    ["Local asset", "Network image", "Animated image", "Deleted image"], "Slide 17.");
  mcq(17, 'e', "Which kind of image needs loading and failure handling?",
    ["Network image", "Local asset", "Bundled image", "Declared asset"], "Slide 17.");
  mcq(17, 'm', "Which kind of image may be unavailable without connectivity?",
    ["Network image", "Local asset", "Bundled logo", "Project icon"], "Slide 17.");
  mcq(18, 'e', "What should students recognise first in the course display?",
    ["The course name", "The credit value", "The background", "The file name"], "Slide 18.");
  mcq(18, 'e', "Why does “Registration closed” communicate more clearly than a red dot?",
    ["A colour alone should not be the only way to show information", "A red dot takes more space than text on a phone screen", "Text always loads much faster than any colour on every phone", "Red dots cannot be displayed in Flutter apps"], "Slide 18.");
  mcq(19, 'm', "There are no courses in the catalogue. What should the screen show?",
    ["“No courses available”", "An empty white screen", "A progress indicator only", "A Retry action"], "Slide 19.");
  mcq(19, 'e', "Online data is loading. What should the screen show?",
    ["A progress indicator and a short message", "The message “No courses available”", "A clear message and a Retry action", "An empty screen with the old information"], "Slide 19.");
  mcq(19, 'e', "Online loading fails. What should the screen show?",
    ["A clear message and a Retry action", "A progress indicator that never ends", "“No courses available”", "An empty list of courses"], "Slide 19.");
  mcq(19, 'h', "Which data source needs no network loading state?",
    ["A simple local list", "Data fetched online", "A network image", "A web catalogue"], "Slide 19.");
  mcq(20, 'm', "What helps similar parts of an app look consistent?",
    ["Themes", "Assets", "Errors", "Imports"], "Slide 20.");
  mcq(20, 'e', "What keeps related course information together?",
    ["Course models", "Image assets", "Themes", "Screen feedback"], "Slide 20.");

  /* ---------- Section C ---------- */
  tf(6, 'e', "Data is what the course is, and presentation is how it appears.", true, "Slide 6.");
  tf(6, 'e', "Changing a text colour should require changing the course information.", false, "It should not.");
  tf(7, 'e', "A `List<Course>` groups several Course objects in order.", true, "Slide 7.");
  tf(8, 'm', "With a copied layout, a spacing change happens in one place.", false, "It needs several edits.");
  tf(9, 'm', "The same CourseSummary design can display IT319 or IT220.", true, "Slide 9.");
  tf(9, 'e', "CourseSummary decides which course information the screen passes to it.", false, "The surrounding screen decides.");
  tf(11, 'e', "`required` means the caller must supply the input.", true, "Slide 11.");
  tf(11, 'm', "A final field means the screen can never update.", false, "A new widget instance can receive different data.");
  tf(13, 'm', "Dart import statements connect code across files.", true, "Slide 13.");
  tf(14, 'e', "Copying an image into a folder is all that Flutter needs to display it.", false, "It also needs its asset declaration.");
  tf(15, 'e', "Spacing and indentation matter in pubspec.yaml.", true, "Slide 15.");
  tf(16, 'm', "The asset path in Dart may be different from the path in pubspec.yaml.", false, "The path must match exactly.");
  tf(17, 'm', "A local asset is available without downloading.", true, "Slide 17.");
  tf(17, 'e', "A network image is included with the app.", false, "It is loaded from an internet address.");
  tf(18, 'm', "A colour alone is enough to show that registration is closed.", false, "It should not be the only way.");
  tf(19, 'e', "When online loading fails, a Retry action is useful feedback.", true, "Slide 19.");

  /* ---------- Section B ---------- */
  fill(6, 'e', "[[Data]] is what the course is, and [[presentation]] is how it appears.", "Slide 6.");
  fill(7, 'e', "A collection that groups several Course objects in order is written as [[List<Course>|List Course|list]].", "Slide 7.");
  fill(8, 'e', "With a [[reusable]] widget, the layout stays consistent and a spacing change happens in one place.", "Slide 8.");
  fill(10, 'm', "Complete the code: (1) [[name]], (2) [[credits]].", "Named inputs.", { code: `CourseSummary(
  (1)____: 'Web Development',
  code: 'IT220',
  (2)____: 3,
)` });
  fill(11, 'e', "A [[constructor]] creates the widget with the supplied values.", "Slide 11.");
  fill(11, 'e', "The word [[required]] means the caller must supply the input.", "Slide 11.");
  fill(11, 'e', "A [[final]] field keeps the assigned value in that widget instance.", "Slide 11.");
  fill(13, 'e', "In the example structure, the Course data model is in lib/[[models]]/course.dart and the reusable display is in lib/[[widgets]]/course_summary.dart.", "Slide 13.");
  fill(13, 'e', "Dart [[import|imports|import statements]] statements connect code across files.", "Slide 13.");
  fill(14, 'e', "An [[asset]] is a file that travels with the app.", "Slide 14.");
  fill(15, 'e', "Assets are declared in the file [[pubspec.yaml|pubspec]].", "Slide 15.");
  fill(16, 'm', "Complete the code: [[assets]].", "Under the flutter section.", { code: `flutter:
  ________:
    - assets/images/logo.png` });
  fill(16, 'm', "Complete the code: [[Image.asset|Image asset]].", "It displays a local image.", { code: `________('assets/images/logo.png')` });
  fill(17, 'e', "A [[local|local asset]] image is included with the app, while a [[network|network image]] image is loaded from an internet address.", "Slide 17.");
  fill(18, 'e', "Students should recognise the course [[name]] first.", "Slide 18.");
  fill(19, 'e', "When online data is loading, show a [[progress indicator]] and a short message.", "Slide 19.");
  fill(19, 'e', "When online loading fails, show a clear message and a [[Retry]] action.", "Slide 19.");
  fill(20, 'e', "[[Themes|Theme]] help similar parts look consistent.", "Slide 20.");

  /* ---------- Section D ---------- */
  def(6, 'e', 2, "Define data and presentation in the course catalogue.",
    [["Data: what the course is (name, code, credits)", "what the course is", "information"], ["Presentation: how it appears (text size, spacing)", "how it appears", "appear", "looks"]],
    "Data is what the course is, such as its name, code and credit value. Presentation is how it appears, such as larger text and spacing.");
  def(14, 'e', 2, "Define asset and give an example.",
    [["A file that travels with the app", "travels with", "included with", "bundle"], ["Example: a university logo or course illustration", "logo", "illustration", "image"]],
    "An asset is a file that travels with the app, for example a university logo or a course illustration.");
  def(11, 'e', 2, "Define constructor and named input.",
    [["Constructor: creates the widget with the supplied values", "creates the widget", "supplied values"], ["Named input: a label such as name: identifies a value", "label", "identif"]],
    "A constructor creates the widget with the supplied values. A named input is a label such as name: that identifies a value.");
  def(11, 'e', 2, "Define required and final field.",
    [["required: the caller must supply this input", "must supply", "must give"], ["final field: that widget instance keeps the assigned value", "keeps", "assigned value"]],
    "required means the caller must supply this input. A final field means that widget instance keeps the assigned value.");
  def(16, 'm', 2, "Why may a declared image still not appear? Give two checks.",
    [["The path must match exactly in pubspec.yaml, the folder and the code", "path", "match"], ["Spacing and indentation in pubspec.yaml (or the filename)", "indentation", "spacing", "filename"]],
    "The path must match exactly in pubspec.yaml, in the folder and in Image.asset. Also check the filename and the spacing and indentation in pubspec.yaml.");
  list(15, 'm', 4, "List the four steps for including a university logo.",
    [["Save the image in assets/images/", "save"], ["Declare the asset in pubspec.yaml", "declare"], ["Display the image with Image.asset", "display"], ["Check the result", "check"]]);
  list(19, 'm', 4, "List the four situations of a screen in the lecture.",
    [["Courses are available", "available"], ["There are no courses", "no courses", "empty"], ["Online data is loading", "is loading", "loading data", "=loading"], ["Online loading fails", "fail", "error"]]);
  list(13, 'm', 4, "List the four locations of the example project structure.",
    [["lib/models (data model)", "models"], ["lib/widgets (reusable display)", "widgets"], ["lib/screens (screen)", "screens"], ["assets/images (local images)", "assets", "images"]]);
  list([5, 10], 'e', 3, "List the three inputs of CourseSummary.",
    [["name", "name"], ["code", "code"], ["credits", "credit"]]);

  /* ---------- Section E ---------- */
  exp(8, 'm', "Compare a copied layout with a reusable CourseSummary widget.",
    [["Copied: each course has its own copied design", "own copied", "copied design"], ["Copied: a spacing change needs several edits, and copies may look different", "several edits", "look different"], ["Reusable: each course uses the same design", "same design"], ["Reusable: a change happens in one place and the layout stays consistent", "one place", "consistent"]],
    "With a copied layout each course has its own copied design, a spacing change needs several edits, and copies may slowly look different. With a reusable CourseSummary widget each course uses the same design, a spacing change happens in one place, and the layout stays consistent.");
  exp(17, 'm', "Compare a local image asset with a network image.",
    [["Local: included with the app", "included with"], ["Local: available without downloading, useful for a fixed logo", "without downloading", "fixed"], ["Network: loaded from an internet address, useful for images updated online", "internet", "updated online"], ["Network: needs loading and failure handling; may be unavailable without connectivity", "failure", "connectivity", "unavailable"]],
    "A local asset is included with the app, needs a correct asset declaration, is available without downloading, and is useful for a fixed university logo. A network image is loaded from an internet address, is useful for images updated online, needs loading and failure handling, and may be unavailable without connectivity.");
  exp(19, 'm', "Explain the useful screen feedback for each of the four situations.",
    [["Courses are available: show the course information", "course information"], ["No courses: show “No courses available”", "no courses available"], ["Loading: show a progress indicator and a short message", "progress"], ["Loading fails: show a clear message and a Retry action", "retry"]],
    "When courses are available, show the course information. When there are no courses, show No courses available. When online data is loading, show a progress indicator and a short message. When loading fails, show a clear message and a Retry action.");
  exp([6, 9], 'm', "Explain why course information is separated from its visual layout, and how one widget displays different courses.",
    [["Data is what the course is; presentation is how it appears", "how it appears", "presentation"], ["Changing a colour should not change the course information", "colour", "color"], ["CourseSummary owns the layout and receives name, code and credits", "owns the layout", "receives"], ["The surrounding screen passes different course information", "passes", "surrounding", "pass"]],
    "Data is what the course is and presentation is how it appears, so changing a text colour should not require changing the course information. CourseSummary owns the layout and receives a name, code and credit value. The surrounding screen passes different course information to the same design.");
  draw(13, 'm', "Draw the folder structure of the example project.", 'folders',
    [["lib/models/course.dart", "models"], ["lib/widgets/course_summary.dart", "widgets"], ["lib/screens/courses_page.dart", "screens"], ["assets/images/", "assets"]],
    "lib contains models (course.dart), widgets (course_summary.dart) and screens (courses_page.dart). assets contains images.");
  draw([7, 9], 'm', "Draw how one CourseSummary design displays several courses from a List<Course>.", 'listToWidgets',
    [["List<Course> with several Course objects", "list"], ["The surrounding screen reads the list", "screen"], ["One CourseSummary for each course", "coursesummary"], ["Different name, code and credits in each", "different", "name"]],
    "A List<Course> holds several Course objects. The screen reads the list and passes a different name, code and credits to each CourseSummary.");
  code(10, 'm', "Write the code that uses CourseSummary for Database Systems, code IT210, 4 credits.",
    [["`CourseSummary(`", "!coursesummary"], ["`name:` as a named input", "!name"], ["'Database Systems' as a string", "!name database systems"], ["`code: 'IT210'`", "!code it210"], ["`credits: 4` as a number", "!credits 4"]],
    "CourseSummary(\n  name: 'Database Systems',\n  code: 'IT210',\n  credits: 4,\n)");
  code([15, 16], 'm', "An image is saved at assets/images/campus.png. Write the pubspec.yaml lines that declare it and the Dart code that displays it.",
    [["`flutter:` section", "!flutter"], ["`assets:` under it", "!flutter assets"], ["The path in the list", "!assets assets images campus png"], ["`Image.asset(...)`", "!image asset"], ["The same path in the Dart code", "!image asset assets images campus png"]],
    "flutter:\n  assets:\n    - assets/images/campus.png\n\nImage.asset('assets/images/campus.png')");
  code([10, 11], 'h', "The code below should use CourseSummary for IT220 Web Development with 3 credits, but it has mistakes. Write the correct code.",
    [["`CourseSummary(` with a capital C", "~CourseSummary("], ["The input label `name:` (not title)", "~name: 'Web Development'"], ["A comma after the name", "~'Web Development',"], ["`code:` with the string 'IT220'", "~code: 'IT220'"], ["`credits: 3` with a colon and a number", "~credits: 3"]],
    "CourseSummary(\n  name: 'Web Development',\n  code: 'IT220',\n  credits: 3,\n)", { code: "courseSummary(\n  title: 'Web Development'\n  code: IT220,\n  credits = '3',\n)" });
  pick(17, 'm', "An app must always show the university logo, even without an internet connection. Which image type is the best? Why?",
    ["Network image", "Local asset", "No image"], 1,
    [["It is included with the app", "included", "travels", "bundled"], ["It is available without downloading / connectivity", "without downloading", "without internet", "offline", "without connect"]],
    "A local asset is included with the app, so it is available without downloading and works without an internet connection.");
  pick([8, 9], 'm', "A catalogue will grow from 3 courses to 50, and the spacing may change later. What is the best design? Why?",
    ["Copy the layout 50 times", "Use one reusable CourseSummary widget", "Write 50 different screens"], 1,
    [["A change happens in one place", "one place", "one edit"], ["Every course uses the same design and stays consistent", "same design", "consistent"]],
    "With one reusable widget a spacing change happens in one place, and every course uses the same design, so the layout stays consistent.");
  pick(19, 'm', "The course data could not be loaded because the connection failed. What should the screen show? Why?",
    ["An empty screen", "A clear message and a Retry action", "“No courses available”"], 1,
    [["A clear message explains the problem", "explain", "message", "problem", "what happened"], ["Retry lets the user try again", "retry", "try again"]],
    "A clear message explains the problem, and the Retry action lets the user try again. “No courses available” would be wrong because the courses were not loaded.");
  pick(18, 'm', "The designer wants to show that registration is closed. What is the best way? Why?",
    ["A red dot only", "The text “Registration closed”", "A larger font for the course code"], 1,
    [["A colour alone should not be the only way to show information", "colour", "color"], ["Text communicates more clearly", "clear", "text", "readable"]],
    "Text communicates more clearly. A colour alone should not be the only way to show whether registration is open.");
});
