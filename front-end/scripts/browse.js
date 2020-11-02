$(function () {
    onLoad();
});

function onLoad() {
    var firestore = new RemoteDataStore();
    firestore.getAll();
}

function addQuiz(quiz) {
    $(".QuizList").append("<a href='quiz_form.html' onclick=\"window.sessionStorage.setItem('quiz','"+quiz+"')\"><li>"+quiz+"</li></a>");
}

