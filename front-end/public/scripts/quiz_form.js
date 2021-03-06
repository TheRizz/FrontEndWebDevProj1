var quizName;

$(function () {
    onLoad();
});

function onLoad() {
    getQuiz();
    displayQuiz();
}

function getQuiz() {
    quizName = window.sessionStorage.getItem("quiz");
}


async function displayQuiz() {
    var docRef;
    var radio;
    var label;
    var question;
    var form = document.getElementById('form1');
    // hardcoded quiz
    //docRef = await get("Jake's Quiz");
    docRef = await get(quizName);
    //console.log(docRef);
    $(".quiz_name").text(docRef.Name);

    //Question1
    if (docRef.Question1) {
        question = document.createElement("h2");
        question.id = "q1";
        question.innerHTML = docRef.Question1.Question;
        form.appendChild(question);

        //Answer1
        radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer1";
        radio.value = 0;
        radio.id = "ans_1a";

        label = document.createElement("label");
        label.appendChild(radio);
        label.appendChild(document.createTextNode(docRef.Question1.Answers.AnswerA));

        form.appendChild(label);

        //Answer2
        radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer1";
        radio.value = 0;
        radio.id = "ans_1b";

        label = document.createElement("label");
        label.appendChild(radio);
        label.appendChild(document.createTextNode(docRef.Question1.Answers.AnswerB));

        form.appendChild(label);


        //Answer3
        if (docRef.Question1.Answers.AnswerC) {
            radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "answer1";
            radio.value = 0;
            radio.id = "ans_1c";

            label = document.createElement("label");
            label.appendChild(radio);
            label.appendChild(document.createTextNode(docRef.Question1.Answers.AnswerC));

            form.appendChild(label);
        }

        //Answer4
        if (docRef.Question1.Answers.AnswerD) {
            radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "answer1";
            radio.value = 0;
            radio.id = "ans_1d";

            label = document.createElement("label");
            label.appendChild(radio);
            label.appendChild(document.createTextNode(docRef.Question1.Answers.AnswerD));

            form.appendChild(label);
        }
    }


    //Question2
    if (docRef.Question2) {
        question = document.createElement("h2");
        question.id = "q2";
        question.innerHTML = docRef.Question2.Question;
        form.appendChild(question);

        //Answer1
        radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer2";
        radio.value = 0;
        radio.id = "ans_2a";

        label = document.createElement("label");
        label.appendChild(radio);
        label.appendChild(document.createTextNode(docRef.Question2.Answers.AnswerA));

        form.appendChild(label);

        //Answer2
        radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer2";
        radio.value = 0;
        radio.id = "ans_2b";

        label = document.createElement("label");
        label.appendChild(radio);
        label.appendChild(document.createTextNode(docRef.Question2.Answers.AnswerB));

        form.appendChild(label);


        //Answer3
        if (docRef.Question2.Answers.AnswerC) {
            radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "answer2";
            radio.value = 0;
            radio.id = "ans_2c";

            label = document.createElement("label");
            label.appendChild(radio);
            label.appendChild(document.createTextNode(docRef.Question2.Answers.AnswerC));

            form.appendChild(label);
        }


        //Answer4
        if (docRef.Question2.Answers.AnswerD) {
            radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "answer2";
            radio.value = 0;
            radio.id = "ans_2d";

            label = document.createElement("label");
            label.appendChild(radio);
            label.appendChild(document.createTextNode(docRef.Question2.Answers.AnswerD));

            form.appendChild(label);
        }
    }

    //Question3
    if (docRef.Question3) {
        question = document.createElement("h2");
        question.id = "q3";
        question.innerHTML = docRef.Question3.Question;
        form.appendChild(question);

        //Answer1
        radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer3";
        radio.value = 0;
        radio.id = "ans_3a";

        label = document.createElement("label");
        label.appendChild(radio);
        label.appendChild(document.createTextNode(docRef.Question3.Answers.AnswerA));

        form.appendChild(label);

        //Answer2
        radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer3";
        radio.value = 0;
        radio.id = "ans_3b";

        label = document.createElement("label");
        label.appendChild(radio);
        label.appendChild(document.createTextNode(docRef.Question3.Answers.AnswerB));

        form.appendChild(label);


        //Answer3
        if (docRef.Question3.Answers.AnswerC) {
            radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "answer3";
            radio.value = 0;
            radio.id = "ans_3c";

            label = document.createElement("label");
            label.appendChild(radio);
            label.appendChild(document.createTextNode(docRef.Question3.Answers.AnswerC));

            form.appendChild(label);
        }


        //Answer4
        if (docRef.Question3.Answers.AnswerD) {
            radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "answer3";
            radio.value = 0;
            radio.id = "ans_3d";

            label = document.createElement("label");
            label.appendChild(radio);
            label.appendChild(document.createTextNode(docRef.Question3.Answers.AnswerD));

            form.appendChild(label);
        }
    }

    //Question4
    if (docRef.Question4) {
        question = document.createElement("h2");
        question.id = "q4";
        question.innerHTML = docRef.Question4.Question;
        form.appendChild(question);

        //Answer1
        radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer4";
        radio.value = 0;
        radio.id = "ans_4a";

        label = document.createElement("label");
        label.appendChild(radio);
        label.appendChild(document.createTextNode(docRef.Question4.Answers.AnswerA));

        form.appendChild(label);

        //Answer2
        radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer4";
        radio.value = 0;
        radio.id = "ans_4b";

        label = document.createElement("label");
        label.appendChild(radio);
        label.appendChild(document.createTextNode(docRef.Question4.Answers.AnswerB));

        form.appendChild(label);


        //Answer3
        if (docRef.Question4.Answers.AnswerC) {
            radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "answer4";
            radio.value = 0;
            radio.id = "ans_4c";

            label = document.createElement("label");
            label.appendChild(radio);
            label.appendChild(document.createTextNode(docRef.Question4.Answers.AnswerC));

            form.appendChild(label);
        }


        //Answer4
        if (docRef.Question4.Answers.AnswerD) {
            radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "answer4";
            radio.value = 0;
            radio.id = "ans_4d";

            label = document.createElement("label");
            label.appendChild(radio);
            label.appendChild(document.createTextNode(docRef.Question4.Answers.AnswerD));

            form.appendChild(label);
        }
    }

    label = document.createElement("button");
    label.value = "button";
    label.type = "button";
    label.innerHTML = "Submit";
    label.onclick = function(){
        updateCharacter();
    };
    form.appendChild(label);
}

async function updateCharacter(){
    var char = await calcResult();
    document.getElementById("grade").innerHTML = char;

}

async function calcResult() {
    // hardcoded quiz
    var docRef = await get(quizName);
    $(".quiz_name").text(docRef.Name);

    var numToLet = ['A', 'B', 'C', 'D'];
    var totalWeights = [];
    var currentAnswer = 1;
    var radios = document.getElementsByName('answer' + currentAnswer.toString());

    while (radios.length > 0) {
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                var question = "Question" + (totalWeights.length + 1).toString();
                var weight = "Weight" + numToLet[i];
                totalWeights.push(docRef[question]['Weights'][weight]);
            }
        }

        currentAnswer++;
        radios = document.getElementsByName('answer' + currentAnswer.toString());
    }

    var results = [0.0, 0.0, 0.0, 0.0];

    for (var i = 0; i < totalWeights.length; i++) {
        var subWeights = totalWeights[i].split(',');

        for (var j = 0; j < subWeights.length; j++) {
            results[j] += parseFloat(subWeights[j]);
        }
    }

    return docRef["Characters"]["Character" + (indexOfMax(results) + 1).toString()];
}

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}