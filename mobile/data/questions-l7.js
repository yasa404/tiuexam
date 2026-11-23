/* Lecture 7: Understanding Widget Layout (PDF pages 3-29). */
EC.lecture(7, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp, draw = Q.draw, code = Q.code, pick = Q.pick;
  var ROW = `Row(
  children: [
    const Icon(Icons.school),
    const SizedBox(width: 12),
    Expanded(child: Text(bookTitle)),
  ],
)`;
  var GOOD = `Row(
  children: [
    Expanded(
      child: Padding(
        padding: EdgeInsets.all(8),
        child: Text(bookTitle),
      ),
    ),
  ],
)`;
  var BAD = `Row(
  children: [
    Padding(
      padding: EdgeInsets.all(8),
      child: Expanded(
        child: Text(bookTitle),
      ),
    ),
  ],
)`;
  var OVER = `Row(
  children: [
    const Icon(Icons.school),
    const SizedBox(width: 12),
    Text(longBookTitle),
  ],
)`;
  var WRAP = `Wrap(
  spacing: 8,
  runSpacing: 12,
  children: labels,
)`;
  var CHOICE = `ChoiceChip(
  label: Text('Study'),
  selected: selectedCategory == 'Study',
  onSelected: (value) {
    setState(() {
      selectedCategory = 'Study';
    });
  },
)`;

  /* ---------- Section A ---------- */
  mcq([3, 26], 'e', "A category is…",
    ["a named group of related products", "a size limit from a parent widget", "a route above the current screen", "a gap between two lines of labels"], "Slide 3.");
  mcq(3, 'e', "When the user selects the Study category, what happens to the other products?",
    ["They remain in the catalogue but are not shown", "They are deleted from the catalogue forever", "They are moved to the detail screen of Study", "They change their names to Study products"], "The original list stays.");
  mcq(3, 'e', "Which category shows the full catalogue again?",
    ["All", "Study", "Bags", "Lifestyle"], "Slide 3.");
  mcq([3, 26], 'e', "What is the difference between Chip and ChoiceChip?",
    ["Chip displays a label; ChoiceChip shows one selected option", "Chip shows a selected option; ChoiceChip only displays a label", "Chip opens a new screen; ChoiceChip closes the current screen", "Chip and ChoiceChip are two names for the same widget"], "Slide 3.");
  mcq(3, 'm', "A ChoiceChip shows that Study is selected. What else is needed to filter the products?",
    ["App logic that filters the list", "A larger font for the label", "A second AppBar on the screen", "A new image asset in pubspec.yaml"], "A selection control needs app logic.");
  mcq(26, 'e', "Filtering means…",
    ["showing items that match a rule while keeping the original data", "deleting the items that do not match a rule from the data", "changing the size of every item so that it fits the screen width", "opening a second screen for every item in the original data"], "Slide 26.");
  mcq(4, 'm', "Which is the correct order after the user selects a category?",
    ["onSelected runs → setState updates → build describes the view", "build describes the view → onSelected runs → setState updates", "setState updates → build describes the view → onSelected runs", "setState updates → onSelected runs → build describes the view"], "Slide 4.");
  mcq(4, 'm', "What does this code change when the chip is selected?",
    ["The value of selectedCategory", "The text of the label Study", "The original product list", "The title in the AppBar of the app"], "Slide 4.", { code: CHOICE });
  mcq([4, 26], 'e', "“No Tech products yet”, with a way to choose another category, is an example of…",
    ["an empty state", "a tight constraint", "a pushed route", "an overflow"], "Slide 4.");
  mcq(26, 'e', "A callback is…",
    ["a function run in response to an event", "a widget that shows a selected option", "a list that keeps its original data", "a size limit that a parent gives its child"], "Slide 26.");
  mcq(5, 'e', "What does `Navigator.push` do?",
    ["Places a new route above the current one", "Removes the top route and returns", "Deletes the home screen of the app", "Opens extra content inside the same card"], "Slide 5.");
  mcq(5, 'e', "What does `pop` do?",
    ["Removes the top route and returns", "Places a new route above the current one", "Filters the list of products", "Updates the selected category"], "Slide 5.");
  mcq([5, 27], 'm', "In navigation, a route is…",
    ["a screen location in the app", "a group of related products", "a gap between two children", "a function run after a tap"], "Slide 5.");
  mcq(5, 'e', "While the detail screen is open, where is the home screen?",
    ["Below the detail screen", "Above the detail screen", "Inside the detail text", "Removed from the app"], "Slide 5.");
  mcq(5, 'e', "What does a product detail screen receive?",
    ["The data of the product", "The whole source code", "The size of the phone", "The list of all routes"], "Slide 5.");
  mcq(6, 'm', "What is an advantage of a separate detail screen compared with an ExpansionTile?",
    ["It gives more room for the details", "It keeps the user in the catalogue", "It needs no product data at all", "It opens inside the same card"], "Slide 6.");
  mcq(6, 'e', "What is an advantage of an expanding section?",
    ["It keeps the user in the catalogue", "It gives a full screen for the details", "It removes the top route from the app", "It deletes the other product cards"], "Slide 6.");
  mcq(6, 'e', "Who manages the open or closed state of an ExpansionTile?",
    ["The ExpansionTile itself", "The Navigator of the app", "The pubspec.yaml file", "The home route"], "Slide 6.");
  mcq([7, 28], 'e', "Layout is…",
    ["how the app sizes and positions its content", "how the app stores its data on the phone", "how the app names its classes and files", "how the app downloads images from the web"], "Slide 7.");
  mcq([8, 28], 'e', "Constraints are…",
    ["size limits that a parent gives its child", "colours that a child widget gives its parent", "errors that appear in debug mode", "screens placed above each other"], "Slide 8.");
  mcq(8, 'm', "Which values do constraints contain?",
    ["Minimum and maximum width and height", "The font size and the font weight", "The route name and the screen title", "The selected and original categories"], "Slide 8.");
  mcq(9, 'e', "Which is the correct order of layout?",
    ["Parent gives limits → child chooses a size → parent places the child", "Child chooses a size → parent gives limits → child places the parent", "Parent places the child → child chooses a size → parent gives limits", "Child gives limits → parent chooses a size → child places the parent"], "Slide 9.");
  mcq(9, 'e', "A text uses more lines because the width is small. What does it need?",
    ["More height", "More width", "Less height", "A new route"], "Slide 9.");
  mcq(10, 'm', "A constraint with minimum width 100 and maximum width 100 is…",
    ["tight", "loose", "unlimited", "empty"], "Min = max, so the size is fixed.");
  mcq(10, 'm', "A constraint with minimum width 0 and maximum width 100 is…",
    ["loose", "tight", "fixed at 100", "unlimited"], "The child may be smaller.");
  mcq(10, 'h', "Which statement about loose constraints is correct?",
    ["Loose does not mean unlimited", "Loose means there is no maximum", "Loose means that the size is fixed", "Loose means the child is hidden"], "Slide 10.");
  mcq(10, 'h', "The minimum width is 0 and the maximum is 200. Which width can the child choose?",
    ["150", "250", "300", "Any width, without a limit"], "The size must be inside the limits.");
  mcq([11, 28], 'e', "Overflow is…",
    ["content beyond the available space", "an equal gap between two lines of labels", "a screen above another screen", "a group of related products"], "Slide 11.");
  mcq(11, 'm', "How does Flutter show an overflow in debug mode?",
    ["With yellow and black stripes", "With a red dot in the corner", "With an empty white screen", "With a circular progress indicator"], "Slide 11.");
  mcq(11, 'm', "What can happen with this code on a narrow screen?",
    ["The Row can overflow", "The title moves to another row", "The icon becomes smaller", "The Row starts to scroll"], "Slide 11.", { code: OVER });
  mcq([11, 12], 'h', "How can the long title in this code be fixed?",
    ["Put the Text inside Expanded", "Put the Icon inside Padding", "Remove the SizedBox widget", "Change the Row to an AppBar"], "Expanded gives the remaining width.", { code: OVER });
  mcq(12, 'm', "What does Expanded do in a Row?",
    ["Makes its child fill its share of the remaining width", "Makes the font of its child smaller on narrow screens", "Adds scrolling when the content is too long", "Moves its child to the next row if needed"], "Slide 12.");
  mcq(12, 'e', "In a Column with a finite height, Expanded shares the remaining…",
    ["height", "width", "font size", "text lines"], "Slide 12.");
  mcq(12, 'h', "Which of these does Expanded NOT do?",
    ["Reduce the font size of the text", "Fill the remaining width in a Row", "Fill the remaining height in a Column", "Give its child a share of the space"], "Slide 12.");
  mcq(13, 'm', "In this code, which widget gets the remaining width of the Row?",
    ["The Text inside Expanded", "The Icon at the start", "The SizedBox in the middle", "None of the three widgets"], "Slide 13.", { code: ROW });
  mcq(13, 'h', "What is the job of `SizedBox(width: 12)` in this Row?",
    ["A gap between the icon and the title", "The width of the whole Row on the screen", "The size of the school icon", "The maximum width of the book title"], "Slide 13.", { code: ROW });
  mcq(14, 'e', "What is the difference between Expanded and Flexible?",
    ["Expanded must fill its share; Flexible may use less by default", "Flexible must fill its share; Expanded may use less by default", "Expanded works in a Row only; Flexible works in a Wrap only", "Expanded adds scrolling; Flexible reduces the font size"], "Slide 14.");
  mcq(15, 'e', "What is the correct place for Expanded?",
    ["Directly in the children of a Row or Column", "Inside a Padding in the children of a Row", "Inside a Text in the children of a Column", "Outside the MaterialApp widget, above the app"], "Slide 15.");
  mcq(15, 'h', "What is wrong with this code?",
    ["Expanded is not directly in the Row", "Padding cannot have a child", "Text cannot be inside Expanded", "A Row needs two or more direct children"], "Parent-data error.", { code: BAD });
  mcq(15, 'h', "Which error does Row → Padding → Expanded → Text give?",
    ["A parent-data error", "A missing-asset error", "A missing-comma error", "A route-not-found error"], "Slide 15.");
  mcq(16, 'e', "What does Wrap do when the next item does not fit?",
    ["Starts another line", "Hides the item", "Makes the item smaller", "Scrolls to the item"], "Slide 16.");
  mcq(16, 'm', "For which content is Wrap suitable?",
    ["A small group of tags", "A very long list of products", "Introduction screens", "One long book title"], "Slide 16.");
  mcq(17, 'e', "In a Wrap, `spacing` is…",
    ["the gap between neighbours on the same line", "the gap between one line and the next line", "the space inside each one of the labels", "the width of the whole phone screen"], "Slide 17.");
  mcq(17, 'e', "In a Wrap, `runSpacing` is…",
    ["the gap between lines", "the gap between neighbours on a line", "the speed of scrolling", "the size of the labels"], "Slide 17.");
  mcq(17, 'h', "What is the gap between two lines of labels in this code?",
    ["12", "8", "20", "0"], "runSpacing.", { code: WRAP });
  mcq([18, 29], 'e', "A viewport is…",
    ["the visible window of the content", "the list of all routes in the app", "the limit on the size of a child", "the group of related products"], "Slide 18.");
  mcq(18, 'e', "What changes when the user scrolls?",
    ["Which part of the content shows", "The size of the viewport window", "The original product data", "The place of the app bar"], "Slide 18.");
  mcq(18, 'e', "What happens to the app bar when the page content is scrolled?",
    ["It remains above", "It scrolls away", "It overflows", "It becomes a chip"], "Slide 18.");
  mcq(19, 'm', "Which statement about Column is correct?",
    ["It does not scroll by itself and can overflow", "It scrolls by itself when the content is long", "It places its children next to each other", "It shows one page that fills the viewport"], "Slide 19.");
  mcq(19, 'e', "Which widget is suitable for a list that is taller than the screen?",
    ["`ListView`", "`Column`", "`Row`", "`Center`"], "Slide 19.");
  mcq(20, 'e', "Which widget shows separate pages, one filling the viewport, with swipes that snap?",
    ["`PageView`", "`ListView`", "`Wrap`", "`Column`"], "Slide 20.");
  mcq(20, 'm', "What is the default scroll direction of ListView and of PageView?",
    ["ListView vertical, PageView horizontal", "ListView horizontal, PageView vertical", "ListView vertical, PageView vertical", "ListView horizontal, PageView horizontal"], "Slide 20.");
  mcq(20, 'e', "Which content suits a PageView?",
    ["Introduction screens", "A list of product cards", "A small group of tags", "One long title in a Row"], "Slide 20.");
  mcq([21, 29], 'e', "A responsive layout…",
    ["adjusts to the available space", "has the same size on all screens", "always uses a small font", "never uses scrolling"], "Slide 21.");
  mcq(21, 'm', "The available width becomes narrower. What usually happens to wrapped labels?",
    ["Fewer labels per line and more lines", "More labels per line and fewer lines", "The labels become smaller in size", "The labels disappear from the screen"], "Slide 21.");
  mcq([21, 29], 'e', "A logical pixel is…",
    ["a unit for layout across screens with different pixel densities", "the colour of one dot of the app bar on a phone screen", "a function that runs when the user taps on the phone screen", "the number of lines that a long text needs when the width is small"], "Slide 29.");
  mcq(22, 'e', "What is the best way to support larger text?",
    ["Allow the text to wrap and the page to scroll", "Shrink all text until it fits the fixed height", "Cut off the text at the end of the first line", "Use a fixed height for every text area"], "Slide 22.");
  mcq(22, 'm', "What can happen to larger text in a fixed-height area?",
    ["It may be cut off", "It may be filtered", "It may open a route", "It may become an icon"], "Slide 22.");
  mcq(23, 'e', "Which result is expected when you test with more labels?",
    ["Wrap keeps the labels inside the screen", "The labels overflow at the right side", "The first labels are deleted by the Wrap", "The labels open on a separate screen"], "Slide 23.");
  mcq(24, 'e', "What is a branch in a widget tree, in the lecture’s answer?",
    ["One widget is the direct parent of another", "Two widgets with exactly the same text style", "A widget that is never displayed", "A screen that is removed with pop"], "Slide 24.");
  mcq(27, 'm', "Widgets that have the same parent are called…",
    ["siblings", "routes", "viewports", "callbacks"], "Slide 27.");
  mcq(17, 'm', "What are the two gaps in this Wrap?",
    ["1 is `spacing`, 2 is `runSpacing`", "1 is `runSpacing`, 2 is `spacing`", "1 is `padding`, 2 is `margin`", "1 is `margin`, 2 is `padding`"], "Same line: spacing. Between lines: runSpacing.", { qfig: 'wrapBlank' });
  mcq(18, 'm', "What is the name of the part marked with ? in this diagram?",
    ["Viewport", "Route", "Category", "Callback"], "The visible window.", { qfig: 'viewportBlank' });
  mcq(11, 'm', "What does this diagram show?",
    ["An overflow", "An empty state", "A pushed route", "A selected category"], "Yellow and black stripes in debug mode.", { qfig: 'overflow' });

  /* ---------- Section C ---------- */
  tf(3, 'e', "When a category is selected, the other products are deleted from the catalogue.", false, "They remain in the catalogue.");
  tf(3, 'e', "A ChoiceChip shows one selected option.", true, "Slide 3.");
  tf(4, 'm', "An empty state should give the user a way to choose another category.", true, "Slide 4.");
  tf(5, 'e', "`Navigator.push` removes the top route.", false, "pop removes it.");
  tf(5, 'e', "The home screen stays below the detail screen and can keep its selection.", true, "Slide 5.");
  tf(6, 'm', "An ExpansionTile manages its own open/closed state.", true, "Slide 6.");
  tf(8, 'e', "Constraints are size limits that a parent gives its child.", true, "Slide 8.");
  tf(10, 'e', "With a tight constraint the minimum and the maximum are equal.", true, "Slide 10.");
  tf(10, 'e', "A loose constraint means that the size is unlimited.", false, "Loose is not unlimited.");
  tf(11, 'm', "A Row moves its items to another row when they do not fit.", false, "Wrap does this, Row does not.");
  tf(12, 'e', "Expanded adds scrolling to its child.", false, "It only fills a share of the space.");
  tf(14, 'm', "Flexible may use less than its share by default.", true, "Loose fit.");
  tf(15, 'e', "Row → Expanded → Padding → Text is a suitable order.", true, "Slide 15.");
  tf(16, 'm', "In a Wrap, each label stays one child.", true, "Slide 16.");
  tf(17, 'm', "`runSpacing` is the gap between neighbours on the same line.", false, "That is spacing.");
  tf(19, 'e', "A Column scrolls by itself when its content is taller than the screen.", false, "It can overflow.");
  tf(19, 'e', "Using a Column inside a scrolling page is fine.", true, "Slide 19.");
  tf(20, 'm', "A ListView is vertical by default but can be horizontal.", true, "Slide 20.");
  tf(20, 'm', "In a PageView several pages are normally visible together.", false, "One page fills the viewport.");
  tf(22, 'e', "All text should be made smaller so that larger text settings have no effect.", false, "Allow wrapping and scrolling.");
  tf(23, 'e', "On a shorter screen the user should still be able to scroll to the final item.", true, "Slide 23.");

  /* ---------- Section B ---------- */
  fill(26, 'e', "A [[category]] is a named group of related products.", "Slide 26.");
  fill(26, 'e', "[[Filtering|filter]] means showing items that match a rule while keeping the original data.", "Slide 26.");
  fill(4, 'e', "When a category is selected, the [[onSelected]] callback runs and [[setState()|setState]] updates selectedCategory.", "Slide 4.");
  fill(26, 'e', "A [[callback]] is a function run in response to an event.", "Slide 26.");
  fill(5, 'e', "Navigator.[[push]] places a new route above the current one, and [[pop]] removes the top route.", "Slide 5.");
  fill(5, 'e', "In navigation, a [[route]] is a screen location.", "Slide 5.");
  fill(8, 'e', "[[Constraints|constraint]] are size limits that a parent gives its child.", "Slide 8.");
  fill(10, 'e', "When the minimum and the maximum are equal the constraint is [[tight]]; when the minimum is zero it is [[loose]].", "Slide 10.");
  fill(11, 'e', "Content beyond the available space is called [[overflow]].", "Slide 11.");
  fill(13, 'm', "Complete the code so that the title uses the remaining width: [[Expanded]].", "Slide 13.", { code: `Row(
  children: [
    const Icon(Icons.school),
    const SizedBox(width: 12),
    ________(child: Text(bookTitle)),
  ],
)` });
  fill(14, 'e', "[[Expanded]] must fill its share, while [[Flexible]] may use less by default.", "Slide 14.");
  fill(15, 'h', "Placing Expanded inside a Padding in a Row gives a [[parent-data|parent data]] error.", "Slide 15.");
  fill(17, 'm', "Complete the code: (1) [[spacing]] for the gap on a line, (2) [[runSpacing]] for the gap between lines.", "Slide 17.", { code: `Wrap(
  (1)____: 8,
  (2)____: 12,
  children: labels,
)` });
  fill(18, 'e', "The visible window of scrolling content is the [[viewport]].", "Slide 18.");
  fill(19, 'e', "A [[Column]] does not scroll by itself, while a [[ListView]] scrolls when the content exceeds the viewport.", "Slide 19.");
  fill(20, 'e', "In a [[PageView]], one page fills the viewport and swiping snaps to the next page.", "Slide 20.");
  fill(21, 'e', "A [[responsive]] layout adjusts to the available space.", "Slide 21.");
  fill(29, 'e', "A [[logical]] pixel is a unit for layout across screens with different pixel densities.", "Slide 29.");
  fill(27, 'e', "In a widget tree, children of the same parent are called [[siblings|sibling]].", "Slide 27.");
  fill(26, 'e', "A screen that shows “No Tech products yet” is an [[empty]] state.", "Slide 26.");
  fill(5, 'm', "Complete the diagram: (1) [[push]], (2) [[pop]].", "Slide 5.", { qfig: 'navBlank' });

  /* ---------- Section D ---------- */
  def(26, 'e', 2, "Define category and filtering.",
    [["Category: a named group of related products", "group"], ["Filtering: showing items that match a rule while keeping the original data", "match", "rule"]],
    "A category is a named group of related products. Filtering shows the items that match a rule while keeping the original data.");
  def(26, 'e', 2, "Define callback and empty state.",
    [["Callback: a function run in response to an event", "response", "event"], ["Empty state: shown when there are no items, with a way to continue", "no items", "no products", "no results", "nothing to show"]],
    "A callback is a function run in response to an event. An empty state is shown when there are no products to show, with a way to choose another category.");
  def([5, 27], 'e', 2, "Define push and pop in navigation.",
    [["Push: places a new route above the current one", "above", "new route"], ["Pop: removes the top route and returns", "remove", "return"]],
    "Push places a new route above the current one. Pop removes the top route and returns.");
  def([7, 8, 28], 'e', 2, "Define layout and constraints.",
    [["Layout: how the app sizes and positions its content", "position"], ["Constraints: size limits that a parent gives its child", "limit"]],
    "Layout is how the app sizes and positions its content. Constraints are size limits that a parent gives its child.");
  def([10, 28], 'e', 2, "Define tight and loose constraints.",
    [["Tight: minimum equals maximum, so the size is fixed", "equal", "fixed", "same"], ["Loose: minimum is zero, so the child may be smaller", "zero", "smaller", "#0"]],
    "A tight constraint has a minimum equal to its maximum, so the size is fixed. A loose constraint has a minimum of zero, so the child may be smaller.");
  def([17, 29], 'e', 2, "Define spacing and runSpacing in a Wrap.",
    [["spacing: gap between neighbours on the same line", "same line", "neighbour", "neighbor"], ["runSpacing: gap between lines", "between lines", "between the lines", "between runs"]],
    "spacing is the gap between neighbours on the same line. runSpacing is the gap between lines.");
  def([18, 29], 'e', 2, "Define viewport and scrolling.",
    [["Viewport: the visible window", "visible window", "window"], ["Scrolling: changes which part of the content shows", "which part", "changes the part", "different part"]],
    "A viewport is the visible window. Scrolling changes which part of the content shows.");
  def([14, 28], 'm', 2, "What is the difference between Expanded and Flexible?",
    [["Expanded must fill its share of the space", "must fill", "fills its"], ["Flexible may use less (loose fit by default)", "less", "loose"]],
    "Expanded must fill its share of the space. Flexible has a loose fit by default, so it may use less.");
  list(9, 'e', 3, "List the three steps of layout between a parent and a child.",
    [["The parent gives limits (constraints)", "limit", "constraint"], ["The child chooses an allowed size", "choose"], ["The parent places the child", "places", "position"]]);
  list(12, 'e', 3, "List three things that Expanded does NOT do.",
    [["It does not reduce the font", "font", "smaller text"], ["It does not add scrolling", "scroll"], ["It does not move children to another row", "move", "another row", "new line"]]);
  list(23, 'h', 4, "List four situations to test in a layout, with the expected result.",
    [["Long title: it fits beside the icon", "long title"], ["Narrow screen: no horizontal overflow", "narrow"], ["Larger text: the words stay visible", "larger text"], ["More labels: Wrap keeps them inside", "labels"], ["Shorter screen or more details: can scroll to the final item", "shorter", "final item", "more details"]], { n: 4 });
  list(4, 'm', 4, "List the steps from selecting a category to the updated view.",
    [["The user selects a category", "select"], ["The onSelected callback runs", "onselected", "callback"], ["setState updates selectedCategory", "setstate"], ["build describes the updated view", "build"]]);

  /* ---------- Section E ---------- */
  exp(4, 'm', "Explain how selecting the Study category updates the screen.",
    [["The onSelected callback runs", "onselected", "callback"], ["setState updates selectedCategory", "setstate"], ["build describes the updated view with matching products", "build"], ["The original list stays, so All can show everything again", "original", "all"]],
    "When the user selects Study, the onSelected callback runs. setState updates selectedCategory, and build describes the updated view. The original list stays, so All shows the full catalogue again.");
  exp([5, 6], 'm', "Compare a separate detail screen with an ExpansionTile.",
    [["Detail screen: receives the product’s data and is opened with Navigator.push", "push", "receives"], ["It gives more room for the details; pop returns", "more room", "pop"], ["ExpansionTile: opens/closes extra content in the same screen", "open", "extra content"], ["It keeps the user in the catalogue", "keeps the user", "catalogue", "catalog"]],
    "A detail screen receives the product's data, is opened with Navigator.push, and gives more room; pop returns to the home screen. An ExpansionTile opens and closes extra content and keeps the user in the catalogue.");
  exp(10, 'm', "Explain tight and loose constraints with examples.",
    [["Tight: minimum equals maximum", "equal", "same"], ["The size is fixed, e.g. 100 and 100", "fixed", "#100"], ["Loose: minimum is zero and the child may be smaller, e.g. 0 and 100", "smaller", "zero", "#0"], ["Loose does not mean unlimited", "unlimited", "maximum"]],
    "In a tight constraint the minimum is equal to the maximum, for example 100 and 100, so the size is fixed. In a loose constraint the minimum is zero, for example 0 and 100, so the child may be smaller. Loose does not mean unlimited.");
  exp([11, 12], 'm', "Explain why a long title in a Row can overflow and how Expanded solves the problem.",
    [["The title needs more than the available width", "available", "more width", "more space"], ["A Row does not move items to another row", "another row", "does not move"], ["Expanded gives the title the remaining width", "remaining"], ["The title can then wrap to more lines", "wrap", "more lines"]],
    "A long title can need more than the available width, and a Row does not move its items to another row, so it overflows. Expanded gives the title the remaining width, so the title can wrap to more lines.");
  exp(19, 'm', "Compare Column and ListView.",
    [["Column places children one below another", "one below", "below another", "vertical"], ["Column does not scroll itself and can overflow; suits a small group", "does not scroll", "overflow", "small group"], ["ListView scrolls when the content exceeds the viewport", "exceeds", "scrolls when", "scrollable"], ["ListView suits a list taller than the screen and needs a usable viewport height", "taller", "viewport height"]],
    "A Column places children one below another, does not scroll itself, suits a small group and can overflow. A ListView scrolls when the content exceeds the viewport, suits a list taller than the screen, and needs a usable viewport height.");
  exp(20, 'm', "Compare ListView and PageView.",
    [["ListView: several items are visible", "several"], ["ListView is vertical by default", "vertical"], ["PageView: one page fills the viewport and swiping snaps", "one page", "fills", "snap"], ["PageView is horizontal by default", "horizontal"]],
    "In a ListView several items are visible, and it is vertical by default. In a PageView one page fills the viewport and swiping snaps to the next page; it is horizontal by default.");
  exp([21, 22], 'h', "Explain what happens when the screen becomes narrower or the text becomes larger, and how the layout should react.",
    [["Narrower: text needs more lines and fewer labels fit per line", "more lines", "fewer"], ["More height is needed", "height"], ["Larger text needs more room; a fixed-height area may cut it off", "cut off", "more room"], ["Allow wrapping and scrolling, do not shrink all text", "scroll", "shrink"]],
    "On a narrower screen the text needs more lines and fewer labels fit per line, so more height is needed. Larger text needs more room, and a fixed-height area may cut it off. Allow the text to wrap and the page to scroll, and do not shrink all text.");
  draw(13, 'm', "Draw the widget tree of this Row.", 'rowExpanded',
    [["Row", "row"], ["Icon", "icon"], ["SizedBox", "sizedbox"], ["Expanded with Text bookTitle", "expanded"]],
    "Row → three children: Icon, SizedBox, and Expanded → Text(bookTitle).", { code: ROW });
  draw(15, 'm', "Draw the suitable and the unsuitable order for Expanded, Padding and Text in a Row.", 'expandedOrder',
    [["Suitable: Row → Expanded", "suitable", "row expanded"], ["then Padding → Text", "padding text", "padding"], ["Unsuitable: Row → Padding → Expanded", "unsuitable", "row padding"], ["Parent-data error in the second", "error"]],
    "Suitable: Row → Expanded → Padding → Text. Unsuitable: Row → Padding → Expanded → Text, which gives a parent-data error.");
  draw(9, 'm', "Draw the layout steps between a parent and a child.", 'layoutSteps',
    [["Parent", "parent"], ["Parent gives limits to the child", "limit", "constraint"], ["Child chooses an allowed size", "size"], ["Parent places the child", "place"]],
    "Parent gives limits → child chooses an allowed size → parent places the child.");
  draw(5, 'm', "Draw the navigation between the home screen and the detail screen, with push and pop.", 'navStack',
    [["Home screen (below)", "home"], ["Detail screen (above)", "detail"], ["Push goes from home to detail", "push"], ["Pop returns to home", "pop"]],
    "The detail screen is placed above the home screen with push. Pop removes the detail screen and returns to home.");
  draw(4, 'm', "Draw the steps from selecting a category to the updated view.", 'categoryFlow',
    [["User selects Study", "select"], ["onSelected callback runs", "onselected"], ["setState updates selectedCategory", "setstate"], ["build describes the updated view", "build"]],
    "User selects Study → onSelected callback runs → setState updates selectedCategory → build describes the updated view.");
  draw([18, 19], 'h', "Draw a phone screen with an app bar and a ListView of five cards, where only three cards fit. Show the viewport and the scrolling.", 'viewport',
    [["App bar above", "app bar", "appbar"], ["Viewport (visible window)", "viewport"], ["Visible cards inside the viewport", "card"], ["Hidden cards reached by scrolling", "scroll"]],
    "The app bar stays above. The viewport shows cards 1 to 3. Cards 4 and 5 are outside and are reached by scrolling.");
  code(13, 'm', "Write a Row with a school icon, a gap of 12, and a Text of bookTitle that uses the remaining width.",
    [["`Row(`", "!row"], ["`children: [ ]`", "!row children"], ["`Icon(Icons.school)`", "!icon icons school"], ["`SizedBox(width: 12)`", "!sizedbox width 12"], ["`Expanded(child: Text(bookTitle))`", "!expanded child text booktitle"]],
    "Row(\n  children: [\n    const Icon(Icons.school),\n    const SizedBox(width: 12),\n    Expanded(child: Text(bookTitle)),\n  ],\n)");
  code(15, 'h', "This code gives a parent-data error. Write the correct code.",
    [["Expanded is the first thing in `children: [`", "~children: [ Expanded("], ["The Row contains Expanded directly", "~Row(children: [ Expanded("], ["Padding is the child of Expanded", "~Expanded(child: Padding("], ["Padding keeps `EdgeInsets.all(8)` and now has the Text", "~EdgeInsets.all(8), child: Text(", "~child: Text(bookTitle), padding: EdgeInsets.all(8)"], ["`Text(bookTitle)` is the child of Padding", "~Padding(padding: EdgeInsets.all(8), child: Text(bookTitle)", "~Padding(child: Text(bookTitle)"]],
    GOOD, { code: BAD });
  code(17, 'm', "Write a Wrap with a gap of 8 between labels, a gap of 12 between lines, and two Chips: 'Study' and 'Bags'.",
    [["`Wrap(`", "!wrap"], ["`spacing: 8`", "!spacing 8"], ["`runSpacing: 12`", "!runspacing 12"], ["`Chip(label: Text('Study'))`", "!chip label text study"], ["`Chip(label: Text('Bags'))`", "!chip label text bags"]],
    "Wrap(\n  spacing: 8,\n  runSpacing: 12,\n  children: [\n    Chip(label: Text('Study')),\n    Chip(label: Text('Bags')),\n  ],\n)");
  code([4, 26], 'h', "Write the onSelected callback of a ChoiceChip so that selectedCategory becomes 'Bags' and the screen is updated.",
    [["`onSelected:`", "!onselected"], ["A function", "!onselected value setstate", "!onselected selected setstate", "!onselected bool", "!onselected"], ["`setState(() { ... })`", "!setstate"], ["`selectedCategory =`", "!selectedcategory"], ["The value 'Bags'", "!selectedcategory bags"]],
    "onSelected: (value) {\n  setState(() {\n    selectedCategory = 'Bags';\n  });\n},");
  code([11, 12], 'h', "The title in this Row overflows on a narrow screen. Write the corrected Row.",
    [["`Expanded(` is used", "~Expanded("], ["Expanded has a child", "~Expanded(child:"], ["`Text(longBookTitle)` is inside Expanded", "~Expanded(child: Text(longBookTitle"], ["The gap stays before Expanded", "~SizedBox(width: 12), Expanded("], ["The icon stays first", "~Icon(Icons.school), SizedBox(width: 12), Expanded("]],
    "Row(\n  children: [\n    const Icon(Icons.school),\n    const SizedBox(width: 12),\n    Expanded(child: Text(longBookTitle)),\n  ],\n)", { code: OVER });
  pick([11, 12], 'm', "A long book title beside an icon shows yellow and black stripes. What is the best fix? Why?",
    ["Put the title inside Expanded", "Put the icon inside a Card", "Add a second AppBar"], 0,
    [["The stripes show an overflow", "overflow"], ["Expanded gives the remaining width so the title can wrap", "remaining", "wrap"]],
    "The stripes show an overflow. Expanded gives the title the remaining width, so it can wrap to more lines.");
  pick([19], 'm', "A shop page has many product cards and is taller than the screen. Which widget is the best? Why?",
    ["Column", "ListView", "Row"], 1,
    [["ListView scrolls when the content exceeds the viewport", "scroll"], ["A Column does not scroll by itself and can overflow", "column does not", "overflow"]],
    "A ListView scrolls when the content exceeds the viewport. A Column does not scroll by itself and can overflow.");
  pick([20], 'm', "An app has three introduction screens, and the user swipes from one full page to the next. Which widget is the best? Why?",
    ["PageView", "ListView", "Wrap"], 0,
    [["One page fills the viewport", "one page", "fills", "full page"], ["Swiping snaps to the next page", "snap", "swip"]],
    "In a PageView one page fills the viewport, and swiping snaps to the next page.");
  pick([16, 21], 'm', "A group of eight short tags must stay inside every screen width. Which widget is the best? Why?",
    ["Row", "Wrap", "PageView"], 1,
    [["Wrap starts another line when the next item does not fit", "another line", "new line", "next line"], ["A Row does not move items to another row and can overflow", "row does not", "overflow"]],
    "Wrap starts another line when the next item does not fit. A Row does not move items to another row and can overflow.");
  pick([6], 'm', "A product has a long description, many details and a picture. What is the best way to show them? Why?",
    ["A Chip below the price", "A separate detail screen", "A longer AppBar title"], 1,
    [["It gives more room for the details", "more room", "more space"], ["It receives the product’s data and the user can return with pop", "receives", "return", "pop"]],
    "A separate detail screen gives more room. It receives the product's data, and the user can return with pop.");
  pick([3, 26], 'm', "The user must choose exactly one category, and the selected one must be visible. Which widget is the best? Why?",
    ["Chip", "ChoiceChip", "SizedBox"], 1,
    [["ChoiceChip shows one selected option", "selected"], ["A Chip only displays a label", "only displays", "label"]],
    "A ChoiceChip shows one selected option, while a Chip only displays a label.");
});
