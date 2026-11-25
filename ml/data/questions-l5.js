/* Lecture 5: Underfitting, overfitting, building a model, accuracy and outliers (PDF pages 3-33). */
EC.lecture(5, function (Q) {
  var mcq = Q.mcq, fill = Q.fill, prac = Q.prac;
  var SPLIT = `X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)`;
  var SORTED8 = `data = [2, 4, 6, 8, 10, 12, 14, 16]`;
  var SORTED7 = `data = [1, 3, 5, 7, 9, 11, 13]`;
  var ZLOOP = `for i in range(len(z_scores)):
    if abs(z_scores[i]) > 2:
        outliers.append(data[i])`;

  /* ---------- Section A: underfitting / overfitting ---------- */
  mcq(3, 'e', "A model is too simple and cannot learn the pattern. This is called…",
    ["underfitting", "overfitting", "a good model fit", "encoding"], "Slide 3.");
  mcq(6, 'e', "A model learns too much from the training data, including noise. This is called…",
    ["overfitting", "underfitting", "a good fit", "splitting"], "Slide 6.");
  mcq(3, 'm', "A straight line is used for data that follows a curve. What is the result?",
    ["Underfitting", "Overfitting", "A perfect fit", "An outlier"], "Slide 3.");
  mcq(5, 'm', "Which signs show underfitting?",
    ["High training error and high test error", "Low training error and high test error", "Low training error and low test error", "Zero training error and low test error"], "Slide 5.");
  mcq(6, 'm', "Which signs show overfitting?",
    ["High training accuracy and low test accuracy", "Low training accuracy and low test accuracy", "Low training accuracy and high test accuracy", "High training accuracy and high test accuracy"], "Slide 6.");
  mcq(6, 'm', "A student memorizes the homework answers but fails new exam questions. Which problem is this like?",
    ["Overfitting", "Underfitting", "Missing data", "A good fit"], "Slide 6.");
  mcq(3, 'm', "Which one can cause underfitting?",
    ["Not enough training time", "Too many branches in a tree", "Learning the noise of the data", "A model that is too complex"], "Slide 3.");
  mcq(4, 'm', "Which picture shows underfitting?",
    ["A", "B", "C", "A and C"], "A straight line for a curve.", { qfig: 'fits' });
  mcq(4, 'm', "Which picture shows overfitting?",
    ["C", "A", "B", "A and B"], "The line follows every point.", { qfig: 'fits' });
  mcq(6, 'h', "Model 1: 99% on training data and 60% on test data. Model 2: 90% on training data and 88% on test data. Which is the better model, and why?",
    ["Model 2, because it works well on new data", "Model 1, because its training result is higher", "Model 1, because its test result is lower", "Model 2, because it underfits the test data"], "Model 1 overfits.");
  mcq(6, 'h', "A decision tree with too many branches is likely to…",
    ["overfit", "underfit", "have no training data", "have a high training error"], "Too complex.");

  /* building the model */
  mcq(7, 'e', "Which library helps with mathematical calculations?",
    ["`numpy`", "`pandas`", "`matplotlib`", "`sklearn`"], "Slide 7.");
  mcq(7, 'e', "Which library is used to handle datasets as tables?",
    ["`pandas`", "`numpy`", "`matplotlib`", "`random`"], "Slide 7.");
  mcq(7, 'e', "Which library helps to draw graphs?",
    ["`matplotlib.pyplot`", "`sklearn.metrics`", "`sklearn.preprocessing`", "`numpy`"], "Slide 7.");
  mcq(7, 'm', "From which module is `train_test_split` imported?",
    ["`sklearn.model_selection`", "`sklearn.linear_model`", "`sklearn.metrics.regression`", "`sklearn.preprocessing`"], "Slide 7.");
  mcq(7, 'm', "From which module is `LinearRegression` imported?",
    ["`sklearn.linear_model`", "`sklearn.metrics`", "`sklearn.model_selection`", "`sklearn.preprocessing`"], "Slide 7.");
  mcq(7, 'm', "From which module is `mean_squared_error` imported?",
    ["`sklearn.metrics`", "`sklearn.linear_model`", "`sklearn.model_selection`", "`matplotlib.pyplot`"], "Slide 7.");
  mcq(8, 'm', "What does `print(df.head())` show?",
    ["The first 5 rows", "The last 5 rows", "The column names only", "All of the rows"], "Slide 8.");
  mcq(9, 'e', "Why do we split a dataset into training and testing parts?",
    ["To train the model and then check how well it works", "To remove the missing values from the data table", "To make the number of columns of the table much smaller", "To convert the text columns into numbers"], "Slide 9.");
  mcq(9, 'm', "In this code, what percentage of the data is used for training?",
    ["80%", "20%", "42%", "100%"], "test_size=0.2.", { code: SPLIT });
  mcq(9, 'h', "A dataset has 50 rows. How many rows are in `X_test`?",
    ["10", "40", "42", "20"], "20% of 50.", { code: SPLIT });
  mcq(10, 'm', "What does `random_state=42` do?",
    ["Keeps the split the same in every run", "Uses 42 rows for training the model", "Makes the model 42 times more accurate", "Removes 42 random rows from the data"], "Slide 10.");
  mcq(11, 'e', "Which method trains the model?",
    ["`fit()`", "`predict()`", "`head()`", "`split()`"], "Slide 11.");
  mcq(11, 'e', "Which method gives the predictions of the model?",
    ["`predict()`", "`fit()`", "`dropna()`", "`train_test()`"], "Slide 11.");
  mcq(11, 'm', "Which line trains the model correctly?",
    ["`model.fit(X_train, y_train)`", "`model.fit(X_test, y_test)`", "`model.predict(X_train, y_train)`", "`model.train(y_test)`"], "Slide 11.");
  mcq(11, 'h', "Which line gives predictions that can be compared with `y_test`?",
    ["`y_pred = model.predict(X_test)`", "`y_pred = model.predict(y_test)`", "`y_pred = model.fit(X_test)`", "`y_pred = model.predict(X_train)`"], "Predict from the test inputs.");
  mcq([9, 11], 'h', "Which order is correct?",
    ["Split, create the model, fit, predict, measure the error", "Fit, split, measure the error, create the model, predict", "Predict, fit, split, create the model, measure the error", "Measure the error, predict, create the model, fit, split"], "Slides 9-12.");

  /* accuracy */
  mcq(12, 'e', "Which value means more accurate predictions?",
    ["A lower MAE", "A higher MAE", "A higher MSE", "A higher RMSE"], "Slide 12.");
  mcq(12, 'm', "MAE = 3 for exam scores. What does it mean?",
    ["Predictions are 3 points away on average", "Exactly 3 of all the predictions are wrong", "The model has 3 features only", "The scores are 3 percent higher"], "Slide 12.");
  mcq(12, 'm', "RMSE is the square root of…",
    ["MSE", "MAE", "the mean", "the IQR"], "Slide 12.");
  mcq(12, 'm', "Why do we take the square root of MSE?",
    ["To return to the original scale", "To make the error negative", "To remove all of the outliers", "To split the data once again"], "Slide 12.");
  mcq(12, 'h', "The MSE of a model is 16. What is its RMSE?",
    ["4", "8", "256", "16"], "√16.");

  /* outliers */
  mcq(13, 'e', "A data point that is very different from the rest is called…",
    ["an outlier", "a feature", "a target", "a clean record"], "Slide 13.");
  mcq(13, 'm', "Which value is an outlier in: 20, 22, 21, 19, 95, 20?",
    ["95", "19", "22", "21"], "Far from the rest.");
  mcq(15, 'm', "Why should outliers usually be handled?",
    ["They can make predictions inaccurate", "They make the code impossible to run", "They are always the correct values", "They add new columns to the table"], "Slide 15.");
  mcq(15, 'm', "Which graphs can help us to see outliers?",
    ["Scatter plots and box plots", "Pie charts and family trees", "Flow charts and maps", "Tables and documents"], "Slide 15.");
  mcq(15, 'm', "Which two statistical methods detect outliers?",
    ["Z-score and IQR", "MSE and MAE", "One-hot and ordinal", "fit and predict"], "Slide 15.");
  mcq(16, 'm', "A weight was typed as 500 kg instead of 50 kg. What should be done with this outlier?",
    ["Remove it, because it is a mistake", "Keep it, because it is the largest", "Use it as the target of the model", "Copy it to the other rows"], "Slide 16.");
  mcq(16, 'm', "Which model is less sensitive to outliers?",
    ["Decision tree", "Linear regression", "A straight line", "The mean"], "Slide 16.");
  mcq(17, 'e', "The Z-score tells how far a value is from the mean in…",
    ["standard deviations", "percent", "quartiles of the data", "rows"], "Slide 17.");
  mcq(17, 'e', "A Z-score of 0 means that the value is…",
    ["equal to the mean", "always an outlier", "below the mean", "above the mean"], "Slide 17.");
  mcq(17, 'm', "A Z-score of −1 means that the value is one standard deviation…",
    ["below the mean", "above the mean", "equal to the mean", "above the median"], "Slide 17.");
  mcq([17, 22], 'm', "Which Z-score is usually considered an outlier?",
    ["3.4", "−2.1", "1.5", "0"], "Above 3 or below −3.");
  mcq(18, 'm', "Which formula gives the Z-score?",
    ["(X − μ) / σ", "(μ − X) × σ", "X / (μ + σ)", "(X + μ) / σ"], "Slide 18.");
  mcq(18, 'h', "The mean is 70 and the standard deviation is 10. The Z-score of 95 is…",
    ["2.5", "25", "−2.5", "9.5"], "(95 − 70) / 10.");
  mcq(18, 'h', "The mean is 50 and the standard deviation is 4. The Z-score of 38 is…",
    ["−3", "3", "−12", "0.33"], "(38 − 50) / 4.");
  mcq(20, 'h', "The variance of a dataset is 25. Its standard deviation is…",
    ["5", "25", "12.5", "625"], "Square root.");
  mcq(22, 'h', "A value has a Z-score of −2.4. With the threshold ±3 and then with the threshold ±2, it is…",
    ["not an outlier, then an outlier", "an outlier, then not an outlier", "an outlier with both thresholds", "not an outlier with any of them"], "Slide 22.");
  mcq(23, 'm', "What does `variance ** 0.5` calculate?",
    ["The square root of the variance", "Half of the variance", "The variance times 0.5", "The square of the variance value"], "Slide 23.");
  mcq(24, 'm', "Why does this code use `abs()`?",
    ["To check positive and negative Z-scores", "To change the Z-scores to integers only", "To remove the first value of the list", "To calculate the mean of the Z-scores"], "Slide 24.", { code: ZLOOP });
  mcq(25, 'e', "IQR stands for…",
    ["Interquartile Range", "Internal Quality Rate", "Integer Quartile Root", "Input Query Range"], "Slide 25.");
  mcq(25, 'm', "IQR looks at which part of the data?",
    ["The middle 50%", "The first 10%", "The largest value", "The last 25%"], "Slide 25.");
  mcq(26, 'e', "IQR is calculated with…",
    ["Q3 − Q1", "Q1 − Q3", "Q1 + Q3", "Q3 ÷ Q1"], "Slide 26.");
  mcq(25, 'm', "Q1 is the median of…",
    ["the lower half of the data", "the upper half of the data", "the whole data", "the outliers only"], "Slide 25.");
  mcq(26, 'm', "Which formula gives the upper bound?",
    ["Q3 + 1.5 × IQR", "Q3 − 1.5 × IQR", "Q1 + 1.5 × IQR", "Q1 − 1.5 × IQR"], "Slide 26.");
  mcq(26, 'e', "What must be done first before Q1 and Q3 are found?",
    ["Sort the data", "Fill the data", "Encode the data", "Split X and y"], "Slide 26.");
  mcq(28, 'h', "What are Q1 and Q3 of this sorted data?",
    ["Q1 = 5, Q3 = 13", "Q1 = 4, Q3 = 14", "Q1 = 6, Q3 = 12", "Q1 = 2, Q3 = 16"], "(4 + 6) / 2 and (12 + 14) / 2.", { code: SORTED8 });
  mcq(30, 'h', "What are Q1 and Q3 of this sorted data (the middle value is excluded)?",
    ["Q1 = 3, Q3 = 11", "Q1 = 5, Q3 = 9", "Q1 = 1, Q3 = 13", "Q1 = 4, Q3 = 10"], "Halves 1, 3, 5 and 9, 11, 13.", { code: SORTED7 });
  mcq(27, 'h', "Q1 = 20 and Q3 = 30. Which value is an outlier?",
    ["50", "44", "10", "6"], "Bounds: 5 and 45.");
  mcq(30, 'm', "A sorted list has 11 numbers. What is done with the middle number when the halves are made?",
    ["It is excluded", "It is in both halves", "It is doubled", "It is set to zero"], "Slide 30.");

  /* ---------- Section B ---------- */
  fill([3, 6], 'e', "A model that is too simple has [[underfitting]], and a model that learns the noise has [[overfitting]].", "Slides 3 and 6.");
  fill(5, 'm', "Underfitting has a high training error and a high [[test|testing]] error.", "Slide 5.");
  fill(6, 'm', "An overfitted model performs very well on the [[training|train]] data but poorly on new data.", "Slide 6.");
  fill(7, 'e', "Complete the import of the library for mathematical calculations: [[numpy]].", "Slide 7.", { code: `import ________ as np` });
  fill(7, 'm', "Complete the code: [[LinearRegression]].", "Slide 7.", { code: `from sklearn.linear_model import ________` });
  fill(7, 'm', "Complete the code: [[model_selection]].", "Slide 7.", { code: `from sklearn.________ import train_test_split` });
  fill(7, 'm', "Complete the code: [[metrics]].", "Slide 7.", { code: `from sklearn.________ import mean_absolute_error` });
  fill(8, 'e', "Complete the code so that it shows the first 5 rows: [[head]].", "Slide 8.", { code: `print(df.________())` });
  fill(9, 'm', "Complete the code so that 20% of the data is used for testing: (1) [[train_test_split]], (2) [[0.2]].", "Slide 9.", { code: `X_train, X_test, y_train, y_test = (1)____(X, y, test_size=(2)____)` });
  fill(9, 'm', "A dataset has 200 rows and test_size=0.2. The number of training rows is [[160]].", "80% of 200.");
  fill(10, 'm', "Complete the code so that the split is always the same: [[random_state]].", "Slide 10.", { code: `train_test_split(X, y, test_size=0.2, ________=42)` });
  fill(11, 'e', "Complete the code so that the model is trained: [[fit]].", "Slide 11.", { code: `model = LinearRegression()
model.________(X_train, y_train)` });
  fill(11, 'e', "Complete the code so that it predicts the test scores: [[predict]].", "Slide 11.", { code: `y_pred = model.________(X_test)` });
  fill(12, 'm', "Complete the code: (1) [[mean_absolute_error]], (2) [[mean_squared_error]].", "Slide 12.", { code: `mae = (1)____(y_test, y_pred)   # average error
mse = (2)____(y_test, y_pred)   # squared error` });
  fill(12, 'm', "Complete the code so that it calculates RMSE: [[sqrt]].", "Slide 12.", { code: `rmse = np.________(mse)` });
  fill(12, 'm', "The MSE of a model is 9, so its RMSE is [[3]].", "√9.");
  fill(13, 'e', "A data point that is very different from the rest is called an [[outlier]].", "Slide 13.");
  fill(15, 'm', "Outliers can be seen with a scatter plot or a [[box]] plot.", "Slide 15.");
  fill(17, 'e', "The Z-score is also called the [[standard]] score.", "Slide 17.");
  fill(17, 'm', "A Z-score above [[3]] or below [[-3]] is usually considered an outlier.", "Slide 17.");
  fill(18, 'm', "In Z = (X − μ) / σ, μ is the [[mean|average]] and σ is the standard [[deviation]].", "Slide 18.");
  fill(18, 'm', "The mean is 60 and the standard deviation is 5. The Z-score of 70 is [[2]].", "(70 − 60) / 5.");
  fill(18, 'h', "The mean is 40 and the standard deviation is 8. The Z-score of 30 is [[-1.25]].", "(30 − 40) / 8.");
  fill(19, 'm', "The mean of 4, 8, 6 and 10 is [[7]].", "28 / 4.");
  fill(20, 'h', "The data is 2, 4, 6 and 8, so the mean is 5. The variance is [[5]].", "(9 + 1 + 1 + 9) / 4.");
  fill(23, 'm', "Complete the code so that it calculates the mean: (1) [[sum]], (2) [[len]].", "Slide 23.", { code: `mean = (1)____(data) / (2)____(data)` });
  fill(23, 'm', "Complete the code so that the squared difference is added to the list: [[append]].", "Slide 23.", { code: `for x in data:
    squared_diffs.________((x - mean) ** 2)` });
  fill(24, 'm', "Complete the code so that it also finds negative Z-scores: [[abs]].", "Slide 24.", { code: `if ________(z_score) > 2:
    outliers.append(x)` });
  fill(25, 'e', "IQR looks at the middle [[50|50%|fifty]] percent of the data.", "Slide 25.");
  fill(26, 'e', "IQR = [[Q3]] − [[Q1]].", "Slide 26.");
  fill(26, 'm', "The lower bound is Q1 − [[1.5]] × IQR.", "Slide 26.");
  fill(27, 'h', "Q1 = 10 and Q3 = 18. The IQR is [[8]], the lower bound is [[-2]] and the upper bound is [[30]].", "10 − 12 and 18 + 12.");
  fill(28, 'h', "For this sorted data, Q1 is [[5]] and Q3 is [[13]].", "Average of the two middle numbers of each half.", { code: SORTED8 });
  fill(30, 'h', "For this sorted data, the IQR is [[8]].", "Q3 = 11, Q1 = 3.", { code: SORTED7 });
  fill(16, 'm', "Data with outliers can be transformed, for example with a [[log|logarithm|logarithmic]] transformation.", "Slide 16.");

  /* ---------- Section C: practical, 10 marks ---------- */
  prac([7, 8, 9, 11, 12], 'h', "Build, test and measure a linear regression model.", `data = {
    'Hours_Studied': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    'Test_Score': [12, 22, 29, 41, 52, 58, 71, 79, 90, 98]
}`,
    ["Import what you need and create a DataFrame.", "Put Hours_Studied in X and Test_Score in y.", "Split the data: 80% training and 20% testing, with random_state=42.", "Create and train a linear regression model.", "Predict the scores of the test data.", "Print the MAE and the MSE."],
    [["Imports pandas", /importpandas/], ["Imports train_test_split and LinearRegression", /train_test_split[^]*LinearRegression|LinearRegression[^]*train_test_split/], ["Defines X and y", /\bX=\w+\[\['Hours_Studied'\]\][^]*\by=\w+(\['Test_Score'\]|\.Test_Score)/], ["Splits with test_size=0.2 and random_state=42", /train_test_split\(X,y,[^]*test_size=0?\.2[^]*random_state=42|train_test_split\(X,y,[^]*random_state=42[^]*test_size=0?\.2/], ["Creates the model", /=LinearRegression\(\)/], ["Trains with the training data", /\.fit\(X_train,y_train\)/], ["Predicts from the test data", /\.predict\(X_test\)/], ["Uses both error functions", /mean_absolute_error\(y_test,[^]*mean_squared_error\(y_test,|mean_squared_error\(y_test,[^]*mean_absolute_error\(y_test,/]],
    `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error

data = {
    'Hours_Studied': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    'Test_Score': [12, 22, 29, 41, 52, 58, 71, 79, 90, 98]
}
df = pd.DataFrame(data)

X = df[['Hours_Studied']]
y = df['Test_Score']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print("MAE:", mean_absolute_error(y_test, y_pred))
print("MSE:", mean_squared_error(y_test, y_pred))`,
    [["The MAE is about 1.0", /mae\D*(1\.0|0\.99)/, "#1~0.005"], ["The MSE is about 1.04", "#1.0428~0.006"]]);

  prac([7, 9, 11, 12], 'h', "Predict sales from advertising and compare actual and predicted values.", `data = {
    'Ads': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    'Sales': [7, 11, 18, 22, 27, 33, 36, 43, 46, 52]
}`,
    ["Import what you need and create a DataFrame.", "Put Ads in X and Sales in y.", "Split the data with test_size=0.2 and random_state=42, and print the number of training rows and test rows.", "Create, train and use a linear regression model to predict the test data.", "Print a table with the actual and the predicted values."],
    [["Imports pandas and LinearRegression", /importpandas[^]*LinearRegression|LinearRegression[^]*importpandas/], ["Defines X and y", /\bX=\w+\[\['Ads'\]\][^]*\by=\w+(\['Sales'\]|\.Sales)/], ["Splits the data", /train_test_split\(X,y/], ["Uses test_size=0.2 and random_state=42", /test_size=0?\.2[^]*random_state=42|random_state=42[^]*test_size=0?\.2/], ["Prints the number of rows", /len\(X_train\)|X_train\.shape/], ["Trains the model", /\.fit\(X_train,y_train\)/], ["Predicts the test data", /\.predict\(X_test\)/], ["Makes a table of actual and predicted values", /DataFrame\(\{[^}]*y_test[^}]*\}/]],
    `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

data = {
    'Ads': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    'Sales': [7, 11, 18, 22, 27, 33, 36, 43, 46, 52]
}
df = pd.DataFrame(data)

X = df[['Ads']]
y = df['Sales']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)
print("Training rows:", len(X_train))
print("Test rows:", len(X_test))

model = LinearRegression()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

results = pd.DataFrame({'Actual': y_test, 'Predicted': y_pred})
print(results)`,
    [["8 training rows and 2 test rows", /\b8\b[^]*\b2\b/], ["Shows the actual values 46 and 11 with their predictions", /46[^]*11/]]);

  prac([23, 24], 'm', "Find the outliers of a list with the Z-score.", `data = [12, 14, 15, 13, 16, 14, 90]`,
    ["Calculate the mean of the data.", "Calculate the variance and the standard deviation.", "Calculate the Z-score of each value.", "Put each value whose Z-score is above 2 or below −2 in a list of outliers.", "Print the mean and the outliers."],
    [["Calculates the mean", /sum\(\w+\)\/len\(|\.mean\(/], ["Calculates the squared differences", /\*\*2|\.std\(|\.var\(/], ["Calculates the variance or the standard deviation", /\/len\(|\.std\(|\.var\(/], ["Takes the square root", /\*\*0?\.5|\*\*\(1\/2\)|sqrt\(|\.std\(/], ["Goes through the values", /\bfor\w|\[abs\(/], ["Calculates the Z-score (x − mean) / std", /\(\w+-\w+\)\/\w+/], ["Compares the absolute value with 2", /abs\([^\n]*>=?2|>2[^\n]*<-2|<-2[^\n]*>2/], ["Collects and prints the outliers", /(append\(|\[[^\n]*for)[^]*print\(/]],
    `data = [12, 14, 15, 13, 16, 14, 90]

mean = sum(data) / len(data)

squared_diffs = []
for x in data:
    squared_diffs.append((x - mean) ** 2)
variance = sum(squared_diffs) / len(data)
std_dev = variance ** 0.5

outliers = []
for x in data:
    z = (x - mean) / std_dev
    if abs(z) > 2:
        outliers.append(x)

print("Mean:", mean)
print("Outliers:", outliers)`,
    [["The mean is about 24.86", "#24.86~0.01"], ["The outlier is 90", "#90"]]);

  prac([26, 27, 32], 'h', "Find the outliers of a list with an even number of values using IQR.", `data = [22, 18, 20, 95, 24, 19, 21, 23]`,
    ["Sort the data.", "Split it into a lower half and an upper half.", "Find Q1 and Q3: the median of each half.", "Calculate the IQR, the lower bound and the upper bound.", "Print Q1, Q3, the IQR, the bounds and the outliers."],
    [["Sorts the data", /sorted\(|\.sort\(/], ["Finds the middle position", /\/\/2|len\(\w+\)\/2/], ["Makes the two halves", /\[:\w+\][^]*\[[^\]]+:\]/], ["Finds Q1 and Q3 as medians", /\bq1=[^]*\bq3=|\bQ1=[^]*\bQ3=/], ["Calculates the IQR", /=q3-q1|=Q3-Q1/], ["Calculates the lower bound", /(q1|Q1)-\(?1\.5\*/], ["Calculates the upper bound", /(q3|Q3)\+\(?1\.5\*/], ["Finds the values outside the bounds", /<\w+[^\n]*or[^\n]*>\w+|>\w+[^\n]*or[^\n]*<\w+/]],
    `data = [22, 18, 20, 95, 24, 19, 21, 23]

data.sort()
middle = len(data) // 2
lower_half = data[:middle]
upper_half = data[middle:]

def median(values):
    n = len(values)
    if n % 2 == 0:
        return (values[n // 2 - 1] + values[n // 2]) / 2
    return values[n // 2]

q1 = median(lower_half)
q3 = median(upper_half)
iqr = q3 - q1
lower = q1 - 1.5 * iqr
upper = q3 + 1.5 * iqr

outliers = []
for x in data:
    if x < lower or x > upper:
        outliers.append(x)

print("Q1:", q1)
print("Q3:", q3)
print("IQR:", iqr)
print("Bounds:", lower, upper)
print("Outliers:", outliers)`,
    [["Q1 = 19.5, Q3 = 23.5 and the bounds are 13.5 and 29.5", /19\.5[^]*23\.5[^]*13\.5[^]*29\.5/], ["The outlier is 95", "#95"]]);

  prac([30, 31, 32, 33], 'h', "Find the outliers of a list with an odd number of values using IQR.", `data = [10, 12, 11, 13, 60, 14, 12, 15, 11]`,
    ["Sort the data.", "Split it into two halves without the middle value.", "Find Q1 and Q3: the median of each half.", "Calculate the IQR, the lower bound and the upper bound.", "Print Q1, Q3, the IQR and the outliers."],
    [["Sorts the data", /sorted\(|\.sort\(/], ["Finds the middle position", /\/\/2|len\(\w+\)\/2/], ["Makes the lower half", /\[:\w+[^\]]*\]/], ["Makes the upper half without the middle value", /\[[^\]]+\+1:\]|\[5:\]/], ["Finds Q1 and Q3", /\bq1=[^]*\bq3=|\bQ1=[^]*\bQ3=/], ["Calculates the IQR", /=q3-q1|=Q3-Q1/], ["Calculates both bounds", /(q1|Q1)-\(?1\.5\*[^]*(q3|Q3)\+\(?1\.5\*/], ["Finds the values outside the bounds", /<\w+[^\n]*or[^\n]*>\w+|>\w+[^\n]*or[^\n]*<\w+/]],
    `data = [10, 12, 11, 13, 60, 14, 12, 15, 11]

data = sorted(data)
middle = len(data) // 2
lower_half = data[:middle]
upper_half = data[middle + 1:]

def median(values):
    n = len(values)
    if n % 2 == 0:
        return (values[n // 2 - 1] + values[n // 2]) / 2
    return values[n // 2]

q1 = median(lower_half)
q3 = median(upper_half)
iqr = q3 - q1
lower = q1 - 1.5 * iqr
upper = q3 + 1.5 * iqr

outliers = []
for x in data:
    if x < lower or x > upper:
        outliers.append(x)

print("Q1:", q1)
print("Q3:", q3)
print("IQR:", iqr)
print("Outliers:", outliers)`,
    [["Q1 = 11, Q3 = 14.5 and IQR = 3.5", /\b11(\.0)?\b[^]*14\.5[^]*3\.5/], ["The outlier is 60", "#60"]]);

  /* ---------- Section C: practical, 5 marks ---------- */
  prac([9, 10], 'e', "Split a dataset into training and testing parts.", `data = {
    'X': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    'Y': [3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
}`,
    ["Import what you need and create a DataFrame.", "Use the column X as input and the column Y as output.", "Split the data with 30% for testing and random_state=42.", "Print the number of training rows and the number of test rows."],
    [["Imports train_test_split", /sklearn\.model_selection[^]*train_test_split/], ["Selects the input and the output", /\[\['X'\]\][^]*\['Y'\]/], ["Splits with test_size=0.3 and random_state=42", /train_test_split\([^]*test_size=0?\.3[^]*random_state=42|train_test_split\([^]*random_state=42[^]*test_size=0?\.3/], ["Prints the number of rows", /print\([^]*(len\(|\.shape)/]],
    `import pandas as pd
from sklearn.model_selection import train_test_split

data = {
    'X': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    'Y': [3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
}
df = pd.DataFrame(data)

X = df[['X']]
y = df['Y']
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42)

print("Training rows:", len(X_train))
print("Test rows:", len(X_test))`,
    [["7 training rows and 3 test rows", /\b7\b[^]*\b3\b/]]);

  prac(11, 'm', "Train a model and predict one value.", `data = {
    'Hours': [1, 2, 3, 4],
    'Score': [45, 50, 55, 60]
}`,
    ["Import what you need and create a DataFrame.", "Train a linear regression model with Hours as input and Score as output.", "Predict and print the score for 6 hours."],
    [["Imports LinearRegression", /sklearn\.linear_model[^]*LinearRegression/], ["Creates the model", /LinearRegression\(\)/], ["Trains it with the two columns", /\.fit\(\w+(\[\['Hours'\]\])?,\w+(\['Score'\])?\)/], ["Predicts and prints", /\.predict\(/]],
    `import pandas as pd
from sklearn.linear_model import LinearRegression

data = {
    'Hours': [1, 2, 3, 4],
    'Score': [45, 50, 55, 60]
}
df = pd.DataFrame(data)

X = df[['Hours']]
y = df['Score']
model = LinearRegression()
model.fit(X, y)

print(model.predict(pd.DataFrame({'Hours': [6]})))`,
    [["The predicted score is 70", "#70~0.01"]]);

  prac(12, 'm', "Measure the errors of given predictions.", `y_test = [10, 20, 30]
y_pred = [13, 20, 24]`,
    ["Import the two error functions from sklearn and numpy.", "Calculate MAE, MSE and RMSE.", "Print the three values."],
    [["Imports from sklearn.metrics", /fromsklearn\.metricsimport/], ["Calculates MAE", /mean_absolute_error\(y_test,y_pred\)/], ["Calculates MSE", /mean_squared_error\(y_test,y_pred\)/], ["Calculates RMSE with a square root", /sqrt\(|\*\*0?\.5/]],
    `import numpy as np
from sklearn.metrics import mean_absolute_error, mean_squared_error

y_test = [10, 20, 30]
y_pred = [13, 20, 24]

mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)

print("MAE:", mae)
print("MSE:", mse)
print("RMSE:", rmse)`,
    [["MAE is 3.0, MSE is 15.0 and RMSE is about 3.87", /\b3(\.0)?\b[^]*\b15(\.0)?\b[^]*3\.87/]]);

  prac([18, 23], 'e', "Calculate the mean and the standard deviation of a list.", `data = [2, 4, 4, 4, 5, 5, 7, 9]`,
    ["Calculate the mean.", "Calculate the variance (the average of the squared differences).", "Calculate the standard deviation and print it."],
    [["Calculates the mean", /sum\(\w+\)\/len\(|\.mean\(/], ["Calculates the squared differences", /\*\*2|\.std\(|\.var\(/], ["Divides by the number of values", /\/len\(|\.std\(|\.var\(/], ["Takes the square root", /\*\*0?\.5|\*\*\(1\/2\)|sqrt\(|\.std\(/]],
    `data = [2, 4, 4, 4, 5, 5, 7, 9]

mean = sum(data) / len(data)

total = 0
for x in data:
    total += (x - mean) ** 2
variance = total / len(data)
std_dev = variance ** 0.5

print("Mean:", mean)
print("Standard deviation:", std_dev)`,
    [["The standard deviation is 2.0", "#2"]]);

  prac([26, 27], 'm', "Find the outliers when Q1 and Q3 are known.", `data = [3, 22, 25, 27, 28, 30, 60]
q1 = 22
q3 = 30`,
    ["Calculate the IQR.", "Calculate the lower and the upper bound.", "Print the values that are outside the bounds."],
    [["Calculates the IQR", /=q3-q1/], ["Calculates both bounds", /q1-\(?1\.5\*[^]*q3\+\(?1\.5\*/], ["Goes through the values", /\bfor\w/], ["Finds the values outside the bounds", /<\w+[^\n]*or[^\n]*>\w+|>\w+[^\n]*or[^\n]*<\w+/]],
    `data = [3, 22, 25, 27, 28, 30, 60]
q1 = 22
q3 = 30

iqr = q3 - q1
lower = q1 - 1.5 * iqr
upper = q3 + 1.5 * iqr

for x in data:
    if x < lower or x > upper:
        print(x)`,
    [["The outliers are 3 and 60", /\b3\b[^]*\b60\b/]]);

  prac([18, 24], 'm', "Check one value with the Z-score.", `mean = 70
std_dev = 8
x = 98`,
    ["Calculate the Z-score of x and print it.", "Print “Outlier” if the Z-score is above 3 or below −3, otherwise print “Normal”."],
    [["Calculates the Z-score", /\(x-mean\)\/std_dev/], ["Uses an if statement", /\bif\W?\w/], ["Checks above 3 and below −3", /abs\([^\n]*>3|>3or\w+<-3|<-3or\w+>3/], ["Prints Outlier or Normal", /'Outlier'[^]*'Normal'|'Normal'[^]*'Outlier'/]],
    `mean = 70
std_dev = 8
x = 98

z = (x - mean) / std_dev
print(z)

if abs(z) > 3:
    print("Outlier")
else:
    print("Normal")`,
    [["The Z-score is 3.5 and the result is Outlier", /3\.5[^]*outlier/]]);
});
