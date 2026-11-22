/* Lecture 1: Introduction to E-commerce I (PDF pages 1-27). */
EC.lecture(1, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp;

  /* ---------- Section A: choose the correct option ---------- */
  // What is e-commerce (p4-5)
  mcq(4, 'e', "E-commerce is the use of the Internet, the Web and mobile apps to digitally enable commercial transactions between and among…",
    ["organizations and individuals", "suppliers and the firm's own departments", "merchants and middlemen only", "employees and information systems inside the firm"],
    "Slide 4: “…between and among organizations and individuals.”");
  mcq(4, 'e', "Commercial transactions involve the exchange of ___ across an organizational boundary in exchange for goods and services.",
    ["money", "Web pages", "domain names", "HTML files"],
    "Slide 4: commercial transactions = exchange of money across an organizational boundary for goods and services.");
  mcq(4, 'm', "According to Lecture 1, commercial transactions include the exchange of money in return for…",
    ["goods and services", "Web pages and e-mail", "information systems under the firm's control", "domain names and hosts"],
    "Slide 4: “…in exchange for goods, and services.”");
  mcq(5, 'm', "“E-commerce is where business transactions take place via ___, especially the internet.”",
    ["telecommunications networks", "physical marketplaces and shopping malls", "printed mail-order catalogues", "face-to-face sales meetings"],
    "Slide 5, first alternative definition.");
  mcq(5, 'm', "Which of these is one of the definitions of e-commerce given on the slides?",
    ["The conduct of a financial transaction by electronic means", "The application of digital technologies to business processes within the firm", "User-centered applications and social media technologies", "A worldwide network of computer networks built on common standards"],
    "Slide 5. The other options define e-business, Web 2.0 and the Internet.");
  mcq(5, 'e', "E-commerce describes the buying and selling of products, services, and ___ via computer networks including the Internet.",
    ["information", "employees", "middlemen", "domain names"],
    "Slide 5: “…products, services, and information via computer networks…”");
  mcq(5, 'e', "Which short definition of e-commerce appears on the slides?",
    ["Doing business electronically", "Doing business face-to-face", "Controlling inventory within the firm", "Publishing static HTML pages"],
    "Slide 5: “E-commerce (EC) is about doing business electronically.”");
  // E-commerce vs e-business (p6-7)
  mcq(6, 'e', "E-business primarily involves…",
    ["the application of digital technologies to business processes within the firm", "commercial transactions that cross the firm's boundaries to reach its customers", "selling goods and services to customers all around the world online", "user-generated content and communication on social media platforms"],
    "Slide 6.");
  mcq(6, 'e', "Online inventory control is an example of…",
    ["e-business", "e-commerce", "Web 2.0", "the mobile platform"],
    "Slide 6: e-business example.");
  mcq(6, 'm', "E-business involves information systems that are…",
    ["under the firm's control", "under the customers' control", "under the suppliers' control", "owned by middlemen"],
    "Slide 6: “…involving information systems under firm's control.”");
  mcq(6, 'm', "Which of these is an example of e-business rather than e-commerce?",
    ["A firm tracking its own stock levels with an online inventory system", "A customer paying a merchant online for a product listed on its website", "A business selling and shipping goods to customers in another country", "A consumer ordering and paying for a product with a smartphone app"],
    "E-business stays inside the firm; the others are commercial transactions that cross firm boundaries.");
  mcq(7, 'e', "E-commerce primarily involves transactions that…",
    ["cross firm boundaries", "stay within the firm", "never involve money", "only use paper documents"],
    "Slide 7.");
  mcq(7, 'm', "In the figure comparing e-commerce and e-business, the e-commerce systems link the firm with its…",
    ["customers", "suppliers", "technology infrastructure only", "internal departments"],
    "Slide 7: e-commerce systems sit on the customers' side.");
  mcq(7, 'm', "In the figure comparing e-commerce and e-business, the e-business systems are drawn on the side of the…",
    ["suppliers", "customers", "competitors", "advertisers"],
    "Slide 7: e-business systems are on the suppliers' side; e-commerce systems on the customers' side.");
  mcq(7, 'h', "In the e-commerce vs e-business figure, what forms the centre of the firm where the two systems overlap?",
    ["The technology infrastructure", "The customers and their orders", "The suppliers and their deliveries", "The market middlemen and distributors"],
    "Slide 7: “Technology infrastructure — the firm”. The Internet appears inside both systems.");
  mcq([6, 7], 'h', "Which statement about e-commerce and e-business is correct?",
    ["E-commerce crosses firm boundaries, while e-business applies digital technology inside the firm", "E-business crosses firm boundaries, while e-commerce applies digital technology inside the firm", "E-commerce and e-business are two names for the same thing", "E-business only involves selling to customers on the Internet"],
    "Slides 6-7.");
  // Building blocks (p8-12)
  mcq(9, 'e', "Which is the best definition of the Internet?",
    ["A worldwide network of computer networks built on common standards", "One of the most popular services that provides access to Web pages", "User-centered applications and social media technologies", "Access to the Internet via wireless networks or cell-phone service"],
    "Slide 9. The other options describe the Web, Web 2.0 and the mobile platform.");
  mcq(9, 'e', "The Internet is built on common…",
    ["standards", "Web pages", "smartphones", "middlemen"],
    "Slide 9: “…built on common standards.”");
  mcq(9, 'm', "According to the slides, the growth of the Internet can be measured by the number of…",
    ["Internet hosts with domain names", "smartphones and tablets sold each year", "Web pages written in HTML worldwide", "Web 2.0 users and social media accounts"],
    "Slide 9.");
  mcq(9, 'e', "Which list contains services of the Internet named on the slides?",
    ["The Web, e-mail and file transfers", "Tablets, smartphones and laptops", "Text, graphics and animations", "Suppliers, customers and firms"],
    "Slide 9: services include the Web, e-mail, file transfers, and so on.");
  mcq(9, 'm', "Apart from the Web, which of these is named on the slides as an Internet service?",
    ["E-mail", "HTML", "Tablets", "Domain names"],
    "Slide 9: the Web, e-mail, file transfers.");
  mcq(10, 'e', "The World Wide Web is…",
    ["one of the most popular services that runs on the Internet infrastructure", "the worldwide network of computer networks built on common standards", "the most recent development in Internet infrastructure, used through phones", "a type of mobile device that connects its users to social networks"],
    "Slide 10.");
  mcq(10, 'e', "The World Wide Web provides access to…",
    ["Web pages", "wireless networks", "inventory systems", "cell-phone service"],
    "Slide 10.");
  mcq(10, 'e', "Web pages are created in a language called…",
    ["HTML", "TCP/IP", "Web 2.0", "URL"],
    "Slide 10: HTML (HyperText Markup Language).");
  mcq(10, 'm', "HTML stands for…",
    ["HyperText Markup Language", "HyperText Mobile Language", "High Transfer Markup Language", "Hosted Text Media Link"],
    "Slide 10.");
  mcq(10, 'm', "According to the slides, HTML pages can contain…",
    ["text, graphics, animations, music, videos and other objects", "only plain text and hyperlinks to other pages", "only text and still pictures, but never sound or video", "only static text, since media needs a separate program"],
    "Slide 10.");
  mcq([9, 10], 'h', "Which statement best describes the relationship between the Internet and the Web?",
    ["The Web is a service that runs on the Internet", "The Internet is a service that runs on the Web", "They are two names for the same network", "The Web replaced the Internet when Web 2.0 arrived"],
    "Slides 9-10.");
  mcq(11, 'e', "Web 2.0 is described on the slides as…",
    ["user-centered applications and social media technologies", "a worldwide network of computer networks built on common standards", "a collection of static HTML pages written only by website owners", "access to the Internet through wireless networks or cell-phone service"],
    "Slide 11.");
  mcq(11, 'm', "With Web 1.0, most websites consisted of…",
    ["static HTML pages", "user-generated content", "highly interactive social communities", "mobile apps"],
    "Slide 11.");
  mcq(11, 'm', "Web 2.0 lets people…",
    ["collaborate and share information online in ways that were not possible before", "access the Internet only through wired networks in offices and homes", "view static pages that only the website owner can create and change", "control inventory and other business processes inside the firm"],
    "Slide 11.");
  mcq(11, 'h', "Which is NOT one of the features of Web 2.0 listed on the slides?",
    ["Mostly static HTML pages", "User-generated content and communication", "Highly interactive, social communities", "Large audiences"],
    "Static HTML pages describe Web 1.0.");
  mcq(11, 'e', "Which of these is given on the slides as an example of Web 2.0?",
    ["Wikipedia", "Online inventory control", "HTML", "The mobile platform"],
    "Slide 11 examples: Twitter (X), YouTube, Instagram, Wikipedia.");
  mcq(11, 'm', "YouTube and Instagram are given on the slides as examples of…",
    ["Web 2.0", "Web 1.0", "e-business", "Internet hosts"],
    "Slide 11.");
  mcq(11, 'm', "Most content on Web 2.0 sites is…",
    ["generated by users", "written only by the website owner", "fixed as static HTML", "sent by e-mail only"],
    "Slide 11: user-generated content and communication.");
  mcq(12, 'e', "The most recent development in Internet infrastructure is…",
    ["the mobile platform", "the World Wide Web", "e-mail", "file transfer"],
    "Slide 12.");
  mcq(12, 'e', "The mobile platform enables access to the Internet via…",
    ["wireless networks or cell-phone service", "static HTML pages stored on web servers", "Internet hosts registered with domain names", "face-to-face service in physical shops"],
    "Slide 12.");
  mcq(12, 'e', "Which mobile devices are listed on the slides?",
    ["Tablets and smartphones", "Desktop computers and servers", "Web pages and HTML documents", "Routers and network cables"],
    "Slide 12.");
  // Why study e-commerce (p13)
  mcq(13, 'm', "Why study e-commerce, according to Lecture 1?",
    ["Its technology is different and more powerful than previous technologies, and it brings fundamental changes to commerce", "It allows customers to physically inspect goods before buying, which traditional shops and markets have never been able to offer", "It has less fraud than traditional commerce because the legal issues online are always clear", "It removes the need for the Internet and other telecommunications networks in business"],
    "Slide 13.");
  mcq(13, 'e', "E-commerce brings ___ changes to commerce.",
    ["fundamental", "superficial", "temporary", "purely cosmetic"],
    "Slide 13.");
  // Ten factors (p15-25)
  mcq(15, 'm', "Which is NOT one of the ten factors used to differentiate e-commerce from traditional commerce?",
    ["Mobile platform", "Physical inspection", "Time accessibility", "Fraud"],
    "Slide 15. The mobile platform is a technological building block, not one of the ten factors.");
  mcq(15, 'h', "Which pair of factors are areas where traditional commerce does better than e-commerce?",
    ["Physical inspection and fraud", "Convenience and profit", "Cost effective and time saving", "Time accessibility and geographical accessibility"],
    "Slides 22 and 25: goods cannot be inspected online, and fraud is more common online.");
  mcq(16, 'e', "Why is e-commerce more cost effective than traditional commerce?",
    ["The cost incurred on middlemen is eliminated because there is a direct link between business and customer", "Customers can physically inspect goods, so fewer products are returned to the seller", "Businesses are open only for limited hours, which reduces their running costs", "There is face-to-face interaction between buyer and seller, which builds trust and lowers the cost of marketing every product"],
    "Slide 16.");
  mcq(16, 'm', "In traditional commerce, a cost has to be incurred for the role of ___ to sell the company's product.",
    ["middlemen", "websites", "domain names", "electronic images"],
    "Slide 16.");
  mcq(17, 'e', "“A product can be ordered and the transaction completed in a few minutes through the internet.” Which factor is this?",
    ["Time saving", "Time accessibility", "Convenience", "Cost effective"],
    "Slide 17.");
  mcq(18, 'm', "“Customers can browse whole directories of catalogues, compare prices and choose a product anytime and anywhere without moving away from home or work.” Which factor is this?",
    ["Convenience", "Time saving", "Geographical accessibility", "Introduction of new products"],
    "Slide 18.");
  mcq(18, 'm', "According to the slides, e-commerce provides convenience to…",
    ["both the customers and the business", "only the customers, who can shop at any time", "only the business, which saves on staff", "only the middlemen who handle delivery"],
    "Slide 18.");
  mcq(19, 'm', "“By hosting a website, placing advertisements on the internet and satisfying certain legal norms, a business can enter the global market.” Which factor is this?",
    ["Geographical accessibility", "Introduction of new products", "Profit", "Convenience"],
    "Slide 19.");
  mcq(19, 'h', "According to the slides, in traditional commerce it may not be easy to expand the size of the market from…",
    ["regional to national level", "national to regional level", "online to offline", "international to local level"],
    "Slide 19.");
  mcq(20, 'e', "When introducing a new product, e-commerce allows a company to…",
    ["get immediate feedback from customers on the website", "avoid paying middlemen a commission for every sale", "let customers inspect the product physically before launch", "keep the business open 24 × 7 during the launch period"],
    "Slide 20. The other options describe other factors.");
  mcq(20, 'm', "In traditional commerce, before launching a new product, cost is incurred to carry out…",
    ["pilot surveys to understand the taste of customers", "website hosting and online advertising campaigns", "screen-to-face chats with selected online customers", "domain name registration and web page design"],
    "Slide 20.");
  mcq(21, 'm', "E-commerce helps an organization earn greater profits by…",
    ["increasing sales, cutting cost and streamlining operating processes", "allowing customers to physically inspect goods before every purchase", "adding more middlemen between the business and its customers", "opening only for limited hours to reduce staff and running costs"],
    "Slide 21.");
  mcq(21, 'h', "Which costs pull down the profit of an organization in traditional commerce, according to the slides?",
    ["Middlemen, overhead and inventory", "Websites, hosting and domain names", "Online advertising and e-mail", "Electronic images and screen-to-face service"],
    "Slide 21.");
  mcq(22, 'e', "Which factor favours TRADITIONAL commerce because customers can see and touch goods before buying?",
    ["Physical inspection", "Time accessibility", "Cost effective", "Geographical accessibility"],
    "Slide 22.");
  mcq(22, 'e', "When purchasing goods in e-commerce, customers have to rely on…",
    ["electronic images", "physical inspection", "face-to-face service", "pilot surveys"],
    "Slide 22.");
  mcq(23, 'e', "“Round the clock (24 × 7) service” describes which factor?",
    ["Time accessibility", "Time saving", "Geographical accessibility", "Customer interaction"],
    "Slide 23.");
  mcq(23, 'm', "In traditional commerce, the business is open…",
    ["only for a limited time", "round the clock (24 × 7)", "only on the Internet", "only to international customers"],
    "Slide 23.");
  mcq(24, 'e', "In e-commerce, the interaction between the business and the consumer is…",
    ["screen-to-face", "face-to-face", "door-to-door", "phone-to-phone"],
    "Slide 24.");
  mcq(24, 'e', "In traditional commerce, the interaction between the business and the consumer is…",
    ["face-to-face", "screen-to-face", "screen-to-screen", "machine-to-machine"],
    "Slide 24.");
  mcq(25, 'm', "Why do more frauds take place in e-commerce transactions?",
    ["Lack of physical presence in markets and unclear legal issues give loopholes", "Customers can physically inspect goods, which makes it easy to swap them for fakes", "There are too many middlemen online who can change the price of every product", "Businesses are open only for limited hours, so nobody checks the orders at night"],
    "Slide 25.");
  mcq(25, 'm', "Why is fraud comparatively less in traditional commerce?",
    ["There is personal interaction between the buyer and the seller", "Prices in physical shops are always lower than prices online", "Shops are open round the clock, so problems are fixed quickly", "Customers rely on electronic images that are carefully checked"],
    "Slide 25.");
  mcq(25, 'e', "According to the slides, people generally fear giving ___ information online.",
    ["credit card", "e-mail", "domain name", "product review"],
    "Slide 25.");

  /* ---------- Section B: fill in the blanks ---------- */
  fill(4, 'e', "[[E-commerce|ecommerce|electronic commerce|ec]] is the use of Internet, Web and mobile apps to digitally enable commercial transactions between and among [[organizations|organisations|organization|organisation|businesses]] and [[individuals|individual|people|consumers]].",
    "Slide 4.", { set: [1, 2] });
  fill(4, 'e', "Commercial transactions include the exchange of [[money]] across organizational boundary, in exchange for goods and services.", "Slide 4.");
  fill(4, 'm', "Commercial transactions include the exchange of money in exchange for [[goods|products]] and [[services|service]].", "Slide 4.", { set: true });
  fill(5, 'm', "E-commerce (EC) is where business transactions take place via [[telecommunications|telecommunication]] networks, especially the internet.", "Slide 5.");
  fill(5, 'e', "E-commerce (EC) is about doing business [[electronically]].", "Slide 5.");
  fill(5, 'm', "E-commerce (EC) is defined as the conduct of a [[financial]] transaction by electronic means.", "Slide 5.");
  fill(5, 'm', "E-commerce describes the buying and selling of products, services, and [[information]] via computer networks including the Internet.", "Slide 5.");
  fill(7, 'e', "[[E-commerce|ecommerce|electronic commerce]] primarily involves transactions that cross firm boundaries.", "Slide 7.");
  fill(6, 'e', "[[E-business|ebusiness|electronic business]] primarily involves the application of digital technologies to business processes within the firm.", "Slide 6.");
  fill(6, 'e', "An example of e-business is online [[inventory control|inventory]].", "Slide 6.");
  fill(9, 'e', "The [[Internet]] is the worldwide network of computer networks built on common standards.", "Slide 9.");
  fill(9, 'm', "The Internet is a worldwide network of computer networks built on common [[standards|standard]].", "Slide 9.");
  fill(9, 'h', "The Internet can measure growth by the number of Internet [[hosts|host]] with [[domain names|domain name|domains]].", "Slide 9.");
  fill(9, 'm', "Services of the Internet include the Web, [[e-mail|email|mail]], and [[file transfers|file transfer]].", "Slide 9.", { set: true });
  fill(10, 'e', "The [[Web|world wide web|www]] provides access to Web pages.", "Slide 10.");
  fill(10, 'e', "Web pages are created in a language called [[HTML|hypertext markup language]].", "Slide 10.");
  fill(10, 'm', "HTML stands for [[HyperText Markup Language]].", "Slide 10.");
  fill(10, 'm', "The World Wide Web is one of the most popular [[services|service]] that runs on the Internet infrastructure.", "Slide 10.");
  fill(11, 'm', "Web 2.0 refers to user-centered applications and [[social media]] technologies.", "Slide 11.");
  fill(11, 'm', "With [[Web 1.0|web1.0|web one]], most websites consisted of static HTML pages.", "Slide 11.");
  fill(11, 'h', "Features of Web 2.0 include user-generated content and communication, highly interactive social communities, and large [[audiences|audience]].", "Slide 11.");
  fill(12, 'e', "The [[mobile platform|mobile]] enables access to the Internet via wireless networks or cell-phone service.", "Slide 12.");
  fill(12, 'm', "Mobile devices include [[tablets|tablet]] and [[smartphones|smartphone|smart phones|mobile phones]].", "Slide 12.", { set: true });
  fill(12, 'm', "The mobile platform is the most [[recent|new|latest]] development in Internet infrastructure.", "Slide 12.");
  fill(13, 'm', "E-commerce technology is different and more [[powerful]] than previous technologies.", "Slide 13.");
  fill(13, 'e', "E-commerce brings [[fundamental]] changes to commerce.", "Slide 13.");
  fill(16, 'm', "E-commerce is cost effective because the cost incurred on [[middlemen|middleman|middle men|intermediaries]] is eliminated.", "Slide 16.");
  fill(20, 'h', "In traditional commerce, cost has to be incurred to carry out [[pilot surveys|pilot survey|surveys]] to understand the taste of the customers.", "Slide 20.");
  fill(22, 'm', "When purchasing goods in e-commerce, customers have to rely on [[electronic images|electronic image|images]].", "Slide 22.");
  fill(23, 'e', "Round the clock ([[24 x 7|24x7|24/7|24 7|247]]) service is available in e-commerce.", "Slide 23.");
  fill(24, 'e', "In traditional commerce the interaction is “face-to-face”; in e-commerce it is “[[screen-to-face|screen to face]]”.", "Slide 24.");
  fill(24, 'e', "In traditional commerce, the interaction between the business and the consumer is “[[face-to-face|face to face]]”.", "Slide 24.");
  fill(25, 'm', "People generally fear to give [[credit card|credit-card|card]] information online.", "Slide 25.");
  fill(21, 'h', "E-commerce helps the organization enjoy greater profits by increasing sales, cutting cost and [[streamlining]] operating processes.", "Slide 21.");

  /* ---------- Section C: true / false ---------- */
  tf([9, 10], 'e', "The Web and the Internet are the same thing.", false, "False. The Web is one service that runs on the Internet.");
  tf(11, 'e', "With Web 1.0, most websites consisted of static HTML pages.", true, "True. Web 2.0 brought user-generated, interactive content.");
  tf(6, 'e', "E-business primarily involves the application of digital technologies to business processes within the firm.", true, "True. Example: online inventory control.");
  tf(6, 'm', "Online inventory control is an example of e-commerce.", false, "False. It is an e-business example (inside the firm).");
  tf(22, 'e', "In e-commerce, customers can physically inspect goods before buying them.", false, "False. They rely on electronic images.");
  tf(25, 'e', "Fraud is comparatively less in traditional commerce because there is personal interaction between buyer and seller.", true, "True.");
  tf(19, 'm', "It is easier to expand from a regional to an international market in traditional commerce than in e-commerce.", false, "False. In e-commerce a business can host a website, advertise online, satisfy legal norms and enter the global market.");
  tf(9, 'e', "Services of the Internet include the Web, e-mail and file transfers.", true, "True.");
  tf(21, 'm', "E-commerce increases profit by increasing sales, cutting cost and streamlining operating processes.", true, "True.");
  tf(18, 'm', "E-commerce provides convenience only to customers, not to businesses.", false, "False. It provides convenience to both customers and the business.");
  tf(12, 'e', "The mobile platform enables access to the Internet via wireless networks or cell-phone service.", true, "True.");
  tf(20, 'm', "Introducing a new product is faster and cheaper in traditional commerce than in e-commerce.", false, "False. Online, a product can be introduced on the website with immediate customer feedback.");
  tf(10, 'm', "HTML pages can contain text, graphics, animations, music, videos and other objects.", true, "True.");
  tf(16, 'h', "In e-commerce there is a direct link between the business and the customer, so the cost of middlemen is eliminated.", true, "True.");

  /* ---------- Section D: short answer ---------- */
  def(4, 'e', 2, "Define e-commerce.",
    [["Uses the Internet, the Web and mobile apps", "internet", "web", "mobile app"],
     ["To digitally enable commercial transactions between and among organizations and individuals", "transaction", "organization", "organisation", "individual"]],
    "E-commerce is the use of the Internet, the Web and mobile apps to digitally enable commercial transactions between and among organizations and individuals.");
  def(6, 'e', 2, "Define e-business and give one example.",
    [["Application of digital technologies to business processes within the firm", "within the firm", "inside the firm", "business process", "internal"],
     ["Example: online inventory control", "inventory"]],
    "E-business primarily involves the application of digital technologies to business processes within the firm, using information systems under the firm's control. Example: online inventory control.");
  def(9, 'e', 2, "Define the Internet.",
    [["Worldwide network of computer networks", "worldwide", "world wide", "network of computer", "network of network"],
     ["Built on common standards", "common standard", "standards"]],
    "The Internet is a worldwide network of computer networks built on common standards.");
  def(10, 'm', 2, "What is the World Wide Web? What language are Web pages written in?",
    [["A popular service that runs on the Internet and provides access to Web pages", "service", "web page"],
     ["Web pages are created in HTML (HyperText Markup Language)", "html", "hypertext"]],
    "The World Wide Web is one of the most popular services that runs on the Internet infrastructure and provides access to Web pages. Web pages are created in HTML (HyperText Markup Language).");
  def(12, 'e', 2, "Define the mobile platform.",
    [["Most recent development in Internet infrastructure", "recent", "infrastructure"],
     ["Access to the Internet via wireless networks or cell-phone service (tablets, smartphones)", "wireless", "cell phone", "cellphone", "smartphone", "tablet"]],
    "The mobile platform is the most recent development in Internet infrastructure. It enables access to the Internet via wireless networks or cell-phone service, using devices such as tablets and smartphones.");
  list(15, 'm', 4, "List ten factors that can be used to differentiate between e-commerce and traditional commerce.",
    [["Cost effective", "cost"], ["Time saving", "time saving", "saving time", "saves time", "time save"], ["Convenience", "convenien"],
     ["Geographical accessibility", "geograph"], ["Introduction of new products", "new product", "introduc"], ["Profit", "profit"],
     ["Physical inspection", "physical", "inspect"], ["Time accessibility", "time accessib", "24x7", "24 x 7", "24 7", "round the clock"],
     ["Customer interaction", "interact"], ["Fraud", "fraud"]],
    { explain: "Slide 15." });
  list(11, 'e', 3, "List the three features of Web 2.0.",
    [["User-generated content and communication", "user generated", "generated content", "user content"],
     ["Highly interactive, social communities", "interactive", "communit"], ["Large audiences", "audience"]],
    { explain: "Slide 11." });
  list(11, 'e', 3, "Give three examples of Web 2.0 technologies.",
    [["Twitter (X)", "twitter", "=x"], ["YouTube", "youtube", "you tube"], ["Instagram", "instagram"], ["Wikipedia", "wikipedia"]],
    { n: 3, explain: "Slide 11: Twitter (X), YouTube, Instagram, Wikipedia." });
  list(13, 'e', 2, "List the two reasons for studying e-commerce.",
    [["E-commerce technology is different and more powerful than previous technologies", "powerful", "different"],
     ["E-commerce brings fundamental changes to commerce", "fundamental", "change"]],
    { explain: "Slide 13." });
  list(9, 'e', 3, "List three services of the Internet named on the slides.",
    [["The Web", "web", "www"], ["E-mail", "email", "e mail"], ["File transfers", "file"]],
    { explain: "Slide 9." });
  list([22, 25], 'm', 2, "Name the two factors in which traditional commerce does better than e-commerce.",
    [["Physical inspection", "physical", "inspect"], ["Fraud", "fraud"]],
    { explain: "Slides 22 and 25." });

  /* ---------- Section E: explain ---------- */
  exp([4, 6, 7], 'e', 5, "Define e-commerce and describe how it differs from e-business.",
    [["Uses the Internet, Web and mobile apps", "internet", "mobile"],
     ["Digitally enabled commercial transactions (exchange of money for goods and services)", "transaction", "money", "commercial"],
     ["Between and among organizations and individuals", "organization", "organisation", "individual"],
     ["E-commerce involves transactions that cross firm boundaries", "boundar", "cross"],
     ["E-business applies digital technologies to processes within the firm (e.g. online inventory control)", "within", "inside", "internal", "inventory"]],
    "E-commerce is the use of the Internet, the Web and mobile apps to digitally enable commercial transactions between and among organizations and individuals. Commercial transactions are the exchange of money across organizational boundaries in exchange for goods and services, so e-commerce involves transactions that cross firm boundaries. E-business, by contrast, primarily involves the application of digital technologies to business processes within the firm, using information systems under the firm's control, for example online inventory control.");
  exp([15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 'h', 5, "List ten factors that can be used to differentiate between e-commerce and traditional commerce, then explain three of these factors in detail.",
    [["Cost effective: traditional commerce pays middlemen; e-commerce has a direct link to the customer", "middlem", "direct link"],
     ["Time saving: a transaction is completed in a few minutes online", "few minutes", "minutes"],
     ["Convenience: browse catalogues and compare prices anytime, anywhere", "catalog", "compare price", "anywhere"],
     ["Geographical accessibility: easy to expand from regional to international market", "regional", "international", "global market"],
     ["Introduction of new products: immediate customer feedback instead of costly pilot surveys", "feedback", "pilot"],
     ["Profit: more sales, lower cost, streamlined processes", "streamlin", "increasing sales", "overhead"],
     ["Physical inspection: e-commerce relies on electronic images", "electronic image", "image"],
     ["Time accessibility: traditional shops have limited hours; e-commerce is 24 × 7", "limited time", "24", "round the clock"],
     ["Customer interaction: face-to-face vs screen-to-face", "face to face", "screen"],
     ["Fraud: cyber fraud, fear of giving card details, unclear legal issues", "credit card", "legal", "loophole", "cyber"]],
    "Ten factors: cost effective, time saving, convenience, geographical accessibility, introduction of new products, profit, physical inspection, time accessibility, customer interaction, fraud. Cost effective: in traditional commerce a cost is incurred for middlemen; in e-commerce this is eliminated because there is a direct link between the business and the customer. Time accessibility: a traditional business is open only for a limited time, while e-commerce offers round the clock (24 x 7) service. Physical inspection: in traditional commerce goods can be physically inspected before purchase; in e-commerce customers rely on electronic images.",
    { need: 3, list: { label: "Lists the ten factors", weight: 0.4, items: [["Cost effective", "cost"], ["Time saving", "time saving", "saving time"], ["Convenience", "convenien"], ["Geographical accessibility", "geograph"], ["Introduction of new products", "new product", "introduc"], ["Profit", "profit"], ["Physical inspection", "physical", "inspect"], ["Time accessibility", "time accessib"], ["Customer interaction", "interact"], ["Fraud", "fraud"]] } });
  exp(11, 'm', 4, "Provide an explanation of Web 2.0 technologies, followed by three examples of these technologies.",
    [["User-centered applications and social media technologies", "user centered", "user centred", "social media"],
     ["Let people collaborate and share information online (unlike static Web 1.0 pages)", "collaborat", "share", "sharing"],
     ["Features: user-generated content, interactive communities, large audiences", "generated", "interactive", "audience", "communit"],
     ["Examples: Twitter (X), YouTube, Instagram, Wikipedia", "youtube", "instagram", "wikipedia", "twitter"]],
    "Web 2.0 refers to user-centered applications and social media technologies: a new generation of websites that let people collaborate and share information online in ways that were not possible before (with Web 1.0, most websites were static HTML pages). Its features are user-generated content and communication, highly interactive social communities and large audiences. Examples: YouTube, Instagram and Wikipedia (also Twitter/X).");
  exp([9, 10, 11, 12], 'm', 5, "Explain the technological building blocks underlying e-commerce: the Internet, the Web and the mobile platform.",
    [["Internet: worldwide network of computer networks built on common standards", "worldwide", "network of", "common standard"],
     ["Internet services include the Web, e-mail and file transfers; growth measured by hosts with domain names", "e mail", "email", "file transfer", "domain"],
     ["Web: popular service on the Internet that provides access to Web pages", "web page", "service"],
     ["Web pages are written in HTML and can contain text, graphics, video and more", "html"],
     ["Mobile platform: most recent development; Internet access via wireless networks or cell-phone service (tablets, smartphones)", "wireless", "cell phone", "smartphone", "tablet"]],
    "The Internet is a worldwide network of computer networks built on common standards. Its services include the Web, e-mail and file transfers, and its growth can be measured by the number of Internet hosts with domain names. The World Wide Web is one of the most popular services running on the Internet; it provides access to Web pages, which are created in HTML and can contain text, graphics, animations, music and videos. The mobile platform is the most recent development in Internet infrastructure: it enables access to the Internet via wireless networks or cell-phone service using tablets and smartphones.");
  exp([16, 23, 22], 'm', 4, "Compare e-commerce and traditional commerce in terms of cost effectiveness, time accessibility and physical inspection.",
    [["Cost: traditional commerce pays middlemen; e-commerce removes them with a direct link to the customer", "middlem", "direct"],
     ["Time accessibility: traditional shops open for limited hours; e-commerce is 24 × 7", "24", "limited", "round the clock", "hours"],
     ["Physical inspection: possible in traditional commerce; e-commerce relies on electronic images", "image", "inspect", "physical"],
     ["Concludes which side each factor favours (cost and time favour e-commerce; inspection favours traditional)", "favour", "favor", "advantage", "better", "disadvantage"]],
    "Cost effective: in traditional commerce a cost is incurred for middlemen to sell the product; in e-commerce this cost is eliminated because there is a direct link between business and customer, so e-commerce is better. Time accessibility: traditional businesses are open only for a limited time, while e-commerce offers round the clock 24 x 7 service, an advantage for e-commerce. Physical inspection: in traditional commerce goods can be physically inspected before purchase; in e-commerce customers must rely on electronic images, so traditional commerce is better here.");
  exp([24, 25], 'm', 4, "Explain how e-commerce and traditional commerce differ in customer interaction and fraud.",
    [["Traditional commerce: face-to-face interaction", "face to face"],
     ["E-commerce: screen-to-face interaction", "screen"],
     ["E-commerce fraud: people fear giving credit card details; lack of physical presence and unclear legal issues create loopholes", "credit card", "legal", "loophole", "physical presence"],
     ["Traditional commerce has comparatively less fraud because of personal interaction", "personal interaction", "less fraud", "comparatively less"]],
    "Customer interaction: in traditional commerce the interaction between the business and the consumer is face-to-face; in e-commerce it is screen-to-face. Fraud: many cyber frauds take place in e-commerce; people fear giving credit card information, and the lack of physical presence in markets and unclear legal issues give loopholes for fraud. Fraud in traditional commerce is comparatively less because there is personal interaction between buyer and seller.");
});
