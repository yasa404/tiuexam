/* Lecture 6: Campus Shop, eight practical tasks (PDF pages 3-18). */
EC.lecture(6, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp, draw = Q.draw, code = Q.code, pick = Q.pick;
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

  /* ---------- Section A ---------- */
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
  mcq(6, 'e', "Where is the category Chip placed in each product card?",
    ["Below the price", "Above the app title", "Inside the AppBar", "Outside the card"], "Slide 6.");
  mcq(6, 'e', "Which category label does the backpack have?",
    ["Bags", "Study", "Lifestyle", "Delivery"], "Slide 6.");
  mcq(6, 'm', "Which category label is used for both the notebook and the book?",
    ["Study", "Bags", "Lifestyle", "Stock"], "Slide 6.");
  mcq(6, 'e', "What do the category Chips do in the Campus Shop app?",
    ["Show information, without filtering", "Hide the products of other categories", "Open the details of a product", "Change the price of a product"], "Slide 6.");
  mcq(7, 'e', "Which widget keeps the stock icon and its message next to each other?",
    ["`Row`", "`Column`", "`ListView`", "`Card`"], "Slide 7.");
  mcq(7, 'e', "Which product shows a red cross and “Out of stock”?",
    ["The mug", "The notebook", "The backpack", "The course book"], "Slide 7.");
  mcq(7, 'm', "What does this code show?",
    ["A green check beside “In stock”", "A green check above the text “In stock”", "A red cross beside “In stock”", "“In stock” without an icon"], "A Row places children next to each other.", { code: STOCK });
  mcq(8, 'e', "Which parts of the book card stay visible when its ExpansionTile is closed?",
    ["The name and the price", "Only the department", "Only the text of the details", "Nothing in the card"], "Slide 8.");
  mcq(8, 'e', "What must the user do to open “Product details”?",
    ["Tap it", "Shake the phone", "Resize the window", "Restart the app"], "Slide 8.");
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
  mcq(10, 'e', "What does the ListTile “Campus essentials” replace above the cards?",
    ["The heading", "The first card", "The AppBar", "The Scaffold"], "Slide 10.");
  mcq(11, 'e', "Where is the offer box placed?",
    ["Above the first card", "Below the last card", "Inside the AppBar", "Inside the book card"], "Slide 11.");
  mcq(11, 'e', "Which class holds the background colour and rounded corners of a DecoratedBox?",
    ["`BoxDecoration`", "`TextStyle`", "`EdgeInsets`", "`PageStorageKey`"], "Slide 11.");
  mcq(11, 'h', "Which line of this code makes the corners rounded?",
    ["`borderRadius: BorderRadius.circular(12)`", "`color: Colors.orange` in BoxDecoration", "`padding: EdgeInsets.all(16)` in Padding", "`child: Text(...)`"], "Slide 11.", { code: OFFER });
  mcq(11, 'm', "Which widget gives space between the text and the edge of the offer box?",
    ["`Padding`", "`Chip`", "`Row`", "`ListTile`"], "Slide 11.", { code: OFFER });
  mcq(12, 'e', "Why is Wrap used for the delivery labels?",
    ["They move to a new line when space runs out", "They open a message when they are tapped", "They scroll to the left and to the right side", "They remove the labels that do not fit"], "Slide 12.");
  mcq(12, 'm', "What are the delivery labels in the Campus Shop app?",
    ["Labels that are not selection buttons", "Buttons that select one delivery type", "Titles of three different screens", "Items that filter the list of products"], "Slide 12.");
  mcq(12, 'h', "In this code, which property gives the gap between the lines of labels?",
    ["`runSpacing`", "`spacing`", "`children`", "`label`"], "spacing is on the same line.", { code: WRAP });
  mcq(13, 'e', "What happens when the user taps “Shop information”?",
    ["An AlertDialog opens", "A new project opens", "The app is closed", "The product prices change"], "Slide 13.");
  mcq(13, 'e', "Which function is used to show the dialog?",
    ["`showDialog`", "`setState`", "`runApp`", "`createState`"], "Slide 13.");
  mcq(13, 'e', "What happens to the “Shop information” button when the user scrolls the products?",
    ["It stays visible", "It scrolls away", "It opens the dialog", "It becomes a Chip"], "Slide 13.");
  mcq(13, 'h', "What does the Close button do in the dialog?",
    ["Returns to the shop screen", "Closes the project in VS Code", "Deletes the shop information", "Opens a second dialog box"], "Slide 13.", { code: DIALOG });
  mcq(13, 'm', "Which text is the message of this dialog?",
    ["Open 9:00 AM - 3:00 PM", "Campus Shop", "Close", "AlertDialog"], "content is the message.", { code: DIALOG });
  mcq(15, 'e', "Why can the main class stay stateless when ExpansionTile is used?",
    ["ExpansionTile handles the open/closed change inside itself", "ExpansionTile never changes after it is first displayed", "The main class calls setState for every single product card", "The details are stored in the pubspec.yaml file"], "Slide 15.");
  mcq(15, 'h', "The labels in the app are fixed sample information. What does this mean for the code?",
    ["No new state class is needed", "Every label needs its own setState", "The labels must be buttons", "The app must be stateful"], "Slide 15.");
  mcq(17, 'm', "The app does not run after a change. Where do you look first?",
    ["At the first error in the Problems panel", "At the last line of pubspec.yaml", "At the colour of the app bar title", "At the name of the folder of the project"], "Slide 17.");
  mcq(17, 'e', "Which keys help you find text in the code?",
    ["Ctrl+F", "Ctrl+S", "F5", "Ctrl+Z"], "Slide 17.");
  mcq(17, 'e', "Which mistakes often cause an error after pasting a widget?",
    ["A missing comma or bracket", "A very long product name", "A green text colour in the style", "A file that was saved"], "Slide 17.");

  /* ---------- Section C ---------- */
  tf(18, 'e', "A Chip shows a small label.", true, "Slide 18.");
  tf(6, 'e', "In the Week 6 Campus Shop app, tapping a category Chip filters the products.", false, "The labels show information; they do not filter.");
  tf(7, 'e', "A Row places the stock icon above its message.", false, "Next to each other.");
  tf(8, 'e', "An ExpansionTile lets the user open and close details.", true, "Slide 8.");
  tf(9, 'm', "The notebook details use a different key from the book details.", true, "Slide 9.");
  tf(10, 'e', "A ListTile can have an icon, a title and a subtitle.", true, "Slide 10.");
  tf(11, 'm', "DecoratedBox can paint a background around its child.", true, "Slide 11.");
  tf(12, 'm', "Wrap removes the labels that do not fit on the first line.", false, "It moves them to a new line.");
  tf(13, 'e', "An AlertDialog appears above the current screen.", true, "Slide 13.");
  tf(13, 'e', "The “Shop information” button disappears when the products are scrolled.", false, "It stays visible.");
  tf(15, 'm', "Using an ExpansionTile always forces the main class to become a StatefulWidget.", false, "It handles the change inside itself.");
  tf(18, 'm', "A PageStorageKey identifies a section so that its saved state can be restored.", true, "Slide 18.");
  tf(5, 'e', "You should make one change, save and then use Hot Reload.", true, "Slides 4-5.");
  tf(12, 'e', "The delivery labels in the Campus Shop app are selection buttons.", false, "They are only labels.");

  /* ---------- Section B ---------- */
  fill(18, 'e', "A [[Chip]] is a small label, and a [[Row]] places widgets next to each other.", "Slide 18.");
  fill(18, 'e', "An [[ExpansionTile]] opens and closes details.", "Slide 18.");
  fill(18, 'e', "A [[ListTile]] is a row with a title and an optional icon or subtitle.", "Slide 18.");
  fill(18, 'e', "A [[PageStorageKey]] identifies a section to restore its saved state.", "Slide 18.");
  fill(18, 'e', "A [[DecoratedBox]] paints a background or border around its child.", "Slide 18.");
  fill(18, 'e', "[[Wrap]] moves widgets to a new line when space runs out.", "Slide 18.");
  fill(18, 'e', "An [[AlertDialog]] is a message box above the current screen.", "Slide 18.");
  fill(6, 'm', "Complete the code: (1) [[Chip]], (2) [[label]].", "Task 1.", { code: `(1)____((2)____: Text('Study')),` });
  fill(10, 'm', "Complete the code: (1) [[title]], (2) [[subtitle]].", "Task 5.", { code: `ListTile(
  leading: Icon(Icons.shopping_bag),
  (1)____: Text('Campus essentials'),
  (2)____: Text('4 products | 3 categories'),
),` });
  fill(7, 'm', "Complete the code: [[Row]].", "The icon and the message are next to each other.", { code: `________(
  children: [
    Icon(Icons.close, color: Colors.red),
    Text('Out of stock'),
  ],
),` });
  fill(11, 'm', "Complete the code: (1) [[decoration]], (2) [[BoxDecoration]].", "Task 6.", { code: `DecoratedBox(
  (1)____: (2)____(
    color: Colors.orange,
  ),
  child: Text('Student offers'),
),` });
  fill(13, 'e', "The function [[showDialog()|showDialog]] shows the dialog on the screen.", "Slide 13.");
  fill(7, 'e', "Products that are available have a green check and the text [[In stock]], and the mug has a red cross and the text [[Out of stock]].", "Slide 7.");
  fill(15, 'e', "Because ExpansionTile handles the change inside itself, the main class can stay [[stateless]].", "Slide 15.");
  fill(17, 'm', "After an error, check for a missing [[comma]] or [[bracket]].", "Slide 17.", { set: true });
  fill(17, 'e', "In VS Code, errors are shown in the [[Problems]] panel.", "Slide 17.");

  /* ---------- Section D ---------- */
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
  def(15, 'm', 2, "Why does the app need no new state class for ExpansionTile?",
    [["ExpansionTile knows how to open and close (handles the change inside)", "open", "inside", "itself"], ["The labels are fixed sample information, so the main class can stay stateless", "fixed", "stateless"]],
    "ExpansionTile knows how to open and close and handles the change inside itself. The labels are fixed sample information, so the main class can stay stateless.");
  list(6, 'e', 3, "List the three product categories in the Campus Shop app.",
    [["Study", "study"], ["Bags", "bags"], ["Lifestyle", "lifestyle"]]);
  list(12, 'e', 3, "List the three delivery labels in the Wrap task.",
    [["Campus pickup", "pickup"], ["Home delivery", "home"], ["Express delivery", "express"]]);
  list([6, 7, 8, 10, 11, 12, 13], 'm', 4, "List four widgets that were added to the Campus Shop app in this lecture.",
    [["Chip", "chip"], ["Row", "row"], ["ExpansionTile", "expansiontile"], ["ListTile", "listtile"], ["DecoratedBox", "decoratedbox"], ["Wrap", "wrap"], ["AlertDialog", "alertdialog"], ["PageStorageKey", "pagestoragekey"]], { n: 4 });
  list(13, 'e', 3, "List three parts of the Shop information dialog.",
    [["Title: Campus Shop", "title", "campus shop"], ["Message: opening hours", "message", "open", "content"], ["Close button", "close"]]);

  /* ---------- Section E ---------- */
  exp([8, 15, 18], 'm', "Explain how the product details are shown with ExpansionTile.",
    [["Title “Product details” is shown below the stock row", "product details", "title"], ["The user taps to open and close the details", "tap", "open"], ["The name and price stay visible", "visible"], ["ExpansionTile handles the change itself, so the main class can stay stateless", "stateless", "itself", "inside"]],
    "The title Product details is shown below the stock row. The user taps it to open and close the details, while the name and price stay visible. ExpansionTile handles the change inside itself, so the main class can stay stateless.");
  exp([13], 'm', "Explain how the Shop information button and dialog work.",
    [["A button at the bottom stays visible when scrolling", "bottom", "visible"], ["A tap calls showDialog", "showdialog"], ["An AlertDialog shows a title and a message", "alertdialog", "message"], ["Close returns to the shop", "close"]],
    "The button is at the bottom and stays visible when scrolling. A tap calls showDialog, and an AlertDialog shows a title and a message with the opening hours. The Close button returns to the shop.");
  exp([7, 12, 18], 'm', "Compare Row and Wrap, with an example of each from the Campus Shop app.",
    [["Row places widgets next to each other", "next to each other"], ["Example: stock icon and message", "stock"], ["Wrap moves widgets to a new line when space runs out", "new line", "another line"], ["Example: delivery labels", "delivery", "pickup"]],
    "A Row places widgets next to each other, such as the stock icon and its message. Wrap moves widgets to a new line when space runs out, such as the delivery labels.");
  draw([6, 7, 8], 'm', "Draw the widget tree of the book card: name, price, category label, stock row and product details.", 'bookCard',
    [["Card with a Column", "column"], ["Texts: name and price", "price"], ["Chip for the category", "chip"], ["Row with icon and message", "row"], ["ExpansionTile with the details", "expansiontile"]],
    "Card → Column → Text name, Text price, Chip (Study), Row (Icon, Text 'In stock'), ExpansionTile (Product details).", { need: 4 });
  draw([12, 18], 'm', "Draw what three delivery labels look like in a Wrap on a narrow screen, where only two labels fit on a line.", 'wrapLabels',
    [["Two labels on the first line", "campus pickup", "first line", "home delivery"], ["Third label on a new line", "express", "second line", "new line"], ["Gap between labels on a line (spacing)", "spacing", "gap between labels"], ["Gap between lines (runSpacing)", "runspacing", "gap between lines"]],
    "First line: Campus pickup and Home delivery, with a gap between labels (spacing). Second line: Express delivery, with a gap between lines (runSpacing).");
  code([6, 7], 'm', "Write the code for a category Chip with the label 'Bags', followed by a Row with a green check icon and the text 'In stock'.",
    [["`Chip(label: Text('Bags'))`", "!chip label text bags"], ["`Row(`", "!row"], ["`children: [ ]` in the Row", "!row children"], ["`Icon(Icons.check` in green", "!icon icons check"], ["`Text('In stock')`", "!text in stock"]],
    "Chip(label: Text('Bags')),\nRow(\n  children: [\n    Icon(Icons.check, color: Colors.green),\n    Text('In stock'),\n  ],\n),");
  code([8, 9], 'm', "Write an ExpansionTile with the title 'Product details' and the two texts 'An A5 notebook for lecture notes.' and 'Pages: 120'.",
    [["`ExpansionTile(`", "!expansiontile"], ["`title: Text('Product details')`", "!title text product details"], ["`children: [ ]`", "!children"], ["First detail text", "!text an a5 notebook for lecture notes"], ["Second detail text", "!text pages 120"]],
    "ExpansionTile(\n  key: PageStorageKey('notebook'),\n  title: Text('Product details'),\n  children: [\n    Text('An A5 notebook for lecture notes.'),\n    Text('Pages: 120'),\n  ],\n),");
  code(10, 'm', "Write a ListTile with a shopping-bag icon, the title 'Campus essentials' and the subtitle '4 products | 3 categories'.",
    [["`ListTile(`", "!listtile"], ["`leading:` with an Icon", "!leading icon"], ["The shopping-bag icon", "!icons shopping bag"], ["`title: Text('Campus essentials')`", "!title text campus essentials"], ["`subtitle: Text(...)`", "!subtitle text 4 products"]],
    "ListTile(\n  leading: Icon(Icons.shopping_bag, color: Colors.orange),\n  title: Text('Campus essentials'),\n  subtitle: Text('4 products | 3 categories'),\n),");
  code(12, 'm', "Write a Wrap with three Chips: 'Campus pickup', 'Home delivery' and 'Express delivery', with a gap of 8 between labels and 8 between lines.",
    [["`Wrap(`", "!wrap"], ["`spacing: 8`", "!spacing 8"], ["`runSpacing: 8`", "!runspacing 8"], ["`children:` with Chips that have a label", "!chip label text"], ["The three labels", "!text express delivery"]],
    "Wrap(\n  spacing: 8,\n  runSpacing: 8,\n  children: [\n    Chip(label: Text('Campus pickup')),\n    Chip(label: Text('Home delivery')),\n    Chip(label: Text('Express delivery')),\n  ],\n),");
  code([11, 12], 'h', "The code below should show a row of labels that wrap and an offer box, but it has mistakes. Write the correct code.",
    [["`children: [` in the Wrap", "~children: ["], ["`label: Text('New')` in the Chip", "~Chip(label: Text('New'))"], ["A comma after the first Chip", "~)), Chip("], ["`decoration: BoxDecoration(`", "~decoration: BoxDecoration("], ["`child: Text('Offer')`", "~child: Text('Offer')"]],
    "Wrap(\n  children: [\n    Chip(label: Text('New')),\n    Chip(label: Text('Sale')),\n  ],\n),\nDecoratedBox(\n  decoration: BoxDecoration(color: Colors.orange),\n  child: Text('Offer'),\n),", { code: "Wrap(\n  child: [\n    Chip(text: 'New')\n    Chip(text: 'Sale'),\n  ],\n),\nDecoratedBox(\n  style: BoxDecoration(color: Colors.orange),\n  children: Text('Offer'),\n)," });
  pick([12, 18], 'm', "Four short labels must never go outside a narrow phone screen. Which widget is the best? Why?",
    ["Row", "Wrap", "AlertDialog"], 1,
    [["Wrap moves labels to a new line when space runs out", "new line", "next line", "another line"], ["A Row keeps its children on one line and can go outside the screen", "row keeps", "one line", "overflow", "outside"]],
    "Wrap moves the labels to a new line when space runs out. A Row keeps its children on one line, so they can overflow.");
  pick([13, 18], 'm', "The shop must show its opening hours only when the user asks, and the user then returns to the same screen. Which widget is the best? Why?",
    ["AlertDialog", "Chip", "DecoratedBox"], 0,
    [["It shows a message box above the current screen", "message", "above"], ["Close returns the user to the same screen", "close", "return"]],
    "An AlertDialog shows a message box above the current screen, and Close returns the user to the same screen.");
  pick([8, 15], 'm', "A card must show extra details only when the user taps, and the name and price must stay visible. Which widget is the best? Why?",
    ["ListTile", "ExpansionTile", "DecoratedBox"], 1,
    [["It opens and closes the details on a tap", "open", "close"], ["It handles the change itself / name and price stay visible", "itself", "inside", "visible", "stateless"]],
    "An ExpansionTile opens and closes the details on a tap. It handles the change itself, and the name and price stay visible.");
});
