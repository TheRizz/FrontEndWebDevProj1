async function getQuizzes(){
    let snapshot = await firebase.firestore().collection('Quizzes').get();
    //console.log("Document", snapshot.docs.map(doc => doc.data()));
    sessionStorage.setItem('quizzes', snapshot.docs.map(doc => doc.data()));
}

async function onLoad(qtype) {
    //var firestore = new RemoteDataStore();
    await getAll(qtype);
}

function addQuiz(quiz) {
    $(".QuizList").append("<a href='quiz_form.html' onclick=\"window.sessionStorage.setItem('quiz','"+quiz+"')\"><li>"+quiz+"</li></a>");
}
