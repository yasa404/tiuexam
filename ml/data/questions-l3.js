/* Lecture 3: Datasets and data cleaning (PDF pages 3-31). The instructor asked students to focus on this lecture. */
EC.lecture(3, function (Q) {
  var mcq = Q.mcq, fill = Q.fill, prac = Q.prac;
  var NAN = `data = {
    'Name': ['Sara', 'Ali', 'Dana', 'Lana'],
    'Quiz': [8, np.nan, 6, 10],
    'Project': [12, 10, np.nan, 14]
}
df = pd.DataFrame(data)`;
  var DUP = `data = {
    'Name': ['Sara', 'Ali', 'Sara', 'Dana'],
    'Score': [80, 70, 80, 70]
}
df = pd.DataFrame(data)
df2 = df.drop_duplicates()`;
  var XY = `X = df[['Quiz', 'Project', 'Midterm']]
y = df['Final']`;
  var LE = `data = {'Gender': ['Male', 'Female', 'Female', 'Male']}
df = pd.DataFrame(data)
le = LabelEncoder()
df['Gender'] = le.fit_transform(df['Gender'])`;
  var OH = `data = {'City': ['Erbil', 'Duhok', 'Erbil', 'Zakho']}
df = pd.DataFrame(data)
df2 = pd.get_dummies(df, columns=['City']).astype(int)`;
  var ORD = `encoder = OrdinalEncoder(categories=[['Low', 'Medium', 'High']])
df['Level_Ordinal'] = encoder.fit_transform(df[['Level']])`;

  /* ---------- Section A: datasets, features, target ---------- */
  mcq(3, 'e', "A dataset is…",
    ["a collection of information, usually in a table", "a program that draws the graph of a function", "a rule that is written by the programmer", "a reward that is given to a learning model"], "Slide 3.");
  mcq(3, 'e', "In a dataset table, each row is a…",
    ["record", "feature", "target", "category"], "Slide 3.");
  mcq(3, 'e', "In a dataset table, each column is a…",
    ["feature", "record", "duplicate", "row"], "Slide 3.");
  mcq(5, 'e', "Age, salary and temperature are examples of…",
    ["numerical data", "categorical data", "text data", "date/time data"], "Slide 5.");
  mcq(5, 'e', "Gender (Male/Female) and color (Red/Blue) are examples of…",
    ["categorical data", "numerical data", "text data", "date and time data"], "Slide 5.");
  mcq(5, 'e', "Reviews, tweets and comments are examples of…",
    ["text data", "numerical data", "categorical data", "date/time data"], "Slide 5.");
  mcq(5, 'm', "The day of the week and a timestamp are examples of…",
    ["date/time data", "numerical data", "text data", "image data"], "Slide 5.");
  mcq(5, 'm', "The column “Product type” has only the values Clothing and Electronics. What type of data is it?",
    ["Categorical", "Numerical", "Date and time", "Image"], "Categories.");
  mcq(6, 'm', "Which structure does an Excel sheet or a CSV file have?",
    ["A table", "An image", "A document", "A graph"], "Slide 6.");
  mcq(6, 'm', "Which dataset structure is used in image recognition tasks?",
    ["Pictures", "Tables", "Sentences", "Dates"], "Slide 6.");
  mcq([7, 8], 'e', "Features are…",
    ["the input variables used to make predictions", "the outcome that the model must predict", "the rows that appear more than once in a table", "the data used only to check the model"], "Slide 8.");
  mcq([7, 9], 'e', "The target (label) is…",
    ["the outcome that we want to predict", "the input that describes each record", "the first row of every data table", "the number of missing values"], "Slide 9.");
  mcq(7, 'e', "Which data is used to teach the model?",
    ["Training data", "Test data", "Missing data", "Duplicate data"], "Slide 7.");
  mcq(7, 'e', "Which data is used to check how well the model works?",
    ["Test data", "Training data", "Text data", "Missing data"], "Slide 7.");
  mcq([8, 9], 'm', "A model uses the quiz and midterm scores to predict the final grade. The final grade is the…",
    ["target", "feature", "record", "index"], "Slide 9.");
  mcq([8, 9], 'm', "We want to predict whether a customer will buy a product from the customer’s age and salary. Which one is a feature?",
    ["Age", "Will buy (yes/no)", "The prediction", "The model"], "Slides 7-9.");
  mcq(10, 'e', "What does this line do?",
    ["Imports pandas with the short name pd", "Creates a DataFrame with the name pd", "Prints all of the rows of the pd table", "Deletes the pandas library from Python"], "Slide 10.", { code: `import pandas as pd` });
  mcq(11, 'm', "What does `pd.DataFrame(data)` do?",
    ["Creates a table from the data", "Removes all of the missing data", "Converts text to numbers", "Splits the data in two parts"], "Slide 11.");
  mcq(11, 'm', "In this code, which variable holds the features?",
    ["`X`", "`y`", "`Final`", "`df`"], "Slide 11.", { code: XY });
  mcq(11, 'm', "In this code, which column is the target?",
    ["`Final`", "`Quiz`", "`Project`", "`Midterm`"], "y holds the target.", { code: XY });
  mcq(11, 'h', "Why are there two pairs of square brackets in the first line of this code?",
    ["It selects a list of several columns", "It removes the columns with missing data", "It selects a single row of the table", "It converts all the columns to text"], "A list of column names.", { code: XY });
  mcq(11, 'h', "We want to predict `Price`. Which line defines the target correctly?",
    ["`y = df['Price']`", "`X = df['Price']`", "`y = df.dropna('Price')`", "`y = pd.DataFrame('Price')`"], "Slide 11.");

  /* missing data */
  mcq(12, 'e', "What is the purpose of data cleaning?",
    ["To make the data clean, complete and accurate", "To make the dataset as large as possible", "To hide the target column from the trained model", "To draw the data in a colorful plot"], "Slide 12.");
  mcq(12, 'e', "The same row appears twice in a dataset. Which problem is this?",
    ["Duplicates", "Missing data", "Outliers", "Categorical data"], "Slide 12.");
  mcq(12, 'm', "Which problem is NOT solved in the data cleaning step?",
    ["Choosing the color of a graph", "Filling the missing values", "Removing the repeated data rows", "Converting text categories"], "Slide 12.");
  mcq(13, 'm', "Why can a dataset have missing values?",
    ["Someone forgot to enter a value", "The table has too many columns", "The model was trained two times", "The data was sorted in order"], "Slide 13.");
  mcq(13, 'm', "Which pair shows two ways to handle missing data?",
    ["Remove the rows, or fill in a default value", "Sort the rows, or print only the first one", "Add more columns, or rename all of the columns", "Encode the rows, or split the whole table"], "Slide 13.");
  mcq(14, 'e', "What does NaN mean?",
    ["Not a Number", "New and Named", "No axis Name", "Number and Name"], "Slide 14.");
  mcq(14, 'm', "Which expression creates a missing value in the data?",
    ["`np.nan`", "`pd.null`", "`np.drop`", "`pd.zero`"], "Slide 14.");
  mcq(16, 'e', "Which function removes the rows that have missing values?",
    ["`dropna()`", "`fillna()`", "`drop_duplicates()`", "`get_dummies()`"], "Slide 16.");
  mcq(17, 'e', "Which function fills the missing values?",
    ["`fillna()`", "`dropna()`", "`head()`", "`astype()`"], "Slide 17.");
  mcq(16, 'm', "Which names remain after `df.dropna()`?",
    ["Sara and Lana", "Sara, Ali and Lana", "Ali and Dana", "Sara, Dana and Lana"], "Ali and Dana have a NaN.", { code: NAN });
  mcq(16, 'h', "How many rows remain after `df.dropna()`?",
    ["2", "4", "3", "1"], "Two rows have a NaN.", { code: NAN });
  mcq([17, 18], 'm', "The missing `Quiz` value is filled with the mean of the column. Which value is used?",
    ["8", "6", "10", "24"], "(8 + 6 + 10) / 3 = 8.", { code: NAN });
  mcq([17, 18], 'h', "The missing `Project` value is filled with the mean of the column. Which value is used?",
    ["12", "9", "36", "14"], "(12 + 10 + 14) / 3 = 12.", { code: NAN });
  mcq(17, 'm', "What does `df.fillna(df.mean(numeric_only=True))` do?",
    ["Fills each numeric column’s NaN with that column’s mean", "Fills each NaN with one mean of the whole data table", "Removes every row that has a NaN in any of the numeric columns", "Fills the text columns with the word mean"], "Slide 17.");
  mcq(17, 'm', "Why is `numeric_only=True` used when the mean is calculated?",
    ["Only numeric columns have a mean", "Only text columns have a mean", "It changes the mean to an integer", "It removes the numeric columns"], "Names have no mean.");
  mcq(13, 'm', "The values are 10, 20, 30, NaN and 100. Which fill value is called the median?",
    ["25", "40", "30", "100"], "Middle of 10, 20, 30, 100 = 25.");
  mcq(13, 'h', "The values are 2, 4, NaN and 12. The mean and the median of the known values are…",
    ["mean 6, median 4", "mean 4, median 6", "mean 4.5, median 4", "mean 6, median 12"], "18 / 3 = 6; middle = 4.");
  mcq(16, 'h', "Almost every row of a small dataset has one missing value. Why is `dropna()` a bad choice here?",
    ["Almost all the rows would be removed", "The missing values would become zero", "The rows would be repeated two times", "The text would be changed to numbers"], "dropna removes whole rows.");
  mcq(15, 'm', "What is a pandas DataFrame like?",
    ["A table with rows and columns", "A picture with many pixels", "A single number without any rows", "A function with one argument"], "Slide 15.");

  /* duplicates */
  mcq(19, 'e', "Which function removes repeated rows?",
    ["`drop_duplicates()`", "`dropna()`", "`fillna()`", "`remove_missing()`"], "Slide 19.");
  mcq(19, 'm', "Why should duplicate rows be removed?",
    ["To avoid biases in the analysis", "To add more columns to the table", "To change the target to a feature", "To convert text into numbers"], "Slide 19.");
  mcq(19, 'h', "Which names does `df2` contain, in order?",
    ["Sara, Ali, Dana", "Sara, Ali, Sara, Dana", "Ali, Dana", "Sara, Dana"], "Only the repeated row of Sara is removed.", { code: DUP });
  mcq(19, 'h', "Why does the row of Dana stay in `df2`?",
    ["The whole row is not the same as another row", "Rows with the score 70 are never removed", "The last row of a table can never be removed", "Dana is the first name in the dictionary"], "All columns must match.", { code: DUP });

  /* label encoding */
  mcq(20, 'e', "What does label encoding do?",
    ["Gives each category an integer", "Removes each category from the table", "Creates one column for each category", "Fills each category with the mean"], "Slide 20.");
  mcq(20, 'm', "For which kind of categories is label encoding suitable?",
    ["Binary or ordered categories", "Many unordered names of cities", "Only missing categories", "Only numerical columns"], "Slide 20.");
  mcq(21, 'm', "From which module is LabelEncoder imported?",
    ["`sklearn.preprocessing`", "`sklearn.metrics`", "`sklearn.model_selection`", "`matplotlib.pyplot`"], "Slide 21.");
  mcq([21, 22], 'm', "What are the encoded values of this column, in order?",
    ["1, 0, 0, 1", "0, 1, 1, 0", "1, 2, 2, 1", "0, 0, 1, 1"], "Alphabetical: Female → 0, Male → 1.", { code: LE });
  mcq(22, 'm', "What does `le = LabelEncoder()` do?",
    ["Creates an instance of the encoder", "Prints the whole encoded column", "Converts the column to numbers at once", "Imports the pandas library"], "Slide 22.");
  mcq(22, 'm', "Which method assigns the numeric values to the categories?",
    ["`fit_transform()`", "`get_dummies()`", "`drop_duplicates()`", "`mean()`"], "Slide 22.");
  mcq([21, 22], 'h', "A LabelEncoder encodes the column Yes, No, Yes. The result is…",
    ["1, 0, 1", "0, 1, 0", "1, 2, 1", "2, 1, 2"], "Alphabetical: No → 0, Yes → 1.");

  /* one-hot encoding */
  mcq(23, 'e', "What does one-hot encoding do?",
    ["Creates a 0/1 column for each category", "Gives one integer to each category", "Removes the rows of each category", "Sorts all the categories by their order"], "Slide 23.");
  mcq(23, 'm', "For which kind of categories is one-hot encoding used?",
    ["Nominal (unordered) categories", "Ordered stages of a study program", "Numerical measurements only", "Missing values in a column"], "Slide 23.");
  mcq(24, 'e', "Which pandas function makes one-hot columns?",
    ["`pd.get_dummies()`", "`pd.DataFrame()`", "`pd.fillna()`", "`pd.LabelEncoder()`"], "Slide 24.");
  mcq(25, 'm', "Which columns does `df2` have?",
    ["City_Duhok, City_Erbil, City_Zakho", "City_1, City_2, City_3 and City_4", "City, Erbil, Duhok, Erbil and Zakho", "City_Erbil and City_Duhok only"], "One column for each unique city.", { code: OH });
  mcq(25, 'm', "What does the first row of `df2` contain, in the order City_Duhok, City_Erbil, City_Zakho?",
    ["0, 1, 0", "1, 0, 0", "0, 0, 1", "1, 1, 0"], "The first city is Erbil.", { code: OH });
  mcq(25, 'm', "What does `.astype(int)` do after `pd.get_dummies(...)`?",
    ["Changes True/False to 1/0", "Changes 1/0 to True/False", "Removes the first column", "Adds a prefix to the names"], "Slide 25.");
  mcq(26, 'm', "A column has 5 different categories. By default, one-hot encoding creates…",
    ["5 columns", "4 columns", "1 column", "10 columns"], "N columns for N categories.");
  mcq(26, 'm', "What problem can N columns for N categories cause?",
    ["Multicollinearity", "Underfitting only", "Missing values", "Duplicate rows"], "Slide 26.");
  mcq(26, 'm', "Which argument avoids the dummy variable trap?",
    ["`drop_first=True`", "`prefix='City'`", "`numeric_only=True`", "`test_size=0.2`"], "Slide 26.");
  mcq([26, 27], 'h', "A column has the categories A, B and C. After `get_dummies` with `drop_first=True`, both new columns are 0 in one row. Which category is it?",
    ["A", "B", "C", "It is missing"], "The dropped first category.");
  mcq([26, 27], 'h', "A column has 4 categories. How many columns are created with `drop_first=True`?",
    ["3", "4", "5", "1"], "N − 1.");
  mcq(28, 'm', "Which argument changes the beginning of the new column names?",
    ["`prefix='Location'`", "`drop_first=True`", "`columns=['Location']`", "`astype(int)`"], "Slide 28.");

  /* ordinal encoding */
  mcq([29, 30], 'm', "For which column is ordinal encoding the best choice?",
    ["Stage 1, Stage 2, Stage 3", "Erbil, Duhok, Zakho, Akre", "Red, Blue, Green, White", "Sara, Ali, Dana"], "Categories with a natural order.");
  mcq([30, 31], 'm', "Which number does this encoder give to `Medium`?",
    ["1", "0", "2", "3"], "Low → 0, Medium → 1, High → 2.", { code: ORD });
  mcq(31, 'm', "Why do we pass the list of categories to OrdinalEncoder?",
    ["To give the order of the categories", "To remove the wrong categories", "To add one new category each time", "To fill the missing categories"], "Slide 31.");
  mcq([20, 23, 29], 'h', "The column “Country” has 30 unordered names. Which encoding fits best?",
    ["One-hot encoding", "Ordinal encoding", "Mean filling", "Dropping duplicates"], "Nominal categories.");
  mcq([20, 23, 29], 'h', "Which encoding fits which column?",
    ["Ordinal – sizes S, M, L; one-hot – cities", "Ordinal – cities; one-hot – sizes S, M, L", "Label – missing values; ordinal – duplicates", "One-hot – missing values; label – cities"], "Slides 20-29.");
  mcq([13, 19, 23], 'h', "A dataset has repeated rows, empty ages and a text column “City”. Which functions clean it?",
    ["`drop_duplicates`, `fillna`, `get_dummies`", "`dropna`, `head`, `train_test_split`", "`fit`, `predict`, `mean_squared_error`", "`LabelEncoder`, `sqrt`, `LinearRegression`"], "Slides 13-24.");

  /* ---------- Section B ---------- */
  fill(3, 'e', "In a dataset table, each row is a [[record]] and each column is a [[feature]].", "Slide 3.");
  fill(5, 'e', "Data that is represented by numbers is called [[numerical|numeric]] data.", "Slide 5.");
  fill(5, 'e', "Data that contains labels such as Male and Female is called [[categorical]] data.", "Slide 5.");
  fill(5, 'm', "Reviews and tweets are [[text]] data, and a timestamp is [[date/time|date|time|date time]] data.", "Slide 5.");
  fill([7, 8], 'e', "The input variables of a model are called [[features|feature]].", "Slide 8.");
  fill([7, 9], 'e', "The outcome that we want to predict is called the [[target|label]].", "Slide 9.");
  fill(7, 'e', "[[Training|train]] data is used to teach the model, and [[test|testing]] data is used to check it.", "Slide 7.");
  fill(10, 'e', "Complete the code: [[pandas]].", "Slide 10.", { code: `import ________ as pd` });
  fill(14, 'e', "Complete the code: [[numpy]].", "Slide 14.", { code: `import ________ as np` });
  fill(11, 'e', "Complete the code so that it creates a table: [[DataFrame]].", "Slide 11.", { code: `df = pd.________(data)` });
  fill(11, 'm', "The variable (1) holds the features and the variable (2) holds the target: (1) [[X]], (2) [[y]].", "Slide 11.", { code: `(1)____ = df[['Age', 'Salary']]
(2)____ = df['Will_Buy']` });
  fill(12, 'm', "Data cleaning makes the data clean, complete and [[accurate]].", "Slide 12.");
  fill(12, 'm', "Rows that are repeated in the data are called [[duplicates|duplicate]].", "Slide 12.");
  fill(13, 'm', "Missing data can be filled with 0, with the average called the [[mean]], or with the middle value called the [[median]].", "Slide 13.");
  fill(14, 'e', "NaN means Not a [[Number]].", "Slide 14.");
  fill(14, 'm', "Complete the code so that the second value is missing: [[nan]].", "Slide 14.", { code: `'Quiz': [8, np.________, 9]` });
  fill(16, 'e', "Complete the code so that it removes the rows with missing values: [[dropna]].", "Slide 16.", { code: `df2 = df.________()` });
  fill(17, 'e', "Complete the code so that it fills the missing values with the mean: (1) [[fillna]], (2) [[mean]].", "Slide 17.", { code: `df2 = df.(1)____(df.(2)____(numeric_only=True))` });
  fill(17, 'h', "Complete the code so that text columns are not used for the mean: [[numeric_only]].", "Slide 17.", { code: `df2 = df.fillna(df.mean(________=True))` });
  fill([17, 18], 'm', "The quiz scores are 6, NaN, 9 and 9. The value that replaces NaN when the mean is used is [[8]].", "24 / 3 = 8.");
  fill([17, 18], 'h', "The scores are 10, NaN, 7 and 8. The value that replaces NaN when the mean is used is [[8.33]] (two decimals).", "25 / 3 = 8.33.");
  fill(13, 'h', "The ages are 18, 30, NaN, 20 and 24. The value that replaces NaN when the median is used is [[22]].", "Sorted: 18, 20, 24, 30 → (20 + 24) / 2.");
  fill(19, 'e', "Complete the code so that it removes the repeated rows: [[drop_duplicates]].", "Slide 19.", { code: `df2 = df.________()` });
  fill(19, 'm', "Duplicate rows are removed to avoid [[biases|bias]] in the analysis.", "Slide 19.");
  fill(19, 'h', "The number of rows in `df2` is [[3]].", "One repeated row is removed.", { code: DUP });
  fill(20, 'e', "Converting each category into an integer is called [[label]] encoding.", "Slide 20.");
  fill(21, 'm', "Complete the code: [[preprocessing]].", "Slide 21.", { code: `from sklearn.________ import LabelEncoder` });
  fill(21, 'e', "Complete the code: [[LabelEncoder]].", "Slide 21.", { code: `le = ________()
df['Gender'] = le.fit_transform(df['Gender'])` });
  fill(21, 'm', "Complete the code: [[fit_transform]].", "Slide 21.", { code: `le = LabelEncoder()
df['Gender'] = le.________(df['Gender'])` });
  fill(22, 'm', "LabelEncoder changes Female to [[0]] and Male to [[1]].", "Alphabetical order.");
  fill(23, 'e', "Creating a separate 0/1 column for each category is called [[one-hot|one hot|onehot]] encoding.", "Slide 23.");
  fill(23, 'm', "One-hot encoding is used for [[nominal]] categories, which have no order.", "Slide 23.");
  fill(24, 'e', "Complete the code: [[get_dummies]].", "Slide 24.", { code: `df2 = pd.________(df, columns=['City'])` });
  fill(25, 'm', "Complete the code so that the result is 1/0 and not True/False: (1) [[astype]], (2) [[int]].", "Slide 25.", { code: `df2 = pd.get_dummies(df, columns=['City']).(1)____((2)____)` });
  fill(25, 'h', "The new columns are City_Duhok, City_Erbil and City_Zakho. In the row of Duhok their values are, in this order: [[1]], [[0]], [[0]].", "Only its own column is 1.", { code: OH });
  fill(26, 'm', "One-hot encoding creates N columns for N categories, which can cause [[multicollinearity]].", "Slide 26.");
  fill(26, 'm', "Dropping one of the one-hot columns avoids the dummy variable [[trap]].", "Slide 26.");
  fill(26, 'm', "Complete the code so that the first column is dropped: [[drop_first]].", "Slide 26.", { code: `df2 = pd.get_dummies(df, columns=['City'], ________=True)` });
  fill([26, 27], 'h', "A column with 6 categories gives [[6]] one-hot columns, or [[5]] columns when the first one is dropped.", "N and N − 1.");
  fill(28, 'm', "Complete the code so that the new names start with Location: [[prefix]].", "Slide 28.", { code: `df2 = pd.get_dummies(df, columns=['City'], ________='Location')` });
  fill(29, 'e', "Encoding categories that have a natural order, such as Stage 1, Stage 2 and Stage 3, is called [[ordinal]] encoding.", "Slide 29.");
  fill(30, 'm', "Complete the code: (1) [[OrdinalEncoder]], (2) [[categories]].", "Slide 30.", { code: `encoder = (1)____((2)____=[['Stage 1', 'Stage 2', 'Stage 3']])` });
  fill([30, 31], 'm', "With the order Small, Medium, Large, an ordinal encoder changes Small to [[0]] and Large to [[2]].", "It starts from 0.");
  fill([30, 31], 'h', "The encoder in the code changes `High` to [[2]].", "Low → 0, Medium → 1, High → 2.", { code: ORD });
  fill(11, 'm', "To predict the column Price, the target is df['[[Price]]'].", "Slide 11.");

  /* ---------- Section C: practical, 10 marks ---------- */
  prac([14, 15, 16, 17], 'm', "Clean a dataset that has missing values.", `data = {
    'Name': ['Sara', 'Ali', 'Dana', 'Rezan', 'Lana'],
    'Age': [20, np.nan, 22, 24, np.nan],
    'Salary': [500, 600, np.nan, 800, 700]
}`,
    ["Import pandas and numpy.", "Create a DataFrame from the data and print it.", "Remove every row that has a missing value, store the result in a new DataFrame and print it.", "In another DataFrame, fill the missing values with the mean of each numeric column, and print it."],
    [["Imports pandas as pd", /importpandas/], ["Imports numpy as np", /importnumpy/], ["Creates the DataFrame", /DataFrame\(/], ["Removes the rows with `dropna()`", /\.dropna\(/], ["Stores that result in a new variable", /\w+=\w+\.dropna\(/], ["Fills with `fillna(...)`", /\.fillna\(/], ["Uses the mean of the numeric columns", /\.mean\(/], ["Prints the three tables", /print\([^]*print\([^]*print\(/]],
    `import pandas as pd
import numpy as np

data = {
    'Name': ['Sara', 'Ali', 'Dana', 'Rezan', 'Lana'],
    'Age': [20, np.nan, 22, 24, np.nan],
    'Salary': [500, 600, np.nan, 800, 700]
}
df = pd.DataFrame(data)
print(df)

df_drop = df.dropna()
print(df_drop)

df_mean = df.fillna(df.mean(numeric_only=True))
print(df_mean)`,
    [["The missing ages become 22.0", /22\.0[^]*22\.0/], ["The missing salary becomes 650.0", /650(\.0)?/]]);

  prac([17, 19, 21, 22], 'h', "Clean a dataset with duplicates, missing scores and a text column.", `data = {
    'Name': ['Ahmed', 'Shad', 'Ahmed', 'Hana', 'Tara'],
    'Gender': ['Male', 'Male', 'Male', 'Female', 'Female'],
    'Score': [70, np.nan, 70, 90, 80]
}`,
    ["Import what you need and create a DataFrame.", "Remove the duplicate rows first.", "Fill the missing score with the mean of the Score column.", "Convert the Gender column into numbers with label encoding.", "Print the cleaned DataFrame."],
    [["Imports pandas", /importpandas/], ["Imports LabelEncoder from sklearn.preprocessing", /fromsklearn\.preprocessingimport[^\n]*LabelEncoder|sklearn\.preprocessing[^]*LabelEncoder/], ["Creates the DataFrame", /DataFrame\(/], ["Removes the repeated rows", /\.drop_duplicates\(/], ["Fills the missing score", /\.fillna\(/], ["Uses the mean", /\.mean\(/], ["Creates the encoder", /=LabelEncoder\(\)|LabelEncoder\(\)\./], ["Encodes the Gender column with `fit_transform`", /\['Gender'\]=\w*(LabelEncoder\(\))?\.fit_transform\(\w+\['Gender'\]\)/]],
    `import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder

data = {
    'Name': ['Ahmed', 'Shad', 'Ahmed', 'Hana', 'Tara'],
    'Gender': ['Male', 'Male', 'Male', 'Female', 'Female'],
    'Score': [70, np.nan, 70, 90, 80]
}
df = pd.DataFrame(data)

df = df.drop_duplicates()
df = df.fillna(df.mean(numeric_only=True))

le = LabelEncoder()
df['Gender'] = le.fit_transform(df['Gender'])

print(df)`,
    [["The missing score becomes 80.0", /shad[^\n]*80/], ["Male is 1 and Female is 0", /ahmed\s+1[^]*hana\s+0/]]);

  prac([24, 25, 26, 28], 'm', "Apply one-hot encoding to a city column in three ways.", `data = {
    'Age': [20, 21, 19, 22],
    'City': ['Erbil', 'Duhok', 'Erbil', 'Zakho']
}`,
    ["Import pandas and create a DataFrame.", "One-hot encode the City column so that the new columns contain 1 and 0, and print the result.", "One-hot encode it again, but drop the first new column, and print the result.", "One-hot encode it again with names that start with Location, and print the result."],
    [["Imports pandas", /importpandas/], ["Creates the DataFrame", /DataFrame\(/], ["Uses `get_dummies`", /get_dummies\(/], ["Selects the City column", /columns=\['City'\]/], ["Changes True/False to 1/0", /astype\(int\)|dtype='?int'?/], ["Drops the first column", /drop_first=True/], ["Adds the prefix Location", /prefix=\[?'Location'/], ["Prints the three results", /print\([^]*print\([^]*print\(/]],
    `import pandas as pd

data = {
    'Age': [20, 21, 19, 22],
    'City': ['Erbil', 'Duhok', 'Erbil', 'Zakho']
}
df = pd.DataFrame(data)

df1 = pd.get_dummies(df, columns=['City']).astype(int)
print(df1)

df2 = pd.get_dummies(df, columns=['City'], drop_first=True)
print(df2)

df3 = pd.get_dummies(df, columns=['City'], prefix='Location')
print(df3)`,
    [["Shows the column City_Duhok", /city_duhok/], ["Shows the column Location_Erbil", /location_erbil/]]);

  prac([29, 30, 31], 'm', "Encode a column of ordered levels.", `data = {
    'Student': ['Sara', 'Ali', 'Dana', 'Lana'],
    'Level': ['Low', 'High', 'Medium', 'Low']
}`,
    ["Import what you need and create a DataFrame.", "Create an ordinal encoder with the order Low, Medium, High.", "Apply it to the Level column and store the result in a new column called Level_Ordinal.", "Print the DataFrame."],
    [["Imports pandas", /importpandas/], ["Imports OrdinalEncoder from sklearn.preprocessing", /sklearn\.preprocessing[^]*OrdinalEncoder/], ["Creates the DataFrame", /DataFrame\(/], ["Creates the encoder", /OrdinalEncoder\(/], ["Gives the order Low, Medium, High", /categories=\[\['Low','Medium','High'\]\]/], ["Uses `fit_transform`", /\.fit_transform\(/], ["Passes the column with two pairs of brackets", /fit_transform\(\w+\[\['Level'\]\]\)/], ["Stores it in Level_Ordinal and prints", /\['Level_Ordinal'\]=[^]*print\(/]],
    `import pandas as pd
from sklearn.preprocessing import OrdinalEncoder

data = {
    'Student': ['Sara', 'Ali', 'Dana', 'Lana'],
    'Level': ['Low', 'High', 'Medium', 'Low']
}
df = pd.DataFrame(data)

encoder = OrdinalEncoder(categories=[['Low', 'Medium', 'High']])
df['Level_Ordinal'] = encoder.fit_transform(df[['Level']])

print(df)`,
    [["High is 2", /high\s+2/], ["Medium is 1", /medium\s+1/]]);

  prac([8, 9, 11, 21], 'm', "Prepare the features and the target of a house dataset.", `data = {
    'Size': [1500, 2000, 1200, 2500],
    'Rooms': [3, 4, 2, 5],
    'Location': ['Erbil', 'Zakho', 'Erbil', 'Duhok'],
    'Price': [250000, 350000, 210000, 450000]
}`,
    ["Import what you need and create a DataFrame.", "Convert the Location column into numbers with label encoding.", "Put the columns Size, Rooms and Location in X (features).", "Put the column Price in y (target).", "Print X and y."],
    [["Imports pandas", /importpandas/], ["Imports LabelEncoder", /sklearn\.preprocessing[^]*LabelEncoder/], ["Creates the DataFrame", /DataFrame\(/], ["Creates the encoder", /LabelEncoder\(\)/], ["Encodes the Location column", /\['Location'\]=\w*(LabelEncoder\(\))?\.fit_transform\(\w+\['Location'\]\)/], ["X has the three feature columns", /\bX=\w+\[\['Size','Rooms','Location'\]\]|\bX=\w+\.drop\([^\n]*'Price'/], ["y is the Price column", /\by=\w+(\['Price'\]|\.Price)/], ["Prints X and y", /print\([^\n]*X[^]*print\([^\n]*y|print\([^\n]*X[^\n]*y/]],
    `import pandas as pd
from sklearn.preprocessing import LabelEncoder

data = {
    'Size': [1500, 2000, 1200, 2500],
    'Rooms': [3, 4, 2, 5],
    'Location': ['Erbil', 'Zakho', 'Erbil', 'Duhok'],
    'Price': [250000, 350000, 210000, 450000]
}
df = pd.DataFrame(data)

le = LabelEncoder()
df['Location'] = le.fit_transform(df['Location'])

X = df[['Size', 'Rooms', 'Location']]
y = df['Price']

print(X)
print(y)`,
    [["Duhok is 0, Erbil is 1 and Zakho is 2", /1500\s+3\s+1[^]*2000\s+4\s+2[^]*2500\s+5\s+0/], ["Shows the prices of y", /250000[^]*450000/]]);

  prac([13, 14, 17], 'm', "Fill missing values with the median and with zero.", `data = {
    'Name': ['Sara', 'Ali', 'Dana', 'Lana', 'Shad'],
    'Age': [18, np.nan, 30, 22, 20],
    'Bonus': [50, np.nan, 30, np.nan, 40]
}`,
    ["Import pandas and numpy, create a DataFrame and print it.", "Fill the missing age with the median of the Age column.", "Fill the missing bonuses with 0.", "Print the cleaned DataFrame."],
    [["Imports pandas", /importpandas/], ["Imports numpy", /importnumpy/], ["Creates the DataFrame", /DataFrame\(/], ["Fills the Age column", /'Age'[^\n]*fillna\(|fillna\([^]*'Age'/], ["Uses the median", /\.median\(/], ["Fills the Bonus column", /'Bonus'[^\n]*fillna\(|fillna\([^]*'Bonus'/], ["Uses the value 0", /fillna\(0\)|'Bonus':0/], ["Prints before and after", /print\([^]*print\(/]],
    `import pandas as pd
import numpy as np

data = {
    'Name': ['Sara', 'Ali', 'Dana', 'Lana', 'Shad'],
    'Age': [18, np.nan, 30, 22, 20],
    'Bonus': [50, np.nan, 30, np.nan, 40]
}
df = pd.DataFrame(data)
print(df)

df['Age'] = df['Age'].fillna(df['Age'].median())
df['Bonus'] = df['Bonus'].fillna(0)
print(df)`,
    [["The missing age becomes 21.0", /ali\s+21/], ["The missing bonus becomes 0.0", /lana\s+22[.0]*\s+0/]]);

  prac([11, 17, 19, 26], 'h', "Clean a customer dataset and prepare the features and the target.", `data = {
    'Age': [25, np.nan, 25, 40],
    'City': ['Erbil', 'Duhok', 'Erbil', 'Erbil'],
    'Buy': [1, 0, 1, 1]
}`,
    ["Import what you need and create a DataFrame.", "Remove the duplicate rows.", "Fill the missing age with the mean of the Age column.", "One-hot encode the City column and drop the first new column.", "Put Age and City_Erbil in X, put Buy in y, and print X and y."],
    [["Imports pandas", /importpandas/], ["Imports numpy", /importnumpy/], ["Creates the DataFrame", /DataFrame\(/], ["Removes the repeated rows", /\.drop_duplicates\(/], ["Fills the missing age with the mean", /fillna\([^]*\.mean\(|\.mean\([^]*fillna\(/], ["One-hot encodes the City column", /get_dummies\([^)]*columns=\['City'\]/], ["Drops the first new column", /drop_first=True/], ["Defines X and y", /\bX=\w+\[\['Age','City_Erbil'\]\][^]*\by=\w+(\['Buy'\]|\.Buy)|\by=\w+(\['Buy'\]|\.Buy)[^]*\bX=/]],
    `import pandas as pd
import numpy as np

data = {
    'Age': [25, np.nan, 25, 40],
    'City': ['Erbil', 'Duhok', 'Erbil', 'Erbil'],
    'Buy': [1, 0, 1, 1]
}
df = pd.DataFrame(data)

df = df.drop_duplicates()
df['Age'] = df['Age'].fillna(df['Age'].mean())
df = pd.get_dummies(df, columns=['City'], drop_first=True)

X = df[['Age', 'City_Erbil']]
y = df['Buy']
print(X)
print(y)`,
    [["The missing age becomes 32.5", /32\.5/], ["Shows the column City_Erbil", /city_erbil/]]);

  prac([13, 16, 19], 'm', "Compare the number of rows before and after cleaning.", `data = {
    'Name': ['Sara', 'Ali', 'Sara', 'Dana', 'Lana', 'Shad'],
    'Quiz': [8, 7, 8, np.nan, 9, 6],
    'Project': [12, 10, 12, 9, np.nan, 14]
}`,
    ["Import pandas and numpy and create a DataFrame.", "Print the number of rows.", "Remove the duplicate rows.", "Remove the rows that have missing values.", "Print the cleaned DataFrame and its number of rows."],
    [["Imports pandas", /importpandas/], ["Imports numpy", /importnumpy/], ["Creates the DataFrame", /DataFrame\(/], ["Prints the number of rows", /print\([^\n]*(len\(|\.shape|\.index)/], ["Removes the repeated rows", /\.drop_duplicates\(/], ["Removes the rows with missing values", /\.dropna\(/], ["Prints the cleaned table", /dropna\([^]*print\(\w+\)/], ["Prints the new number of rows", /dropna\([^]*print\([^\n]*(len\(|\.shape|\.index)/]],
    `import pandas as pd
import numpy as np

data = {
    'Name': ['Sara', 'Ali', 'Sara', 'Dana', 'Lana', 'Shad'],
    'Quiz': [8, 7, 8, np.nan, 9, 6],
    'Project': [12, 10, 12, 9, np.nan, 14]
}
df = pd.DataFrame(data)
print("Rows before:", len(df))

df = df.drop_duplicates()
df = df.dropna()

print(df)
print("Rows after:", len(df))`,
    [["6 rows before", /\b6\b/], ["3 rows after (Sara, Ali and Shad)", /shad[^]*\b3\b/]]);

  /* ---------- Section C: practical, 5 marks ---------- */
  prac([15, 16], 'e', "Remove the incomplete rows of a small dataset.", `data = {
    'Name': ['Sara', 'Ali', 'Dana'],
    'Quiz': [8, np.nan, 9]
}`,
    ["Import pandas and numpy and create a DataFrame.", "Remove the rows that have missing values.", "Print the result."],
    [["Imports pandas and numpy", /importpandas[^]*importnumpy|importnumpy[^]*importpandas/], ["Creates the DataFrame", /DataFrame\(/], ["Removes the rows with missing values", /\.dropna\(/], ["Prints the result", /dropna\([^]*print\(|print\(\w+\.dropna/]],
    `import pandas as pd
import numpy as np

data = {
    'Name': ['Sara', 'Ali', 'Dana'],
    'Quiz': [8, np.nan, 9]
}
df = pd.DataFrame(data)

df2 = df.dropna()
print(df2)`,
    [["Only Sara and Dana remain", /sara\s+8(?![^]*ali\b)[^]*dana\s+9/]]);

  prac([17, 18], 'e', "Fill the missing values of a dataset with the mean.", `data = {
    'Day': ['Sat', 'Sun', 'Mon', 'Tue'],
    'Temp': [10, np.nan, 14, 21]
}`,
    ["Import pandas and numpy and create a DataFrame.", "Fill the missing temperature with the mean of the column.", "Print the result."],
    [["Creates the DataFrame (with the imports)", /importpandas[^]*DataFrame\(/], ["Fills the missing value", /\.fillna\(/], ["Uses the mean", /\.mean\(/], ["Prints the result", /print\(/]],
    `import pandas as pd
import numpy as np

data = {
    'Day': ['Sat', 'Sun', 'Mon', 'Tue'],
    'Temp': [10, np.nan, 14, 21]
}
df = pd.DataFrame(data)

df2 = df.fillna(df.mean(numeric_only=True))
print(df2)`,
    [["The missing temperature becomes 15.0", /sun\s+15/]]);

  prac(19, 'e', "Remove the repeated rows of a dataset.", `data = {
    'ID': [1, 2, 2, 3, 1],
    'City': ['Erbil', 'Duhok', 'Duhok', 'Zakho', 'Erbil']
}`,
    ["Import pandas and create a DataFrame.", "Remove the repeated rows.", "Print the result."],
    [["Imports pandas", /importpandas/], ["Creates the DataFrame", /DataFrame\(/], ["Removes the repeated rows", /\.drop_duplicates\(/], ["Prints the result", /print\(/]],
    `import pandas as pd

data = {
    'ID': [1, 2, 2, 3, 1],
    'City': ['Erbil', 'Duhok', 'Duhok', 'Zakho', 'Erbil']
}
df = pd.DataFrame(data)

df2 = df.drop_duplicates()
print(df2)`,
    [["Each city appears once", /1\s+erbil\s+1\s+2\s+duhok\s+3\s+3\s+zakho(?![^]*erbil)/]]);

  prac([21, 22], 'm', "Convert a text column into numbers with label encoding.", `data = {'Color': ['Red', 'Blue', 'Green', 'Blue']}`,
    ["Import what you need and create a DataFrame.", "Apply label encoding to the Color column.", "Print the DataFrame."],
    [["Imports pandas and LabelEncoder", /importpandas[^]*LabelEncoder|LabelEncoder[^]*importpandas/], ["Creates the DataFrame", /DataFrame\(/], ["Creates the encoder", /LabelEncoder\(\)/], ["Applies `fit_transform` to the column", /\.fit_transform\(\w+\['Color'\]\)/]],
    `import pandas as pd
from sklearn.preprocessing import LabelEncoder

data = {'Color': ['Red', 'Blue', 'Green', 'Blue']}
df = pd.DataFrame(data)

le = LabelEncoder()
df['Color'] = le.fit_transform(df['Color'])
print(df)`,
    [["Red is 2, Blue is 0 and Green is 1", /0\s2\s1\s0\s2\s1\s3\s0/]]);

  prac([24, 25], 'm', "Create one-hot columns of 1 and 0.", `data = {'Payment': ['Cash', 'Card', 'Cash']}`,
    ["Import pandas and create a DataFrame.", "One-hot encode the Payment column so that the result contains 1 and 0.", "Print the result."],
    [["Imports pandas and creates the DataFrame", /importpandas[^]*DataFrame\(/], ["Uses `get_dummies`", /get_dummies\(/], ["Selects the Payment column", /'Payment'\]/], ["Changes True/False to 1/0", /astype\(int\)|dtype='?int'?/]],
    `import pandas as pd

data = {'Payment': ['Cash', 'Card', 'Cash']}
df = pd.DataFrame(data)

df2 = pd.get_dummies(df, columns=['Payment']).astype(int)
print(df2)`,
    [["Payment_Card is 0, 1, 0 and Payment_Cash is 1, 0, 1", /payment_card\s+payment_cash[^]*0\s+0\s+1\s+1\s+1\s+0\s+2\s+0\s+1/]]);

  prac([30, 31], 'm', "Encode the sizes Small, Medium and Large in their order.", `data = {'Size': ['Large', 'Small', 'Medium']}`,
    ["Import what you need and create a DataFrame.", "Create an ordinal encoder with the order Small, Medium, Large.", "Store the encoded values in the column Size_Ordinal and print the DataFrame."],
    [["Imports OrdinalEncoder (and pandas)", /importpandas[^]*OrdinalEncoder|OrdinalEncoder[^]*importpandas/], ["Gives the order Small, Medium, Large", /categories=\[\['Small','Medium','Large'\]\]/], ["Applies `fit_transform`", /\.fit_transform\(\w+\[\['Size'\]\]\)/], ["Stores it in Size_Ordinal", /\['Size_Ordinal'\]=/]],
    `import pandas as pd
from sklearn.preprocessing import OrdinalEncoder

data = {'Size': ['Large', 'Small', 'Medium']}
df = pd.DataFrame(data)

encoder = OrdinalEncoder(categories=[['Small', 'Medium', 'Large']])
df['Size_Ordinal'] = encoder.fit_transform(df[['Size']])
print(df)`,
    [["Large is 2, Small is 0 and Medium is 1", /large\s+2[^]*small\s+0[^]*medium\s+1/]]);

  prac([10, 11], 'e', "Separate the features and the target.", `data = {
    'Quiz': [8, 7, 9],
    'Midterm': [15, 16, 18],
    'Final': [35, 30, 38]
}`,
    ["Import pandas and create a DataFrame.", "Put Quiz and Midterm in X.", "Put Final in y.", "Print X and y."],
    [["Imports pandas and creates the DataFrame", /importpandas[^]*DataFrame\(/], ["X has Quiz and Midterm", /\bX=\w+\[\['Quiz','Midterm'\]\]|\bX=\w+\.drop\([^\n]*'Final'/], ["y is Final", /\by=\w+(\['Final'\]|\.Final)/], ["Prints X and y", /print\([^]*print\(|print\(X,y\)/]],
    `import pandas as pd

data = {
    'Quiz': [8, 7, 9],
    'Midterm': [15, 16, 18],
    'Final': [35, 30, 38]
}
df = pd.DataFrame(data)

X = df[['Quiz', 'Midterm']]
y = df['Final']
print(X)
print(y)`,
    [["Shows the features and the target", /quiz\s+midterm[^]*35[^]*30[^]*38/]]);

  prac([13, 17], 'm', "Replace the missing values with zero.", `data = {
    'Student': ['Sara', 'Ali', 'Dana'],
    'Homework': [5, np.nan, 4]
}`,
    ["Import pandas and numpy and create a DataFrame.", "Replace the missing homework mark with 0.", "Print the result."],
    [["Imports pandas and numpy", /importpandas[^]*importnumpy|importnumpy[^]*importpandas/], ["Creates the DataFrame", /DataFrame\(/], ["Fills with the value 0", /\.fillna\((0|\{'Homework':0\})\)/], ["Prints the result", /print\(/]],
    `import pandas as pd
import numpy as np

data = {
    'Student': ['Sara', 'Ali', 'Dana'],
    'Homework': [5, np.nan, 4]
}
df = pd.DataFrame(data)

df2 = df.fillna(0)
print(df2)`,
    [["Ali has 0.0", /ali\s+0/]]);

  prac([26, 27], 'm', "Avoid the dummy variable trap.", `data = {'Department': ['IT', 'Law', 'Art', 'IT']}`,
    ["Import pandas and create a DataFrame.", "One-hot encode the Department column and drop the first new column.", "Print the result."],
    [["Imports pandas", /importpandas/], ["Creates the DataFrame", /DataFrame\(/], ["Uses `get_dummies` on the Department column", /get_dummies\([^]*'Department'/], ["Drops the first new column", /drop_first=True/]],
    `import pandas as pd

data = {'Department': ['IT', 'Law', 'Art', 'IT']}
df = pd.DataFrame(data)

df2 = pd.get_dummies(df, columns=['Department'], drop_first=True)
print(df2)`,
    [["Only Department_IT and Department_Law are left", /department_it\s+department_law(?![^]*department_art)/]]);

  prac(28, 'm', "Give new names to one-hot columns.", `data = {'Shift': ['Day', 'Night', 'Day']}`,
    ["Import pandas and create a DataFrame.", "One-hot encode the Shift column with new names that start with Work.", "Print the result."],
    [["Imports pandas and creates the DataFrame", /importpandas[^]*DataFrame\(/], ["Uses `get_dummies`", /get_dummies\(/], ["Selects the Shift column", /'Shift'\]/], ["Adds the prefix Work", /prefix=\[?'Work'/]],
    `import pandas as pd

data = {'Shift': ['Day', 'Night', 'Day']}
df = pd.DataFrame(data)

df2 = pd.get_dummies(df, columns=['Shift'], prefix='Work')
print(df2)`,
    [["Shows Work_Day and Work_Night", /work_day\s+work_night/]]);
});
