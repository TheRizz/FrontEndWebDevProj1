$(function (){
    onLoad();
});

function onLoad() {
    var firestore = new RemoteDataStore();
    firestore.getAll();
}

function addQuiz(quiz) {
    $(".QuizList").append("<a href='#'><li>"+quiz+"</li></a>");
}
