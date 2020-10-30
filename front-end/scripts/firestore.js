
class RemoteDataStore {
    constructor() {
        if (!firebase.apps.length) {
            var firebaseConfig = {
                apiKey: "",
                authDomain: "cpsc-349-project-1.firebaseapp.com",
                databaseURL: "https://cpsc-349-project-1.firebaseio.com",
                projectId: "cpsc-349-project-1",
                storageBucket: "cpsc-349-project-1.appspot.com",
                messagingSenderId: "520198273160",
                appId: "1:520198273160:web:3a3cece94043440c30873d",
                measurementId: "G-LMEFDW9G7D"
            };
        
            firebase.initializeApp(firebaseConfig);
            firebase.analytics();
        }    
        
        console.log('Constructing the Firestore handler');
        this.db = firebase.firestore();   
    }

    create(inputs) {
        const quizRef = this.db.collection('Quizzes');
        var quizName = inputs[0]['value'];

        quizRef.doc(quizName).set({
            'Name': quizName,
        });

        quizRef.doc(quizName).set({
            'Characters': {
                'Character1': inputs[1]['value'],
                'Character2': inputs[2]['value'],
                'Character3': inputs[3]['value'],
                'Character4': inputs[4]['value'],
            }
        }, { merge: true });

        for (var i = 5; i < inputs.length; i += 9) {
            if (inputs[i]['value'] != '') {
                var questionName = inputs[i]['name'];

                quizRef.doc(quizName).set({
                    [questionName] : {
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
                }, { merge: true });
            }
        }        
    }


    remove(key) {
        const quizRef = this.db.collection('Quizzes');
        quizRef.doc(key).delete().then(() => console.log("Quiz ", key, " deleted"))
        .catch((error) => console.error("Error deleting document", error));
    }

    async get(key) {
        console.log('Retrieving Quiz: ', key);
        const quizRef = this.db.collection('Quizzes').doc(key);
        const doc = await quizRef.get();

        if (!doc.exists) {
            return;
        } else {
            return doc.data();
        }
    }

    async getAll() {
        console.log('Retrieving all orders');
        const ordersRef = this.db.collection('Quizzes');
        const snapshot = await ordersRef.get();
        return snapshot.docs.map(doc => doc.data());
    }
}