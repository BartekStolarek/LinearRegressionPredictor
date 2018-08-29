# LinearRegressionPredictor

### Description 
This app is predicting values of linear regression by using TensorFlow Machine Learning features.

### How it works
User can provide a set of X and Y values in the data table (by default, data table is covered with car fuel usage values), then application is drawing a graph with these values in D3.js and immidiately begins training process of machine learning algorithm. When training process is completed, user can type value, according to which algorithm will provide predicted second value.

For example- as set by default- data table is covered with fuel usage values of Skoda Octavia on the highway, where X- car speed and Y- fuel consumption. If the training process is completed, user can type fuel consumption value in the input, and the TensorFlow will predict at which speed this fuel usage would be correct. 

So- according to default data values- if user type 5.9 liters fuel usage, algorithm should tell that car would use 5.9 [l/100km] at about 114 [km/h]. 

### Technologies used in project
* Angular 6
* D3.js
* TensorFlow
* MustardUI

### Demo
https://bartekstolarek.github.io/LinearRegressionPredictor/

