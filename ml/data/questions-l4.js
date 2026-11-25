/* Lecture 4: Regression (PDF pages 3-24). */
EC.lecture(4, function (Q) {
  var mcq = Q.mcq, fill = Q.fill, prac = Q.prac;
  var ERR = `Actual      10   20   30
Predicted   12   17   31`;
  var ERR2 = `Actual       5   10   15   20
Predicted    6    8   15   24`;
  var PRICE = `price = 200 × area + 10000 × bedrooms − 500 × age + 30000`;

  /* ---------- Section A ---------- */
  mcq(3, 'e', "Regression finds the relationship between…",
    ["input variables and an output variable", "two pictures of exactly the same size", "rows that are repeated in a table", "rewards and penalties of a robot"], "Slide 3.");
  mcq(3, 'e', "Regression is mainly used to predict…",
    ["continuous values", "categories only", "unlabeled images", "missing labels"], "Slide 3.");
  mcq(3, 'e', "In regression, the input variable is also called the…",
    ["independent variable", "dependent variable", "predicted output variable", "cost variable"], "Slide 3.");
  mcq(3, 'e', "In regression, the output variable is also called the…",
    ["dependent variable", "independent variable", "coefficient", "intercept"], "Slide 3.");
  mcq(3, 'm', "Which problem is a regression problem?",
    ["Predicting a salary from years of experience", "Deciding if an email is spam or not spam", "Grouping customers who have no labels at all", "Teaching a robot with rewards only"], "A continuous value.");
  mcq(3, 'm', "We predict an exam score from study hours. The exam score is the…",
    ["dependent variable", "independent variable", "slope", "cost function"], "Slide 3.");
  mcq(4, 'm', "Why can linear regression use the area, the age and the rooms of a house to predict its price?",
    ["It considers a linear relation between them", "It considers the rooms as a reward function", "It groups houses that have the same owner", "It removes all the features except the area"], "Slide 4.");
  mcq(5, 'm', "Salary usually increases with experience. Which pattern does this form?",
    ["A linear pattern", "A circular pattern", "A random pattern", "A missing pattern"], "Slide 5.");
  mcq(6, 'h', "For every $1,000 of advertising, sales increase by $5,000. How much do sales increase for $3,000 of advertising?",
    ["$15,000", "$5,000", "$8,000", "$3,000"], "3 × 5,000.");
  mcq(8, 'h', "Producing 100 items costs $1,000 and 200 items cost $2,000. If the relation is linear, what do 350 items cost?",
    ["$3,500", "$3,000", "$2,500", "$35,000"], "$10 for each item.");
  mcq(7, 'm', "A city becomes 0.5°C warmer every decade. By how much is it warmer after 4 decades in a linear model?",
    ["2°C", "0.5°C", "4°C", "4.5°C"], "4 × 0.5.");
  mcq(8, 'm', "When is the relation between production cost and number of items linear?",
    ["When each extra item costs the same", "When each extra item costs more", "When each extra item is free", "When the cost of items is never known"], "Slide 8.");
  mcq(9, 'm', "A model predicts the risk of a disease from age, weight and lifestyle. Which of these is the output?",
    ["The disease risk", "The age", "The body weight", "The lifestyle"], "Slide 9.");
  mcq(10, 'm', "A model predicts the fuel consumption of a car from its speed. The speed is the…",
    ["independent variable", "dependent variable", "intercept of the line", "error"], "Slide 10.");
  mcq(11, 'e', "Which regression is used when there are several input variables?",
    ["Multiple linear regression", "Single variable linear regression", "Label encoding", "Reinforcement learning"], "Slide 11.");
  mcq(11, 'e', "Linear regression is used when the relation between input and output is…",
    ["a straight line", "a circle", "a closed curve", "unknown words"], "Slide 11.");
  mcq(12, 'e', "In y = 2x + 1, what is the value of y when x = 0?",
    ["1", "0", "2", "3"], "2 × 0 + 1.");
  mcq(13, 'm', "In y = 2x + 1, what is the value of y when x = 4?",
    ["9", "8", "7", "6"], "2 × 4 + 1.");
  mcq(13, 'm', "In y = 2x + 1, what is the value of y when x = −2?",
    ["−3", "−5", "5", "3"], "2 × (−2) + 1.");
  mcq(14, 'e', "In y = mx + b, the letter m is the…",
    ["slope", "y-intercept", "output", "error"], "Slide 14.");
  mcq(14, 'e', "In y = mx + b, the letter b is the…",
    ["y-intercept", "slope", "independent input", "gradient"], "Slide 14.");
  mcq(14, 'm', "What is another name for the slope?",
    ["Gradient", "Intercept", "Constant term", "Residual"], "Slide 14.");
  mcq(14, 'm', "Where does the line y = 3x + 5 cross the y-axis?",
    ["At 5", "At 3", "At 0", "At 8"], "The y-intercept is b.");
  mcq(14, 'h', "A line goes through (0, 4) and (1, 7). Its equation is…",
    ["y = 3x + 4", "y = 4x + 3", "y = 7x + 4", "y = 3x + 7"], "b = 4, m = 7 − 4.");
  mcq([5, 14], 'h', "A salary is 400 with 0 years of experience and grows by 50 each year. What is the salary after 6 years?",
    ["700", "450", "650", "300"], "400 + 50 × 6.");
  mcq(15, 'e', "Linear regression is a method of…",
    ["supervised learning", "unsupervised learning", "reinforcement learning", "data cleaning"], "Slide 15.");
  mcq(17, 'e', "The straight line that best represents the relation between input and output is the…",
    ["best-fit line", "cost function", "scatter plot", "y-intercept"], "Slide 17.");
  mcq(16, 'm', "Which graph shows the data points of study hours and grades?",
    ["Scatter plot", "Pie chart", "Family tree", "Process diagram"], "Slide 16.");
  mcq(17, 'm', "In this plot, what does the straight line show?",
    ["The predicted values", "The actual values", "The missing values", "The duplicate data rows"], "Slide 17.", { qfig: 'bestFit' });
  mcq(18, 'm', "In this plot, what does the vertical distance marked with ? show?",
    ["The error", "The slope", "The intercept", "The target"], "Actual − predicted.", { qfig: 'errorBlank' });
  mcq(18, 'e', "What does the cost function measure?",
    ["How well predictions match actual values", "How much money a fast computer costs", "How many columns are in the whole dataset", "How fast the code runs on a computer"], "Slide 18.");
  mcq(18, 'm', "The error of a prediction is…",
    ["the difference between actual and predicted values", "the sum of all the input values of the model", "the number of rows that are used for training it", "the place where the line crosses the y-axis of it"], "Slide 18.");
  mcq(19, 'e', "MSE stands for…",
    ["Mean Squared Error", "Maximum Slope Error", "Model Squared Estimate", "Mean Standard Example"], "Slide 19.");
  mcq(20, 'e', "MAE stands for…",
    ["Mean Absolute Error", "Maximum Actual Error", "Model Accuracy Estimate", "Mean Average Example"], "Slide 20.");
  mcq(19, 'm', "What does MSE do with the differences between actual and predicted values?",
    ["Squares them and takes the average", "Takes their absolute value and the sum", "Takes only the largest difference", "Counts how many of them are zero"], "Slide 19.");
  mcq(20, 'm', "In the formulas of MSE and MAE, n is the…",
    ["number of data points", "predicted value", "actual value", "slope of the straight line"], "Slide 20.");
  mcq(19, 'm', "In the formulas of MSE and MAE, the symbol ŷ is the…",
    ["predicted value", "actual value", "number of points", "y-intercept"], "Slide 19.");
  mcq(20, 'h', "What is the MAE of these predictions?",
    ["2", "6", "1", "0"], "(2 + 3 + 1) / 3 = 2.", { code: ERR });
  mcq(19, 'h', "What is the MSE of these predictions, rounded to two decimals?",
    ["4.67", "14", "2", "6"], "(4 + 9 + 1) / 3 = 4.67.", { code: ERR });
  mcq(19, 'h', "What is the MSE of these predictions?",
    ["5.25", "1.75", "21", "7"], "(1 + 4 + 0 + 16) / 4.", { code: ERR2 });
  mcq(19, 'h', "Which error becomes very large in MSE compared with MAE?",
    ["A big error, because it is squared", "A small error, because it is squared", "A zero error, because it is absolute", "A negative error, because it is added"], "Squaring.");
  mcq(21, 'e', "Multiple linear regression uses…",
    ["several independent variables", "several dependent variables", "no independent variables at all", "only one data point"], "Slide 21.");
  mcq(21, 'm', "In ŷ = m0 + m1x1 + m2x2, the value m0 is the…",
    ["intercept", "independent variable", "predicted value", "number of rows"], "Slide 21.");
  mcq([21, 24], 'm', "In ŷ = m0 + m1x1 + m2x2, the values m1 and m2 are the…",
    ["coefficients", "features", "predictions", "error values"], "Slide 21.");
  mcq(24, 'm', "In price = m1·area + m2·bedrooms + m3·age + b, the dependent variable is…",
    ["price", "area", "bedrooms", "age"], "Slide 24.");
  mcq([23, 24], 'h', "Which price does this model predict for area 100, 2 bedrooms and age 10?",
    ["65000", "75000", "70000", "55000"], "20000 + 20000 − 5000 + 30000.", { code: PRICE });
  mcq(24, 'h', "In this model, what happens to the price when the age of the house increases by one year?",
    ["It decreases by 500", "It increases by 500", "It decreases by 30000", "It does not change"], "The coefficient of age is −500.", { code: PRICE });

  /* ---------- Section B ---------- */
  fill(3, 'e', "Regression is mainly used to predict [[continuous]] values.", "Slide 3.");
  fill(3, 'e', "The input is the [[independent]] variable and the output is the [[dependent]] variable.", "Slide 3.");
  fill(11, 'e', "Regression with several input variables is called [[multiple]] linear regression.", "Slide 11.");
  fill(11, 'm', "Linear regression is used when the relation is a [[straight]] line.", "Slide 11.");
  fill(12, 'm', "In y = 2x + 1, y is [[7]] when x is 3.", "2 × 3 + 1.");
  fill(13, 'm', "In y = 2x + 1, y is [[-1]] when x is −1.", "2 × (−1) + 1.");
  fill(14, 'e', "In y = mx + b, m is the [[slope|gradient]] and b is the y-[[intercept]].", "Slide 14.");
  fill(14, 'm', "The line y = 4x + 9 crosses the y-axis at [[9]], and its slope is [[4]].", "Slide 14.");
  fill(14, 'h', "A line goes through (0, 2) and (1, 8). Its slope is [[6]].", "8 − 2.");
  fill(15, 'e', "Linear regression is a [[supervised]] learning method.", "Slide 15.");
  fill(16, 'm', "The graph that shows each data point of two variables is a [[scatter]] plot.", "Slide 16.");
  fill(17, 'e', "The straight line that best represents the relation is the best-[[fit]] line.", "Slide 17.");
  fill(18, 'm', "The function that measures how well the predictions match the actual values is the [[cost]] function.", "Slide 18.");
  fill(18, 'e', "The difference between the predicted and the actual value is called the [[error]].", "Slide 18.");
  fill(19, 'e', "MSE stands for Mean [[Squared]] Error.", "Slide 19.");
  fill(20, 'e', "MAE stands for Mean [[Absolute]] Error.", "Slide 20.");
  fill(20, 'm', "The actual values are 10 and 20, and the predicted values are 13 and 19. The MAE is [[2]].", "(3 + 1) / 2.");
  fill(19, 'm', "The actual values are 10 and 20, and the predicted values are 13 and 19. The MSE is [[5]].", "(9 + 1) / 2.");
  fill(20, 'h', "The MAE of these predictions is [[1.75]].", "(1 + 2 + 0 + 4) / 4.", { code: ERR2 });
  fill(19, 'h', "The sum of the squared errors of these predictions is [[21]], and the MSE is [[5.25]].", "1 + 4 + 0 + 16 = 21.", { code: ERR2 });
  fill(19, 'm', "In MSE, n is the total number of data [[points|point]].", "Slide 19.");
  fill(21, 'm', "In ŷ = m0 + m1x1 + m2x2, m0 is the [[intercept|constant term|constant]].", "Slide 21.");
  fill(24, 'm', "In price = m1·area + m2·bedrooms + b, the values m1 and m2 are called [[coefficients|coefficient]].", "Slide 24.");
  fill([23, 24], 'h', "The price predicted by this model for area 50, 1 bedroom and age 0 is [[50000]].", "10000 + 10000 + 30000.", { code: PRICE });
  fill([5, 14], 'h', "A salary starts at 300 and grows by 40 each year. After 5 years it is [[500]].", "300 + 5 × 40.");
  fill(10, 'm', "A car uses 5 liters at 50 km/h and 8 liters at 100 km/h. In a linear model it uses [[6.5]] liters at 75 km/h.", "Halfway between 5 and 8.");

  /* ---------- Section C: practical, 10 marks ---------- */
  prac([5, 15], 'm', "Build a linear regression model that predicts a salary.", `data = {
    'Years': [1, 2, 3, 4, 5],
    'Salary': [400, 500, 600, 700, 800]
}`,
    ["Import pandas and LinearRegression, and create a DataFrame.", "Put Years in X and Salary in y.", "Create a linear regression model and train it with X and y.", "Predict and print the salary for 6 years and for 10 years of experience."],
    [["Imports pandas", /importpandas/], ["Imports LinearRegression from sklearn.linear_model", /sklearn\.linear_model[^\n]*LinearRegression|sklearn\.linear_model[^]*LinearRegression/], ["Creates the DataFrame", /DataFrame\(/], ["X is a table with the column Years", /\bX=\w+\[\['Years'\]\]/], ["y is the column Salary", /\by=\w+(\['Salary'\]|\.Salary)/], ["Creates the model", /=LinearRegression\(\)/], ["Trains the model", /\.fit\(X,y\)/], ["Uses `predict` and prints", /\.predict\([^]*print\(|print\([^]*\.predict\(/]],
    `import pandas as pd
from sklearn.linear_model import LinearRegression

data = {
    'Years': [1, 2, 3, 4, 5],
    'Salary': [400, 500, 600, 700, 800]
}
df = pd.DataFrame(data)

X = df[['Years']]
y = df['Salary']

model = LinearRegression()
model.fit(X, y)

new = pd.DataFrame({'Years': [6, 10]})
print(model.predict(new))`,
    [["6 years: 900", "#900~0.5"], ["10 years: 1300", "#1300~0.5"]]);

  prac([22, 23, 24], 'h', "Predict house prices with multiple linear regression.", `data = {
    'area': [1000, 1500, 2000, 2500, 3000],
    'bedrooms': [2, 3, 3, 4, 5],
    'age': [10, 5, 20, 8, 2],
    'price': [120000, 180000, 215000, 282000, 343000]
}`,
    ["Import what you need and create a DataFrame.", "Put area, bedrooms and age in X, and price in y.", "Create and train a linear regression model.", "Predict and print the price of a house with area 1800, 3 bedrooms and age 12, and of a house with area 2200, 4 bedrooms and age 15."],
    [["Imports pandas", /importpandas/], ["Imports LinearRegression", /sklearn\.linear_model[^]*LinearRegression/], ["Creates the DataFrame", /DataFrame\(/], ["X has the three features", /\bX=\w+\[\['area','bedrooms','age'\]\]|\bX=\w+\.drop\([^\n]*'price'/], ["y is the price", /\by=\w+(\['price'\]|\.price)/], ["Creates the model", /=LinearRegression\(\)/], ["Trains the model", /\.fit\(X,y\)/], ["Predicts with the new values", /\.predict\(/]],
    `import pandas as pd
from sklearn.linear_model import LinearRegression

data = {
    'area': [1000, 1500, 2000, 2500, 3000],
    'bedrooms': [2, 3, 3, 4, 5],
    'age': [10, 5, 20, 8, 2],
    'price': [120000, 180000, 215000, 282000, 343000]
}
df = pd.DataFrame(data)

X = df[['area', 'bedrooms', 'age']]
y = df['price']

model = LinearRegression()
model.fit(X, y)

new = pd.DataFrame({'area': [1800, 2200], 'bedrooms': [3, 4], 'age': [12, 15]})
print(model.predict(new))`,
    [["First house: 203000", "#203000~2"], ["Second house: 245000", "#245000~2"]]);

  prac([19, 20], 'm', "Calculate MAE and MSE with plain Python (without sklearn).", `actual = [10, 20, 30, 40]
predicted = [12, 18, 33, 37]`,
    ["Use a loop to go through all the values.", "Calculate the difference between the actual and the predicted value.", "Add up the absolute errors and the squared errors.", "Divide by the number of values to get MAE and MSE.", "Print MAE and MSE."],
    [["Uses the two lists", /actual=\[[^]*predicted=\[/], ["Uses a loop (or a list comprehension)", /\bfor\w/], ["Calculates the difference", /actual\[i\]-predicted\[i\]|predicted\[i\]-actual\[i\]|\w+-\w+/], ["Uses the absolute value", /abs\(/], ["Squares the error", /\*\*2|(\w+)\*\1\b|pow\(/], ["Adds up the errors", /\+=|sum\(|append\(/], ["Divides by the number of values", /\/len\(|\/4|\/n\b/], ["Prints MAE and MSE", /print\([^]*print\(|print\([^\n]*,[^\n]*\)/]],
    `actual = [10, 20, 30, 40]
predicted = [12, 18, 33, 37]

abs_sum = 0
sq_sum = 0
for i in range(len(actual)):
    error = actual[i] - predicted[i]
    abs_sum += abs(error)
    sq_sum += error ** 2

mae = abs_sum / len(actual)
mse = sq_sum / len(actual)
print("MAE:", mae)
print("MSE:", mse)`,
    [["MAE is 2.5", "#2.5"], ["MSE is 6.5", "#6.5"]]);

  /* ---------- Section C: practical, 5 marks ---------- */
  prac([12, 13], 'e', "Calculate the points of the line y = 2x + 1.", `x_values = [-1, 0, 1, 2]`,
    ["Use a loop to go through the x values.", "Calculate y = 2x + 1 for each x.", "Print each y."],
    [["Uses the list of x values", /\[-1,0,1,2\]|range\(-1,3\)/], ["Uses a loop", /\bfor\w/], ["Calculates 2x + 1", /2\*\w+\+1|\w+\*2\+1|1\+2\*\w+/], ["Prints the result", /print\(/]],
    `x_values = [-1, 0, 1, 2]

for x in x_values:
    y = 2 * x + 1
    print(y)`,
    [["Prints −1, 1, 3 and 5", /-1[^]*1[^]*3[^]*5/]]);

  prac(20, 'm', "Calculate the Mean Absolute Error with plain Python.", `actual = [50, 60, 70]
predicted = [48, 63, 69]`,
    ["Use a loop to add up the absolute differences.", "Divide by the number of values.", "Print the MAE."],
    [["Uses a loop", /\bfor\w/], ["Uses the absolute value of the difference", /abs\([^\n]*-/], ["Adds up and divides by the number of values", /\/len\(|\/3|\/n\b/], ["Prints the result", /print\(/]],
    `actual = [50, 60, 70]
predicted = [48, 63, 69]

total = 0
for i in range(len(actual)):
    total += abs(actual[i] - predicted[i])

mae = total / len(actual)
print("MAE:", mae)`,
    [["MAE is 2.0", "#2"]]);

  prac([23, 24], 'm', "Predict a price with given coefficients.", `m1 = 200
m2 = 10000
m3 = -500
b = 30000`,
    ["Create variables for area = 120, bedrooms = 3 and age = 8.", "Calculate price = m1·area + m2·bedrooms + m3·age + b.", "Print the price."],
    [["Defines the features", /area=120[^]*bedrooms=3[^]*age=8/], ["Multiplies each coefficient by its feature", /m1\*area|area\*m1/], ["Adds the three products and the intercept", /\+b\b|b\+/], ["Prints the price", /print\(/]],
    `m1 = 200
m2 = 10000
m3 = -500
b = 30000

area = 120
bedrooms = 3
age = 8

price = m1 * area + m2 * bedrooms + m3 * age + b
print(price)`,
    [["The price is 80000", "#80000"]]);
});
