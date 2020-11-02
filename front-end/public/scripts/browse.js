async function getQuizzes(){
    let snapshot = await firebase.firestore().collection('Quizzes').get();
    console.log("Document", snapshot.docs.map(doc => doc.data()));
    sessionStorage.setItem('quizzes', snapshot.docs.map(doc => doc.data()));
}

function onLoad() {
    //var firestore = new RemoteDataStore();
    getAll();
}

function addQuiz(quiz) {
    // $(".QuizList").append("<a href='#'><li>"+quiz+"</li></a>");
    $(".QuizList").append("<a href='#'><li id="+quiz+">"+quiz+"</li></a>");
}

function takeQuiz(){

}
