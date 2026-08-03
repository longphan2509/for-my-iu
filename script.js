/* =========================
   FOR MY IU - SCRIPT
   ========================= */


const passwordInput = document.getElementById("password");
const enterBtn = document.getElementById("enter-btn");

const passScreen = document.getElementById("pass-screen");
const messageScreen = document.getElementById("message-screen");
const introScreen = document.getElementById("intro-screen");
const homeScreen = document.getElementById("home-screen");

const wrongText = document.getElementById("wrong-text");
const introText = document.getElementById("intro-text");


/* =========================
   HEART FLOAT
   ========================= */


function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "♡";

    heart.style.position = "absolute";
    heart.style.bottom = "-20px";

    heart.style.left =
    Math.random() * 100 + "%";


    heart.style.fontSize =
    (15 + Math.random()*25) + "px";


    heart.style.color =
    Math.random() > 0.5
    ? "#f8b6ce"
    : "#ffffff";


    heart.style.opacity =
    0.4 + Math.random()*0.5;


    heart.style.transition =
    "transform 8s linear, opacity 8s";


    document.querySelector(".hearts")
    ?.appendChild(heart);


    setTimeout(()=>{

        heart.style.transform =
        "translateY(-110vh) rotate(360deg)";

        heart.style.opacity = 0;

    },100);


    setTimeout(()=>{

        heart.remove();

    },8000);

}


setInterval(createHeart,700);



/* =========================
   CHANGE SCREEN
   ========================= */


function changeScreen(from,to){

    from.classList.remove("active");

    setTimeout(()=>{

        to.classList.add("active");

    },500);

}



/* =========================
   WRONG PASSWORD
   ========================= */


function wrongPassword(){

    passwordInput.style.animation =
    "shake 0.4s";


    wrongText.style.opacity = 1;


    setTimeout(()=>{

        wrongText.style.opacity = 0;

    },700);


    setTimeout(()=>{

        passwordInput.style.animation="";

    },500);

}



/* =========================
   RIGHT PASSWORD
   ========================= */


function correctPassword(){

    changeScreen(
        passScreen,
        messageScreen
    );


    setTimeout(()=>{

        changeScreen(
            messageScreen,
            introScreen
        );


        startIntro();


    },2000);

}



/* =========================
   INTRO TEXT
   ========================= */


function startIntro(){

    const lines=[

    "Không biết là em có xem hay có quan tâm không",

    "nhưng nếu em vào đến đây rồi",

    "thì nhớ đi một vòng nha"

    ];


    let index=0;


    function showLine(){

        if(index >= lines.length){

            setTimeout(()=>{

                changeScreen(
                    introScreen,
                    homeScreen
                );

            },1200);

            return;

        }


        introText.innerHTML =
        lines[index];


        index++;


        setTimeout(showLine,2500);

    }


    showLine();

}



/* =========================
   BUTTON
   ========================= */


enterBtn.addEventListener(
"click",
()=>{


    if(passwordInput.value==="iuiuoi"){

        correctPassword();

    }

    else{

        wrongPassword();

    }


});

/* =========================
   BUTTON RIPPLE
   ========================= */


const roomButtons = document.querySelectorAll(".room-btn");


roomButtons.forEach(button => {


    button.addEventListener("click", function(e){


        const circle = document.createElement("span");


        const rect = this.getBoundingClientRect();


        const size = Math.max(
            rect.width,
            rect.height
        );


        circle.style.width = size + "px";

        circle.style.height = size + "px";


        circle.style.left =
        e.clientX - rect.left - size/2 + "px";


        circle.style.top =
        e.clientY - rect.top - size/2 + "px";


        circle.className = "ripple";


        this.appendChild(circle);


        setTimeout(()=>{

            circle.remove();

        },700);


    });


});
