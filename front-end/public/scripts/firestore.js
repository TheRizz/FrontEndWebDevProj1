function create(inputs) {
    const quizRef = firebase.firestore().collection('Quizzes');
    var quizName = inputs[0]['value'];

    quizRef.doc(quizName).set({
        'Name': quizName,
    });
    quizRef.doc(quizName).set({
        'NameCheck': quizName.toLowerCase(),
    }, {
        merge: true
    });
    quizRef.doc(quizName).set({
        'Creator': sessionStorage.getItem('user').toLowerCase(),
    }, {
        merge: true
    });

    quizRef.doc(quizName).set({
        'Characters': {
            'Character1': inputs[1]['value'],
            'Character2': inputs[2]['value'],
            'Character3': inputs[3]['value'],
            'Character4': inputs[4]['value'],
        }
    }, {
        merge: true
    });

    for (var i = 5; i < inputs.length; i += 9) {
        if (inputs[i]['value'] != '') {
            var questionName = inputs[i]['name'];

            quizRef.doc(quizName).set({
                [questionName]: {
                    'Question': inputs[i]['value'],
                    'Answers': {
                        'AnswerA': inputs[i + 1]['value'],
                        'AnswerB': inputs[i + 2]['value'],
                        'AnswerC': inputs[i + 3]['value'],
                        'AnswerD': inputs[i + 4]['value'],
                    },
                    'Weights': {
                        'WeightA': inputs[i + 5]['value'],
                        'WeightB': inputs[i + 6]['value'],
                        'WeightC': inputs[i + 7]['value'],
                        'WeightD': inputs[i + 8]['value'],
                    },
                }
            }, {
                merge: true
            });
        }
    }
}


function remove(key) {
    const quizRef = firebase.firestore().collection('Quizzes');
    quizRef.doc(key).delete().then(() => console.log("Quiz ", key, " deleted"))
        .catch((error) => console.error("Error deleting document", error));
}

async function get(key) {
    console.log('Retrieving Quiz: ', key);
    const quizRef = firebase.firestore().collection('Quizzes').doc(key);
    const doc = await quizRef.get();

    if (!doc.exists) {
        return;
    } else {
        return doc.data();
    }
}

async function getAll(qtype) {
    //var quiztype = await qtype.toString();
    if(sessionStorage.getItem('qtype') == "all"){
    console.log('Retrieving all quizzes');
    await firebase.firestore().collection("Quizzes").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            addQuiz(doc.id);
            //console.log(doc.id, " => ", doc.data());
        });
    });
} else{
    console.log('Retrieving My quizzes');
    await firebase.firestore().collection("Quizzes").where('Creator', '==', sessionStorage.getItem('user')).get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            addQuiz(doc.id);
            //console.log(doc.id, " => ", doc.data());
        });
    });
}
}