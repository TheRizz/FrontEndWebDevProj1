var firestore = new RemoteDataStore();
var quizName;

$(function(){
    onLoad();
});

function onLoad(){
    getQuiz();
    displayQuiz();
}

function getQuiz() {
    quizName = window.sessionStorage.getItem("quiz");
}


async function displayQuiz(){
    var docRef;
    docRef = await firestore.get(quizName);
    $(".quiz_name").text(docRef.Name);
    $("#q1").text(docRef.Question1.Question);
    $("#q2").text(docRef.Question2.Question);
    $("#q3").text(docRef.Question3.Question);
    $("#q4").text(docRef.Question4.Question);
    $("#q5").text(docRef.Question5.Question);

    $(".ans_1a").append(docRef.Question1.Answers.AnswerA);
    $(".ans_1b").append(docRef.Question1.Answers.AnswerB);
    $(".ans_1c").append(docRef.Question1.Answers.AnswerC);
    $(".ans_1d").append(docRef.Question1.Answers.AnswerD);

    $(".ans_2a").append(docRef.Question2.Answers.AnswerA);
    $(".ans_2b").append(docRef.Question2.Answers.AnswerB);
    $(".ans_2c").append(docRef.Question2.Answers.AnswerC);
    $(".ans_2d").append(docRef.Question2.Answers.AnswerD);

    $(".ans_3a").append(docRef.Question3.Answers.AnswerA);
    $(".ans_3b").append(docRef.Question3.Answers.AnswerB);
    $(".ans_3c").append(docRef.Question3.Answers.AnswerC);
    $(".ans_3d").append(docRef.Question3.Answers.AnswerD);

    $(".ans_4a").append(docRef.Question4.Answers.AnswerA);
    $(".ans_4b").append(docRef.Question4.Answers.AnswerB);
    $(".ans_4c").append(docRef.Question4.Answers.AnswerC);
    $(".ans_4d").append(docRef.Question4.Answers.AnswerD);

    $(".ans_5a").append(docRef.Question5.Answers.AnswerA);
    $(".ans_5b").append(docRef.Question5.Answers.AnswerB);
    $(".ans_5c").append(docRef.Question5.Answers.AnswerC);
    $(".ans_5d").append(docRef.Question5.Answers.AnswerD);
}

// document.getElementById("form1").onsubmit = function () {
//     variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
//     sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
//     con = parseInt(document.querySelector('input[name = "con"]:checked').value);
//     ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);


//     result = variable + sub + con + ifstate;

//     document.getElementById("grade").innerHTML = result;

//     grading = [{
//             score: 0,
//             feedback: "I don't think you studied",
//             image: "none.jpg"
//         },
//         {
//             score: 25,
//             feedback: "You need to spend more time. Try again",
//             image: "poor.jpg"
//         },
//         {
//             score: 50,
//             feedback: "I think you could do better. Try again.",
//             image: "avg.jpg"
//         },
//         {
//             score: 75,
//             feedback: "So close. Try again.",
//             image: "above.jpg"
//         },
//         {
//             score: 100,
//             feedback: "Excellent! You're a JavaScript pro!",
//             image: "excellent.jpg"
//         }
//     ];

//     for (i = 0; i < grading.length; i++) {
//         if (result == grading[i].score) {
//             result2 = grading[i].feedback + "<br /><img src='" + grading[i].image + "' width='300'  />";
//         }
//     }


//     document.getElementById("grade2").innerHTML = result2;

//     return false; // required to not refresh the page; just leave this here
// } //this ends the submit function