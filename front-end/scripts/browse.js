$(function (){
    onLoad();
});

function onLoad() {
    var firestore = new RemoteDataStore();
    firestore.getAll();
}

function addQuiz(quiz) {
    $(".QuizList").html("<a href='#'><li>"+quiz+"</li></a>");
}