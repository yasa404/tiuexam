/* Lecture 6: Campus Shop, eight practical tasks (PDF pages 3-18). */
EC.lecture(6, function (Q) {
  var mcq = Q.mcq, list = Q.list, def = Q.def, match = Q.match;
  var STOCK = `Row(
  children: [
    Icon(Icons.check, color: Colors.green),
    Text('In stock'),
  ],
),`;
  var TILE = `ListTile(
  leading: Icon(Icons.shopping_bag, color: Colors.orange),
  title: Text('Campus essentials'),
  subtitle: Text('4 products | 3 categories'),
),`;
  var EXPAND = `ExpansionTile(
  key: PageStorageKey('book'),
  title: Text('Product details'),
  children: [
    Text('For IT notes and exam revision.'),
    Text('Department: IT'),
  ],
),`;
  var OFFER = `DecoratedBox(
  decoration: BoxDecoration(
    color: Colors.orange,
    borderRadius: BorderRadius.circular(12),
  ),
  child: Padding(
    padding: EdgeInsets.all(16),
    child: Text('Student offers - new items every week!'),
  ),
),`;
  var WRAP = `Wrap(
  spacing: 8,
  runSpacing: 8,
  children: [
    Chip(label: Text('Campus pickup')),
    Chip(label: Text('Home delivery')),
    Chip(label: Text('Express delivery')),
  ],
),`;
  var DIALOG = `AlertDialog(
  title: Text('Campus Shop'),
  content: Text('Open 9:00 AM - 3:00 PM'),
  actions: [
    TextButton(
      onPressed: () { Navigator.pop(context); },
      child: Text('Close'),
    ),
  ],
)`;

  /* ---------- Multiple choice ---------- */
  mcq(18, 'e', "Which widget shows a small label?",
    ["`Chip`", "`Row`", "`Wrap`", "`AlertDialog`"], "Slide 18.");
  mcq(18, 'e', "Which widget places its children next to each other?",
    ["`Row`", "`Column`", "`ListTile`", "`Chip`"], "Slide 18.");
  mcq(18, 'e', "Which widget opens and closes extra details?",
    ["`ExpansionTile`", "`ListTile`", "`DecoratedBox`", "`PageStorageKey`"], "Slide 18.");
  mcq(18, 'e', "Which widget is a row with a title and an optional icon or subtitle?",
    ["`ListTile`", "`ExpansionTile`", "`Chip`", "`Wrap`"], "Slide 18.");
  mcq(18, 'e', "Which widget paints a background or border around its child?",
    ["`DecoratedBox`", "`Padding`", "`ExpansionTile`", "`Chip`"], "Slide 18.");
  mcq(18, 'e', "Which widget moves its children to a new line when space runs out?",
    ["`Wrap`", "`Row`", "`Chip`", "`Padding`"], "Slide 18.");
  mcq(18, 'e', "Which widget shows a message box above the current screen?",
    ["`AlertDialog`", "`ExpansionTile`", "`ListTile`", "`DecoratedBox`"], "Slide 18.");
  mcq(18, 'e', "What does a PageStorageKey do?",
    ["Identifies a section to restore its saved state", "Opens a message box above the current screen", "Paints a border around each one of the product cards", "Moves the labels to another line"], "Slide 18.");
  Q.skip('mcq', 4);
  mcq(7, 'e', "Which widget keeps the stock icon and its message next to each other?",
    ["`Row`", "`Column`", "`ListView`", "`Card`"], "Slide 7.");
  Q.skip('mcq');
  mcq(7, 'm', "What does this code show?",
    ["A green check beside “In stock”", "A green check above the text “In stock”", "A red cross beside “In stock”", "“In stock” without an icon"], "A Row places children next to each other.", { code: STOCK });
  Q.skip('mcq', 2);
  mcq(8, 'm', "Which text is always visible in this code, even when it is closed?",
    ["Product details", "Department: IT", "For IT notes and exam revision.", "book"], "The title.", { code: EXPAND });
  mcq(8, 'h', "Which property holds the content that opens and closes?",
    ["`children`", "`title`", "`key`", "`Text`"], "Slide 8.", { code: EXPAND });
  mcq(9, 'e', "Two ExpansionTiles are used in two cards. What should be different?",
    ["The key", "The widget type", "The app title", "The import line"], "Slide 9.");
  mcq(10, 'h', "Which property of ListTile holds “4 products | 3 categories”?",
    ["`subtitle`", "`title`", "`leading`", "`child`"], "Slide 10.", { code: TILE });
  mcq(10, 'm', "Which property of ListTile holds the shopping-bag icon?",
    ["`leading`", "`title`", "`subtitle`", "`content`"], "Slide 10.", { code: TILE });
  Q.skip('mcq', 2);
  mcq(11, 'e', "Which class holds the background colour and rounded corners of a DecoratedBox?",
    ["`BoxDecoration`", "`TextStyle`", "`EdgeInsets`", "`PageStorageKey`"], "Slide 11.");
  mcq(11, 'h', "Which line of this code makes the corners rounded?",
    ["`borderRadius: BorderRadius.circular(12)`", "`color: Colors.orange` in BoxDecoration", "`padding: EdgeInsets.all(16)` in Padding", "`child: Text(...)`"], "Slide 11.", { code: OFFER });
  mcq(11, 'm', "Which widget gives space between the text and the edge of the offer box?",
    ["`Padding`", "`Chip`", "`Row`", "`ListTile`"], "Slide 11.", { code: OFFER });
  mcq(12, 'e', "Why is Wrap useful for a group of labels?",
    ["They move to a new line when space runs out", "They open a message when they are tapped", "They scroll to the left and to the right side", "They remove the labels that do not fit"], "Slide 12.");
  Q.skip('mcq');
  mcq(12, 'h', "In this code, which property gives the gap between the lines of labels?",
    ["`runSpacing`", "`spacing`", "`children`", "`label`"], "spacing is on the same line.", { code: WRAP });
  Q.skip('mcq');
  mcq(13, 'e', "Which function is used to show the dialog?",
    ["`showDialog`", "`setState`", "`runApp`", "`createState`"], "Slide 13.");
  Q.skip('mcq');
  mcq(13, 'h', "What does the Close button do in the dialog?",
    ["Returns to the shop screen", "Closes the project in VS Code", "Deletes the shop information", "Opens a second dialog box"], "Slide 13.", { code: DIALOG });
  mcq(13, 'm', "Which text is the message of this dialog?",
    ["Open 9:00 AM - 3:00 PM", "Campus Shop", "Close", "AlertDialog"], "content is the message.", { code: DIALOG });
  mcq(15, 'e', "Why can the main class stay stateless when ExpansionTile is used?",
    ["ExpansionTile handles the open/closed change inside itself", "ExpansionTile never changes after it is first displayed", "The main class calls setState for every single product card", "The details are stored in the pubspec.yaml file"], "Slide 15.");
  Q.skip('mcq');
  mcq(17, 'm', "The app does not run after a change. Where do you look first?",
    ["At the first error in the Problems panel", "At the last line of pubspec.yaml", "At the colour of the app bar title", "At the name of the folder of the project"], "Slide 17.");
  mcq(17, 'e', "Which keys help you find text in the code?",
    ["Ctrl+F", "Ctrl+S", "F5", "Ctrl+Z"], "Slide 17.");
  mcq(17, 'e', "Which mistakes often cause an error after pasting a widget?",
    ["A missing comma or bracket", "A very long product name", "A green text colour in the style", "A file that was saved"], "Slide 17.");

  /* ---------- Short answer ---------- */
  def(18, 'e', 2, "Define Chip and ListTile.",
    [["Chip: a small label", "label"], ["ListTile: a row with a title and an optional icon or subtitle", "row with a title", "subtitle", "title and"]],
    "A Chip is a small label. A ListTile is a row with a title and an optional icon or subtitle.");
  def(18, 'e', 2, "Define ExpansionTile and PageStorageKey.",
    [["ExpansionTile: opens and closes details", "open"], ["PageStorageKey: identifies a section to restore its saved state", "restore", "saved state", "identif"]],
    "An ExpansionTile opens and closes details. A PageStorageKey identifies a section to restore its saved state.");
  def(18, 'm', 2, "What is the difference between Row and Wrap?",
    [["Row places widgets next to each other", "next to each other", "horizontal"], ["Wrap moves widgets to a new line when space runs out", "new line", "another line", "next line"]],
    "A Row places widgets next to each other. Wrap moves widgets to a new line when space runs out.");
  def(18, 'e', 2, "Define DecoratedBox and AlertDialog.",
    [["DecoratedBox: paints a background or border around its child", "background", "border"], ["AlertDialog: a message box above the current screen", "message box", "message"]],
    "A DecoratedBox paints a background or border around its child. An AlertDialog is a message box above the current screen.");
  def(15, 'm', 2, "Why does an app need no new state class to use an ExpansionTile?",
    [["ExpansionTile knows how to open and close (handles the change inside)", "open", "inside", "itself"], ["So the main class can stay stateless", "stateless"]],
    "ExpansionTile knows how to open and close and handles the change inside itself. So the main class can stay stateless.");
  Q.skip('list', 4);
  def([8, 15, 18], 'm', 4, "Explain how an ExpansionTile shows extra details.",
    [["Its title (heading) is always visible", "title", "heading"], ["The user taps to open and close the details", "tap", "open"], ["The details are written in children", "children", "inside it"], ["It handles the change itself, so the main class can stay stateless", "stateless", "itself"]],
    "The title of an ExpansionTile is always visible. The user taps it to open and close the details, which are written in children. ExpansionTile handles the change itself, so the main class can stay stateless.");
  def(13, 'm', 4, "Explain how a button can show a message with an AlertDialog and how the user returns to the screen.",
    [["The button’s onPressed runs on a tap", "tap", "onpressed", "press"], ["It calls showDialog", "showdialog", "show dialog"], ["The AlertDialog shows a title and a message above the screen", "alertdialog", "message", "title"], ["A Close button closes the dialog and returns to the screen", "close", "pop", "return"]],
    "A tap on the button runs onPressed, which calls showDialog. The AlertDialog shows a title and a message above the current screen. A Close button closes the dialog and returns to the screen.");
  def([7, 12, 18], 'm', 4, "Compare Row and Wrap, and give a suitable use of each.",
    [["Row places widgets next to each other", "next to each other", "beside", "horizontal", "one line"], ["Use of Row: for example an icon beside a text", "icon", "text"], ["Wrap moves widgets to a new line when space runs out", "new line", "another line", "next line"], ["Use of Wrap: for example a group of labels", "label", "tags", "chips"]],
    "A Row places widgets next to each other, for example an icon beside a text. Wrap moves widgets to a new line when space runs out, for example a group of labels.");
  def([12, 18], 'm', 3, "Four short labels must never go outside a narrow phone screen. Which widget is the best? Why?",
    [["Wrap", "wrap"], ["It moves labels to a new line when space runs out", "new line", "next line", "another line"], ["A Row keeps its children on one line", "row"]],
    "Wrap is the best because it moves labels to a new line when space runs out. A Row keeps its children on one line, so they can overflow.");
  def([13, 18], 'm', 3, "The shop must show its opening hours only when the user asks, and the user then returns to the same screen. Which widget is the best? Why?",
    [["AlertDialog", "alertdialog", "alert dialog"], ["It shows a message box above the current screen", "message", "above"], ["Close returns the user to the same screen", "close", "return"]],
    "An AlertDialog is the best. It shows a message box above the current screen, and Close returns the user to the same screen.");
  def([8, 15], 'm', 3, "A card must show extra details only when the user taps, and the name and price must stay visible. Which widget is the best? Why?",
    [["ExpansionTile", "expansiontile", "expansion tile"], ["It opens and closes the details on a tap", "open", "close"], ["The name and price stay visible / it handles the change itself", "visible", "itself", "inside"]],
    "An ExpansionTile is the best. It opens and closes the details on a tap, and the name and price stay visible.");
  def(7, 'm', 2, "What does this code show, and how are the two widgets placed?",
    [["A green check icon and “In stock”", "in stock", "check"], ["Next to each other (Row)", "next to each other", "beside", "side by side", "row"]],
    "It shows a green check icon and the text In stock, next to each other.", { code: STOCK });
  def(10, 'm', 2, "What is the title and what is the subtitle of this ListTile?",
    [["Title: Campus essentials", "campus essentials"], ["Subtitle: 4 products | 3 categories", "4 products", "3 categories"]],
    "The title is Campus essentials and the subtitle is 4 products | 3 categories.", { code: TILE });
  def(12, 'm', 2, "In this code, what do spacing and runSpacing control?",
    [["spacing: the gap between labels on a line", "between labels", "same line", "on a line"], ["runSpacing: the gap between lines", "between lines", "between the lines"]],
    "spacing is the gap between labels on the same line, and runSpacing is the gap between lines.", { code: WRAP });
  def(13, 'm', 2, "What is the title of this dialog, and what happens when the user taps Close?",
    [["Title: Campus Shop", "campus shop"], ["The dialog closes and the user returns to the shop", "return", "closes", "pop", "goes back"]],
    "The title is Campus Shop. When the user taps Close, the dialog closes and the user returns to the shop.", { code: DIALOG });
  def([6, 7, 8], 'm', 2, "Look at the widget tree of the book card. Which widget shows the category, and which widget holds the icon and the stock message?",
    [["Chip", "chip"], ["Row", "row"]],
    "The Chip shows the category, and the Row holds the icon and the stock message.", { qfig: 'bookCard' });
  def([6, 18], 'e', 2, "Does a Chip filter a list by itself? What does it do?",
    [["No, it does not filter", "!not filter", "=no", "!no it", "!does not", "!doesnt", "!no a chip"], ["It shows a small label (information)", "label", "information"]],
    "No, a Chip does not filter a list by itself. It shows a small label.");

  /* ---------- Matching ---------- */
  match(18, 'e', "Match each widget or key with its description.",
    [["`Chip`", "A small label"], ["`Row`", "Puts widgets next to each other"], ["`ExpansionTile`", "Opens and closes details"], ["`ListTile`", "A row with a title and an optional icon or subtitle"], ["`PageStorageKey`", "Identifies a section to restore its saved state"], ["`DecoratedBox`", "Paints a background or border around its child"], ["`Wrap`", "Moves widgets to a new line when space runs out"], ["`AlertDialog`", "A message box above the current screen"]]);
  match([6, 7, 8, 10, 11, 12, 13], 'm', "Match each need with the best widget.",
    [["Show a small category below the price", "`Chip`"], ["Put a stock icon beside its message", "`Row`"], ["Show product details only after a tap", "`ExpansionTile`"], ["Show a bag icon, a title and a subtitle", "`ListTile`"], ["Paint an orange offer box", "`DecoratedBox`"], ["Keep delivery labels inside a narrow screen", "`Wrap`"], ["Show the opening hours in a message box", "`AlertDialog`"]]);
  match([6, 9, 10, 11, 12], 'h', "Match each property with what it sets.",
    [["`label`", "The text of a Chip"], ["`leading`", "The icon at the start of a ListTile"], ["`subtitle`", "The second line of a ListTile"], ["`decoration`", "The background and corners of a DecoratedBox"], ["`spacing`", "The gap between labels on one line"], ["`runSpacing`", "The gap between two lines of labels"], ["`key`", "Identifies a section so its state can be restored"]]);
  match([13, 15, 17], 'm', "Match each item with its description.",
    [["Ctrl+F", "Finds a product name in the code"], ["Problems panel", "Shows the first error"], ["Hot Reload", "Shows the new result after saving"], ["Missing comma or bracket", "A possible cause of an error"], ["`showDialog`", "Opens the AlertDialog"], ["Stateless main class", "Possible because ExpansionTile handles its own change"]]);
});
