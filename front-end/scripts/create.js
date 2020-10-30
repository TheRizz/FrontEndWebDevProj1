const steps = Array.from(document.querySelectorAll('form .step'));
const nextBtn = document.querySelectorAll('form .next-btn');
const prevBtn = document.querySelectorAll('form .previous-btn');
const questionBtn = document.querySelectorAll('form .question-btn');
const form = document.querySelector('form');


nextBtn.forEach(button=>{
    button.addEventListener('click', (event) =>{
        changeStep('next');
    })
})

prevBtn.forEach(button=>{
    button.addEventListener('click',(event)=>{
        changeStep('previous');
    })
})

questionBtn.forEach(button=>{
    button.addEventListener('click',(event)=>{
        changeStep('next');
    })
})


form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const inputs = [];
    form.querySelectorAll('input').forEach(input=> {
        const {name, value} = input;
        inputs.push({name, value})
    })

    var firestore = new RemoteDataStore();
    firestore.create(inputs);
    
    form.reset();
    let index = 0;
    const active = document.querySelector('form .step.active');
    index = steps.indexOf(active);
    steps[index].classList.remove('active');
    steps[0].classList.add('active');
    alert('Quiz was created successfully!');
})

function changeStep(btn){
    let index = 0;
    const active = document.querySelector('form .step.active');
    index = steps.indexOf(active);
    steps[index].classList.remove('active');
    if(btn === 'next'){
        index++;
    }
    else if(btn === 'previous'){
        index--;
    }
    steps[index].classList.add('active');
    //console.log(index);
}
