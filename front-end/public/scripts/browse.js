async function getQuizzes(){
    let snapshot = await firebase.firestore().collection('Quizzes').get();
    //console.log("Document", snapshot.docs.map(doc => doc.data()));
    sessionStorage.setItem('quizzes', snapshot.docs.map(doc => doc.data()));
}

async function onLoad() {
    //var firestore = new RemoteDataStore();
    await getAll();
    await takeQuiz();
}

function addQuiz(quiz) {
    // $(".QuizList").append("<a href='#'><li>"+quiz+"</li></a>");
    $(".QuizList").append("<a href='#'><li id="+quiz.split(" ").join("").toLowerCase()+">"+quiz+"</li></a>");
}



function takeQuiz(){
    var li = document.querySelectorAll("li");
    for(item in li){
        item.addEventListener('click', (event) => {
            sessionStorage.setItem('quiz', item.innerHTML);
            window.location = quiz.html;
        })
    }
}
