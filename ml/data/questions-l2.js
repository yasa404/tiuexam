/* Lecture 2: Introduction to machine learning (PDF pages 3-12). */
EC.lecture(2, function (Q) {
  var mcq = Q.mcq, fill = Q.fill;

  /* ---------- Section A ---------- */
  mcq(3, 'e', "Machine Learning is a part of…",
    ["Artificial Intelligence", "Computer Network Security", "Operating Systems", "Web Development"], "Slide 3.");
  mcq(3, 'e', "Machine Learning helps computers learn from data and make predictions…",
    ["without being directly programmed", "only after a person writes every rule", "without using any data at all", "only with the help of the internet"], "Slide 3.");
  mcq(3, 'm', "What usually happens to an ML model as it processes more data?",
    ["It gets better over time", "It forgets all the older data", "It changes into fixed rules", "It stops making predictions"], "Slide 3.");
  mcq([3, 11], 'm', "Which sentence describes Machine Learning best?",
    ["The computer figures out the rules by itself", "The programmer writes all the rules step by step", "The computer follows a formula that never changes", "The user types the correct answer every time"], "Slide 11.");
  mcq([4, 8], 'e', "Which type of learning uses labeled data?",
    ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Traditional programming"], "Slide 8.");
  mcq([6, 8], 'e', "Which type of learning finds hidden patterns in data without labels?",
    ["Unsupervised learning", "Supervised learning", "Reinforcement learning", "Traditional programming"], "Slide 8.");
  mcq(9, 'e', "Which type of learning uses rewards and penalties?",
    ["Reinforcement learning", "Unsupervised data learning", "Supervised learning", "Data cleaning"], "Slide 9.");
  mcq(4, 'm', "A dataset has the size, the rooms and the sale price of each house, and a model must predict the price of new houses. This is…",
    ["supervised learning", "unsupervised learning", "reinforcement learning", "traditional programming"], "Slide 4.");
  mcq(4, 'm', "In a house-price dataset, the size, the location and the number of rooms are the…",
    ["features", "labels", "rewards", "clusters"], "Slide 4.");
  mcq(4, 'm', "In a house-price dataset used for supervised learning, the actual sale price is the…",
    ["label", "feature", "penalty", "cluster"], "Slide 4.");
  mcq(4, 'm', "What does a supervised model learn from its training data?",
    ["The relationship between the features and the output", "The number of rows that are missing in the dataset table", "The groups of customers that have no label at all", "The reward that it receives after every action"], "Slide 4.");
  mcq(4, 'm', "Which task is a use case of supervised learning?",
    ["Diagnosing diseases from labeled medical images", "Grouping customers who have no labels", "A robot that learns a maze by trial and error only", "Adding two numbers with a fixed formula"], "Slide 4.");
  mcq(4, 'h', "A company has 10,000 emails, and each one is already marked “spam” or “not spam”. Which type of learning suits it best?",
    ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Clustering"], "The correct outputs are known.");
  mcq(6, 'e', "Which technique groups similar customers together?",
    ["Clustering", "Labeling", "Rewarding", "Programming"], "Slide 6.");
  mcq(6, 'm', "An online store knows how often customers buy and how much they spend, but has no customer types. Which learning can create groups of customers?",
    ["Unsupervised learning", "Supervised learning", "Reinforcement learning", "Traditional programming"], "Slide 6.");
  mcq(6, 'm', "In unsupervised learning, who gives the groups their predefined labels?",
    ["Nobody: the model finds groups without labels", "The user labels every record before training", "The test data gives a label to every record", "The reward function labels each of the groups"], "Slide 6.");
  mcq(6, 'h', "Which fact shows that a problem is unsupervised?",
    ["The dataset has no target column", "The dataset has a price column to predict", "The model gets a penalty after a mistake", "The programmer writes the grouping rules"], "No labels.");
  mcq(7, 'h', "Look at the table. A clustering model must put similar customers together. Which two customers are the most similar?",
    ["A and C", "A and B", "B and D", "C and D"], "Close spend and purchases.", { code: `Customer   Monthly spend   Purchases
A          500             15
B          50              2
C          480             14
D          210             8` });
  mcq(8, 'm', "Which one is a key feature of supervised learning?",
    ["It predicts outputs for new, unseen data", "It groups similar records without labels", "It learns by trial and error with rewards", "It never needs a dataset for training"], "Slide 8.");
  mcq(8, 'm', "“The model learns by mapping inputs to the correct outputs” describes…",
    ["supervised learning", "unsupervised learning", "reinforcement learning", "clustering"], "Slide 8.");
  mcq(8, 'm', "Which one is a key feature of unsupervised learning?",
    ["It finds hidden patterns", "It uses the correct outputs", "It receives penalties", "It maximizes rewards"], "Slide 8.");
  mcq(9, 'm', "In reinforcement learning, the model learns by…",
    ["interacting with an environment", "reading the labels in a data table", "grouping similar customers", "removing duplicate rows"], "Slide 9.");
  mcq(9, 'm', "What is the goal of reinforcement learning?",
    ["To maximize the total reward over time", "To label every record in the dataset", "To group records into similar clusters", "To reduce the number of columns used"], "Slide 9.");
  mcq(9, 'm', "A robot learns the best path through a maze. What should it receive when it hits an obstacle?",
    ["A penalty", "A reward", "A label", "A feature"], "Slide 9.");
  mcq(9, 'm', "Which application is a typical use of reinforcement learning?",
    ["Game playing", "Handwriting recognition", "House price prediction", "Customer grouping"], "Slide 9.");
  mcq(9, 'm', "A program learns to play chess by playing many games and getting points for winning. This is…",
    ["reinforcement learning", "supervised learning", "unsupervised learning", "traditional programming"], "Rewards.");
  mcq(10, 'm', "A self-driving car model gets +10 for stopping at a red light and −50 for passing it. What will it learn to do?",
    ["Stop at the red light", "Pass the red light", "Ignore all the rewards", "Drive without any goal"], "It maximizes the total reward.");
  mcq(10, 'h', "A car receives these values during one trip: +10, +20, −30, +15. What is its total reward?",
    ["15", "45", "75", "−30"], "10 + 20 − 30 + 15 = 15.");
  mcq(10, 'h', "Trip A has rewards +10, −20, +15. Trip B has rewards +20, +15, −30. Which trip has the higher total reward?",
    ["They are equal", "Trip A", "Trip B", "Trip A by 10 points"], "Both are 5.");
  mcq(10, 'm', "“Learning by trial and error” is a key feature of…",
    ["reinforcement learning", "supervised learning", "unsupervised learning", "traditional programming"], "Slide 10.");
  mcq(11, 'e', "In traditional programming, who writes the rules?",
    ["The programmer", "The computer itself", "The dataset", "The model"], "Slide 11.");
  mcq(11, 'm', "How does Machine Learning work, compared with traditional programming?",
    ["The computer learns from examples", "The computer gets step-by-step rules", "The computer uses one fixed formula", "The computer never uses any data"], "Slide 11.");
  mcq(11, 'm', "How flexible is traditional programming?",
    ["It is hard to change", "It improves over time", "It learns new rules", "It adapts to all data"], "Slide 11.");
  mcq(11, 'm', "Which approach works well with big data?",
    ["Machine Learning", "Traditional programming", "A fixed formula", "Manual calculation"], "Slide 11.");
  mcq(11, 'm', "A program guesses tomorrow’s weather with one fixed formula. This is an example of…",
    ["traditional programming", "supervised learning", "unsupervised learning", "reinforcement learning"], "Slide 11.");
  mcq(11, 'h', "The rules of a problem change every week and there is a lot of past data. Which approach is better, and why?",
    ["Machine Learning, because it improves from new data", "Traditional programming, because its rules are fixed", "Traditional programming, because it needs no rules", "Machine Learning, because it never needs any data"], "Slide 11.");
  mcq(12, 'e', "Fraud detection and loan approval are ML applications in…",
    ["finance", "healthcare", "social media", "voice assistants"], "Slide 12.");
  mcq(12, 'e', "Product recommendations and personalized ads are ML applications in…",
    ["e-commerce", "healthcare", "self-driving cars", "finance"], "Slide 12.");
  mcq(12, 'm', "Speech recognition and language translation are used in…",
    ["voice assistants", "loan approval", "route planning", "stock prediction"], "Slide 12.");
  mcq(12, 'm', "Which ML application belongs to healthcare?",
    ["Predicting patient risks", "Detecting fake news posts", "Planning a car route", "Approving a bank loan"], "Slide 12.");
  mcq(12, 'm', "A car must recognise people and other cars on the road. Which ML task is this?",
    ["Object detection", "Speech recognition", "Fraud detection", "Content recommendation"], "Slide 12.");
  mcq(12, 'm', "Spam and fake news detection are mainly used in…",
    ["social media", "healthcare", "manufacturing", "self-driving cars"], "Slide 12.");
  mcq([4, 6, 9], 'h', "Which pair is matched correctly?",
    ["Labels – supervised; rewards – reinforcement", "Labels – unsupervised; rewards – supervised", "Clusters – supervised; labels – reinforcement", "Rewards – unsupervised; clusters – supervised"], "Slides 4-9.");
  mcq([4, 6], 'h', "The same customer table is used twice: first to predict “will buy: yes/no” from past answers, then to find groups. The two learning types are…",
    ["supervised, then unsupervised", "unsupervised, then supervised", "reinforcement, then supervised", "supervised, then reinforcement"], "Labels first, then no labels.");

  /* ---------- Section B ---------- */
  fill(3, 'e', "Machine Learning (ML) is a part of [[Artificial Intelligence|AI]].", "Slide 3.");
  fill(3, 'm', "ML helps computers learn from [[data]] and make [[predictions|prediction]] without being directly programmed.", "Slide 3.");
  fill([4, 8], 'e', "[[Supervised]] learning uses labeled data.", "Slide 8.");
  fill([6, 8], 'e', "[[Unsupervised]] learning works with data that has no labels.", "Slide 8.");
  fill(9, 'e', "[[Reinforcement]] learning learns from rewards and penalties.", "Slide 9.");
  fill(4, 'm', "In supervised learning, the inputs are called [[features|feature]] and the correct outputs are called [[labels|label]].", "Slide 8.");
  fill(4, 'm', "After [[training]], a supervised model can predict the output for new data.", "Slide 4.");
  fill(6, 'm', "Putting similar customers together without labels is called [[clustering]].", "Slide 6.");
  fill(6, 'm', "An unsupervised model finds hidden [[patterns|pattern]] in the data.", "Slide 8.");
  fill(9, 'm', "In reinforcement learning, the model interacts with an [[environment]].", "Slide 9.");
  fill(9, 'm', "A good action gets a [[reward]], and a bad action gets a [[penalty]].", "Slide 9.");
  fill(10, 'm', "The goal of reinforcement learning is to [[maximize|maximise]] the total reward over time.", "Slide 10.");
  fill(10, 'm', "Reinforcement learning learns by trial and [[error]].", "Slide 10.");
  fill(10, 'h', "A robot gets +20, −10 and +5. Its total reward is [[15]].", "20 − 10 + 5 = 15.");
  fill(11, 'e', "In [[traditional]] programming, the programmer writes the rules.", "Slide 11.");
  fill(11, 'm', "In Machine Learning, the computer learns from [[examples|data]] instead of step-by-step rules.", "Slide 11.");
  fill(11, 'm', "Machine Learning works well with [[big]] data, while traditional programming struggles with too much data.", "Slide 11.");
  fill([4, 9], 'm', "Predicting house prices is [[supervised]] learning, and a robot that learns a maze with rewards is [[reinforcement]] learning.", "Slides 4 and 9.");
  fill(12, 'e', "Diagnosing diseases from medical images is an ML application in [[healthcare|health care]].", "Slide 12.");
  fill(12, 'm', "Product recommendation is an ML application in [[e-commerce|ecommerce]].", "Slide 12.");
  fill(8, 'm', "A supervised model learns by mapping inputs to the correct [[outputs|output]].", "Slide 8.");
  fill([6, 4], 'h', "A dataset with no target column suits [[unsupervised]] learning, and a dataset with a target column suits [[supervised]] learning.", "Slides 4-8.");
});
