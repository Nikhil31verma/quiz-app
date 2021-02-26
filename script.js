const quizDB=[
    {
    question: "Q1: What is the full form of html?",
    a: "Hypertext Makeup language",
    b: "Hello to My Land",
    c: "Hypertext Markup Language",
    d: "Hypertext Madeup Language",
    ans: "ans3"
    },
    {
        question: "Q2: What tag is used to display a picture in a HTML page?",
        a: "image",
        b: "src",
        c: "picture",
        d: "img",
        ans: "ans4"
    },
    {
        question: "Q3: The year in which HTML was first proposed?",
        a: "1990",
        b: "2000",
        c: "1999",
        d: "2004",
        ans: "ans1"
    },
    {
        question: "Q4: Which of the following tag is used to insert a line-break in HTML?",
        a: "pre",
        b: "br",
        c: "a",
        d: "b",
        ans: "ans1"
    },
    {
        question: "Q5: A program in HTML can be rendered and read by -?",
        a: "Web Browser",
        b: "Interpreter",
        c: "Server",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q6: Which HTML tag produces the biggest heading?",
        a: "h5",
        b: "h7",
        c: "h2",
        d: "h1",
        ans: "ans4"
    },
    {
        question: "Q7: input is - ?",
        a: "a format tag",
        b: "a empty tag",
        c: "All the above",
        d: "None of the above",
        ans: "ans2"
    },
    {
        question: "Q8:  The hr tag in HTML is used for ?",
        a: "new line",
        b: "vertical ruler",
        c: "new paragraph",
        d: "horizontal ruler",
        ans: "ans4"
    },
    {
        question: "Q9: How to insert a background image in HTML?",
        a: "body background = img.png",
        b: "img background = img.png",
        c: "bg-image = img.png",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q10:An HTML program is saved by using the ____ extension.",
        a: ".ht",
        b: ".html",
        c: ".hml",
        d: "None of the above",
        ans: "ans2"
    }
];
    const question=document.querySelector('.question');
    const option1=document.querySelector('#opt1');
    const option2=document.querySelector('#opt2');
    const option3=document.querySelector('#opt3');
    const option4=document.querySelector('#opt4');
    const submit=document.querySelector('#submit');
    const answers=document.querySelectorAll('.answer');
    const showScore=document.querySelector("#showscore");
    let questionCount=0;
    let score=0;
    const loadquestion = () => {
        const questionList=quizDB[questionCount];
        question.innerHTML = questionList.question;
        option1.innerHTML = questionList.a;
        option2.innerHTML = questionList.b;
        option3.innerHTML = questionList.c;
        option4.innerHTML = questionList.d;
    }
    loadquestion();

    const getCheckAnswer = () => {
        var answer;
        answers.forEach((curAnsElem) => {
            if(curAnsElem.checked)
            answer=curAnsElem.id;
        });
        return answer;
    };

    const deselectAll = () => {
        answers.forEach((curAnsElem) => curAnsElem.checked= false);
    }
    submit.addEventListener('click', () => {
        const checkedAnswer=getCheckAnswer();
        if(checkedAnswer == quizDB[questionCount].ans)
        score++;
        questionCount++;
        deselectAll();
        if(questionCount < quizDB.length)
        loadquestion();
        else
        {
showScore.innerHTML = `
            <h3> Your Score ${score}/${quizDB.length} </h3>
            <button class="btn" onclick="location.reload()"> Play Again </button>
            `;
            showScore.classList.remove('scoreArea');
        }
    });