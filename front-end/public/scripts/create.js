const steps = Array.from(document.querySelectorAll('form .step'));
const nextBtn = document.querySelectorAll('form .next-btn');
const prevBtn = document.querySelectorAll('form .previous-btn');
const questionBtn = document.querySelectorAll('form .question-btn');
const form = document.querySelector('form');

async function checkQuizName(quizName) {
    var valid = false;
    var newName = toString(quizName).toLowerCase();
    await firebase.firestore().collection('Quizzes').where('nameCheck', '==', newName)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log(doc.id, " => ", doc.data());
                valid = true;
            });
        });

    if (valid) {
        console.log("Quiz name found");
        return true;
    } else {
        console.log("Quiz name not found");
        return false;
    }
}

nextBtn.forEach(button => {
    button.addEventListener('click', (event) => {
        changeStep('next');
    })
})

prevBtn.forEach(button => {
    button.addEventListener('click', (event) => {
        changeStep('previous');
    })
})

questionBtn.forEach(button => {
    button.addEventListener('click', (event) => {
        changeStep('next');
    })
})


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputs = [];
    form.querySelectorAll('input').forEach(input => {
        const {
            name,
            value
        } = input;
        inputs.push({
            name,
            value
        });
    });

    //var firestore = new RemoteDataStore();
    create(inputs);

    form.reset();
    let index = 0;
    const active = document.querySelector('form .step.active');
    index = steps.indexOf(active);
    steps[index].classList.remove('active');
    steps[0].classList.add('active');
    alert('Quiz was created successfully!');
})

async function changeStep(btn) {
    let index = 0;
    let check = await checkQuizName(document.getElementById("QuizName"));
    if (!(check)) {
        const active = document.querySelector('form .step.active');
        index = steps.indexOf(active);
        steps[index].classList.remove('active');
        if (btn === 'next') {
            index++;
        } else if (btn === 'previous') {
            index--;
        }
        steps[index].classList.add('active');
    } else {
        window.alert("Quiz Name Taken");
    }
    //console.log(index);
}