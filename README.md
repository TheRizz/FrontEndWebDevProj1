# CPSC 349 Fall 2020 Project #1

![Homepage](https://i.imgur.com/dvB637h.png)

## Group Members
Ivan Parrales, Kyle Slater, Ryan Martinez, and Jake Sichley

## Overview
A "What Character Are You" Quiz Generator, built with HTML, CSS, and JS.

Data storage built with Firebase.

## Installation and Configuration
1. Clone the master branch of the [repository](https://github.com/TheRizz/FrontEndWebDevProj1)
2. Navigate to your project directory and install the Firebase prerequisites
    1. `npm install -g firebase-tools`
    2. `npm install -g firebase-admin`
3. Create a new [Firebase/Firestore](firebase.google.com) project
4. Add the name of your Firestore project in `.firebaserc`
5. Authorize your Firestore project by issuing the command `firebase login`
6. Start the server by issuing the command `firebase serve`
7. Project should now be visible at `http://localhost:5000/login.html`

## Register and Log in
1. Select `Register` and create a new account. If you already have an account, skip this step.
2. Select `Log In` and log in using your credentials.

## Creating a Quiz
1. Select `Create Quiz` from the homepage.
2. Supply the required information for setting up a Quiz: Name and Characters. Press `Next` when complete.
3. Enter your first question and the answers. The order of the answers do not matter. Press `Next` 
when complete.
4. Enter the weights for your answers. Weights can be either integers or floats. Weights must be in the format 
`#, #, #, #`. Example: `.25, 0, 1, .66`. The first number represents the value that will be added to Character1
if this answer is selected. The second number represents the value that will be added to Character2
if this answer is selected. This pattern holds for the third and forth number.
    1. Note: If you have 4 answers, you should have a total of 16 weights for that question.
5. You can add more questions by pressing `Add Question` and repeating this process, or you can select `Create` 
to finish your Quiz and add it to the database.

## Taking a Quiz
1. Select `Take Quiz` to browse all quizzes, or `My Quizzes` to browse quizzes you've created.
2. Select a quiz from the list by clicking on the Quiz name.
3. Select 1 option per question. When finished, press the `Submit` button.
4. Congratulations! Your answer will be calculated and displayed.
5. You can optionally change your answers and select `Submit` again to take the quiz again. If you want to take a 
different quiz, select `Home` to be taken back to the homepage.

## Logging Off
1. Select `Log Off` to sign out of your account.