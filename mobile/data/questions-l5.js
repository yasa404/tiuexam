/* Lecture 5: Campus Shop, five practical tasks (PDF pages 3-15). */
EC.lecture(5, function (Q) {
  var mcq = Q.mcq, list = Q.list, def = Q.def, match = Q.match;
  var CARD = `Card(
  child: Padding(
    padding: EdgeInsets.all(16),
    child: Column(
      children: [
        Text('Campus Notebook'),
        Text('IQD 3,000'),
      ],
    ),
  ),
),`;
  var PRICE = `Text(
  'IQD 3,000',
  style: TextStyle(
    color: Colors.green,
    fontWeight: FontWeight.bold,
  ),
),`;
  var ICON = `children: [
  Icon(Icons.school, color: Colors.orange, size: 40),
  SizedBox(height: 8),
  Text('IT Course Book'),
  Text('IQD 12,000'),
],`;
  var LISTV = `ListView(
  children: [
    // PRODUCT 1 START
    Card(...),
    // PRODUCT 1 END
    // PRODUCT 2 START
    Card(...),
    // PRODUCT 2 END
  ],
)`;

  /* ---------- Multiple choice ---------- */
  Q.skip('mcq', 3);
  mcq(4, 'e', "Which keys save the file in VS Code?",
    ["Ctrl+S", "Ctrl+F", "F5", "F1"], "Slide 4.");
  mcq(4, 'e', "What should you choose before pressing F5?",
    ["A device such as Chrome or an emulator", "A colour for the price of each product", "A name for the fourth product card", "A package for the product images"], "Slide 4.");
  Q.skip('mcq', 3);
  mcq(5, 'e', "On a page of product cards, what does `ListView.children` hold?",
    ["The list containing the cards", "The contents inside one product card", "The title at the top", "The settings of the project"], "Slide 5.");
  mcq(5, 'e', "What does `Column.children` hold in a product card?",
    ["The contents inside one card", "The list containing all cards", "The packages of the app", "The title of the app"], "Slide 5.");
  mcq(6, 'm', "What is the best order when you change the code?",
    ["Find the code, change one thing, save, check the screen", "Change everything, close the app, save, find the code", "Save, check the screen, find the code, change everything", "Check the screen, save, change two things, find the code"], "Slide 6.");
  Q.skip('mcq');
  mcq(6, 'e', "After changing the text and saving, which action shows the change in the running app?",
    ["Hot Reload", "Uninstall", "New Project", "Sign Out"], "Slide 6.");
  mcq(7, 'e', "What should you copy from a documentation example?",
    ["Only what you need", "The complete example app", "Only the page title", "All of the examples on the page"], "Slide 7.");
  Q.skip('mcq', 2);
  mcq(9, 'm', "“Campus Notebook” becomes “IT Notebook”. Which part of this code do you change?",
    ["The string in the first Text", "The string in the second Text", "The name of the Column widget", "The value inside EdgeInsets"], "Only the text in the quotes.", { code: CARD });
  mcq(10, 'e', "You add one more product card by copying. What must you copy?",
    ["One complete Card block", "Only the price text", "Only the closing comma", "The whole main() function"], "Slide 10.");
  mcq(10, 'e', "Where must a new Card be inserted to appear as a separate card?",
    ["Inside ListView.children, after a card", "Before the import line of main.dart", "Inside Column.children of another card", "After the last closing bracket of the file"], "Slide 10.");
  mcq(10, 'm', "Which symbol must be copied with the Card block?",
    ["The closing comma", "The first semicolon", "The import quote", "The @ symbol"], "Cards are list items, so commas separate them.");
  mcq(10, 'h', "A new Card was pasted inside Column.children of another card. What is the result?",
    ["It appears inside that other card", "It appears as a separate card at the top", "It replaces the title in the AppBar", "It deletes the first two product cards"], "Column.children holds the contents of one card.");
  mcq(11, 'e', "Which class is used to make a price green and bold?",
    ["`TextStyle`", "`Padding`", "`ListView`", "`EdgeInsets`"], "Slide 11.");
  mcq(11, 'm', "Which two properties of TextStyle make a price green and bold?",
    ["`color` and `fontWeight`", "`child` and `children`", "`width` and `height`", "`mainAxisAlignment` and `home`"], "Slide 11.");
  mcq(11, 'e', "Where do you add the style so that only the price becomes green?",
    ["On the price Text", "On the name Text", "On the AppBar title", "On the ListView"], "Slide 11.");
  mcq(11, 'm', "What does this code display?",
    ["A bold green price", "A bold black name", "A thin green name", "A large green icon"], "color and fontWeight.", { code: PRICE });
  Q.skip('mcq');
  mcq(12, 'm', "What is an Icon widget?",
    ["A symbol, not a button", "A button that opens a page", "A label for filtering", "A list of products"], "Slide 12.");
  mcq(12, 'm', "Which part of the code creates the gap below the icon?",
    ["`SizedBox(height: 8)`", "`size: 40` in the Icon", "`Icons.school`", "`color: Colors.orange`"], "Slide 12.", { code: ICON });
  mcq(12, 'h', "Which part of this code makes the icon orange?",
    ["`color: Colors.orange`", "`size: 40`", "`Icons.school`", "`height: 8`"], "Slide 12.", { code: ICON });
  mcq(12, 'h', "In which list is an Icon written, so that it appears in one card only?",
    ["Column.children of that card", "ListView.children of the page", "Column.children of every single card", "The actions of the AppBar"], "Slide 12.");
  mcq(13, 'm', "What is the difference between Card margin and Padding?",
    ["Margin is outside the card; Padding is space inside it", "Margin is inside the text; Padding is outside the screen", "Margin changes the colour; Padding changes the font", "Margin and Padding are both names of product cards"], "Task 5.");
  mcq(13, 'm', "Which widget adds a vertical gap between two texts?",
    ["`SizedBox`", "`Icon`", "`AppBar`", "`Scaffold`"], "Slide 13.");
  mcq(13, 'e', "Which widget gives space around the contents inside the card?",
    ["`Padding`", "`Icon`", "`AppBar`", "`TextStyle`"], "Slide 13.");
  Q.skip('mcq');
  mcq(14, 'e', "Why should you test the app in a narrow window?",
    ["To find overflow errors", "To change the app name", "To install a new package", "To delete the saved state"], "Slide 14.");
  Q.skip('mcq');
  mcq(5, 'h', "A new Card must appear between the first and the second product. Where is it written?",
    ["After `// PRODUCT 1 END`", "After `// PRODUCT 2 END`", "Before `// PRODUCT 1 START`", "After `// PRODUCT 2 START`"], "List order controls display order.", { code: LISTV });
  mcq(5, 'm', "Which widget is missing at the top of this tree, if the cards must scroll as a list?",
    ["`ListView`", "`Padding`", "`Icon`", "`TextStyle`"], "ListView.children contains the cards.", { qfig: 'listCardsBlank' });

  /* ---------- Short answer ---------- */
  def(5, 'm', 2, "What do ListView.children and Column.children contain on a page of product cards?",
    [["ListView.children: the list containing the cards", "cards"], ["Column.children: the contents inside one card", "inside one card", "contents", "one card"]],
    "ListView.children is the list containing the cards. Column.children holds the contents inside one card.");
  def(13, 'm', 2, "What is the job of Card margin and of Padding?",
    [["Margin: space outside, around the card", "outside", "around the card", "between cards"], ["Padding: space inside the card, around its contents", "inside", "contents"]],
    "The margin is space outside, around the card. Padding is space inside the card, around its contents.");
  def(11, 'm', 2, "Which two TextStyle properties make the price green and bold?",
    [["color (Colors.green)", "color", "colour"], ["fontWeight (FontWeight.bold)", "fontweight", "font weight"]],
    "The properties are color (Colors.green) and fontWeight (FontWeight.bold).");
  def(12, 'm', 2, "What is an Icon, and where is it written to appear above the name of one product?",
    [["A symbol, not a button", "symbol"], ["In Column.children of that card, before the name", "column children", "column", "before the name"]],
    "An Icon is a symbol, not a button. It is written in Column.children of that card, before the name Text.");
  list(6, 'e', 4, "List the four steps for changing the code safely.",
    [["Find the code", "find"], ["Change one thing", "change one", "one thing", "one change"], ["Save", "save"], ["Check the screen", "check", "screen"]]);
  list(7, 'e', 3, "List three steps for using the Flutter documentation.",
    [["Search for the widget", "search"], ["Find a small example", "small example", "example"], ["Identify the properties", "propert"], ["Copy only what you need", "copy"], ["Adapt the code", "adapt"]], { n: 3 });
  Q.skip('list', 2);
  def(10, 'm', 4, "Explain how to add one more product card by copying an existing card.",
    [["Copy one complete Card block, including the closing comma", "comma", "complete card", "whole card", "card block"], ["Paste it inside ListView.children, after another card", "listview"], ["Change the name and the price", "name", "price"], ["Save and check the screen", "save", "check", "hot reload"]],
    "Copy one complete Card block including its closing comma. Paste it inside ListView.children, after another card. Change the name and the price. Save and check the screen.");
  def(7, 'm', 4, "Explain how to use a documentation example in your own app.",
    [["Search for the widget", "search"], ["Find a small example and identify its properties", "small example", "propert"], ["Copy only what you need and adapt it", "only what", "adapt"], ["Do not paste another complete app (keep your own app structure)", "keep", "main", "complete app"]],
    "Search for the widget and find a small example. Identify its properties. Copy only what you need and adapt it. Keep your own app structure, and do not paste another complete app.");
  def(13, 'm', 4, "Explain the job of Card margin, Padding and SizedBox in the spacing of a product card.",
    [["Margin: space outside, around the card", "outside", "around the card", "every side of the card"], ["Padding: space inside the card around the contents", "inside"], ["SizedBox with a height: a gap between two widgets", "sizedbox", "gap"], ["For example between the name and the price", "name and the price", "between the name"]],
    "The margin is space outside, around the card. Padding is space inside the card around its contents. A SizedBox with a height makes a gap between two widgets, for example between the name and the price.");
  def([5, 10], 'm', 3, "A new product must appear as its own card in the shop. Where should the new Card be written? Why?",
    [["Inside ListView.children", "listview"], ["It is the list containing the cards", "list containing", "contains the cards", "cards"], ["Column.children holds only the contents of one card", "one card", "contents"]],
    "Inside ListView.children, because it is the list containing the cards. Column.children holds only the contents inside one card.");
  def(6, 'm', 3, "A student wants to change the heading, the prices and the spacing. What is the best way to work? Why?",
    [["Change one thing at a time", "one thing", "one change", "one at a time"], ["Save and check the screen each time", "save", "check"], ["It is easier to find and fix an error", "error", "mistake", "problem", "fix"]],
    "Change one thing at a time, then save and check the screen each time. It is easier to find and fix an error.");
  def(11, 'm', 2, "Only the prices must become green and bold. Where should the TextStyle be added, and what happens to the names?",
    [["On the price Text", "price text", "on the price", "to the price", "the price"], ["The names stay unchanged", "unchanged", "stay", "not change", "same"]],
    "Add it on the price Text. The product names stay unchanged.");
  def(11, 'm', 2, "Describe how the text in this code looks.",
    [["Green", "green"], ["Bold", "bold"]],
    "The text IQD 3,000 is green and bold.", { code: PRICE });
  def(12, 'm', 2, "In this code, what do `Icons.school` and `size: 40` set?",
    [["Icons.school chooses the symbol", "symbol", "which icon", "school icon", "picture"], ["size: 40 sets the size of the icon", "size of", "how large", "how big", "icon size", "the size"]],
    "Icons.school chooses the symbol, and size: 40 sets the size of the icon.", { code: ICON });
  def([5, 13], 'm', 2, "Look at the widget tree of a product card. Which widget gives space around the contents, and which widget arranges the texts?",
    [["Padding", "padding"], ["Column", "column"]],
    "Padding gives space around the contents, and Column arranges the texts.", { qfig: 'cardTree' });
  def([5, 12], 'm', 2, "Look at the widget tree. Which widget is the parent of the two cards, and what does the second card have that the first does not?",
    [["ListView", "listview", "list view"], ["An Icon", "icon"]],
    "ListView is the parent of the two cards. The second card also has an Icon.", { qfig: 'listCards' });
  def(10, 'm', 2, "Why must the closing comma be copied with a Card block, and where is the new Card pasted?",
    [["Commas separate the items of the list", "separate", "list item", "items"], ["After product 3, inside ListView.children", "listview", "after product 3", "after the third"]],
    "The comma separates the items of the list. The new Card is pasted after product 3, inside ListView.children.");
  def(13, 'm', 2, "Write the code for a vertical gap of 12 between two widgets, and name the widget.",
    [["`SizedBox`", "!sizedbox"], ["`height: 12`", "!height 12"]],
    "SizedBox(height: 12)");

  /* ---------- Matching ---------- */
  Q.skip('match');
  match([11, 12, 13], 'm', "Match each name with its use in the product cards.",
    [["Card margin", "Space around the outside of a card"], ["`Padding`", "Space around the content inside a card"], ["`SizedBox`", "A gap between two widgets"], ["`color`", "Makes the price text green"], ["`fontWeight`", "Makes the price text bold"], ["`Icon`", "Displays a symbol; it is not a button"]]);
  match([4, 6, 10, 14], 'm', "Match each item with its purpose.",
    [["Ctrl+S", "Saves the file"], ["F5", "Runs the app on the chosen device"], ["Hot Reload", "Shows a saved change in the running app"], ["`lib/main.dart`", "The usual starting file of the app"], ["Closing comma", "Separates one Card from the next"], ["Narrow window", "A test that can show overflow"]]);
  match([11, 12, 13], 'h', "Match each piece of code with its effect.",
    [["`Icons.school`", "Chooses which symbol is shown"], ["`size: 40`", "Sets the size of an icon"], ["`Colors.green`", "Sets the colour of the price"], ["`FontWeight.bold`", "Makes text bold"], ["`EdgeInsets.all(20)`", "Space of 20 on every side"], ["`SizedBox(height: 12)`", "Vertical gap of 12"]]);
});
