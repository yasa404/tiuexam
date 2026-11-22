/* Lecture 2: Introduction to E-commerce II (PDF pages 1-21). */
EC.lecture(2, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp;

  /* ---------- Section A ---------- */
  mcq(5, 'm', "Which is NOT one of the eight unique features of e-commerce technology?",
    ["Physical inspection", "Ubiquity", "Information density", "Social technology"],
    "The eight: ubiquity, global reach, universal standards, information richness, interactivity, information density, personalization/customization, social technology.");
  mcq(5, 'h', "Which of these is NOT a unique feature of e-commerce technology?",
    ["Price discrimination", "Global reach", "Universal standards", "Interactivity"],
    "Price discrimination is a consequence of information density, not one of the eight features.");
  // Ubiquity p6
  mcq(6, 'e', "“Available just about everywhere, at all times” describes which feature?",
    ["Ubiquity", "Global reach", "Interactivity", "Universal standards"], "Slide 6.");
  mcq(6, 'e', "A marketplace extended beyond traditional boundaries and removed from a temporal and geographic location is called a…",
    ["marketspace", "marketplace", "social network", "universal standard"], "Slide 6: ubiquity creates a marketspace.");
  mcq(6, 'e', "In traditional commerce, a marketplace is…",
    ["a physical place you visit in order to transact", "a marketplace removed from a temporal and geographic location", "a website that is available at all times", "a many-to-many model of communication"], "Slide 6.");
  mcq(6, 'm', "According to the ubiquity slide, television and radio typically motivate the consumer to…",
    ["go someplace to make a purchase", "buy immediately from their desktop", "post reviews for other users", "compare all prices in the market"], "Slide 6.");
  mcq(6, 'm', "Ubiquity makes it possible to shop…",
    ["from your desktop, at home, at work, or even from your car", "only inside a physical store", "only during store opening hours", "only from merchants in your own country"], "Slide 6.");
  mcq(21, 'm', "“Customer convenience is enhanced, and shopping costs are reduced” is the business significance of…",
    ["Ubiquity", "Information density", "Global reach", "Social technology"], "Table 1.2.");
  // Global reach p7
  mcq(7, 'e', "Which feature permits commercial transactions to cross cultural and national boundaries far more conveniently and cost effectively than traditional commerce?",
    ["Global reach", "Ubiquity", "Universal standards", "Information richness"], "Slide 7.");
  mcq(7, 'e', "Because of global reach, the potential market size for e-commerce merchants is roughly equal to…",
    ["the size of the world's online population", "the population of the merchant's own city", "the number of the merchant's physical outlets", "the number of national merchants"], "Slide 7.");
  mcq(7, 'm', "In contrast to e-commerce, most traditional commerce is…",
    ["local or regional", "global", "available 24 hours a day", "many-to-many"], "Slide 7.");
  mcq(21, 'm', "“Marketspace includes potentially billions of consumers and millions of businesses worldwide” is the business significance of…",
    ["Global reach", "Ubiquity", "Interactivity", "Personalization"], "Table 1.2.");
  // Universal standards p8
  mcq(8, 'e', "Technical standards for conducting e-commerce that are shared by all nations around the world are called…",
    ["universal standards", "global reach", "information density", "price transparency"], "Slide 8.");
  mcq(8, 'm', "In contrast to e-commerce, most traditional commerce technologies…",
    ["differ from one nation to the next", "are shared by all nations", "are free to use worldwide", "use the same Internet standards"], "Slide 8.");
  mcq(21, 'm', "“There is a common, inexpensive, global technology foundation for businesses to use” is the business significance of…",
    ["Universal standards", "Global reach", "Social technology", "Information richness"], "Table 1.2.");
  // Richness p9-10
  mcq(9, 'e', "Information richness refers to…",
    ["the complexity and content of a message", "the total amount and quality of information available to all market participants", "two-way communication between merchant and consumer", "a many-to-many model of mass communications"], "Slide 9.");
  mcq(9, 'm', "Why do traditional markets and retail stores have great information richness?",
    ["They can provide personal, face-to-face service when making a sale", "They are available just about everywhere, at all times", "Their prices are transparent to every customer", "They use universal technical standards"], "Slide 9.");
  mcq(10, 'm', "Why can e-commerce offer more information richness than printing presses, radio and television?",
    ["It is interactive and can adjust the message to individual users", "It always has lower prices", "It is regulated by universal standards", "It removes all middlemen"], "Slide 10.");
  mcq(10, 'h', "On the information richness slide, chatting with an online salesperson is said to come very close to…",
    ["the customer experience in a small retail shop", "watching a television advertisement", "reading a printed catalogue", "posting on a community forum"], "Slide 10.");
  mcq(10, 'm', "The richness enabled by e-commerce technologies allows merchants to market and sell…",
    ["“complex” goods and services", "only simple, low-cost goods", "only goods that do not need explanation", "only local services"], "Slide 10.");
  mcq(21, 'm', "“Video, audio, and text marketing messages are integrated into a single marketing message and consuming experience” describes the business significance of…",
    ["Richness", "Information density", "Interactivity", "Universal standards"], "Table 1.2.");
  // Interactivity p11-12
  mcq(11, 'e', "Technology that allows two-way communication between merchant and consumer is called…",
    ["interactivity", "ubiquity", "information density", "global reach"], "Slide 11.");
  mcq(11, 'm', "Interactivity enables the merchant to engage a consumer in ways similar to…",
    ["a face-to-face experience, but on a much more massive, global scale", "a television advertisement", "a printed newspaper", "a one-way radio message"], "Slide 11.");
  mcq(12, 'e', "Search boxes that autofill as the user types are an example of…",
    ["interactivity", "ubiquity", "universal standards", "price transparency"], "Slide 12.");
  mcq(12, 'm', "Forms that notify the user of a problem as they are being filled out are an example of…",
    ["interactivity", "customization", "information density", "global reach"], "Slide 12.");
  mcq(12, 'm', "Like and share buttons on social networks are listed on the slides as examples of…",
    ["interactivity", "price discrimination", "universal standards", "information density"], "Slide 12: social networks with social sharing functionality.");
  mcq(12, 'h', "Which is NOT one of the examples of interactivity listed on the slides?",
    ["Coupons and loyalty programs", "Comment features", "Community forums", "Search boxes that autofill"], "Coupons and loyalty programs are price-discrimination examples.");
  mcq(21, 'm', "Which feature makes the consumer a “co-participant” in the process of delivering goods to the market?",
    ["Interactivity", "Ubiquity", "Universal standards", "Information density"], "Table 1.2.");
  // Information density p13-14
  mcq(13, 'e', "Information density is…",
    ["the total amount and quality of information available to all market participants", "the complexity and content of a single message", "two-way communication between merchant and consumer", "the targeting of messages to specific individuals"], "Slide 13.");
  mcq(13, 'e', "E-commerce technologies ___ information density.",
    ["vastly increase", "slightly reduce", "do not affect", "completely remove"], "Slide 13.");
  mcq(14, 'e', "Price transparency refers to…",
    ["the ease with which consumers can find out the variety of prices in a market", "the ability of consumers to discover the actual costs merchants pay for products", "selling the same goods to different groups at different prices", "the complexity and content of a message"], "Slide 14.");
  mcq(14, 'e', "Cost transparency refers to…",
    ["the ability of consumers to discover the actual costs merchants pay for products", "the ease of finding the variety of prices in a market", "charging different groups different prices", "the total amount of information available"], "Slide 14.");
  mcq(14, 'm', "A shopper uses a comparison website to see what every online store charges for the same camera. This illustrates…",
    ["price transparency", "cost transparency", "price discrimination", "customization"], "Slide 14: the ease of finding the variety of prices in a market.");
  mcq(14, 'h', "A shopper finds out how much a retailer actually paid the manufacturer for a phone. This illustrates…",
    ["cost transparency", "price transparency", "price discrimination", "information richness"], "Slide 14.");
  mcq(14, 'h', "Which is NOT one of the business consequences of growing information density?",
    ["Customization", "Price transparency", "Cost transparency", "Price discrimination"], "Slide 14: the three consequences are price transparency, cost transparency and price discrimination.");
  mcq(21, 'm', "“Information becomes plentiful, cheap, and accurate” is the business significance of…",
    ["Information density", "Information richness", "Interactivity", "Ubiquity"], "Table 1.2.");
  mcq(21, 'h', "“Information processing, storage, and communication costs drop dramatically, while currency, accuracy, and timeliness improve greatly” describes…",
    ["Information density", "Global reach", "Social technology", "Personalization"], "Table 1.2.");
  // Price discrimination p14-16
  mcq(14, 'e', "Selling the same goods, or nearly the same goods, to different targeted groups at different prices is called…",
    ["price discrimination", "price transparency", "cost transparency", "personalization"], "Slide 14.");
  mcq(14, 'm', "Price discrimination aims to…",
    ["maximize sales and profits", "make all prices equal", "reveal the merchant's costs", "remove middlemen"], "Slide 14.");
  mcq(15, 'm', "Price discrimination charges customers different prices for the same product based on…",
    ["what the seller thinks they can get the customer to agree to", "the actual cost the merchant paid", "the customer's country only", "the universal standards of the Internet"], "Slide 15.");
  mcq(15, 'e', "Coupons, age discounts and loyalty programs are examples of…",
    ["price discrimination", "price transparency", "cost transparency", "customization"], "Slide 15.");
  mcq(15, 'e', "Which industries are named on the slides as using price discrimination strategies?",
    ["The airline industry and the arts/entertainment industry", "The furniture and clothing industries", "The metals and mining industries", "The banking and insurance industries"], "Slide 15.");
  mcq(16, 'e', "Airline tickets bought several months in advance usually cost less than tickets bought at the last minute. This illustrates…",
    ["price discrimination", "ubiquity", "information richness", "social technology"], "Slide 16.");
  mcq(16, 'm', "When demand for a particular flight is high, airlines…",
    ["raise ticket prices", "reduce ticket prices", "cancel the flight", "keep the price fixed"], "Slide 16.");
  mcq(16, 'm', "When tickets for a flight are not selling well, the airline…",
    ["reduces the cost of available tickets", "raises the ticket prices", "stops selling online", "only sells to loyalty members"], "Slide 16.");
  mcq(16, 'h', "Why do flights home late on Sunday tend to cost more than flights leaving early Sunday morning?",
    ["Many passengers prefer flying home late on Sunday", "Late flights cost the airline more fuel", "Early flights are paid for by advertisers", "Late flights are only sold to business travellers"], "Slide 16.");
  mcq(15, 'm', "A cinema charges a lower ticket price to seniors over 65 for the same film. This is an example of…",
    ["price discrimination", "cost transparency", "customization", "global reach"], "Slide 15: specific discounts such as age discounts.");
  // Personalization and customization p17-19
  mcq(17, 'e', "Targeting marketing messages to specific individuals by adjusting the message to a person's name, interests and past purchases is…",
    ["personalization", "customization", "interactivity", "price discrimination"], "Slide 17.");
  mcq(19, 'e', "Changing the delivered product or service based on a user's preferences or prior behaviour is…",
    ["customization", "personalization", "information richness", "price transparency"], "Slide 19.");
  mcq(17, 'm', "Creating personalized product recommendations is described on the slides as an effective strategy for…",
    ["companies with an e-commerce site", "companies with no website", "governments regulating prices", "middlemen and wholesalers"], "Slide 17.");
  mcq(17, 'h', "According to the slides, “customers also buy” suggestions are based on…",
    ["other customers' past purchase histories when they bought a similar product", "the actual cost the merchant paid", "the customer's location only", "random products the merchant wants to sell"], "Slide 17.");
  mcq(18, 'm', "Sending a post-purchase email that includes “customers also buy” recommendations is an example of…",
    ["personalization", "customization", "universal standards", "global reach"], "Slide 18.");
  mcq(18, 'h', "According to the slides, a more proactive way to show recommendations is to show them…",
    ["at checkout before the customer completes their purchase", "only in printed catalogues", "a year after the purchase", "only to new visitors"], "Slide 18.");
  mcq(19, 'e', "Customized T-shirts and bags with unique materials and colours are slide examples of…",
    ["customization", "personalization", "ubiquity", "price transparency"], "Slide 19.");
  mcq(19, 'm', "Which industry is named on the slides as also benefiting from product customization (carpets, tables, kitchen accessories)?",
    ["The furniture industry", "The airline industry", "The arts/entertainment industry", "The newspaper industry"], "Slide 19.");
  mcq([17, 19], 'h', "What is the key difference between personalization and customization?",
    ["Personalization adjusts the marketing message; customization changes the product or service", "Personalization changes the product; customization adjusts the message", "Personalization is offline; customization is online", "There is no difference; they are the same thing"], "Slides 17 and 19.");
  mcq(17, 'm', "A website greets a returning user by name and shows products related to their last purchase. This is…",
    ["personalization", "customization", "cost transparency", "universal standards"], "Slide 17.");
  mcq(21, 'm', "“Enables personalization of marketing messages and customization of products and services based on individual characteristics” is the business significance of…",
    ["Personalization/customization", "Interactivity", "Social technology", "Information richness"], "Table 1.2.");
  // Social technology p20
  mcq(20, 'e', "Social technology provides a ___ model of mass communications.",
    ["many-to-many", "one-to-many", "one-to-one", "many-to-one"], "Slide 20.");
  mcq(20, 'e', "“Millions of users are able to generate content consumed by millions of other users” describes…",
    ["social technology", "global reach", "information density", "universal standards"], "Slide 20.");
  mcq(21, 'm', "“Enables user content creation and distribution and supports development of social networks” is the business significance of…",
    ["Social technology", "Interactivity", "Ubiquity", "Richness"], "Table 1.2.");
  // Applied
  mcq(7, 'm', "A small shop in Erbil sells handmade goods online to customers in Europe and Asia. Which unique feature does this mainly show?",
    ["Global reach", "Information density", "Price discrimination", "Customization"], "Slide 7: transactions across cultural and national boundaries.");
  mcq(10, 'h', "A product page combines a demo video, audio commentary and detailed text in one marketing message. Which unique feature does this mainly show?",
    ["Information richness", "Universal standards", "Global reach", "Information density"], "Slides 9-10 and Table 1.2.");
  mcq(21, 'm', "“The technology reduces information costs and raises quality” describes which e-commerce technology dimension?",
    ["Information density", "Global reach", "Interactivity", "Social technology"], "Table 1.2.");
  mcq(21, 'm', "“The technology works through interaction with the user” describes which dimension?",
    ["Interactivity", "Richness", "Ubiquity", "Information density"], "Table 1.2.");

  /* ---------- Section B ---------- */
  fill(13, 'e', "Information [[density]] is the total amount and quality of information available to all market participants.", "Slide 13.");
  fill(9, 'e', "Information [[richness]] refers to the complexity and content of a message.", "Slide 9.");
  fill(14, 'e', "Selling the same goods to different targeted groups at different prices is called [[price discrimination]].", "Slide 14.");
  fill(6, 'e', "Ubiquity creates a [[marketspace|market space]]: a marketplace extended beyond traditional boundaries.", "Slide 6.");
  fill(20, 'm', "Social technology provides a [[many-to-many|many to many]] model of mass communications.", "Slide 20.");
  fill(14, 'm', "[[Cost]] transparency refers to the ability of consumers to discover the actual costs merchants pay for products.", "Slide 14.");
  fill(14, 'm', "[[Price]] transparency refers to the ease with which consumers can find out the variety of prices in a market.", "Slide 14.");
  fill(6, 'e', "[[Ubiquity]] means e-commerce is available just about everywhere, at all times.", "Slide 6.");
  fill(7, 'e', "[[Global reach]] permits commercial transactions to cross cultural and national boundaries far more conveniently and cost effectively than traditional commerce.", "Slide 7.");
  fill(8, 'm', "The technical standards for conducting e-commerce are [[universal standards|universal]]: they are shared by all nations around the world.", "Slide 8.");
  fill(11, 'e', "[[Interactivity]] is technology that allows for two-way communication between merchant and consumer.", "Slide 11.");
  fill(17, 'e', "[[Personalization|personalisation]] is the targeting of marketing messages to specific individuals by adjusting the message to a person's name, interests, and past purchases.", "Slide 17.");
  fill(19, 'e', "[[Customization|customisation]] is changing the delivered product or service based on a user's preferences or prior behavior.", "Slide 19.");
  fill(6, 'm', "In traditional commerce, a [[marketplace|market place]] is a physical place you visit in order to transact.", "Slide 6.");
  fill(7, 'm', "Because of global reach, the potential market size for e-commerce merchants is roughly equal to the size of the world's online [[population]].", "Slide 7.");
  fill(7, 'm', "Most traditional commerce is [[local]] or [[regional]].", "Slide 7.", { set: true });
  fill(9, 'm', "Traditional markets and retail stores have great richness because they provide personal, [[face-to-face|face to face]] service when making a sale.", "Slide 9.");
  fill(10, 'h', "The richness enabled by e-commerce technologies allows retail and service merchants to market and sell [[complex]] goods and services.", "Slide 10.");
  fill(12, 'm', "An example of interactivity is search boxes that [[autofill|auto fill|auto-fill|autocomplete]] as the user types.", "Slide 12.");
  fill(12, 'h', "Social networks with social sharing functionality such as [[like]] and [[share]] buttons enable consumers to interact with merchants and other users.", "Slide 12.", { set: true });
  fill(14, 'm', "Price discrimination sells the same goods to different targeted groups at different prices in order to maximize [[sales|sale]] and [[profits|profit]].", "Slide 14.", { set: true });
  fill(15, 'm', "Examples of price discrimination include issuing [[coupons|coupon]], applying specific discounts, and creating [[loyalty programs|loyalty programmes|loyalty program]].", "Slide 15.", { set: true });
  fill(16, 'e', "Consumers buying airline tickets several months in [[advance]] typically pay less than consumers purchasing at the last minute.", "Slide 16.");
  fill(15, 'h', "Industries such as the airline industry and the [[arts/entertainment|arts and entertainment|entertainment|arts]] industry use price discrimination strategies.", "Slide 15.");
  fill(6, 'h', "A marketspace is a marketplace removed from a [[temporal]] and [[geographic|geographical]] location.", "Slide 6.", { set: true });
  fill(11, 'h', "Interactivity engages a consumer in ways similar to a face-to-face experience, but on a much more massive, [[global]] scale.", "Slide 11.");
  fill(21, 'h', "Universal standards give businesses a common, [[inexpensive|cheap|low cost]], global technology foundation.", "Table 1.2.");
  fill(21, 'h', "Interactivity makes the consumer a [[co-participant|co participant|participant]] in the process of delivering goods to the market.", "Table 1.2.");
  fill(13, 'e', "E-commerce technologies vastly [[increase|increases]] information density.", "Slide 13.");
  fill(18, 'm', "After a purchase, a merchant can send a [[post-purchase|post purchase]] email that includes “customers also buy” recommendations.", "Slide 18.");
  fill(20, 'm', "With social technology, millions of users are able to generate [[content]] consumed by millions of other users.", "Slide 20.");

  /* ---------- Section C ---------- */
  tf(6, 'e', "In traditional commerce, a marketplace is a physical place you visit in order to transact.", true, "True. E-commerce creates a marketspace instead.");
  tf(7, 'e', "Most traditional commerce is local or regional.", true, "True. It involves local merchants or national merchants with local outlets.");
  tf(8, 'e', "Traditional commerce technologies are the same in every nation.", false, "False. They differ from one nation to the next; Internet standards are universal.");
  tf(10, 'm', "E-commerce can offer more information richness than TV and radio because it is interactive and can adjust the message to individual users.", true, "True.");
  tf([17, 19], 'm', "Customization means adjusting the marketing message to a person's name.", false, "False. That is personalization. Customization changes the product.");
  tf(16, 'm', "Flights home late on Sunday tend to be cheaper than flights leaving early Sunday morning.", false, "False. Late-Sunday flights are more expensive because many passengers prefer them.");
  tf(21, 'm', "Information density reduces information costs and raises quality.", true, "True.");
  tf(9, 'm', "Traditional retail stores have great information richness because they offer personal, face-to-face service.", true, "True.");
  tf(11, 'e', "Interactivity allows only one-way communication from the merchant to the consumer.", false, "False. Interactivity is two-way communication.");
  tf(15, 'e', "Price discrimination means charging every customer exactly the same price.", false, "False. It charges different groups different prices for the same product.");
  tf(20, 'e', "Social technology lets millions of users generate content consumed by millions of other users.", true, "True. A many-to-many model.");
  tf(7, 'm', "Because of global reach, the potential market for an e-commerce merchant is limited to its local region.", false, "False. It is roughly the world's online population.");
  tf(14, 'h', "Cost transparency refers to the ease with which consumers can find out the variety of prices in a market.", false, "False. That is price transparency. Cost transparency is discovering the merchant's actual costs.");

  /* ---------- Section D ---------- */
  list(5, 'e', 4, "List the eight unique features of e-commerce technology.",
    [["Ubiquity", "ubiquit", "ubiqu"], ["Global reach", "global"], ["Universal standards", "universal", "standard"], ["Information richness", "rich"],
     ["Interactivity", "interactiv"], ["Information density", "densit", "dense"], ["Personalization and customization", "personali", "customi"], ["Social technology", "social"]],
    { explain: "Slide 5." });
  list(14, 'e', 3, "List the three business consequences of the growth in information density.",
    [["Price transparency", "price transparen"], ["Cost transparency", "cost transparen"], ["Price discrimination", "discrimin"]],
    { explain: "Slide 14." });
  list(12, 'm', 3, "List three examples of interactivity given on the slides.",
    [["Comment features", "comment"], ["Community forums", "forum"], ["Social networks with like and share buttons", "like", "share", "social network"],
     ["Forms that notify the user of a problem while being filled out", "form"], ["Search boxes that autofill as the user types", "autofill", "auto fill", "search", "autocomplete"]],
    { n: 3, explain: "Slide 12." });
  list(15, 'e', 3, "List three examples of price discrimination.",
    [["Issuing coupons", "coupon"], ["Specific discounts (e.g. age discounts)", "discount", "age"], ["Loyalty programs", "loyal"]],
    { explain: "Slide 15." });
  def(6, 'e', 2, "Define ubiquity.",
    [["Available just about everywhere, at all times", "everywhere", "all times", "anytime", "any time"],
     ["Creates a marketspace: a marketplace removed from a temporal and geographic location", "marketspace", "market space", "temporal", "geographic"]],
    "Ubiquity means e-commerce technology is available just about everywhere, at all times. The result is a marketspace: a marketplace extended beyond traditional boundaries and removed from a temporal and geographic location.");
  def(13, 'e', 2, "Define information density and name one of its business consequences.",
    [["Total amount and quality of information available to all market participants", "amount", "quality", "participants"],
     ["Consequence: price transparency, cost transparency or price discrimination", "transparen", "discrimin"]],
    "Information density is the total amount and quality of information available to all market participants. One consequence is price transparency: the ease with which consumers can find out the variety of prices in a market.");
  def(14, 'm', 2, "Define price discrimination and give one example.",
    [["Selling the same goods to different targeted groups at different prices (to maximize sales and profits)", "different price", "same good", "same product"],
     ["Example: coupons, age discounts, loyalty programs or airline tickets", "coupon", "discount", "loyal", "airline", "ticket"]],
    "Price discrimination is selling the same goods, or nearly the same goods, to different targeted groups at different prices in order to maximize sales and profits. Example: airline tickets bought months in advance are cheaper than last-minute tickets.");
  def(7, 'e', 2, "Define global reach.",
    [["Lets transactions cross cultural and national boundaries conveniently and cost effectively", "cultural", "national", "boundar"],
     ["Market size roughly equals the world's online population", "online population", "population"]],
    "Global reach permits commercial transactions to cross cultural and national boundaries far more conveniently and cost effectively than in traditional commerce. As a result, the potential market size for e-commerce merchants is roughly equal to the size of the world's online population.");
  def(20, 'e', 2, "Define social technology.",
    [["A many-to-many model of mass communications", "many to many"],
     ["Millions of users generate content consumed by millions of other users", "generate content", "content", "user generated"]],
    "Social technology provides a many-to-many model of mass communications: millions of users are able to generate content consumed by millions of other users.");
  def(8, 'm', 2, "What are universal standards in e-commerce?",
    [["The technical standards of the Internet, and so of e-commerce, are the same", "technical standard", "same"],
     ["They are shared by all nations, unlike traditional commerce technologies which differ by nation", "all nations", "every nation", "nation"]],
    "Universal standards: the technical standards of the Internet are the same everywhere, so the technical standards for conducting e-commerce are universal: they are shared by all nations around the world. Traditional commerce technologies differ from one nation to the next.");

  /* ---------- Section E ---------- */
  exp(6, 'm', 5, "Discuss ubiquity in detail.",
    [["Available just about everywhere, at all times", "everywhere", "all times", "anytime", "any time"],
     ["Shop from desktop, home, work, or even the car", "home", "work", "car", "desktop"],
     ["Traditional marketplace is a physical place you visit to transact", "physical place", "physical", "visit"],
     ["Creates a marketspace removed from a temporal and geographic location", "marketspace", "market space", "temporal", "geographic"],
     ["Significance: customer convenience is enhanced and shopping costs are reduced", "convenien", "shopping cost"]],
    "Ubiquity means e-commerce is available just about everywhere, at all times. You can shop from your desktop, at home, at work, or even from your car. In traditional commerce a marketplace is a physical place you visit in order to transact. E-commerce instead creates a marketspace: a marketplace extended beyond traditional boundaries and removed from a temporal and geographic location. Customer convenience is enhanced and shopping costs are reduced.");
  exp([13, 14], 'm', 5, "Explain information density and its three business consequences.",
    [["Total amount and quality of information available to all market participants", "amount", "quality", "participants"],
     ["Price transparency: easy to find the variety of prices in a market", "price transparen"],
     ["Cost transparency: consumers discover the actual costs merchants pay", "cost transparen"],
     ["Price discrimination: same goods, different prices for different groups", "discrimin"]],
    "Information density is the total amount and quality of information available to all market participants, and e-commerce technologies vastly increase it. Its business consequences are: (1) price transparency, the ease with which consumers can find out the variety of prices in a market; (2) cost transparency, the ability of consumers to discover the actual costs merchants pay for products; and (3) price discrimination, selling the same goods to different targeted groups at different prices to maximize sales and profits.");
  exp([15, 16], 'm', 4, "Explain price discrimination using the airline industry example.",
    [["Different prices for the same product based on what the customer will agree to", "different price", "same product", "agree"],
     ["Tickets bought months in advance are cheaper than last-minute tickets", "advance", "last minute"],
     ["High demand raises prices; poor sales lower prices", "demand"],
     ["Late-Sunday flights cost more than early-Sunday-morning flights", "sunday"]],
    "Price discrimination is a selling strategy that charges customers different prices for the same product or service, based on what the seller thinks they can get the customer to agree to. In the airline industry, tickets bought several months in advance are cheaper than last-minute tickets; when demand for a flight is high the airline raises prices, and when a flight is not selling well it reduces them; and flights home late on Sunday are more expensive than flights leaving early on Sunday morning because many passengers prefer them.");
  exp([17, 18, 19], 'm', 4, "What is the difference between personalization and customization? Give an example of each.",
    [["Personalization targets marketing messages to a person's name, interests and past purchases", "message", "name", "interest", "past purchase"],
     ["Personalization example: product recommendations such as “customers also buy”", "recommend", "also buy"],
     ["Customization changes the delivered product or service based on preferences or prior behaviour", "product", "preference", "prior behav"],
     ["Customization example: custom T-shirts and bags, or furniture such as carpets and tables", "shirt", "bag", "furniture", "carpet", "table"]],
    "Personalization is the targeting of marketing messages to specific individuals by adjusting the message to a person's name, interests and past purchases, for example personalized “customers also buy” product recommendations after a purchase. Customization is changing the delivered product or service based on a user's preferences or prior behavior, for example customized T-shirts and bags with unique materials and colours, or furniture such as carpets and tables.");
  exp([6, 21], 'e', 4, "How does the ubiquity of e-commerce impact consumers?",
    [["Consumers can shop anywhere, at any time", "anywhere", "any time", "anytime", "everywhere"],
     ["No need to travel to a physical marketplace", "travel", "physical", "visit"],
     ["Shopping happens in a marketspace removed from time and place", "marketspace", "market space", "temporal", "geographic"],
     ["Customer convenience increases and shopping costs fall", "convenien", "cost"]],
    "Ubiquity means consumers can shop just about everywhere, at all times: at home, at work, even from the car, instead of having to travel to a physical marketplace. Shopping happens in a marketspace removed from a temporal and geographic location, which enhances customer convenience and reduces shopping costs.");
  exp([5, 6, 7, 8, 9, 11, 13, 17, 20], 'h', 5, "List the eight unique features of e-commerce technology, then discuss two of these features in detail.",
    [["Ubiquity: available everywhere at all times; creates a marketspace", "everywhere", "marketspace", "all times"],
     ["Global reach: crosses cultural and national boundaries; market = world's online population", "cultural", "national boundar", "online population"],
     ["Universal standards: technical standards shared by all nations", "all nations", "shared by"],
     ["Information richness: complexity and content of a message", "complexity"],
     ["Interactivity: two-way communication between merchant and consumer", "two way"],
     ["Information density: total amount and quality of information for all participants", "amount and quality", "participants"],
     ["Personalization/customization: targeted messages and changed products", "name", "preference", "past purchase"],
     ["Social technology: many-to-many communication, user-generated content", "many to many", "generate content"]],
    "The eight unique features are ubiquity, global reach, universal standards, information richness, interactivity, information density, personalization/customization and social technology. Ubiquity: e-commerce is available just about everywhere, at all times, creating a marketspace removed from a temporal and geographic location. Global reach: commercial transactions cross cultural and national boundaries conveniently and cost effectively, so the market is roughly the world's online population.",
    { need: 2, list: { label: "Lists the eight features", weight: 0.4, items: [["Ubiquity", "ubiquit"], ["Global reach", "global"], ["Universal standards", "universal"], ["Information richness", "rich"], ["Interactivity", "interactiv"], ["Information density", "densit"], ["Personalization/customization", "personali", "customi"], ["Social technology", "social"]] } });
  exp([11, 12], 'e', 4, "Explain interactivity and give three examples from the slides.",
    [["Two-way communication between merchant and consumer", "two way", "merchant", "consumer"],
     ["Engages the consumer like face-to-face, but on a massive, global scale", "face to face", "global scale", "massive"],
     ["Examples: comments, forums, like/share buttons", "comment", "forum", "like", "share"],
     ["Examples: forms that flag problems, search boxes that autofill", "form", "autofill", "search"]],
    "Interactivity is technology that allows two-way communication between merchant and consumer, enabling the merchant to engage a consumer in ways similar to a face-to-face experience, but on a much more massive, global scale. Examples: comment features, community forums, social networks with like and share buttons, forms that notify the user of a problem while being filled out, and search boxes that autofill as the user types.");
  exp([9, 10], 'h', 4, "Explain information richness and compare it in traditional commerce and e-commerce.",
    [["Richness is the complexity and content of a message", "complexity", "content"],
     ["Traditional stores have great richness: personal, face-to-face service", "face to face", "personal"],
     ["E-commerce offers more richness than print, radio and TV because it is interactive and adjusts the message to individuals", "interactive", "individual", "radio", "television", "adjust"],
     ["Allows merchants to sell complex goods; e.g. chatting with an online salesperson", "complex", "chat", "salesperson"]],
    "Information richness refers to the complexity and content of a message. Traditional markets and retail stores have great richness because they provide personal, face-to-face service when making a sale. E-commerce technologies can offer considerably more richness than traditional media such as printing presses, radio and television because they are interactive and can adjust the message to individual users; chatting with an online salesperson comes very close to the experience in a small retail shop. This richness lets merchants market and sell complex goods and services.");
});
