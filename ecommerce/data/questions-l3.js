/* Lecture 3: Introduction to E-commerce III (PDF pages 1-41). */
EC.lecture(3, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp;

  /* ---------- Section A ---------- */
  // Types of e-commerce p4-22
  mcq(4, 'e', "Types of e-commerce are distinguished by…",
    ["the nature of the market relationship: who is selling to whom", "the size of the company's website", "the programming language of the website", "the year the company was founded"], "Slide 4.");
  mcq(4, 'm', "According to the slides, mobile and social e-commerce can be looked at as…",
    ["subsets of the other types of e-commerce", "the largest types of e-commerce", "types of e-business inside the firm", "older forms of B2B"], "Slide 4.");
  mcq(10, 'e', "Which is the LARGEST form of e-commerce?",
    ["B2B", "B2C", "C2C", "M-commerce"], "Slide 10.");
  mcq(5, 'e', "Which type of e-commerce are most consumers likely to encounter?",
    ["B2C", "B2B", "C2C", "Social e-commerce"], "Slide 5.");
  mcq(5, 'e', "B2C e-commerce involves…",
    ["businesses selling to consumers", "businesses selling to other businesses", "consumers selling to each other", "the use of wireless digital devices"], "Slide 5.");
  mcq(10, 'e', "B2B e-commerce involves…",
    ["businesses selling to other businesses", "businesses selling to consumers", "consumers selling to each other", "e-commerce enabled by social networks"], "Slide 10.");
  mcq(16, 'e', "C2C e-commerce is…",
    ["a means for consumers to sell to each other", "businesses selling to consumers", "businesses selling to other businesses", "the use of wireless devices for transactions"], "Slide 16.");
  mcq(6, 'e', "Amazon, a general company that sells products to customers, is a slide example of…",
    ["B2C", "B2B", "C2C", "Social e-commerce"], "Slide 6.");
  mcq(7, 'e', "Walmart, an American multinational retail corporation that operates a chain of hypermarkets, is a slide example of…",
    ["B2C", "B2B", "C2C", "M-commerce"], "Slide 7.");
  mcq(8, 'e', "H&M, a Swedish multinational fast-fashion clothing company, is a slide example of…",
    ["B2C", "B2B", "C2C", "M-commerce"], "Slide 8.");
  mcq(11, 'm', "Metalshub, an independent third-party marketplace that serves the metals industry, is an example of…",
    ["B2B", "B2C", "C2C", "Social e-commerce"], "Slide 11.");
  mcq(12, 'm', "Grammarly for Business, built for teams to keep their communication professional and clear, is a slide example of…",
    ["B2B", "B2C", "C2C", "M-commerce"], "Slide 12.");
  mcq(17, 'e', "eBay, an American multinational e-commerce company based in California, is used on the slides as an example of…",
    ["C2C", "B2B", "B2C", "M-commerce"], "Slide 17.");
  mcq(18, 'e', "Etsy, a global online marketplace where people make, sell, buy and collect handmade and unique items, is an example of…",
    ["C2C", "B2B", "B2C", "Social e-commerce"], "Slide 18.");
  mcq(16, 'm', "In C2C e-commerce, the consumer relies on the ___ to provide catalog, search engine and transaction clearing capabilities.",
    ["market maker", "wholesaler", "business organization", "manufacturer"], "Slide 16.");
  mcq(16, 'm', "In C2C e-commerce, who prepares the product for market and places it for auction or sale?",
    ["The consumer (seller)", "The market maker", "The wholesaler", "The business organization"], "Slide 16.");
  mcq(16, 'h', "In C2C e-commerce, the market maker provides catalog, search engine and transaction clearing so that products can be…",
    ["easily displayed, discovered, and paid for", "manufactured and packaged", "bought in bulk by wholesalers", "physically inspected before purchase"], "Slide 16.");
  mcq(13, 'e', "In the B2B model, who orders products in bulk from the business organization's website?",
    ["The wholesaler", "The final customer", "The market maker", "The middleman's bank"], "Slide 13.");
  mcq(13, 'm', "In the B2B model, after the wholesaler receives the products, the wholesaler…",
    ["sells those products at a higher price to its customers", "returns them to the business organization", "auctions them to other wholesalers only", "uses them inside its own firm only"], "Slide 13.");
  mcq(9, 'm', "In the B2C business model figure, the customer sends orders to…",
    ["the website", "the wholesaler", "another customer", "the market maker"], "Slide 9: Customer → Orders → Website.");
  mcq(9, 'h', "In the B2C business model figure, “order processing” takes place between…",
    ["the website and the business organization", "the customer and the wholesaler", "two customers", "the wholesaler and the website"], "Slide 9.");
  mcq(9, 'm', "In the B2C business model figure, who supplies the products to the customer?",
    ["The business organization", "The wholesaler", "Another customer", "The website visitor"], "Slide 9.");
  mcq([14, 15], 'h', "In the numbered B2B figure (1 Order, 2 Order processing, 3 Supplies, 4 Sells), what happens in step 3?",
    ["The business organization supplies the products to the wholesaler", "The wholesaler sells the products to the customer", "The wholesaler places an order on the website", "The website processes the order with the business"], "Slides 14-15.");
  mcq([14, 15], 'h', "In the numbered B2B figure, what happens in step 4?",
    ["The wholesaler sells to the customer", "The wholesaler orders from the website", "The business supplies the wholesaler", "The website processes the order"], "Slides 14-15.");
  mcq(15, 'm', "In the B2B figure, “Business 2” is the…",
    ["wholesaler", "customer", "website", "market maker"], "Slide 15: Business 1 = business organization; Business 2 = wholesaler.");
  mcq(19, 'm', "In the C2C figure, Customer 1 wants to sell and Customer 2 wants to buy. After the sale, Customer 1 receives…",
    ["money", "products", "a wholesale discount", "an order processing fee"], "Slide 19: Customer 2 receives products; Customer 1 receives money.");
  mcq(19, 'h', "In the C2C business model figure, both customers connect to…",
    ["the website", "the business organization", "the wholesaler", "a physical store"], "Slide 19.");
  mcq(20, 'e', "Social e-commerce is e-commerce enabled by…",
    ["social networks and online social relationships", "wireless digital devices", "wholesalers and distributors", "market makers and auctions"], "Slide 20.");
  mcq(20, 'e', "Which company is described on the slides as both the leading social network and social e-commerce site?",
    ["Facebook", "eBay", "Amazon", "Metalshub"], "Slide 20.");
  mcq(21, 'm', "The slide showing a Zara jacket bought with “Checkout on Instagram” is an example of…",
    ["social e-commerce", "B2B e-commerce", "C2C e-commerce", "disintermediation"], "Slide 21.");
  mcq(22, 'e', "M-commerce involves…",
    ["the use of wireless digital devices to enable online transactions", "businesses selling to other businesses", "consumers selling to each other", "e-commerce enabled by social relationships"], "Slide 22.");
  mcq(22, 'e', "Which devices are given on the slides as examples for M-commerce?",
    ["Tablet computers and smartphones", "Mainframes and servers", "Printers and scanners", "Televisions and radios"], "Slide 22.");
  mcq(13, 'm', "A wholesaler orders 500 units in bulk from a manufacturer's website and resells them to its own customers. Which type of e-commerce is the wholesaler's purchase?",
    ["B2B", "B2C", "C2C", "Social e-commerce"], "Slides 10 and 13.");
  mcq(16, 'm', "A student sells a used textbook to another student through a marketplace website. Which type of e-commerce is this?",
    ["C2C", "B2B", "B2C", "Disintermediation"], "Slide 16.");
  mcq(22, 'm', "Paying for a product from a tablet over a wireless network is best described as…",
    ["M-commerce", "B2B", "C2C", "E-business"], "Slide 22.");
  // Benefits p23-26
  mcq(24, 'e', "Which is a benefit of e-commerce to ORGANIZATIONS listed on the slides?",
    ["Mass customization", "Price comparisons", "More choices", "An environment of competition"], "Slide 24.");
  mcq(26, 'e', "Which is a benefit of e-commerce to CONSUMERS listed on the slides?",
    ["Price comparisons", "Operational cost saving", "International marketplace", "Mass customization"], "Slide 26.");
  mcq(24, 'h', "Which is NOT a benefit of e-commerce to organizations listed on the slides?",
    ["Price comparisons", "International marketplace", "Operational cost saving", "No time constraints"], "Price comparisons is a consumer benefit.");
  mcq(26, 'h', "Which is NOT a benefit of e-commerce to consumers listed on the slides?",
    ["Operational cost saving", "24/7 access", "More choices", "Improved delivery processes"], "Operational cost saving is an organizational benefit.");
  mcq(24, 'm', "“The cost of creating, processing, distributing, storing and retrieving paper-based information has decreased.” Which organizational benefit is this?",
    ["Operational cost saving", "Mass customization", "International marketplace", "No time constraints"], "Slide 24.");
  mcq(24, 'm', "“Customers can configure a product according to their specifications within minutes on-line via the website.” Which benefit is this?",
    ["Mass customization", "More choices", "Improved delivery processes", "Operational cost saving"], "Slide 24.");
  mcq(24, 'm', "“A single physical marketplace located in a geographical area has become a borderless marketplace.” Which organizational benefit is this?",
    ["International marketplace", "No time constraints", "Environment of competition", "Price comparisons"], "Slide 24.");
  mcq(24, 'e', "“Businesses can be contacted at any time.” Which organizational benefit is this?",
    ["No time constraints", "24/7 access", "Mass customization", "International marketplace"], "Slide 24. (24/7 access is the matching consumer benefit.)");
  mcq(26, 'm', "“Customers can shop or conduct other transactions 24 hours a day, all year round, from almost any location.” Which consumer benefit is this?",
    ["24/7 access", "More choices", "Price comparisons", "Improved delivery processes"], "Slide 26.");
  mcq(26, 'm', "According to the slides, “more choices” means customers can choose from a whole range of products and also…",
    ["an international selection of suppliers", "a wider range of physical stores", "a single trusted local supplier", "free delivery on every product"], "Slide 26.");
  mcq(26, 'm', "Immediate download of digital goods and online tracking of packages are part of which consumer benefit?",
    ["Improved delivery processes", "Price comparisons", "24/7 access", "Mass customization"], "Slide 26.");
  mcq(26, 'm', "“Substantial discounts can be found or value added, with different retailers for customers.” Which consumer benefit is this?",
    ["An environment of competition", "More choices", "Operational cost saving", "No time constraints"], "Slide 26.");
  // Themes p27-30
  mcq(27, 'e', "E-commerce involves three broad interrelated themes. They are…",
    ["technology, business and society", "invention, consolidation and reinvention", "B2C, B2B and C2C", "price, cost and discrimination"], "Slide 27.");
  mcq(28, 'e', "TCP/IP, web servers, HTML and databases belong to which theme?",
    ["Technology", "Business", "Society", "Consolidation"], "Slide 28.");
  mcq(28, 'm', "Cloud computing, client/server computing and local area networks belong to which theme?",
    ["Technology", "Business", "Society", "Reinvention"], "Slide 28.");
  mcq(29, 'e', "Electronic markets, business models, industry structure and consumer behaviour in digital markets belong to which theme?",
    ["Business", "Technology", "Society", "Invention"], "Slide 29.");
  mcq(30, 'e', "The primary societal issues in e-commerce are…",
    ["intellectual property and individual privacy", "broadband and personal computers", "business models and industry structure", "web servers and databases"], "Slide 30.");
  mcq(29, 'm', "According to the slides, while technology provides the infrastructure, the interest and excitement in e-commerce comes from…",
    ["the business applications and the potential for extraordinary returns on investment", "the number of web servers", "intellectual property laws", "individual privacy rules"], "Slide 29.");
  mcq(30, 'h', "Why is understanding the pressures that global e-commerce places on society important?",
    ["It is critical to being successful in the e-commerce marketplace", "It is needed to write HTML pages", "It decides the price of broadband", "It replaces the need for a business model"], "Slide 30.");
  // Evolution p31-36
  mcq(31, 'e', "E-commerce has gone through three stages. In order, they are…",
    ["invention, consolidation, reinvention", "consolidation, invention, reinvention", "reinvention, invention, consolidation", "invention, reinvention, consolidation"], "Slide 31.");
  mcq(31, 'e', "The Invention stage of e-commerce lasted from…",
    ["1995–2000", "2001–2006", "2007–present", "1990–1994"], "Slide 31.");
  mcq(34, 'e', "The Consolidation stage of e-commerce lasted from…",
    ["2001–2006", "1995–2000", "2007–present", "2000–2010"], "Slide 34.");
  mcq(36, 'e', "The Reinvention stage of e-commerce began in…",
    ["2007", "2001", "1995", "2000"], "Slide 36.");
  mcq(34, 'm', "Using the slides' stages, the year 2003 falls in which stage of e-commerce?",
    ["Consolidation", "Invention", "Reinvention", "The dot-com crash"], "Slide 34: Consolidation 2001–2006.");
  mcq(31, 'm', "Using the slides' stages, the year 1998 falls in which stage of e-commerce?",
    ["Invention", "Consolidation", "Reinvention", "Disintermediation"], "Slide 31: Invention 1995–2000.");
  mcq(31, 'e', "Which stage of e-commerce ended with the “dot-com crash”?",
    ["Invention", "Consolidation", "Reinvention", "Social e-commerce"], "Slide 31.");
  mcq(31, 'm', "The dot-com crash happened in…",
    ["2000", "1995", "2007", "2006"], "Slide 31: the Invention period came to a close in 2000.");
  mcq(31, 'm', "During the Invention period, e-commerce meant selling…",
    ["retail goods, usually quite simple goods, on the Internet", "complex services such as travel and financial services", "on-demand personal services such as Uber", "only digital downloads"], "Slide 31.");
  mcq(31, 'h', "The early years of e-commerce (Invention) are described on the slides as…",
    ["a technological success, with infrastructure solid enough to sustain growth", "a technological failure that had to be rebuilt", "a period driven mainly by social networks", "a period of slow growth with no crash"], "Slide 31.");
  mcq(32, 'e', "Disintermediation is…",
    ["the displacement of market middlemen by a new direct relationship between producers and consumers", "the growth of distributors and wholesalers online", "adding more intermediaries between producers and consumers", "merging two e-commerce companies"], "Slide 32.");
  mcq(32, 'm', "Market middlemen are…",
    ["the distributors and wholesalers who are intermediaries between producers and consumers", "the first firms to enter a market", "consumers who sell to other consumers", "the business organizations that process orders"], "Slide 32.");
  mcq(32, 'h', "Why were market middlemen expected to disappear during the Invention period?",
    ["Each demanded a payment and raised costs while adding little value", "They refused to use the Internet", "They were banned by intellectual property law", "They were replaced by social networks"], "Slide 32.");
  mcq(33, 'm', "During the Invention period, extraordinary profits were expected to go to…",
    ["first movers: firms first to market in an area that quickly gathered market share", "market middlemen", "large traditional firms with strong brands", "on-demand service businesses"], "Slide 33.");
  mcq(34, 'm', "In which stage did the emphasis shift to a more “business-driven” approach rather than a “technology-driven” one?",
    ["Consolidation", "Invention", "Reinvention", "Disintermediation"], "Slide 34.");
  mcq(34, 'm', "During Consolidation, large traditional firms learned how to use the Web to…",
    ["strengthen their market positions", "replace all their physical stores", "avoid the dot-com crash", "become market middlemen"], "Slide 34.");
  mcq(34, 'h', "During Consolidation, what became more important than creating new brands?",
    ["Brand extension and strengthening", "Being the first mover", "Removing all middlemen", "Building social networks"], "Slide 34.");
  mcq(35, 'm', "During Consolidation, e-commerce changed to include not just retail products but also…",
    ["more complex services such as travel and financial services", "on-demand ride services", "only digital goods", "social networks and Web 2.0"], "Slide 35.");
  mcq(35, 'h', "The Consolidation period was enabled by…",
    ["widespread adoption of broadband networks and more powerful, cheaper personal computers", "the emergence of smartphones and social networks", "Web 2.0 applications with huge audiences", "on-demand personal service apps"], "Slide 35.");
  mcq(36, 'e', "The emergence of the mobile digital platform, social networks and Web 2.0 applications started which stage?",
    ["Reinvention", "Consolidation", "Invention", "Disintermediation"], "Slide 36.");
  mcq(36, 'e', "On-demand personal service businesses such as Uber and Careem belong to which stage?",
    ["Reinvention", "Invention", "Consolidation", "The dot-com crash"], "Slide 36.");
  mcq(36, 'h', "Which development belongs to the Reinvention period rather than Consolidation?",
    ["Social networks and the mobile digital platform", "Broadband networks in American homes", "Travel and financial services online", "Brand extension by traditional firms"], "Slides 35-36.");

  /* ---------- Section B ---------- */
  fill(27, 'e', "E-commerce involves three broad interrelated themes: [[technology]], [[business]] and [[society]].", "Slide 27.", { set: true });
  fill(31, 'e', "E-commerce has gone through three stages: [[invention]], [[consolidation]] and [[reinvention]].", "Slide 31 (in order).");
  fill(32, 'm', "[[Disintermediation]] is the displacement of market middlemen by a new direct relationship between producers and consumers.", "Slide 32.");
  fill(10, 'e', "[[B2B|business-to-business|business to business]] e-commerce involves businesses selling to other businesses and is the largest form of e-commerce.", "Slide 10.");
  fill(22, 'e', "[[M-commerce|mcommerce|mobile e-commerce|mobile commerce|mobile ecommerce]] involves the use of wireless digital devices to enable online transactions.", "Slide 22.");
  fill(31, 'm', "The Invention period came to a close in 2000 with the [[dot-com crash|dotcom crash|dot com crash]].", "Slide 31.");
  fill(16, 'e', "[[C2C|consumer-to-consumer|consumer to consumer]] e-commerce is a means for consumers to sell to each other.", "Slide 16.");
  fill(5, 'e', "[[B2C|business-to-consumer|business to consumer]] e-commerce involves businesses selling to consumers and is the type most consumers are likely to encounter.", "Slide 5.");
  fill(4, 'h', "Mobile and social e-commerce can be looked at as [[subsets|subset]] of the other types of e-commerce.", "Slide 4.");
  fill(20, 'e', "[[Social e-commerce|social commerce|social ecommerce]] is e-commerce enabled by social networks and online social relationships.", "Slide 20.");
  fill(20, 'm', "[[Facebook]] is both the leading social network and social e-commerce site.", "Slide 20.");
  fill(16, 'm', "In C2C e-commerce, the consumer relies on the [[market maker|marketmaker]] to provide catalog, search engine, and transaction clearing capabilities.", "Slide 16.");
  fill(13, 'm', "In the B2B model, a [[wholesaler]] goes to the business organization's website to order products in [[bulk]].", "Slide 13.");
  fill(17, 'e', "[[eBay]] is an American multinational e-commerce company based in California that facilitates consumer-to-consumer sales.", "Slide 17.");
  fill(18, 'm', "[[Etsy]] is a global online marketplace where people make, sell, buy, and collect handmade and unique items.", "Slide 18.");
  fill(11, 'm', "[[Metalshub|metals hub]] is an independent third-party marketplace that serves the metals industry.", "Slide 11.");
  fill(7, 'm', "[[Walmart|wal-mart]] is an American multinational retail corporation that operates a chain of hypermarkets.", "Slide 7.");
  fill(24, 'm', "[[Mass customization|mass customisation]]: customers can configure a product according to their specifications within minutes on-line.", "Slide 24.");
  fill(24, 'm', "[[Operational cost saving|operational cost savings|operational cost]]: the cost of creating, processing, distributing, storing and retrieving paper-based information has decreased.", "Slide 24.");
  fill(24, 'm', "[[International marketplace|international market place|international market]]: a single physical marketplace has become a borderless marketplace including national and international markets.", "Slide 24.");
  fill(26, 'm', "[[Price comparisons|price comparison]]: customers can shop around the world and compare directly by visiting different sites.", "Slide 26.");
  fill(26, 'h', "[[Improved delivery processes|improved delivery process|improved delivery]] range from immediate delivery of digitized goods to on-line tracking of packages.", "Slide 26.");
  fill(30, 'm', "The primary societal issues in e-commerce are [[intellectual property]] and individual [[privacy]].", "Slide 30.");
  fill(32, 'm', "Market [[middlemen|middleman|middle men]] are the distributors and wholesalers who are intermediaries between producers and consumers.", "Slide 32.");
  fill(33, 'm', "In the Invention period, extraordinary profits were expected to go to the [[first movers|first mover|first-movers]].", "Slide 33.");
  fill(34, 'h', "During Consolidation the emphasis shifted to a more [[business-driven|business driven]] approach rather than a [[technology-driven|technology driven]] one.", "Slide 34.");
  fill(36, 'e', "E-commerce entered a period of reinvention in [[2007]].", "Slide 36.");
  fill(31, 'm', "The Invention stage of e-commerce lasted from [[1995]] to [[2000]].", "Slide 31.");
  fill(36, 'm', "Recently, reinvention has produced on-demand personal service businesses such as [[Uber]] and Careem.", "Slide 36.");
  fill(35, 'h', "Consolidation was enabled by widespread adoption of [[broadband]] networks in American homes and businesses.", "Slide 35.");

  /* ---------- Section C ---------- */
  tf(10, 'e', "B2C is the largest form of e-commerce.", false, "False. B2B is the largest.");
  tf(17, 'e', "eBay facilitates consumer-to-consumer (C2C) sales through its website.", true, "True.");
  tf(7, 'e', "Walmart is a slide example of C2C e-commerce.", false, "False. Walmart is a B2C example.");
  tf(34, 'm', "During Consolidation, brand extension and strengthening became more important than creating new brands.", true, "True.");
  tf(36, 'e', "The Reinvention period began in 2001.", false, "False. Reinvention began in 2007; Consolidation began in 2001.");
  tf(20, 'e', "Facebook is both the leading social network and a social e-commerce site.", true, "True.");
  tf(24, 'e', "“No time constraints” is a benefit of e-commerce to organizations.", true, "True. Businesses can be contacted at any time.");
  tf(31, 'h', "The early years of e-commerce (Invention) were a technological failure.", false, "False. They were a technological success; the period ended with the dot-com crash.");
  tf(16, 'm', "In C2C e-commerce, the market maker prepares the product for market.", false, "False. The consumer prepares the product; the market maker provides catalog, search and transaction clearing.");
  tf(11, 'e', "Metalshub is an example of B2C e-commerce.", false, "False. It is a B2B marketplace serving the metals industry.");
  tf(31, 'm', "During the Invention period, e-commerce mainly sold complex services such as travel and financial services.", false, "False. It meant selling simple retail goods; complex services came in Consolidation.");
  tf(22, 'e', "Mobile e-commerce involves the use of wireless digital devices to enable online transactions.", true, "True.");

  /* ---------- Section D ---------- */
  list(4, 'e', 3, "List the five types of e-commerce.",
    [["Business-to-Consumer (B2C)", "b2c", "business to consumer"], ["Business-to-Business (B2B)", "b2b", "business to business"], ["Consumer-to-Consumer (C2C)", "c2c", "consumer to consumer"],
     ["Social e-commerce", "social"], ["Mobile e-commerce (M-commerce)", "mobile", "m commerce", "mcommerce"]], { explain: "Slide 4." });
  list(24, 'e', 2, "List the benefits of e-commerce to organizations.",
    [["International marketplace", "international", "borderless"], ["Operational cost saving", "operational", "cost saving", "cost"], ["Mass customization", "mass", "customi"], ["No time constraints", "time constraint", "no time", "any time", "anytime"]],
    { explain: "Slide 24." });
  list(26, 'e', 3, "List the benefits of e-commerce to consumers.",
    [["24/7 access", "24", "access"], ["More choices", "choice"], ["Price comparisons", "comparison", "compare"], ["Improved delivery processes", "deliver"], ["An environment of competition", "competition", "competitive"]],
    { explain: "Slide 26." });
  list(31, 'e', 3, "List the three stages in the evolution of e-commerce, with their years.",
    [["Invention (1995–2000)", "invention"], ["Consolidation (2001–2006)", "consolidat"], ["Reinvention (2007–present)", "reinvent", "re invention"]],
    { explain: "Slide 31." });
  list(27, 'e', 3, "List the three major themes underlying the study of e-commerce.",
    [["Technology", "technolog"], ["Business", "business"], ["Society", "societ"]], { explain: "Slide 27." });
  list([6, 7, 8, 11, 12, 17, 18], 'm', 3, "Give one slide example each for B2C, B2B and C2C e-commerce.",
    [["B2C: Amazon, Walmart or H&M", "amazon", "walmart", "h and m", "hm"], ["B2B: Metalshub or Grammarly for Business", "metalshub", "metals hub", "grammarly"], ["C2C: eBay or Etsy", "ebay", "etsy"]],
    { explain: "Slides 6-18." });
  def(5, 'e', 2, "Define Business-to-Consumer (B2C) e-commerce and give an example.",
    [["Businesses selling to consumers (the type most consumers encounter)", "selling to consumer", "sell to consumer", "businesses selling"],
     ["Example: Amazon, Walmart or H&M", "amazon", "walmart", "h and m", "hm"]],
    "B2C e-commerce involves businesses selling to consumers and is the type of e-commerce most consumers are likely to encounter. Example: Amazon.");
  def(10, 'e', 2, "Define Business-to-Business (B2B) e-commerce and give an example.",
    [["Businesses selling to other businesses (the largest form)", "other business", "to business"],
     ["Example: Metalshub or Grammarly for Business", "metalshub", "metals hub", "grammarly"]],
    "B2B e-commerce involves businesses selling to other businesses and is the largest form of e-commerce. Example: Metalshub, an independent third-party marketplace serving the metals industry.");
  def(16, 'e', 2, "Define Consumer-to-Consumer (C2C) e-commerce and give an example.",
    [["Consumers selling to each other through a market maker", "each other", "consumers sell", "consumer to consumer"],
     ["Example: eBay or Etsy", "ebay", "etsy"]],
    "C2C e-commerce is a means for consumers to sell to each other, using a market maker that provides catalog, search engine and transaction clearing. Example: eBay.");
  def(20, 'e', 2, "Define social e-commerce and give an example.",
    [["E-commerce enabled by social networks and online social relationships", "social network", "social relationship"],
     ["Example: Facebook or Instagram", "facebook", "instagram"]],
    "Social e-commerce is e-commerce enabled by social networks and online social relationships. Example: Facebook, the leading social network and social e-commerce site (or Instagram checkout).");
  def(22, 'e', 2, "Define mobile e-commerce (M-commerce) and give an example.",
    [["Use of wireless digital devices to enable online transactions", "wireless", "digital device"],
     ["Example: tablet computers and smartphones used for commercial transactions", "smartphone", "tablet", "phone"]],
    "M-commerce involves the use of wireless digital devices to enable online transactions. Example: using tablet computers and smartphones to conduct commercial transactions.");
  def(32, 'm', 2, "Define disintermediation.",
    [["Displacement of market middlemen (distributors, wholesalers)", "middlem", "displace", "distributor", "wholesaler"],
     ["Replaced by a new direct relationship between producers and consumers", "direct relationship", "direct"]],
    "Disintermediation is the displacement of market middlemen (distributors and wholesalers who are intermediaries between producers and consumers) by a new direct relationship between producers and consumers.");
  def(33, 'm', 2, "Who are “first movers” in e-commerce?",
    [["Firms who were first to market in a particular area", "first to market", "first"],
     ["They moved quickly to gather market share (expected to earn extraordinary profits)", "market share", "quickly", "profit"]],
    "First movers are the firms who were first to market in a particular area and who moved quickly to gather market share. In the Invention period, extraordinary profits were expected to go to them.");

  /* ---------- Section E ---------- */
  exp([5, 6, 9], 'e', 5, "Define Business-to-Consumer (B2C) e-commerce with an example, then describe the B2C model figure.",
    [["Businesses selling to consumers", "selling to consumer", "businesses selling", "business to consumer"],
     ["The type of e-commerce most consumers are likely to encounter", "most consumer", "encounter"],
     ["Example: Amazon / Walmart / H&M", "amazon", "walmart", "h and m", "hm"],
     ["Figure: the customer places orders on the website; order processing links the website and the business organization", "order", "website"],
     ["Figure: the business organization supplies the products to the customer", "suppl"]],
    "B2C e-commerce involves businesses selling to consumers and is the type of e-commerce most consumers are likely to encounter. Example: Amazon, a general company that sells products to customers. In the B2C model figure, the customer places orders on the website, order processing happens between the website and the business organization, and the business organization supplies the products to the customer.");
  exp([10, 11, 13, 14], 'm', 5, "Define Business-to-Business (B2B) e-commerce with an example, then describe the B2B model.",
    [["Businesses selling to other businesses", "other business", "business to business", "businesses selling"],
     ["The largest form of e-commerce", "largest"],
     ["Example: Metalshub / Grammarly for Business", "metalshub", "metals hub", "grammarly"],
     ["A wholesaler orders products in bulk on the business organization's website, which processes the order and supplies the wholesaler", "wholesaler", "bulk", "suppl"],
     ["The wholesaler then sells the products to its customers at a higher price", "higher price", "resell", "sells those", "sells the product"]],
    "B2B e-commerce involves businesses selling to other businesses and is the largest form of e-commerce. Example: Metalshub, an independent third-party marketplace serving the metals industry. In the B2B model a wholesaler goes to the business organization's website to order products in bulk; the business organization processes the order and supplies the products to the wholesaler; the wholesaler then sells those same products at a higher price to its customers.");
  exp([16, 17, 19], 'm', 5, "Define Consumer-to-Consumer (C2C) e-commerce with an example, then describe the C2C model.",
    [["Consumers selling to each other", "each other", "consumer to consumer", "consumers sell"],
     ["The consumer prepares the product and places it for auction or sale", "auction", "prepare"],
     ["The market maker provides catalog, search engine and transaction clearing", "market maker", "catalog", "clearing"],
     ["Example: eBay / Etsy", "ebay", "etsy"],
     ["Figure: seller and buyer meet on the website; the buyer receives the product and the seller receives the money", "money", "receive"]],
    "C2C e-commerce is a means for consumers to sell to each other. The consumer prepares the product for market, places it for auction or sale, and relies on the market maker to provide catalog, search engine, and transaction clearing so that products can be displayed, discovered and paid for. Example: eBay. In the C2C figure, Customer 1 (who wants to sell) and Customer 2 (who wants to buy) both use the website; Customer 2 receives the products and Customer 1 receives the money.");
  exp(26, 'e', 5, "Explain the benefits of e-commerce to consumers.",
    [["24/7 access from almost any location, all year round", "24", "any location", "all year"],
     ["More choices, including an international selection of suppliers", "choice", "supplier"],
     ["Price comparisons by visiting different sites", "compar"],
     ["Improved delivery: immediate downloads and online package tracking", "deliver", "download", "track"],
     ["An environment of competition: discounts or added value", "competition", "discount"]],
    "24/7 access: customers can shop or conduct other transactions 24 hours a day, all year round, from almost any location. More choices: a whole range of products to choose from and customize, plus an international selection of suppliers. Price comparisons: customers can shop around the world and compare by visiting different sites. Improved delivery processes: from immediate download of digitized goods such as software to online tracking of packages. An environment of competition: different retailers compete, so substantial discounts or added value can be found.");
  exp([31, 32, 33, 34, 35, 36], 'h', 5, "Describe the three different stages in the evolution of e-commerce.",
    [["Invention 1995–2000: technological success; simple retail goods", "invention", "1995", "simple"],
     ["Invention ideas: disintermediation and first movers; ended with the dot-com crash", "crash", "disintermed", "first mover"],
     ["Consolidation 2001–2006: business-driven; brand strengthening; travel and financial services; broadband", "consolidat", "business driven", "brand", "broadband"],
     ["Reinvention 2007–present: mobile platform, social networks, Web 2.0", "reinvent", "mobile", "web 2"],
     ["On-demand personal services such as Uber and Careem", "uber", "careem", "on demand"]],
    "Invention (1995–2000): the early years were a technological success; e-commerce meant selling simple retail goods on the Internet; people expected disintermediation of middlemen and extraordinary profits for first movers; the period ended with the dot-com crash in 2000. Consolidation (2001–2006): a business-driven rather than technology-driven approach; large traditional firms used the Web to strengthen their market positions; brand extension mattered more than new brands; e-commerce grew to include complex services such as travel and financial services, enabled by broadband and cheaper PCs, growing more than 10% a year. Reinvention (2007–present): the mobile digital platform, social networks and Web 2.0 applications; more recently, on-demand personal service businesses such as Uber and Careem.");
  exp([27, 28, 29, 30], 'm', 4, "Describe the major themes underlying the study of e-commerce.",
    [["Three interrelated themes: technology, business and society", "three", "interrelated", "themes"],
     ["Technology: Internet, Web, mobile platform, cloud, TCP/IP, HTML, databases", "internet", "tcp", "html", "database", "cloud"],
     ["Business: returns on investment; electronic markets, business models, industry structure, consumer behaviour", "business model", "return", "industry", "consumer behav", "electronic market"],
     ["Society: intellectual property and individual privacy", "intellectual", "privacy"]],
    "E-commerce involves three broad interrelated themes. Technology: understanding the information technologies it is built on, including the Internet, the Web and the mobile platform, and complementary technologies such as cloud computing, local area networks, client/server computing, TCP/IP, web servers, HTML and databases. Business: the business applications and the potential for extraordinary returns on investment; key concepts are electronic markets, business models, industry structure and consumer behaviour in digital markets. Society: understanding the pressures global e-commerce places on society; the primary societal issues are intellectual property and individual privacy.");
  exp(24, 'e', 4, "Explain the benefits of e-commerce to organizations.",
    [["International marketplace: borderless access to people all around the world", "international", "borderless", "world"],
     ["Operational cost saving: cheaper creating, processing, storing and retrieving of paper-based information", "paper", "operational"],
     ["Mass customization: customers configure products online within minutes", "customi", "configure"],
     ["No time constraints: businesses can be contacted at any time", "any time", "anytime", "time constraint"]],
    "International marketplace: a single physical marketplace in one geographical area has become a borderless marketplace including national and international markets, giving access to people all around the world. Operational cost saving: the cost of creating, processing, distributing, storing and retrieving paper-based information has decreased. Mass customization: customers can configure a product according to their specifications within minutes online via the website. No time constraints: businesses can be contacted at any time.");
  exp([4, 5, 10, 16, 20, 22], 'm', 5, "List the five types of e-commerce, then explain two of these types in detail.",
    [["B2C: businesses selling to consumers; most encountered; e.g. Amazon", "selling to consumer", "amazon", "walmart", "encounter"],
     ["B2B: businesses selling to other businesses; the largest form; e.g. Metalshub", "other business", "largest", "metalshub"],
     ["C2C: consumers selling to each other via a market maker; e.g. eBay", "each other", "market maker", "ebay", "etsy"],
     ["Social e-commerce: enabled by social networks and online relationships; e.g. Facebook", "social network", "facebook", "instagram"],
     ["M-commerce: wireless digital devices enable online transactions; e.g. smartphones", "wireless", "smartphone", "tablet"]],
    "The five types are B2C, B2B, C2C, social e-commerce and mobile e-commerce (M-commerce). B2C e-commerce involves businesses selling to consumers and is the type most consumers are likely to encounter, for example Amazon. B2B e-commerce involves businesses selling to other businesses and is the largest form of e-commerce, for example Metalshub.",
    { need: 2, list: { label: "Lists the five types", weight: 0.4, items: [["B2C", "b2c", "business to consumer"], ["B2B", "b2b", "business to business"], ["C2C", "c2c", "consumer to consumer"], ["Social e-commerce", "social"], ["M-commerce", "mobile", "m commerce", "mcommerce"]] } });
});
