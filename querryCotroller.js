//data Section
const quizData = [
    {
        question: "What place do you prefer to be at most to complete your assignments?",
        subtitle: "Place where enjoy doing your homeworks or review the lesson.",
        answer: [
            "Library", //15/25/20/10/10/20
            "Office", //20/25/15/15/15/10
            "Classes", //15/20/25/10/10/20
            "Coffee Shop", //25/10/15/10/15/25
            "Your Room", //10/20/15/20/25/10
            "Public Park", //25/15/20/5/5/30
        ],
    },
    {
        question: "Which are your most enjoyable activity?",
        subtitle: "Your daily hobbies that you always do.",
        answer: [
            "Reading books, articles, newspapers", //20/25/25/5/10/15
            "Writing, Listening to Music/Podcast", //15/20/15/20/15/15
            "Traveling, Shopping, Camping", //20/10/20/10/15/25
            "Watching Videos, Dramas, Movies", //20/15/15/15/15/20
        ],
    },
    {
        question: "What skill do you think you are best at?",
        subtitle: "",
        answer: [
            "Communication", //20/15/20/10/15/20
            "Being attentive", //15/25/20/10/15/15
            "Quick Learning", //15/20/15/15/20/15
            "Memorizing", //15/20/20/15/15/15
            "Analyzing", //15/15/10/25/30/5
            "Problem-solving", //20/15/15/15/20/15
        ],
    },
    {
        question: "What skill do you think is your weakness?",
        subtitle: "",
        answer: [
            "Communication", //10/10/10/30/25/10
            "Being attentive", //10/20/10/30/20/10
            "Quick Learning", //20/10/20/20/10/20
            "Memorizing", //20/10/15/20/20/15
            "Analyzing", //15/25/15/15/15/15
            "Problem-solving", //15/20/15/20/15/15
        ],
    },
    {
        question: "Which type of person would you like to communicate with?",
        subtitle: "You can think of your friend or family personality to answer this question.",
        answer: [
            "Talkative", //25/15/20/10/5/25
            "Serious", //15/20/20/15/15/15
            "Understandable", //20/15/15/15/20/15
            "Energetic", //15/15/15/20/20/15
            "Funny", //25/10/15/10/15/25
            "No One", //10/15/10/25/20/15
        ],
    },
    {
        question: "Which of the following is best describe yourself as a person?",
        subtitle: "What do you see yourselves? Look at the mirror!",
        answer: [
            "Active", //20/20/15/15/10/20
            "Shy", //15/15/15/20/20/15
            "Creative", //20/10/10/20/20/20
            "Adventurous", //15/15/15/15/15/25
            "Diligent", //20/20/20/10/10/20
            "Considerate", //15/20/15/15/20/15
        ],
    },
    {
        question: "Which would you want to improve your country in the future?",
        subtitle: "You can take times to think of this question",
        answer: [
            "A higher rate of nonviolent", //15/35/35/0/0/15
            "Better and cleaner environment", //10/15/30/0/0/45
            "Improvement of quality in technology", //15/0/5/35/35/10
            "Stable economy", //35/0/35/0/0/30
            "Better connection with your neighbors", //10/10/35/5/10/30
            "More accurate of information in publishment", //15/30/20/10/10/15
        ],
    },
    {
        question: "Which of the following that people would describe most about you?",
        subtitle: "Your family or friends who used to describe about you, or what personality that public potray you.",
        answer: [
            "Stubborn person", //15/20/10/15/15/25
            "Risk taker", //25/10/20/10/15/20
            "Open-mind person", //15/25/20/10/15/15
            "Generous person", //10/15/25/15/15/20
            "Flexible person", //15/10/20/25/15/15
            "Heart-kindness person", //10/15/20/15/20/20
        ],
    },
    {
        question: "Which of the following that you think you have the most understanding in?",
        subtitle: "Most likely the things you used to learn from high school",
        answer: [
            "Global Warming", //10/15/30/10/10/25
            "Profit and loss", //25/15/5/15/15/25
            "Globalization", //15/15/20/15/15/20
            "Free speech", //15/25/20/10/15/15
            "Data gathering", //10/10/10/30/30/10
            "Debating", //15/35/25/5/5/15
        ],
    },
    {
        question: "Which of the following types of movies would you like to watch the most?",
        subtitle: "",
        answer: [
            "Adventure", //10/15/30/10/10/25
            "Investment", //25/10/10/15/15/25
            "Sci-fi", //10/15/15/25/20/15
            "Historical", //10/15/30/10/10/25
            "Legal drama", //15/40/20/5/5/15
            "Documentary", //20/20/20/10/10/20
        ],
    },
    {
        question: "Which of the following activities would you like to try in the future?",
        subtitle: "",
        answer: [
            "Making new friends", //25/10/20/10/15/20
            "Helping a community", //15/15/20/10/10/30
            "Investing in Stocks", //25/5/10/20/20/20
            "Joining a debate", //10/35/20/10/10/15
            "Learning about privacy security", //15/15/10/25/20/15
            "Assuring the information", //10/15/15/25/30/5
        ],
    },
    {
        question: "Which of the following would you like to spend your time on watching?",
        subtitle: "It can be videos from every social media like Youtube, Facebook, Instagram or TikTok",
        answer: [
            "Wildlife documentaries", //10/10/25/10/15/30
            "History documentaries", //10/25/25/10/10/20
            "Traveling videos", //20/10/20/10/10/30
            "News reporting", //10/20/25/15/25/5
            "World Modern trending", //15/10/20/20/15/20
            "Music videos", //25/10/10/15/15/25
        ],
    },
    {
        question: "Which of the following goodwills would you want to be involved in the most?",
        subtitle: "",
        answer: [
            "Helping people in the rural community", //10/20/20/5/15/30
            "Helping people to be accessible in information", //10/15/20/20/20/15
            "Helping people to have the right", //10/35/20/10/10/15
            "Helping people to decide a better future", //30/10/20/10/10/20
        ],
    },
    {
        question: "Which of the following subjects are you good at during high school?",
        subtitle: "",
        answer: [
            "Mathematic, Physic, Chemistry", //10/0/0/40/50/0
            "Literature, History, Geograpghy", //15/25/35/0/0/25
            "Science, Biology, Earthology", //5/5/5/25/30/30
            "Social Studies, Art, Ethics", //25/25/25/0/0/25
        ],
    },
    {
        question: "Which of the following experiences did you have in high school?",
        subtitle: "",
        answer: [
            "Making money", //25/10/15/10/15/25
            "Created somethings out of materials", //15/0/0/35/30/20
            "Getting to know more friends", //30/5/25/5/5/30
            "Going on a trip with friends", //15/15/25/10/10/25
            "Studying, Group Discussing, Tutoring", //25/20/25/5/0/25
            "All of the above", //20/15/15/15/15/20
        ],
    },
];

const point = {
    "1.1": [10, 20, 10, 35, 15, 10],
    "1.2": [0, 0, 20, 20, 10, 50],
    "1.3": [10, 0, 10, 10, 60, 10],
    "1.4": [0, 40, 10, 20, 0, 30],
    "1.5": [10, 40, 10, 10, 20, 10],
    "1.6": [30, 40, 20, 0, 0, 10],

    "2.1": [30, 40, 20, 0, 0, 10],
    "2.2": [10, 0, 10, 10, 0, 10],
    "2.3": [10, 20, 10, 35, 15, 10],
    "2.4": [0, 40, 10, 20, 0, 30],

    "3.1": [0, 40, 10, 20, 0, 30],
    "3.2": [0, 40, 10, 20, 0, 30],
    "3.3": [30, 40, 20, 0, 0, 10],
    "3.4": [10, 50, 10, 10, 10, 10],
    "3.5": [10, 20, 10, 35, 15, 10],
    "3.6": [10, 0, 10, 10, 60, 10],

    "4.1": [0, 0, 0, 0, 0, 0],
    "4.2": [0, 0, 0, 0, 0, 0],
    "4.3": [0, 0, 0, 0, 0, 0],
    "4.4": [0, 0, 0, 0, 0, 0],
    "4.5": [0, 0, 0, 0, 0, 0],
    "4.6": [0, 0, 0, 0, 0, 0],

    "5.1": [0, 0, 0, 0, 0, 0],
    "5.2": [0, 0, 0, 0, 0, 0],
    "5.3": [0, 0, 0, 0, 0, 0],
    "5.4": [0, 0, 0, 0, 0, 0],
    "5.5": [0, 0, 0, 0, 0, 0],
    "5.6": [0, 0, 0, 0, 0, 0],


    "6.1": [0, 0, 0, 0, 0, 0],
    "6.2": [0, 0, 0, 0, 0, 0],
    "6.3": [0, 0, 0, 0, 0, 0],
    "6.4": [0, 0, 0, 0, 0, 0],
    "6.5": [0, 0, 0, 0, 0, 0],
    "6.6": [0, 0, 0, 0, 0, 0],

    "7.1": [0, 0, 0, 0, 0, 0],
    "7.2": [0, 0, 0, 0, 0, 0],
    "7.3": [0, 0, 0, 0, 0, 0],
    "7.4": [0, 0, 0, 0, 0, 0],
    "7.5": [0, 0, 0, 0, 0, 0],
    "7.6": [0, 0, 0, 0, 0, 0],

    "8.1": [0, 0, 0, 0, 0, 0],
    "8.2": [0, 0, 0, 0, 0, 0],
    "8.3": [0, 0, 0, 0, 0, 0],
    "8.4": [0, 0, 0, 0, 0, 0],
    "8.5": [0, 0, 0, 0, 0, 0],
    "8.6": [0, 0, 0, 0, 0, 0],

    "9.1": [0, 0, 0, 0, 0, 0],
    "9.2": [0, 0, 0, 0, 0, 0],
    "9.3": [0, 0, 0, 0, 0, 0],
    "9.4": [0, 0, 0, 0, 0, 0],
    "9.5": [0, 0, 0, 0, 0, 0],
    "9.6": [0, 0, 0, 0, 0, 0],

    "10.1": [0, 0, 0, 0, 0, 0],
    "10.2": [0, 0, 0, 0, 0, 0],
    "10.3": [0, 0, 0, 0, 0, 0],
    "10.4": [0, 0, 0, 0, 0, 0],
    "10.5": [0, 0, 0, 0, 0, 0],
    "10.6": [0, 0, 0, 0, 0, 0],

    "11.1": [0, 0, 0, 0, 0, 0],
    "11.2": [0, 0, 0, 0, 0, 0],
    "11.3": [0, 0, 0, 0, 0, 0],
    "11.4": [0, 0, 0, 0, 0, 0],
    "11.5": [0, 0, 0, 0, 0, 0],
    "11.6": [0, 0, 0, 0, 0, 0],

    "12.1": [0, 0, 0, 0, 0, 0],
    "12.2": [0, 0, 0, 0, 0, 0],
    "12.3": [0, 0, 0, 0, 0, 0],
    "12.4": [0, 0, 0, 0, 0, 0],
    "12.5": [0, 0, 0, 0, 0, 0],
    "12.6": [0, 0, 0, 0, 0, 0],

    "13.1": [0, 0, 0, 0, 0, 0],
    "13.2": [0, 0, 0, 0, 0, 0],
    "13.3": [0, 0, 0, 0, 0, 0],
    "13.4": [0, 0, 0, 0, 0, 0],

    "14.1": [0, 0, 0, 0, 0, 0],
    "14.2": [0, 0, 0, 0, 0, 0],
    "14.3": [0, 0, 0, 0, 0, 0],
    "14.4": [0, 0, 0, 0, 0, 0],

    "15.1": [0, 0, 0, 0, 0, 0],
    "15.2": [0, 0, 0, 0, 0, 0],
    "15.3": [0, 0, 0, 0, 0, 0],
    "15.4": [0, 0, 0, 0, 0, 0],
    "15.5": [0, 0, 0, 0, 0, 0],
    "15.6": [0, 0, 0, 0, 0, 0],
}



//variable section
let currentQuiz = 0;
const qNum = document.getElementById("qNum");
const questionEl = document.getElementById('question');
const subEl = document.getElementById('subtitle');
const submitBtn = document.getElementById('submit');
const sub = document.querySelector('#submit').classList;

const answerContentFade = () => document.querySelector("#answerContent").classList.toggle("fadeUp");
const answerHide = () => document.querySelector("#answerContent").classList.add("opacityZero");
const nextButtonShow = () => document.querySelector("#next").classList.toggle("fadeIn");
const showQuestionBg = () => document.querySelector("#querry #bg").classList.toggle("textFadeIn");
const mainPageOnOff = () => document.querySelector("#centered").classList.toggle("fadeOut");
const questionHeader = document.querySelector("#querry").classList;
const loadingPage = document.querySelector("#load").classList;


//function section
const fadeQuestion = () => {
    sub.remove('changeColor');
    answerContentFade();
};

function loadQuiz() {
    var node = document.getElementById("answerGroup"); node.querySelectorAll('*').forEach(n => n.remove());

    const currentQuizData = quizData[currentQuiz];

    questionNum = currentQuiz + 1;
    totalQuestion = quizData.length;
    qNum.innerHTML = "Question " + questionNum + " /" + totalQuestion;
    questionEl.innerText = currentQuizData.question
    subEl.innerText = currentQuizData.subtitle;
    let answerOption = currentQuizData.answer;

    for (var i = 0; i < answerOption.length; i++) {
        let input = document.createElement("input");
        let label = document.createElement("label");

        input.type = "radio";
        input.name = "answer";
        input.id = `${currentQuiz + 1}.${i + 1}`;
        input.className = "answer";

        label.htmlFor = `${currentQuiz + 1}.${i + 1}`;
        label.innerText = answerOption[i];
        label.style = answerOption.length == 4 ? "flex: 2 0 30%" : "";
        document.querySelector("#answerGroup").append(input, label);
    }


    const answerEls = document.querySelectorAll('.answer');
    answerEls.forEach(
        anw => anw.addEventListener('click', enableBTN)
    );
}

function enableBTN() {
    const answerEls = document.querySelectorAll('.answer');
    getSelected(answerEls);
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            sub.add('changeColor');
        }
    })


}

function getSelected(answerEls) {
    let answer;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
            console.log(answer);
        }
    })

    return answer;
}

var answeredArr = [];

function nextQuestion() {
    const answerEls = document.querySelectorAll('.answer');
    const answer = getSelected(answerEls);
    answeredArr[Math.floor(answer)-1]= answer;
    if (answer) {

        currentQuiz++;
        fadeQuestion();

        if (currentQuiz < quizData.length) {
            setTimeout(function () {
                loadQuiz();
                fadeQuestion();
            }, 1000);
        } else {
            console.log(answeredArr);
            let major = caculatePoint(answeredArr);
            let label_text = `<div id="labelText" style="text-align: center"> Based on your personality, <br> WIM thinks your most suitable major is: <br>
            -> [${answeredArr}] </div>`;
            console.log(major);

            answerHide();

            nextButtonShow();

            setTimeout(function () {
                showQuestionBg();
                questionHeader.add("fadeO");
            }, 800);

            setTimeout(function () {
                loadingPage.toggle("showLoad");
                questionHeader.add("fadeWH");
                document.getElementById("centered").classList.toggle('hide');
            }, 1500);

            setTimeout(function(){
                showMajor(major, label_text);
            },5700);

            setTimeout(function(){
                loadingPage.toggle("showLoad");
            },7000);
        }
    }
}

function caculatePoint(answered) {
    var gradeArr = [];
    var pointArr = [];
    answered.forEach(item => {
        gradeArr[answered.indexOf(item)] = point[item];
    });


    for (let i = 0; i < 6; i++) {
        let score = 0;
        for (let j = 0; j < gradeArr.length; j++) {
            score += gradeArr[j][i];
        }
        pointArr.push(score);
    }

    console.log(gradeArr);
    console.log(pointArr);

    let majorNo = pointArr.indexOf(Math.max(...pointArr));
    let major;

    switch (majorNo) {
        case 0:
            major = 'BUS';
            break;
        case 1:
            major = 'Law';
            break;
        case 2:
            major = 'GLA';
            break;
        case 3:
            major = 'ITM';
            break;
        case 4:
            major = 'ICT';
            break;
        case 5:
            major = 'THM';
            break;
    }

    return major;
}

function questionPage() {
    document.querySelector("#findMajor").addEventListener("click", function () {

        mainPageOnOff();
        questionHeader.toggle("fadeIn");


        setTimeout(function () {
            showQuestionBg();
        }, 1000);

        setTimeout(function () {
            answerContentFade();
            nextButtonShow();
        }, 1700);
    })
}



//initialize section
questionPage();
loadQuiz();
submitBtn.addEventListener('click', nextQuestion);





/////////////////////// start of major Page Section //////////////////////////////////
const majorData = {
    'ITM': {
        majorName: "Information Technology Management",
        majorAbv: "ITM",
        majorInfo: "The Information Technology Management (ITM) program is designed to develop professionals in emerging and converging information and communication technologies. A degree in ITM produces graduates who can organize business processes to support the strategic corporate needs, demands and goals at the management level. The program is designed to bridge the gap between problems of business and the capabilities of information technology, while aligning the technology with business strategies. Students enhance their critical thinking, problem solving, and analytical skills with knowledge of management principles. The program is a balance of technology, management, communications and the liberal arts.",
        careerInfo: "Students are prepared for positions in technology and management fields, such as, for example, local and national government, telecommunications, financial institutions, corporate or educational IT units, private business and NGO’s. Graduates will have the necessary knowledge, experience and skills to enter technology related careers in business and management. Job opportunities include, but are not limited to:",
        careerList: [
            "Business, Management and Systems Analyst",
            "IT and project management",
            "IT director",
            "Information Management Specialist",
            "Database or Web Administrator",
            "Network Administrator",
            "Software or Computer Applications specialist",
            "IT Security Officer",
            "Data Scientist",
            "More...",
        ],
        courseList: [
            "Analytic Geometry and Calculus",
            "Maths for Computing",
            "Survey of Computer Science",
            "Computer Science",
            "Foundations of Computing",
            "Data Structures",
            "Assembly Language ",
            "Operating Systems",
            "Programming Languages",
            "Computer Graphics",
            "Software Engineering",
            "Introduction to Web Development ",
            "Front-end Web Development",
            "Database Design and Programming",
            "Java Programming I",
        ],
    },

    'BUS': {
        majorName: "Business",
        majorAbv: "ITM",
        majorInfo: "The Information Technology Management (ITM) program is designed to develop professionals in emerging and converging information and communication technologies. A degree in ITM produces graduates who can organize business processes to support the strategic corporate needs, demands and goals at the management level. The program is designed to bridge the gap between problems of business and the capabilities of information technology, while aligning the technology with business strategies. Students enhance their critical thinking, problem solving, and analytical skills with knowledge of management principles. The program is a balance of technology, management, communications and the liberal arts.",
        careerInfo: "Students are prepared for positions in technology and management fields, such as, for example, local and national government, telecommunications, financial institutions, corporate or educational IT units, private business and NGO’s. Graduates will have the necessary knowledge, experience and skills to enter technology related careers in business and management. Job opportunities include, but are not limited to:",
        careerList: [
            "Business, Management and Systems Analyst",
            "IT and project management",
            "IT director",
            "Information Management Specialist",
            "Database or Web Administrator",
            "Network Administrator",
            "Software or Computer Applications specialist",
            "IT Security Officer",
            "Data Scientist",
            "More...",
        ],
        courseList: [
            "Analytic Geometry and Calculus",
            "Maths for Computing",
            "Survey of Computer Science",
            "Computer Science",
            "Foundations of Computing",
            "Data Structures",
            "Assembly Language ",
            "Operating Systems",
            "Programming Languages",
            "Computer Graphics",
            "Software Engineering",
            "Introduction to Web Development ",
            "Front-end Web Development",
            "Database Design and Programming",
            "Java Programming I",
        ],
    },

    'Law': {
        majorName: "Law",
        majorAbv: "ITM",
        majorInfo: "The Information Technology Management (ITM) program is designed to develop professionals in emerging and converging information and communication technologies. A degree in ITM produces graduates who can organize business processes to support the strategic corporate needs, demands and goals at the management level. The program is designed to bridge the gap between problems of business and the capabilities of information technology, while aligning the technology with business strategies. Students enhance their critical thinking, problem solving, and analytical skills with knowledge of management principles. The program is a balance of technology, management, communications and the liberal arts.",
        careerInfo: "Students are prepared for positions in technology and management fields, such as, for example, local and national government, telecommunications, financial institutions, corporate or educational IT units, private business and NGO’s. Graduates will have the necessary knowledge, experience and skills to enter technology related careers in business and management. Job opportunities include, but are not limited to:",
        careerList: [
            "Business, Management and Systems Analyst",
            "IT and project management",
            "IT director",
            "Information Management Specialist",
            "Database or Web Administrator",
            "Network Administrator",
            "Software or Computer Applications specialist",
            "IT Security Officer",
            "Data Scientist",
            "More...",
        ],
        courseList: [
            "Analytic Geometry and Calculus",
            "Maths for Computing",
            "Survey of Computer Science",
            "Computer Science",
            "Foundations of Computing",
            "Data Structures",
            "Assembly Language ",
            "Operating Systems",
            "Programming Languages",
            "Computer Graphics",
            "Software Engineering",
            "Introduction to Web Development ",
            "Front-end Web Development",
            "Database Design and Programming",
            "Java Programming I",
        ],
    },

    'GLA': {
        majorName: "Global Affairs",
        majorAbv: "ITM",
        majorInfo: "The Information Technology Management (ITM) program is designed to develop professionals in emerging and converging information and communication technologies. A degree in ITM produces graduates who can organize business processes to support the strategic corporate needs, demands and goals at the management level. The program is designed to bridge the gap between problems of business and the capabilities of information technology, while aligning the technology with business strategies. Students enhance their critical thinking, problem solving, and analytical skills with knowledge of management principles. The program is a balance of technology, management, communications and the liberal arts.",
        careerInfo: "Students are prepared for positions in technology and management fields, such as, for example, local and national government, telecommunications, financial institutions, corporate or educational IT units, private business and NGO’s. Graduates will have the necessary knowledge, experience and skills to enter technology related careers in business and management. Job opportunities include, but are not limited to:",
        careerList: [
            "Business, Management and Systems Analyst",
            "IT and project management",
            "IT director",
            "Information Management Specialist",
            "Database or Web Administrator",
            "Network Administrator",
            "Software or Computer Applications specialist",
            "IT Security Officer",
            "Data Scientist",
            "More...",
        ],
        courseList: [
            "Analytic Geometry and Calculus",
            "Maths for Computing",
            "Survey of Computer Science",
            "Computer Science",
            "Foundations of Computing",
            "Data Structures",
            "Assembly Language ",
            "Operating Systems",
            "Programming Languages",
            "Computer Graphics",
            "Software Engineering",
            "Introduction to Web Development ",
            "Front-end Web Development",
            "Database Design and Programming",
            "Java Programming I",
        ],
    },

    'ICT': {
        majorName: "Information Communications and Technology",
        majorAbv: "ITM",
        majorInfo: "The Information Technology Management (ITM) program is designed to develop professionals in emerging and converging information and communication technologies. A degree in ITM produces graduates who can organize business processes to support the strategic corporate needs, demands and goals at the management level. The program is designed to bridge the gap between problems of business and the capabilities of information technology, while aligning the technology with business strategies. Students enhance their critical thinking, problem solving, and analytical skills with knowledge of management principles. The program is a balance of technology, management, communications and the liberal arts.",
        careerInfo: "Students are prepared for positions in technology and management fields, such as, for example, local and national government, telecommunications, financial institutions, corporate or educational IT units, private business and NGO’s. Graduates will have the necessary knowledge, experience and skills to enter technology related careers in business and management. Job opportunities include, but are not limited to:",
        careerList: [
            "Business, Management and Systems Analyst",
            "IT and project management",
            "IT director",
            "Information Management Specialist",
            "Database or Web Administrator",
            "Network Administrator",
            "Software or Computer Applications specialist",
            "IT Security Officer",
            "Data Scientist",
            "More...",
        ],
        courseList: [
            "Analytic Geometry and Calculus",
            "Maths for Computing",
            "Survey of Computer Science",
            "Computer Science",
            "Foundations of Computing",
            "Data Structures",
            "Assembly Language ",
            "Operating Systems",
            "Programming Languages",
            "Computer Graphics",
            "Software Engineering",
            "Introduction to Web Development ",
            "Front-end Web Development",
            "Database Design and Programming",
            "Java Programming I",
        ],
    },

    'THM': {
        majorName: "Tourism and Hospitality Management",
        majorAbv: "ITM",
        majorInfo: "The Information Technology Management (ITM) program is designed to develop professionals in emerging and converging information and communication technologies. A degree in ITM produces graduates who can organize business processes to support the strategic corporate needs, demands and goals at the management level. The program is designed to bridge the gap between problems of business and the capabilities of information technology, while aligning the technology with business strategies. Students enhance their critical thinking, problem solving, and analytical skills with knowledge of management principles. The program is a balance of technology, management, communications and the liberal arts.",
        careerInfo: "Students are prepared for positions in technology and management fields, such as, for example, local and national government, telecommunications, financial institutions, corporate or educational IT units, private business and NGO’s. Graduates will have the necessary knowledge, experience and skills to enter technology related careers in business and management. Job opportunities include, but are not limited to:",
        careerList: [
            "Business, Management and Systems Analyst",
            "IT and project management",
            "IT director",
            "Information Management Specialist",
            "Database or Web Administrator",
            "Network Administrator",
            "Software or Computer Applications specialist",
            "IT Security Officer",
            "Data Scientist",
            "More...",
        ],
        courseList: [
            "Analytic Geometry and Calculus",
            "Maths for Computing",
            "Survey of Computer Science",
            "Computer Science",
            "Foundations of Computing",
            "Data Structures",
            "Assembly Language ",
            "Operating Systems",
            "Programming Languages",
            "Computer Graphics",
            "Software Engineering",
            "Introduction to Web Development ",
            "Front-end Web Development",
            "Database Design and Programming",
            "Java Programming I",
        ],
    },
}

var choosenMajor = 'hi';
let labelText = document.getElementById('labelText');
let notes = "<div id=\"noteText\"> Note: The result is NOT 100% accurate, we analyzed your input based upon the research on major and personality, students' learning experiences, and the survey. We are hoping that WIM can ease your difficulty in finding your college major. Please seek guidance from your family, friends, and especially yourselves. Your Major, Your Choice, Your Future! </div>"

let texting = "<div id=\"labelText\" style=\"text-align: center\"> </div>"

let majorIcon = document.getElementsByClassName('tooltip');

for (key of document.getElementsByClassName('BUS')) {
    key.addEventListener('click', () => {
        console.log("clicked BUS");
        hideHomepage();
        showMajor("BUS", "");
    });
}

for (key of document.getElementsByClassName('LAW')) {
    key.addEventListener('click', () => {
        console.log("clicked LAW");
        hideHomepage();
        showMajor("Law", "");
    });
}

for (key of document.getElementsByClassName('GLA')) {
    key.addEventListener('click', () => {
        console.log("clicked GLA");
        hideHomepage();
        showMajor("GLA", "");
    });
}

for (key of document.getElementsByClassName('IT')) {
    key.addEventListener('click', () => {
        console.log("clicked IT");
        hideHomepage();
        showMajor("ITM", "");
    });
}

for (key of document.getElementsByClassName('THM')) {
    key.addEventListener('click', () => {
        console.log("clicked THM");
        hideHomepage();
        showMajor("THM", "");
    });
}

for (key of document.getElementsByClassName('ICT')) {
    key.addEventListener('click', () => {
        console.log("clicked ICT");
        hideHomepage();
        showMajor("ICT", "");
    });
}

function hideHomepage(){
    document.getElementById('centered').classList.toggle('fadeOut');

    setTimeout(() => {
        document.getElementById('centered').style.display = 'none';
    }, 500);
}

function showMajor(choosen_major, label) {

    choosenMajor = majorData[choosen_major];

    document.getElementById('padding').classList.toggle('fadePad');

    setTimeout(() => {
        document.getElementById('majorBg').classList.toggle('slideIn');
        document.getElementById('majorName').classList.toggle('slide');
    }, 1000);




    let major = document.getElementById('major');
    let majorTitle = document.getElementById('majorTitle');
    let majorInfo = document.getElementById('majorInfo');
    let careerInfo = document.getElementById('careerInfo');
    let labelText = document.getElementById('texting');
    let note = document.getElementById('noted');



    major.innerHTML = choosenMajor.majorName;
    labelText.innerHTML = label;
    majorTitle.innerHTML = `What is ${choosenMajor.majorAbv}?`;
    majorInfo.innerHTML = choosenMajor.majorInfo;
    careerInfo.innerHTML = choosenMajor.careerInfo;
    note.innerHTML =  label == "" ? "" : notes; 

    choosenMajor.careerList.forEach(
        item => {
            let list = document.createElement("li");
            list.innerHTML = item;

            document.querySelector("#careerList").append(list);
        }
    );

    choosenMajor.courseList.forEach(
        item => {
            let list = document.createElement("li");
            list.innerHTML = item;

            document.querySelector("#courseList").append(list);
        }
    );
}



document.getElementById('findAgain').addEventListener('click', () => {
    window.location.reload();
});

document.getElementById('home').addEventListener('click', () => {
    window.location.reload();
});

/////////////////////// end of major Page Section //////////////////////////////////
