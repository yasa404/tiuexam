/* Lecture 4: E-commerce Business Strategies (PDF pages 1-71). */
EC.lecture(4, function (Q) {
  var mcq = Q.mcq, tf = Q.tf, fill = Q.fill, list = Q.list, def = Q.def, exp = Q.exp;

  /* ---------- Section A ---------- */
  // Business model / plan p4
  mcq(4, 'e', "A business model is…",
    ["a set of planned activities designed to result in a profit in a marketplace", "a document that describes a firm's business model in detail", "the plan for entering a new market and attracting new customers", "the organizational structure needed to carry out the business plan"], "Slide 4.");
  mcq(4, 'e', "A business plan is…",
    ["a document that describes a firm's business model", "a set of planned activities designed to result in a profit", "a description of how the firm will earn revenue", "the area of commercial value the firm intends to serve"], "Slide 4.");
  mcq(4, 'm', "An e-commerce business model aims to use and leverage…",
    ["the unique qualities of the Internet, the Web, and the mobile platform", "the firm's physical store locations and its face-to-face sales staff", "printed catalogues, newspapers and television advertising campaigns", "the personal savings of the founder and loans from family and friends"], "Slide 4.");
  // Eight elements p5-7, 48
  mcq(5, 'm', "Which is NOT one of the eight key elements of a business model?",
    ["Customer interaction", "Market opportunity", "Organizational development", "Competitive advantage"], "Customer interaction is one of the Lecture 1 factors.");
  mcq(5, 'h', "Which of these is NOT a key element of a business model?",
    ["Barriers to entry", "Value proposition", "Market strategy", "Management team"], "Barriers to entry is a market-analysis question and an e-tailer property, not an element.");
  mcq(5, 'm', "According to the slides, the eight elements must be addressed to develop a successful business model…",
    ["in any arena, not just e-commerce", "only in e-commerce", "only for B2C companies", "only after raising venture capital"], "Slide 5.");
  mcq(48, 'e', "“Why should the customer buy from you?” is the key question of which element?",
    ["Value proposition", "Revenue model", "Market strategy", "Competitive advantage"], "Slide 48.");
  mcq(48, 'e', "“How will you earn money?” is the key question of which element?",
    ["Revenue model", "Value proposition", "Market opportunity", "Management team"], "Slide 48.");
  mcq(48, 'm', "“What marketspace do you intend to serve, and what is its size?” belongs to which element?",
    ["Market opportunity", "Market strategy", "Competitive environment", "Organizational development"], "Slide 48.");
  mcq(48, 'm', "“Who else occupies your intended marketspace?” belongs to which element?",
    ["Competitive environment", "Competitive advantage", "Market opportunity", "Value proposition"], "Slide 48.");
  mcq(48, 'm', "“What special advantages does your firm bring to the marketspace?” belongs to which element?",
    ["Competitive advantage", "Competitive environment", "Market strategy", "Revenue model"], "Slide 48.");
  mcq(48, 'm', "“How do you plan to promote your products or services to attract your target audience?” belongs to which element?",
    ["Market strategy", "Market opportunity", "Value proposition", "Management team"], "Slide 48.");
  mcq(48, 'm', "“What types of organizational structures within the firm are necessary to carry out the business plan?” belongs to which element?",
    ["Organizational development", "Management team", "Market strategy", "Competitive environment"], "Slide 48.");
  mcq(48, 'm', "“What kinds of experiences and background are important for the company's leaders to have?” belongs to which element?",
    ["Management team", "Organizational development", "Competitive advantage", "Market opportunity"], "Slide 48.");
  // Value proposition p8-10
  mcq(8, 'e', "Value proposition defines…",
    ["how a company's product or service fulfills the needs of customers", "how the firm will earn revenue, produce profits and return on capital", "who else occupies the intended marketspace and sells similar products", "how the company is organized to carry out its business plan"], "Slide 8.");
  mcq(9, 'e', "Domino's “fresh, hot pizza delivered to your door in 30 minutes or less or it's free” is an example of a…",
    ["value proposition", "revenue model", "market opportunity", "competitive environment"], "Slide 9.");
  mcq(10, 'm', "Uber's slogan “Everyone's private driver” shown on the slides is an example of a…",
    ["value proposition", "revenue model", "business plan", "barrier to entry"], "Slide 10.");
  mcq(8, 'h', "Which is NOT one of the successful e-commerce value proposition features listed on the slides?",
    ["Physical store locations", "Personalization and customization", "Convenience (24 hours/7 days)", "Quick delivery"], "Slide 8: personalization/customization, convenience, price/no shipping cost, quick delivery, product/service quality.");
  mcq(8, 'm', "Which of these is listed on the slides as a feature of successful e-commerce value propositions?",
    ["Price/no shipping cost", "Complementary resources", "Barriers to entry", "Matrix organization"], "Slide 8.");
  mcq(9, 'h', "Which value proposition feature does Domino's “30 minutes or less or it's free” promise mainly stress?",
    ["Quick delivery", "Personalization and customization", "Product/service quality only", "No shipping cost"], "Slides 8-9.");
  // Revenue models p12-23
  mcq(12, 'e', "A revenue model describes how the firm will…",
    ["earn revenue, produce profits, and produce a superior return on invested capital", "fulfill the needs of its customers better than competing products do", "enter a new market and attract new customers with promotions", "organize its staff and managers into departments and project teams"], "Slide 12.");
  mcq(13, 'm', "According to the slides, most companies rely on…",
    ["one or some combination of the major revenue models", "only the advertising revenue model, since content is free online", "exactly three revenue models used at the same time", "a different revenue model every year to test the market"], "Slide 13.");
  mcq(14, 'e', "In the advertising revenue model, a company…",
    ["provides a forum for advertisements and receives fees from advertisers", "charges a subscription fee for access to some or all of its content", "receives a fee for enabling or executing a transaction between users", "receives a referral fee for steering business to an affiliate"], "Slide 14.");
  mcq(14, 'e', "Yahoo earning a significant amount of revenue from display and video advertising is an example of which revenue model?",
    ["Advertising", "Subscription", "Transaction fee", "Affiliate"], "Slide 14.");
  mcq(14, 'm', "Besides Yahoo, which company is given on the slides as an example of the advertising revenue model?",
    ["Facebook", "Spotify", "eBay", "Amazon"], "Slide 14.");
  mcq(15, 'e', "In the subscription revenue model, a company…",
    ["offers content or services and charges a fee for access to some or all of its offerings", "provides a forum for advertisements, such as banner ads on its pages, and receives fees from the advertisers", "sells goods, information or services directly to its customers", "steers business to an affiliate and receives a referral fee"], "Slide 15.");
  mcq(15, 'e', "Spotify, Grammarly and Adobe are given on the slides as examples of which revenue model?",
    ["Subscription", "Advertising", "Sales", "Transaction fee"], "Slide 15.");
  mcq(18, 'm', "Adobe charging US$69.99 per month for Creative Cloud Pro, shown on the slides, illustrates which revenue model?",
    ["Subscription", "Transaction fee", "Affiliate", "Advertising"], "Slide 18.");
  mcq(19, 'e', "In a freemium strategy, companies…",
    ["give away a certain level of product or service free and charge a subscription fee for premium levels", "charge every user the same premium price, with no free version available at all", "earn money only from advertising shown to users and never charge them anything for any level of product or service", "charge a fee only when a transaction between a buyer and a seller succeeds"], "Slide 19.");
  mcq(19, 'm', "According to the slides, many companies have recently been combining a freemium strategy with which revenue model?",
    ["Subscription", "Transaction fee", "Affiliate", "Sales"], "Slide 19.");
  mcq(16, 'h', "Grammarly offers a Free plan alongside paid Premium and Business plans. This combination is called…",
    ["a freemium strategy", "price transparency", "a transaction fee model", "an affiliate model"], "Slides 16 and 19.");
  mcq(17, 'h', "On the Spotify slide, which Premium plan offers up to 6 accounts for family members living under one roof?",
    ["Family", "Duo", "Individual", "Student"], "Slide 17.");
  mcq(17, 'h', "On the Spotify slide, which Premium plan offers a special discount for eligible students in university?",
    ["Student", "Individual", "Duo", "Family"], "Slide 17.");
  mcq(20, 'e', "In the transaction fee revenue model, a company…",
    ["receives a fee for enabling or executing a transaction", "provides a forum for advertisements and receives fees from advertisers", "charges a monthly subscription fee for access to its content", "sells its own goods, information or services to customers"], "Slide 20.");
  mcq(20, 'e', "eBay receiving a small fee from a seller when the seller is successful in selling the item is which revenue model?",
    ["Transaction fee", "Sales revenue", "Affiliate referral", "Advertising"], "Slide 20.");
  mcq(21, 'e', "In the sales revenue model, companies derive revenue by…",
    ["selling products, content, or services to customers", "receiving referral fees from affiliates", "charging fees to advertisers", "charging a fee for each transaction between others"], "Slide 21.");
  mcq(21, 'e', "Amazon selling books, music and other products is given as an example of which revenue model?",
    ["Sales", "Subscription", "Affiliate", "Transaction fee"], "Slide 21.");
  mcq(22, 'e', "In the affiliate revenue model, a company…",
    ["steers business to an affiliate and receives a referral fee or percentage of resulting sales", "receives a fee for enabling or executing a transaction between buyers and sellers", "charges users a monthly subscription fee for access to premium content", "sells content, goods or services directly to customers at a fixed price"], "Slide 22.");
  mcq(22, 'm', "A website earns a fee whenever a visitor it sends to an airline, car rental or hotel company makes a purchase. Which revenue model is this?",
    ["Affiliate", "Advertising", "Sales", "Subscription"], "Slide 22.");
  mcq(23, 'm', "In the summary table of revenue models, “Fees (commissions) for enabling or executing a transaction” is the revenue source of…",
    ["Transaction fee", "Affiliate referral", "Sales", "Advertising"], "Slide 23.");
  mcq(23, 'm', "In the summary table of revenue models, “Fees for business referrals” is the revenue source of…",
    ["Affiliate", "Transaction fee", "Subscription", "Advertising"], "Slide 23.");
  mcq(23, 'm', "In the summary table of revenue models, “Sales of goods, information, or services” is the revenue source of…",
    ["Sales", "Subscription", "Affiliate", "Advertising"], "Slide 23.");
  mcq(23, 'h', "Which revenue model earns “fees from subscribers in exchange for access to content or services”?",
    ["Subscription", "Sales", "Advertising", "Transaction fee"], "Slide 23.");
  // Market opportunity p25-26
  mcq(25, 'e', "In Lecture 4, a marketspace is…",
    ["an area of actual or potential commercial value in which a company intends to operate", "the physical store or shopping mall where a company sells its products directly to customers who visit in person", "the number of active competitors operating in the same market", "the plan for promoting a product to customers in a target market"], "Slide 25.");
  mcq(25, 'e', "Market opportunity refers to…",
    ["the company's intended marketspace and the overall potential financial opportunities available to the firm in that marketspace", "the other companies selling similar products in the same marketspace, including direct and indirect competitors", "the plan that details exactly how the firm intends to enter a new market and attract new customers", "the special advantages the firm brings to its marketspace, such as a superior product or a lower price"], "Slide 25.");
  mcq(25, 'm', "A firm's realistic market opportunity will typically focus on…",
    ["one or a few market segments", "every market segment at once", "only its competitors' customers", "only international markets"], "Slide 25.");
  mcq(25, 'm', "Companies conduct marketing opportunity analyses to determine if they can…",
    ["introduce new products, sell more products, attract more customers and achieve growth", "avoid paying taxes by moving their sales and profits into new markets", "remove their competitors from the market by copying their products", "reduce the number of employees, close their less profitable stores and cut costs instead of growing their sales"], "Slide 25.");
  mcq(26, 'm', "Which is NOT one of the high-level questions for analyzing a market listed on the slides?",
    ["What colour should the company logo be?", "What is the market size?", "What are the barriers to entry?", "What is the bargaining power of suppliers?"], "Slide 26.");
  mcq(26, 'm', "“How quickly is the market expanding or contracting?” is one of the high-level questions used when analyzing…",
    ["a market (market opportunity)", "the management team", "the organizational structure", "the revenue model"], "Slide 26.");
  // Competitive environment p28-31
  mcq(28, 'e', "Competitive environment refers to…",
    ["the other companies operating in the same marketspace selling similar products", "the area of actual or potential commercial value a company intends to operate in", "the special advantages a firm brings to the market that competitors cannot match", "the plan that details how a firm will promote its products to a target audience"], "Slide 28.");
  mcq(28, 'm', "According to the slides, the competitive environment includes…",
    ["both direct and indirect competitors", "only direct competitors in the same segment", "only indirect competitors in other industries", "only companies located in the same city"], "Slide 28.");
  mcq(29, 'e', "Direct competitors are companies that…",
    ["sell products and services that are very similar and into the same market segment", "are in different industries but whose products can substitute for one another", "invest money in exchange for equity", "refer customers in exchange for a fee"], "Slide 29.");
  mcq(30, 'e', "Indirect competitors are companies that…",
    ["may be in different industries but compete because their products can substitute for one another", "sell identical or very similar products into the same market segment, so customers compare them side by side", "share the same management team and investors as the firm", "process transactions for consumers, such as payments and bookings"], "Slide 30.");
  mcq(29, 'm', "Priceline and Travelocity, which both sell discount airline tickets online, are…",
    ["direct competitors", "indirect competitors", "affiliates", "not competitors"], "Slide 29.");
  mcq(30, 'm', "CNN.com and ESPN.com, which compete for consumers' time online, are…",
    ["indirect competitors", "direct competitors", "affiliate partners", "the same business model"], "Slide 30.");
  mcq(30, 'm', "Automobile manufacturers and airline companies are…",
    ["indirect competitors", "direct competitors", "not competitors at all", "affiliates"], "Slide 30: alternative means of transportation.");
  mcq(31, 'e', "Which is one of the factors that influence the competitive environment, according to the slides?",
    ["Competitors' pricing", "The founder's seed capital", "The number of slides in the business plan", "The colour of the company website"], "Slide 31: number of competitors, market share, profitability, pricing.");
  mcq(31, 'h', "Which is NOT one of the four factors that influence the competitive environment?",
    ["Competitors' value proposition slogans", "Number of active competitors in the marketspace", "Each competitor's share of the market", "Competitors' profitability and pricing"], "Slide 31.");
  // Competitive advantage p33-35
  mcq(33, 'e', "A firm achieves competitive advantage when it can…",
    ["produce a superior product and/or bring the product to market at a lower price than most or all competitors", "hire more employees and open more offices than its competitors do", "be the first company in its industry to register a website and domain name", "occupy exactly the same marketspace as its competitors with a very similar product sold at the same price as theirs"], "Slide 33.");
  mcq(34, 'e', "Asymmetry exists whenever…",
    ["one participant in a market has more resources than other participants", "two companies sell identical products to the same customers", "a company is the first to enter a marketplace with its product", "a company uses its advantages in one market to win surrounding markets"], "Slide 34.");
  mcq(34, 'e', "First-mover advantage is a competitive advantage that results from…",
    ["being the first into a marketplace with a serviceable product or service", "having more resources than the other participants in a market", "using its competitive advantages in surrounding markets", "charging a lower price than every competitor in the market"], "Slide 34.");
  mcq(34, 'm', "Why do most first movers fail to sustain their advantage?",
    ["They lack the complementary resources needed to sustain it", "They always charge too little to cover the cost of their products", "They attract too many customers to serve well at the start", "They are pushed out by their direct competitors' lower pricing"], "Slide 34.");
  mcq(34, 'm', "Marketing, management, financial assets and reputation are examples of…",
    ["complementary resources", "barriers to entry", "revenue models", "competitive environment factors"], "Slide 34.");
  mcq(34, 'h', "Complementary resources are resources and assets that are…",
    ["not directly involved in the production of the product but required for success", "directly used to manufacture or deliver the product itself, such as factories, raw materials and machines", "owned by competitors and rented to the firm when needed", "only financial assets, such as bank loans and investor funds"], "Slide 34.");
  mcq(35, 'e', "When a company uses its competitive advantages to achieve more advantage in surrounding markets, this is called…",
    ["leverage", "asymmetry", "first-mover advantage", "market strategy"], "Slide 35.");
  mcq(35, 'm', "Amazon's move into the online grocery business, using its huge customer database and years of e-commerce experience, is an example of…",
    ["leverage", "asymmetry", "first-mover advantage", "a freemium strategy"], "Slide 35.");
  // Market strategy p37
  mcq(37, 'e', "Market strategy is…",
    ["the plan that details exactly how you intend to enter a new market and attract new customers", "the area of actual or potential commercial value the company intends to operate in", "the way the firm earns revenue, produces profits and returns on invested capital", "the organizational structure the firm needs to carry out its business plan"], "Slide 37.");
  mcq(37, 'm', "According to the market strategy slide, the best business concepts will fail if they are not…",
    ["properly marketed to potential customers", "funded by venture capital firms at an early stage", "protected by a first-mover advantage in their market", "organized into a matrix structure with project teams"], "Slide 37.");
  // Organizational development p39-44
  mcq(39, 'e', "An organizational development plan describes…",
    ["the types of organizational structures within the firm necessary to carry out the business plan", "how the firm will promote its products to customers in its target market", "how the firm will earn revenue, produce profits and produce a superior return on the capital that investors put in", "the experience and background the company's leaders need to succeed"], "Slide 39.");
  mcq(39, 'm', "As a company grows, hiring moves from…",
    ["generalists to specialists", "specialists to generalists", "managers to staff", "investors to employees"], "Slide 39.");
  mcq(40, 'e', "What are the three general classifications of organizational structures?",
    ["Functional, project and matrix", "Weak, balanced and strong", "Direct, indirect and substitute", "Invention, consolidation and reinvention"], "Slide 40. (Weak/balanced/strong are types of matrix.)");
  mcq(40, 'e', "In which organizational structure do functional managers or vice presidents report to the CEO?",
    ["Functional", "Project", "Matrix", "Market creator"], "Slide 40.");
  mcq(40, 'm', "In the project organization structure, who reports to the CEO?",
    ["Program managers", "Vice presidents of each function", "Staff from two or more departments", "Angel investors"], "Slide 40.");
  mcq(40, 'e', "In which structure do personnel often report to two or more bosses?",
    ["Matrix", "Functional", "Project", "Portal"], "Slide 40.");
  mcq(40, 'm', "Which structure is described as the middle ground between functional and project structures?",
    ["Matrix", "Functional", "Project", "Transaction broker"], "Slide 40.");
  mcq(40, 'h', "According to the slides, a matrix structure can be…",
    ["weak, balanced, or strong", "direct or indirect", "virtual or bricks-and-clicks", "functional or seed"], "Slide 40.");
  mcq(41, 'm', "“Only faculty members in the business department teach business courses.” This describes which structure, used by most colleges and universities?",
    ["Functional", "Project", "Matrix", "Community provider"], "Slide 41.");
  mcq(42, 'm', "Engineering and consulting companies that earn revenue mainly by performing projects for other groups under contract often use a…",
    ["project structure", "functional structure", "matrix structure", "virtual merchant structure"], "Slide 42.");
  mcq(42, 'h', "In a project organization structure, companies often…",
    ["hire people specifically to work on particular projects", "let a single department do all the work for every project", "have staff report to two or more bosses at the same time", "avoid working under contract and keep all staff permanent"], "Slide 42.");
  mcq(44, 'h', "In the matrix structure figure, which project manager has 0 manufacturing staff?",
    ["Project Manager C", "Project Manager A", "Project Manager B", "VP Manufacturing"], "Slide 44: Project Manager C has 1 engineering, 0 manufacturing, 4 IT and 1/10 HR.");
  mcq(44, 'h', "In the functional structure figure, which managers report directly to the CEO?",
    ["VP Engineering, VP Manufacturing, VP IT and VP HR", "Program Managers A, B and C and their teams", "Project Managers A, B and C and their staff", "Staff from all departments and all projects"], "Slide 44.");
  // Management team p46-47
  mcq(46, 'e', "According to the slides, the single most important element of a business model is the…",
    ["management team", "revenue model", "value proposition", "market strategy"], "Slide 46.");
  mcq(46, 'm', "The management team is defined as…",
    ["employees of the company responsible for making the business model work", "outside investors who fund the company and give it credibility", "wealthy individuals who invest their own money for an equity share", "the program managers who lead projects in a matrix structure"], "Slide 46.");
  mcq(47, 'm', "Which is listed on the slides as something a strong management team does?",
    ["Gives credibility to outside investors", "Guarantees a monopoly in the market", "Removes the need for a revenue model", "Eliminates all competitors"], "Slide 47.");
  mcq(47, 'h', "Which is NOT listed on the slides as a quality of a strong management team?",
    ["Owns the majority of the company's shares", "Has market-specific knowledge", "Has experience in implementing business plans", "Makes the business model work"], "Slide 47.");
  // Raising capital p49-53
  mcq(49, 'e', "Seed capital is…",
    ["an entrepreneur's personal funds from savings, credit card advances, home equity loans, or family and friends", "money from venture capital firms that invest funds they manage for other investors and want a large stake and control", "money collected from many people over the Internet, usually in small amounts", "a small amount of funding plus business services provided by an incubator"], "Slide 49.");
  mcq(49, 'm', "According to the slides, raising capital is…",
    ["one of the most important functions for a founder of a start-up business and its management team", "only needed after the company becomes profitable and wants to expand into new markets with more products and staff", "the job of the company's customers, who pay for products in advance", "a part of the revenue model that describes how the firm earns money"], "Slide 49.");
  mcq(50, 'm', "According to the slides, additional capital will be needed when…",
    ["the company is not generating enough revenue to cover operating costs", "the company has more customers than its competitors in the market", "the company becomes a first mover in a new marketspace", "the company changes to a functional organizational structure"], "Slide 50.");
  mcq(50, 'e', "Which list shows the traditional sources of capital named on the slides?",
    ["Incubators, commercial banks, angel investors and venture capital firms", "Advertising, subscription, sales, transaction and affiliate fees", "Seed capital, crowdfunding, coupons, discounts and loyalty programs", "Portals, market creators, content providers, e-tailers and brokers"], "Slide 50.");
  mcq(51, 'm', "Which is NOT a traditional source of capital?",
    ["Crowdfunding", "Incubators", "Commercial banks", "Angel investors"], "Slide 51: crowdfunding is the alternative to traditional sources.");
  mcq(52, 'e', "Incubators (sometimes called accelerators) typically provide…",
    ["a small amount of funding plus business, technical and marketing assistance", "large loans that must be repaid with interest by a fixed date", "funds managed for investment banks in exchange for control of the firm", "money collected from the public over the Internet in small amounts"], "Slide 52.");
  mcq(52, 'm', "Incubators are sometimes also referred to as…",
    ["accelerators", "angels", "venture capitalists", "market makers"], "Slide 52.");
  mcq(52, 'm', "What is the main advantage of getting capital as a commercial bank loan?",
    ["It does not require the entrepreneur to give up any ownership of the company", "It never has to be repaid, even if the company becomes profitable", "It is very easy for start-ups with no revenue to get from any bank", "It comes with business, technical and marketing assistance from the bank"], "Slide 52.");
  mcq(52, 'h', "According to the slides, because bank loans are often difficult for start-ups without much revenue, it may be worthwhile to investigate programs offered by…",
    ["governmental agencies", "venture capital firms", "competitors", "market creators"], "Slide 52.");
  mcq(52, 'e', "Angel investors are…",
    ["wealthy individuals or groups who invest their own money in exchange for an equity share", "firms that invest funds they manage for other investors and want control", "banks that provide loans without taking any ownership in the company", "programs that provide funding plus business, technical and marketing services"], "Slide 52.");
  mcq(52, 'e', "Venture capital firms typically…",
    ["invest funds they manage for other investors and want a larger stake and more control", "invest only their own personal savings in exchange for a small equity share", "provide loans that are repaid with interest and leave the founder full ownership", "collect small contributions from many members of the public over the Internet"], "Slide 52.");
  mcq(52, 'h', "What is the key difference between angel investors and venture capital firms?",
    ["Angels invest their own money; VC firms invest funds they manage for other investors and want more control", "Angels must be repaid like a bank loan with interest, while VC firms never take any equity", "Angels only fund non-profit projects, while VC firms only fund banks and large corporations", "There is no real difference; both terms describe wealthy individuals investing their own money"], "Slide 52.");
  mcq(53, 'e', "Using the Internet to enable individuals to collectively contribute money to support a project is called…",
    ["crowdfunding", "angel investing", "seed capital", "venture capital"], "Slide 53.");
  // B2C business models p54-68
  mcq(54, 'm', "Which is NOT one of the major B2C business models?",
    ["Venture capitalist", "Portal", "Market creator", "Transaction broker"], "Slide 54.");
  mcq(54, 'm', "According to the slides, B2C e-commerce, in which online businesses seek to reach individual consumers, is…",
    ["the most well-known and familiar type of e-commerce", "the largest type of e-commerce by total sales volume", "the newest type of e-commerce, enabled by smartphones", "the least common type of e-commerce in most countries"], "Slide 54. (B2B is the largest, Lecture 3.)");
  mcq(55, 'e', "An online retail store where customers can shop at any hour of the day or night without leaving their home or office is a(n)…",
    ["e-tailer", "portal", "market creator", "content provider"], "Slide 55.");
  mcq(55, 'e', "The revenue model of an e-tailer is…",
    ["sales", "transaction fees", "advertising and referral fees", "subscription fees only"], "Slide 55.");
  mcq(55, 'm', "According to the slides, the barriers to entry for an e-tailer are…",
    ["low", "high", "impossible to overcome", "the same as for a bank"], "Slide 55.");
  mcq(55, 'e', "Barriers to entry means…",
    ["the total cost of entering a new marketplace", "the number of competitors already in a market", "the price customers pay for a product online", "the time needed to deliver a product to a customer"], "Slide 55.");
  mcq(56, 'e', "Which e-tailer variation is Amazon?",
    ["Virtual merchant", "Bricks-and-clicks", "Manufacturer-direct", "Portal"], "Slides 55-56.");
  mcq(56, 'e', "Which e-tailer variation is Zara?",
    ["Bricks-and-clicks", "Virtual merchant", "Manufacturer-direct", "Market creator"], "Slides 55-56.");
  mcq(56, 'e', "Which e-tailer variation is Nike?",
    ["Manufacturer-direct", "Bricks-and-clicks", "Virtual merchant", "Transaction broker"], "Slides 55-56.");
  mcq(56, 'm', "In the e-tailer table, “an online distribution channel for a company that also has physical stores” describes…",
    ["bricks-and-clicks", "virtual merchant", "manufacturer-direct", "community provider"], "Slide 56. Examples: Walmart, Zara.");
  mcq(56, 'm', "In the e-tailer table, “a manufacturer uses an online channel to sell direct to the customer” describes…",
    ["manufacturer-direct", "virtual merchant", "bricks-and-clicks", "transaction broker"], "Slide 56.");
  mcq(56, 'm', "Besides Zara, which company is listed in the e-tailer table as a bricks-and-clicks example?",
    ["Walmart", "Amazon", "Nike", "eBay"], "Slide 56.");
  mcq(58, 'e', "Facebook, LinkedIn and Pinterest are examples of which B2C business model?",
    ["Community provider", "Content provider", "Portal", "Transaction broker"], "Slide 58.");
  mcq(58, 'm', "A business that creates an online environment where people with similar interests can transact, share photos and videos and communicate is a…",
    ["community provider", "transaction broker", "service provider", "virtual merchant"], "Slide 58.");
  mcq(58, 'm', "The revenue model of a community provider is typically…",
    ["hybrid: combining advertising, sales and affiliate referral fees", "transaction fees only, charged on every successful sale", "subscription fees only, charged for premium membership", "sales of services only, charged per hour of service"], "Slide 58.");
  mcq(60, 'e', "A business that offers customers newspapers, magazines, books, film, television, music and games online is a…",
    ["content provider", "portal", "service provider", "e-tailer"], "Slide 60.");
  mcq(60, 'm', "“Pay per download (micropayment)” is a revenue model of which B2C business model?",
    ["Content provider", "Market creator", "Portal", "Community provider"], "Slide 60.");
  mcq(62, 'e', "Yahoo and Google, which offer powerful search tools and an integrated package of content and services, are examples of…",
    ["portals", "content providers", "transaction brokers", "e-tailers"], "Slide 62.");
  mcq(62, 'm', "Which B2C business model seeks to be a user's “home base”?",
    ["Portal", "Market creator", "E-tailer", "Service provider"], "Slide 62.");
  mcq(62, 'm', "The revenue models of a portal are…",
    ["advertising and referral fees", "sales of goods to its visitors", "subscription fees for premium access", "transaction fees on every booking"], "Slide 62.");
  mcq(64, 'e', "PayPal (financial services) and Skyscanner (travel services) are examples of which B2C business model?",
    ["Transaction broker", "Market creator", "Community provider", "Service provider"], "Slide 64.");
  mcq(64, 'm', "Processors of online transactions, such as stockbrokers and travel agents, that help customers get things done faster and more cheaply are…",
    ["transaction brokers", "market creators", "content providers", "community providers"], "Slide 64.");
  mcq(64, 'h', "Which industries are listed on the slides as using the transaction broker model?",
    ["Financial services, travel services and entertainment, and job placement services", "Newspapers, magazines, music streaming services, online games and other digital content providers", "Furniture, clothing, groceries and other retail goods", "Metals, mining, manufacturing and heavy industry"], "Slide 64.");
  mcq(66, 'e', "eBay, which uses Internet technology to bring buyers and sellers together, is an example of which B2C business model?",
    ["Market creator", "Transaction broker", "E-tailer", "Community provider"], "Slide 66.");
  mcq(66, 'm', "A market creator builds a digital environment where buyers and sellers can…",
    ["meet, display products, search for products, and establish a price for products", "only read news, watch videos and share content with friends", "borrow money from banks and other financial institutions", "receive a subscription to premium content for a monthly fee and read news, articles and reviews written by experts"], "Slide 66.");
  mcq(66, 'm', "The revenue model of a market creator is…",
    ["transaction fees", "sales of goods", "advertising and referral fees", "pay per download"], "Slide 66.");
  mcq(68, 'e', "Companies that make money by selling users a service, rather than a product, are…",
    ["service providers", "content providers", "e-tailers", "portals"], "Slide 68.");
  mcq(68, 'm', "The revenue model of a service provider is…",
    ["sales of services", "transaction fees", "advertising and referral fees", "hybrid affiliate fees"], "Slide 68.");
  mcq(68, 'h', "The value proposition of service providers is…",
    ["valuable, convenient, time-saving, low-cost alternatives to traditional service providers", "a digital environment where buyers and sellers can meet, display and search for products, and establish prices", "an integrated package of search, content and other services in one place", "an online version of a retail store where customers buy at any hour"], "Slide 68.");
  mcq([64, 66], 'h', "Which two B2C business models both earn revenue mainly from transaction fees?",
    ["Transaction broker and market creator", "Portal and e-tailer", "Content provider and community provider", "Service provider and portal"], "Slides 64 and 66.");
  mcq(56, 'h', "Which B2C business model and revenue model are correctly paired?",
    ["E-tailer: sales of goods", "Portal: transaction fees", "Market creator: sales of services", "Service provider: advertising and referral fees"], "Slides 55-68.");

  /* ---------- Section B ---------- */
  fill(4, 'e', "A [[business model]] is a set of planned activities designed to result in a profit in a marketplace.", "Slide 4.");
  fill(4, 'e', "A [[business plan]] is a document that describes a firm's business model.", "Slide 4.");
  fill(49, 'e', "[[Seed]] capital is an entrepreneur's personal funds derived from savings, credit card advances, home equity loans, or from family and friends.", "Slide 49.");
  fill(19, 'm', "In a [[freemium]] strategy, companies give away a certain level of product or services for free, but charge a subscription fee for premium levels.", "Slide 19.");
  fill(55, 'm', "[[Barriers|barrier]] to entry means the total cost of entering a new marketplace.", "Slide 55.");
  fill(53, 'e', "[[Crowdfunding|crowd funding|crowd-funding]] involves using the Internet to enable individuals to collectively contribute money to support a project.", "Slide 53.");
  fill(46, 'e', "The single most important element of a business model is the [[management team|management]].", "Slide 46.");
  fill(52, 'm', "Incubators are sometimes also referred to as [[accelerators|accelerator]].", "Slide 52.");
  fill(34, 'm', "[[Asymmetry]] exists whenever one participant in a market has more resources than other participants.", "Slide 34.");
  fill(35, 'm', "When a company uses its competitive advantages to achieve more advantage in surrounding markets, it is called [[leverage]].", "Slide 35.");
  fill(8, 'e', "[[Value proposition]] defines how a company's product or service fulfills the needs of customers.", "Slide 8.");
  fill(12, 'e', "The [[revenue model]] describes how the firm will earn revenue, produce profits, and produce a superior return on invested capital.", "Slide 12.");
  fill(14, 'e', "In the [[advertising]] revenue model, a company provides a forum for advertisements and receives fees from advertisers.", "Slide 14.");
  fill(15, 'e', "In the [[subscription]] revenue model, a company offers content or services and charges a fee for access to some or all of its offerings.", "Slide 15.");
  fill(20, 'e', "In the [[transaction fee|transaction]] revenue model, a company receives a fee for enabling or executing a transaction.", "Slide 20.");
  fill(21, 'e', "In the [[sales|sale]] revenue model, companies derive revenue by selling products, content, or services to customers.", "Slide 21.");
  fill(22, 'e', "In the [[affiliate]] revenue model, a company steers business to an affiliate and receives a referral fee or percentage of the revenue from any resulting sales.", "Slide 22.");
  fill(25, 'm', "A [[marketspace|market space]] is an area of actual or potential commercial value in which a company intends to operate.", "Slide 25.");
  fill(25, 'm', "[[Market opportunity]] refers to the company's intended marketspace and the overall potential financial opportunities available to the firm in that marketspace.", "Slide 25.");
  fill(28, 'm', "[[Competitive environment]] refers to the other companies operating in the same marketspace selling similar products.", "Slide 28.");
  fill(29, 'm', "[[Direct competitors|direct]] are companies that sell products and services that are very similar and into the same market segment.", "Slide 29.");
  fill(30, 'm', "[[Indirect competitors|indirect]] are companies that may be in different industries but still compete because their products can substitute for one another.", "Slide 30.");
  fill(33, 'm', "[[Competitive advantage]] is achieved by a firm when it can produce a superior product and/or bring the product to market at a lower price than most, or all, of its competitors.", "Slide 33.");
  fill(34, 'h', "[[First-mover advantage|first mover advantage|first mover]] is a competitive market advantage for a firm that results from being the first into a marketplace with a serviceable product or service.", "Slide 34.");
  fill(34, 'h', "[[Complementary resources|complementary resource]] are resources and assets not directly involved in the production of the product but required for success, such as marketing, management, financial assets, and reputation.", "Slide 34.");
  fill(37, 'm', "[[Market strategy]] is the plan that details exactly how you intend to enter a new market and attract new customers.", "Slide 37.");
  fill(39, 'm', "As a company grows, hiring moves from [[generalists|generalist]] to [[specialists|specialist]].", "Slide 39.");
  fill(40, 'e', "The three general classifications of organizational structures are [[functional]], [[project]], and [[matrix]].", "Slide 40.", { set: true });
  fill(40, 'm', "In the [[matrix]] organization structure, personnel often report to two or more bosses.", "Slide 40.");
  fill(40, 'm', "In the [[project]] organization structure, the program managers report to the CEO.", "Slide 40.");
  fill(40, 'm', "In the [[functional]] organization structure, the functional managers or vice presidents report to the CEO.", "Slide 40.");
  fill(52, 'm', "[[Angel investors|angel investor|angels|angel]] are wealthy individuals or groups who invest their own money in exchange for an equity share in the stock of a business.", "Slide 52.");
  fill(52, 'm', "[[Venture capital firms|venture capital|venture capitalists|vc firms|vc]] typically invest funds they manage for other investors and usually want a larger stake and more control over the business.", "Slide 52.");
  fill(55, 'e', "An [[e-tailer|etailer|e tailer]] is an online retail store where customers can shop at any hour of the day or night without leaving their home or office.", "Slide 55.");
  fill(62, 'm', "A [[portal]] offers users powerful search tools as well as an integrated package of content and services all in one place.", "Slide 62.");
  fill(66, 'm', "A [[market creator]] builds a digital environment where buyers and sellers can meet, display products, search for products, and establish a price for products.", "Slide 66.");
  fill(68, 'e', "[[Service providers|service provider]] are companies that make money by selling users a service, rather than a product.", "Slide 68.");
  fill(60, 'h', "A content provider's “pay per download” revenue is also called a [[micropayment|micropayments|micro payment|micro-payment]].", "Slide 60.");
  fill(58, 'm', "A [[community provider]] creates an online environment where people with similar interests can transact, share interests, photos, and videos, and communicate with like-minded people.", "Slide 58.");
  fill(64, 'm', "[[Transaction brokers|transaction broker]] process online transactions for consumers, such as stockbrokers and travel agents.", "Slide 64.");
  fill(56, 'm', "Zara is an example of the [[bricks-and-clicks|bricks and clicks|brick and click|bricks and click]] e-tailer variation.", "Slides 55-56.");
  fill(56, 'm', "Nike is an example of the [[manufacturer-direct|manufacturer direct]] e-tailer variation.", "Slides 55-56.");
  fill(56, 'm', "Amazon is an example of the [[virtual merchant]] e-tailer variation.", "Slides 55-56.");
  fill(52, 'h', "The advantage of obtaining capital as a bank [[loan]] is that, although it must be repaid, it does not require an entrepreneur to give up any ownership of the company.", "Slide 52.");
  fill(49, 'm', "[[Raising capital]] is one of the most important functions for a founder of a start-up business and its management team.", "Slide 49.");
  fill(39, 'm', "The [[organizational development|organisational development]] plan describes the types of organizational structures within the firm necessary to carry out the business plan.", "Slide 39.");
  fill(54, 'h', "[[B2C|business-to-consumer|business to consumer]] e-commerce, in which online businesses seek to reach individual consumers, is the most well-known and familiar type of e-commerce.", "Slide 54.");
  fill(55, 'm', "The barriers to entry for an e-tailer are [[low]].", "Slide 55.");
  fill(62, 'h', "The revenue models of a portal are advertising and [[referral fees|referral fee|referrals|referral]].", "Slide 62.");
  fill(66, 'm', "The revenue model of a market creator is [[transaction fees|transaction fee|transaction]].", "Slide 66.");
  fill(10, 'h', "Uber's value proposition slogan on the slides is “Everyone's private [[driver]]”.", "Slide 10.");
  fill(40, 'h', "A matrix structure can be weak, [[balanced]], or strong.", "Slide 40.");

  /* ---------- Section C ---------- */
  tf(4, 'e', "A business plan is a document that describes a firm's business model.", true, "True.");
  tf(46, 'e', "The revenue model is the single most important element of a business model.", false, "False. The management team is.");
  tf(52, 'm', "Getting a bank loan requires the entrepreneur to give up ownership of the company.", false, "False. A loan must be repaid, but no ownership is given up.");
  tf(52, 'm', "Venture capital firms usually want to obtain a larger stake and exercise more control over the business.", true, "True.");
  tf(55, 'e', "The barriers to entry for e-tailers are high.", false, "False. They are low.");
  tf(40, 'e', "In a matrix organization, personnel often report to two or more bosses.", true, "True.");
  tf(39, 'm', "As a company grows, hiring moves from specialists to generalists.", false, "False. It moves from generalists to specialists.");
  tf(34, 'm', "Most first movers have the complementary resources needed to sustain their advantage.", false, "False. Most first movers lack them.");
  tf([64, 66], 'm', "A market creator and a transaction broker both earn revenue from transaction fees.", true, "True.");
  tf(30, 'm', "CNN.com and ESPN.com are direct competitors.", false, "False. They are indirect competitors competing for consumers' time online.");
  tf(41, 'e', "Most colleges and universities have very strong functional organizations.", true, "True.");
  tf(52, 'm', "Angel investors invest money that they manage for other investors.", false, "False. Angels invest their own money; VC firms invest funds they manage for others.");
  tf(19, 'e', "A number of companies have been combining the subscription revenue model with a freemium strategy.", true, "True. Example: Spotify.");
  tf(13, 'e', "Most companies rely on one or some combination of the major e-commerce revenue models.", true, "True.");
  tf(30, 'm', "Indirect competitors must sell identical products into the same market segment.", false, "False. That describes direct competitors.");
  tf(52, 'm', "Incubators mainly provide large loans that must be repaid with interest.", false, "False. They provide a small amount of funding plus business, technical and marketing services.");
  tf(68, 'e', "Service providers make money by selling users a product rather than a service.", false, "False. They sell a service rather than a product.");
  tf(5, 'm', "The eight key elements apply to developing a successful business model in any arena, not just e-commerce.", true, "True. Slide 5.");

  /* ---------- Section D ---------- */
  list(5, 'e', 4, "List the eight key elements of an e-commerce business model.",
    [["Value proposition", "value"], ["Revenue model", "revenue"], ["Market opportunity", "opportunit"], ["Competitive environment", "environment"],
     ["Competitive advantage", "advantage"], ["Market strategy", "strateg"], ["Organizational development", "organi", "development"], ["Management team", "management", "team"]],
    { explain: "Slide 5." });
  list(13, 'e', 3, "List the five major types of e-commerce revenue models.",
    [["Advertising", "advertis"], ["Subscription", "subscri"], ["Transaction fee", "transaction"], ["Sales", "sale"], ["Affiliate", "affiliat"]],
    { explain: "Slide 13." });
  list(51, 'e', 2, "What are the traditional sources of capital for start-ups? List them.",
    [["Incubators (accelerators)", "incubat", "accelerat"], ["Commercial banks (loans)", "bank", "loan"], ["Angel investors", "angel"], ["Venture capital firms", "venture", "vc"]],
    { explain: "Slide 51." });
  list(54, 'e', 3, "List the major B2C business models.",
    [["E-tailer", "tailer", "etailer", "retail"], ["Community provider", "communit"], ["Content provider", "content"], ["Portal", "portal"],
     ["Transaction broker", "broker"], ["Market creator", "creator"], ["Service provider", "service"]],
    { explain: "Slide 54." });
  list(31, 'm', 2, "The competitive environment is influenced by different factors. List these factors.",
    [["Number of active competitors", "number", "active"], ["Each competitor's market share", "share"], ["Competitors' profitability", "profitab", "profit"], ["Competitors' pricing", "pric"]],
    { explain: "Slide 31." });
  list(40, 'e', 3, "List the three general classifications of organizational structures.",
    [["Functional", "function"], ["Project", "project"], ["Matrix", "matrix"]], { explain: "Slide 40." });
  list([55, 56], 'm', 3, "List the three variations of the e-tailer model, with an example of each.",
    [["Virtual merchant (Amazon)", "virtual"], ["Bricks-and-clicks (Zara, Walmart)", "brick", "click"], ["Manufacturer-direct (Nike)", "manufactur"]],
    { explain: "Slides 55-56." });
  list(8, 'm', 3, "List the five features of successful e-commerce value propositions (from the consumer point of view).",
    [["Personalization and customization", "personali", "customi"], ["Convenience (24/7)", "convenien", "24"], ["Price / no shipping cost", "price", "shipping"], ["Quick delivery", "deliver"], ["Product/service quality", "quality"]],
    { explain: "Slide 8." });
  list(47, 'm', 2, "List four things a strong management team does or has.",
    [["Makes the business model work", "work"], ["Gives credibility to outside investors", "credib", "investor"], ["Has market-specific knowledge", "knowledge", "market specific"], ["Has experience in implementing business plans", "experience", "implement"]],
    { explain: "Slide 47." });
  list(26, 'h', 3, "List three of the high-level questions used to analyze a market.",
    [["What is the market size?", "size"], ["How quickly is the market expanding or contracting?", "expand", "contract", "grow", "quickly"], ["How many buyers are there?", "buyer"],
     ["What are the barriers to entry?", "barrier", "entry"], ["What is the bargaining power of suppliers?", "bargain", "supplier"], ["What is the intensity of the competition?", "intensity", "competition"],
     ["Is there a threat of new entrants or substitute products or services?", "threat", "new entrant", "substitut"]],
    { n: 3, explain: "Slide 26." });
  list([58, 60, 62, 64, 66, 68], 'h', 3, "State the revenue model for these B2C business models: e-tailer, portal, market creator.",
    [["E-tailer: sales (of goods)", "sale"], ["Portal: advertising and referral fees", "advertis", "referral"], ["Market creator: transaction fees", "transaction"]],
    { explain: "Slides 55, 62, 66." });
  def(4, 'e', 2, "Define a business model and a business plan.",
    [["Business model: set of planned activities designed to result in a profit in a marketplace", "planned activit", "profit"],
     ["Business plan: a document that describes the firm's business model", "document"]],
    "A business model is a set of planned activities designed to result in a profit in a marketplace. A business plan is a document that describes a firm's business model.");
  def(8, 'e', 2, "Define value proposition and give an example from the slides.",
    [["How a company's product or service fulfills the needs of customers", "fulfil", "needs"],
     ["Example: Domino's 30 minutes or it's free, Uber or Grammarly", "domino", "uber", "grammarly", "30 minute"]],
    "Value proposition defines how a company's product or service fulfills the needs of customers. Example: Domino's “fresh, hot pizza delivered to your door in 30 minutes or less or it's free.”");
  def(12, 'e', 2, "Define revenue model.",
    [["How the firm will earn revenue and produce profits", "earn revenue", "revenue", "profit"],
     ["And produce a superior return on invested capital", "return", "invested capital"]],
    "A revenue model describes how the firm will earn revenue, produce profits, and produce a superior return on invested capital.");
  def(33, 'm', 2, "Define competitive advantage.",
    [["Produce a superior product", "superior"],
     ["And/or bring the product to market at a lower price than most or all competitors", "lower price", "cheaper"]],
    "A firm achieves competitive advantage when it can produce a superior product and/or bring the product to market at a lower price than most, or all, of its competitors.");
  def(53, 'e', 2, "Define crowdfunding and seed capital.",
    [["Crowdfunding: using the Internet so individuals collectively contribute money to support a project", "collectively", "contribute", "internet"],
     ["Seed capital: the entrepreneur's personal funds (savings, credit cards, home equity loans, family and friends)", "personal fund", "savings", "family", "friends"]],
    "Crowdfunding involves using the Internet to enable individuals to collectively contribute money to support a project. Seed capital is an entrepreneur's personal funds derived from savings, credit card advances, home equity loans, or from family and friends.");
  def(19, 'm', 2, "Explain the freemium strategy and name a slide example.",
    [["Give away a certain level of product or service free, charge a subscription fee for premium levels", "free", "premium"],
     ["Example: Spotify (or Grammarly)", "spotify", "grammarly"]],
    "In a freemium strategy, companies give away a certain level of product or services for free but charge a subscription fee for premium levels; it is combined with the subscription revenue model. Example: Spotify.");
  def(25, 'm', 2, "Define marketspace and market opportunity.",
    [["Marketspace: area of actual or potential commercial value in which the company intends to operate", "commercial value", "intends to operate"],
     ["Market opportunity: the intended marketspace and the overall potential financial opportunities in it", "financial opportunit", "potential financial"]],
    "A marketspace is the area of actual or potential commercial value in which a company intends to operate. Market opportunity refers to the company's intended marketspace and the overall potential financial opportunities available to the firm in that marketspace.");
  def([29, 30], 'm', 2, "Define direct and indirect competitors.",
    [["Direct: very similar products sold into the same market segment (e.g. Priceline and Travelocity)", "similar", "same market", "same segment", "priceline"],
     ["Indirect: different industries, but products can substitute for one another (e.g. CNN.com and ESPN.com)", "substitut", "different industr", "cnn"]],
    "Direct competitors sell products and services that are very similar and into the same market segment, e.g. Priceline and Travelocity. Indirect competitors may be in different industries but still compete because their products can substitute for one another, e.g. CNN.com and ESPN.com.");
  def(55, 'm', 2, "Define an e-tailer and state its revenue model.",
    [["Online retail store where customers can shop at any hour without leaving home or office", "online retail", "retail store", "any hour"],
     ["Revenue model: sales (barriers to entry are low)", "sale"]],
    "An e-tailer is an online retail store where customers can shop at any hour of the day or night without leaving their home or office. Its revenue model is sales, and its barriers to entry are low.");

  /* ---------- Section E ---------- */
  exp([8, 12, 13], 'm', 5, "Explain these two elements of a business model: value proposition and revenue model.",
    [["Value proposition: how the product or service fulfills customer needs (“Why should the customer buy from you?”)", "fulfil", "needs", "why should"],
     ["Value proposition features: personalization, convenience, price, quick delivery, quality (e.g. Domino's)", "personali", "convenien", "deliver", "quality", "domino"],
     ["Revenue model: how the firm earns revenue, profits and a return on invested capital (“How will you earn money?”)", "earn", "profit", "return"],
     ["Revenue model types: advertising, subscription, transaction fee, sales, affiliate", "advertis", "subscri", "transaction", "affiliat"]],
    "Value proposition defines how a company's product or service fulfills the needs of customers; it answers “Why should the customer buy from you?” Successful e-commerce value propositions include personalization and customization, convenience (24/7), price/no shipping cost, quick delivery, and product/service quality, e.g. Domino's 30-minute delivery. Revenue model describes how the firm will earn revenue, produce profits and produce a superior return on invested capital (“How will you earn money?”). The main types are advertising, subscription, transaction fee, sales and affiliate; for example Spotify uses subscription.");
  exp([14, 15, 20, 21, 22], 'm', 5, "There are five types of e-commerce revenue models; explain three of them with examples.",
    [["Advertising: forum for ads, fees from advertisers (Yahoo, Facebook)", "advertis", "yahoo", "facebook"],
     ["Subscription: fee for access to content or services (Spotify, Grammarly, Adobe)", "subscri", "spotify", "grammarly", "adobe"],
     ["Transaction fee: fee for enabling or executing a transaction (eBay)", "transaction", "ebay"],
     ["Sales: selling products, content or services (Amazon)", "selling product", "amazon"],
     ["Affiliate: referral fee for steering business to an affiliate (travel and hotel sites)", "affiliat", "referral"]],
    "Advertising: a company provides a forum for advertisements and receives fees from advertisers, e.g. Yahoo. Subscription: a company offers content or services and charges a subscription fee for access to some or all of them, e.g. Spotify. Transaction fee: a company receives a fee for enabling or executing a transaction, e.g. eBay charges a seller a small fee when the item sells.",
    { need: 3 });
  exp([54, 55, 62], 'm', 5, "List the major B2C business models, then explain two of them in detail.",
    [["E-tailer: online retail store; shop any hour; sales revenue; low barriers to entry (Amazon, Zara, Nike)", "online retail", "retail store", "any hour", "barrier"],
     ["Community provider: online environment for people with similar interests; hybrid revenue (Facebook)", "similar interest", "hybrid", "linkedin", "pinterest"],
     ["Content provider: newspapers, books, music, games online; subscription, micropayment", "newspaper", "micropayment", "pay per download"],
     ["Portal: powerful search plus integrated content and services; home base; advertising and referral fees (Yahoo, Google)", "search", "integrated", "home base", "google"],
     ["Transaction broker: processes online transactions (PayPal, Skyscanner); transaction fees", "paypal", "skyscanner", "stockbroker", "process"],
     ["Market creator: brings buyers and sellers together to set prices (eBay); transaction fees", "buyers and sellers", "ebay", "establish a price"],
     ["Service provider: sells a service rather than a product; sales of services", "sells users a service", "selling users a service", "rather than a product"]],
    "The B2C business models are e-tailer, community provider, content provider, portal, transaction broker, market creator and service provider. E-tailer: an online retail store where customers can shop at any hour without leaving home or office; revenue model: sales; barriers to entry: low; variations: virtual merchant (Amazon), bricks-and-clicks (Zara), manufacturer-direct (Nike). Portal: offers powerful search tools plus an integrated package of content and services all in one place and seeks to be the user's home base; examples Yahoo and Google; revenue from advertising and referral fees.",
    { need: 2, list: { label: "Lists the seven B2C models", weight: 0.4, items: [["E-tailer", "tailer", "etailer"], ["Community provider", "communit"], ["Content provider", "content"], ["Portal", "portal"], ["Transaction broker", "broker"], ["Market creator", "creator"], ["Service provider", "service provider"]] } });
  exp([29, 30], 'm', 4, "Explain the difference between direct and indirect competitors, with examples.",
    [["Direct: very similar products in the same market segment", "similar", "same market", "same segment"],
     ["Direct example: Priceline and Travelocity (discount airline tickets)", "priceline", "travelocity"],
     ["Indirect: different industries, but products substitute for one another", "different industr", "substitut"],
     ["Indirect example: CNN.com vs ESPN.com, or cars vs airlines", "cnn", "espn", "automobile", "airline"]],
    "Direct competitors are companies that sell products and services that are very similar and into the same market segment, e.g. Priceline and Travelocity, which both sell discount airline tickets online. Indirect competitors may be in different industries but still compete because their products can substitute for one another, e.g. CNN.com and ESPN.com compete for consumers' time online, and automobile manufacturers and airlines both offer means of transportation.");
  exp([50, 51, 52], 'm', 5, "Explain the traditional sources of capital: incubators, commercial banks, angel investors and venture capital firms.",
    [["Incubators (accelerators): small funding plus business, technical and marketing services and introductions", "incubat", "accelerat"],
     ["Commercial banks: a loan must be repaid but no ownership is given up; hard for start-ups", "loan", "ownership", "repaid", "repay"],
     ["Angel investors: wealthy individuals invest their own money for an equity share", "angel", "own money", "equity", "wealthy"],
     ["Venture capital firms: invest funds managed for other investors; want a larger stake and more control", "venture", "control", "stake"]],
    "Incubators (also called accelerators) provide a small amount of funding but, more importantly, business, technical and marketing assistance and introductions to other sources of capital. Commercial banks: a loan is often difficult for a start-up without much revenue; it must be repaid, but the entrepreneur does not give up any ownership. Angel investors are wealthy individuals who invest their own money in exchange for an equity share in the business. Venture capital firms invest funds they manage for other investors such as investment banks and usually want a larger stake and more control over the business.");
  exp([40, 41, 42, 43, 44], 'm', 5, "Describe the three general classifications of organizational structures.",
    [["Functional: functional managers / vice presidents report to the CEO (e.g. universities)", "functional", "vice president", "universit"],
     ["Project: program managers report to the CEO; revenue from projects under contract (engineering, consulting)", "program manager", "consult", "contract"],
     ["Matrix: middle ground between functional and project", "middle ground", "matrix"],
     ["Matrix staff often report to two or more bosses; weak, balanced or strong", "two or more", "boss", "weak", "balanced"]],
    "Functional: the functional managers or vice presidents report to the CEO; for example, most colleges and universities have strong functional organizations. Project: the program managers report to the CEO; staff have the variety of skills needed for their projects, and the organization earns revenue by performing projects under contract, e.g. engineering and consulting companies. Matrix: the middle ground between functional and project structures; personnel often report to two or more bosses, and the structure can be a weak, balanced or strong matrix.");
  exp([33, 34, 35], 'h', 5, "Explain competitive advantage and the concepts of asymmetry, first-mover advantage, complementary resources and leverage.",
    [["Competitive advantage: superior product and/or lower price than competitors", "superior", "lower price"],
     ["Asymmetry: one participant has more resources than others", "asymmetr", "more resource"],
     ["First-mover advantage: being first into the market with a serviceable product", "first"],
     ["Complementary resources: marketing, management, financial assets, reputation; most first movers lack them", "complement", "reputation"],
     ["Leverage: using advantages in surrounding markets (Amazon into online grocery)", "leverag", "grocery", "surrounding"]],
    "A firm achieves competitive advantage when it can produce a superior product and/or bring the product to market at a lower price than most or all of its competitors. Asymmetry exists whenever one participant in a market has more resources than others. First-mover advantage results from being the first into a marketplace with a serviceable product, but most first movers lack the complementary resources needed to sustain it: resources not directly involved in production but required for success, such as marketing, management, financial assets and reputation. Leverage is using competitive advantages to gain more advantage in surrounding markets, e.g. Amazon moving into online grocery using its customer database.");
  exp([5, 8, 12, 25, 28, 33, 37, 39, 46], 'h', 5, "List the eight key elements of an e-commerce business model, then explain two of these elements in detail.",
    [["Value proposition: how the product fulfills customer needs", "fulfil", "why should"],
     ["Revenue model: how the firm earns revenue, profits and return on capital", "earn revenue", "return on", "how will you earn"],
     ["Market opportunity: intended marketspace and its financial potential", "intended marketspace", "financial opportunit"],
     ["Competitive environment: other companies in the same marketspace selling similar products", "other companies", "similar products"],
     ["Competitive advantage: superior product and/or lower price", "superior", "lower price"],
     ["Market strategy: plan to enter a new market and attract customers", "enter a new market", "attract new customer", "promote"],
     ["Organizational development: structures needed to carry out the plan", "organizational structure", "generalist"],
     ["Management team: employees who make the model work; most important element", "most important", "make the business model work", "credibility"]],
    "The eight elements are value proposition, revenue model, market opportunity, competitive environment, competitive advantage, market strategy, organizational development and management team. Value proposition defines how a company's product or service fulfills the needs of customers (“Why should the customer buy from you?”). The management team, the single most important element, is the employees responsible for making the business model work; a strong team gives credibility to outside investors.",
    { need: 2, list: { label: "Lists the eight elements", weight: 0.4, items: [["Value proposition", "value"], ["Revenue model", "revenue"], ["Market opportunity", "opportunit"], ["Competitive environment", "environment"], ["Competitive advantage", "advantage"], ["Market strategy", "strateg"], ["Organizational development", "organi"], ["Management team", "management"]] } });
  exp([28, 31], 'e', 4, "Explain the competitive environment and the factors that influence it.",
    [["Other companies operating in the same marketspace selling similar products", "same marketspace", "similar product", "other companies"],
     ["Includes direct and indirect competitors, new entrants and substitute products", "direct", "indirect", "new entrant", "substitut"],
     ["Factors: number of active competitors and each competitor's market share", "number", "market share"],
     ["Factors: competitors' profitability and pricing", "profitab", "pricing"]],
    "The competitive environment refers to the other companies operating in the same marketspace selling similar products. It includes both direct and indirect competitors, plus new entrants into the market and substitute products. It is influenced by the number of active competitors, each competitor's market share, competitors' profitability and competitors' pricing.");
  exp([58, 60, 62, 64, 66, 68], 'h', 5, "List the revenue model for each B2C business model.",
    [["E-tailer: sales of goods", "e tailer", "etailer"],
     ["Community provider: hybrid (advertising, sales, affiliate referral fees)", "hybrid"],
     ["Content provider: subscription, pay per download (micropayment), advertising, affiliate, digital goods", "micropayment", "pay per download"],
     ["Portal: advertising and referral fees", "portal"],
     ["Transaction broker and market creator: transaction fees", "transaction fee"],
     ["Service provider: sales of services", "sales of service"]],
    "E-tailer: sales of goods. Community provider: hybrid, combining advertising, sales and affiliate referral fees. Content provider: subscription fees, pay per download (micropayment), advertising, affiliate referral and sales of digital goods. Portal: advertising and referral fees. Transaction broker: transaction fees. Market creator: transaction fees. Service provider: sales of services.");
});
