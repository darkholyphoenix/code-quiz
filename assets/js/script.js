var body = document.body;

var countdown = document.querySelector('#countdown');
var timeLeft = 75;
countdown.textContent = timeLeft;
var wrong = function() {
    timeLeft = timeLeft - 10
    document.querySelector("#answer").innerHTML = 'Wrong!';
}

var btn1 = document.querySelector("#buttonOne");
var btn2 = document.querySelector("#buttonTwo");
var btn3 = document.querySelector("#buttonThree");
var btn4 = document.querySelector("#buttonFour");

countdown.setAttribute('style', 'display: inline; text-align: right')

function countDown() {

    var timeInterval = setInterval(function(){
        if (timeLeft >= 0) {
            countdown.textContent= timeLeft;
            timeLeft = timeLeft -1;
        } else if ( timeLeft <= 1) {
            
        }
        
        else { (timeLeft > 1);

            clearInterval(timeInterval)
            
        }
        
    
    }, 1000);

       questionone();
    }

    

var h1El = document.querySelector('h1');
h1El.textContent =
  'Coding Quiz Challenge';
h1El.setAttribute('style', 'margin:auto; width:100%; text-align:center;')


var h4El = document.querySelector('h4');
h4El.textContent = 
    'Try answering the code related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds';
h4El.setAttribute('style', 'margin:auto; width: 100%; text-align:center;')

var btn = document.querySelector("#buttonOne");
btn.innerHTML = "Start";
btn.setAttribute=('style', 'background-color: blue; border-radius: 10px; text-align: center;')
btn.addEventListener("click", function(){
    console.log("click")
 countDown();
})

btn2.style.visibility='hidden'
btn3.style.visibility='hidden'
btn4.style.visibility='hidden'
document.querySelector('#scoreName').style.visibility='hidden'


function questionone() {
     var q1El= document.querySelector('h1');
     q1El.textContent =
    'Arrays in JavaScript can be used to store:';
    q1El.setAttribute('style', 'margin:auto; width:100%; text-align:center;');
    
    btn2.style.visibility='visible'
    btn3.style.visibility='visible'
    btn4.style.visibility='visible'
    
    btn1.innerHTML = "numbers and strings";
    btn1.addEventListener("click", function() {
        wrong()
        questiontwo()
        
    });

    btn1.removeEventListener("click", function() {
        wrong()
        questiontwo()
        
    });
    
    
    btn2.innerHTML = "other arrays";
    btn2.addEventListener("click", function() {
        wrong()
         questiontwo()
    });

    btn2.removeEventListener("click", function() {
        wrong()
        questiontwo()
        
    });
    
    btn3.innerHTML = "booleans";
    btn3.addEventListener("click", function() {
        wrong()
        questiontwo()
    });

    btn3.removeEventListener("click", function() {
        wrong()
        questiontwo()
        
    });

    
    btn4.innerHTML = "all the above";
    btn4.addEventListener("click", function() {
       document.querySelector("#answer").innerHTML = 'Correct!';
        questiontwo()
    });

    btn4.removeEventListener("click", function() {
        wrong()
        questiontwo()
        
    });
    
    if (timeLeft == 0) {
        finalscore();
    };

}

function questiontwo() {
    var q2El= document.querySelector('h1');
    q2El.textContent =
    'String values must be enclose within ____________ when being assigned to a variable.';
    q2El.setAttribute('style', 'margin:auto; width:100%; text-align:center;');

    btn2.style.visibility='visible'
     btn3.style.visibility='visible'
     btn4.style.visibility='visible'

    
     btn1.innerHTML = "commas";
     btn1.addEventListener("click", function() {
        wrong()
         questionthree()
         
    });

    btn1.removeEventListener("click", function() {
        wrong()
        questiontwo()
        
    });

    
    btn2.innerHTML = "curly brackets";
    btn2.addEventListener("click", function() {
        wrong()
         questionthree()
    });

    btn2.removeEventListener("click", function() {
        wrong()
        questiontwo()
        
    });

    btn3.innerHTML = "quotes";
    btn3.addEventListener("click", function() {
          document.querySelector("#answer").innerHTML = 'Correct!';
           questionthree()
    });

    btn3.removeEventListener("click", function() {
        wrong()
        questiontwo()
        
    });

    
    btn4.innerHTML = "parentheses";
    btn4.addEventListener("click", function() {
        wrong()
         questionthree()
    });

    btn4.removeEventListener("click", function() {
        wrong()
        questiontwo()
        
    });

     if (timeLeft == 0) {
        finalscore();
    };
}

function questionthree() {
        var q3El= document.querySelector('h1');
        q3El.textContent =
        'The condition in an if / else statement is enclosed with ________.';
        q3El.setAttribute('style', 'margin:auto; width:100%; text-align:center;')

        btn2.style.visibility='visible'
        btn3.style.visibility='visible'
        btn4.style.visibility='visible'

        btn1.innerHTML = "commas";
        btn1.addEventListener("click", function() {
            wrong()
             questionfour()
             
        });

        btn1.removeEventListener("click", function() {
            wrong()
            questiontwo()
            
        });

        
        btn2.innerHTML = "square brackets";
        btn2.addEventListener("click", function() {
            wrong()
             questionfour()
        });

        btn2.removeEventListener("click", function() {
            wrong()
            questiontwo()
            
        });

        
        btn3.innerHTML = "curly brackets";
        btn3.addEventListener("click", function() {
            wrong()
             questionfour()
        });

        btn3.removeEventListener("click", function() {
            wrong()
            questiontwo()
            
        });

        
        btn4.innerHTML = "parentheses";
        btn4.addEventListener("click", function() {
               document.querySelector("#answer").innerHTML = 'Correct!';
               questionfour()
        });

        btn4.removeEventListener("click", function() {
            wrong()
            questiontwo()
            
        });
        
         if (timeLeft == 0) {
            finalscore();
        }
    }

function questionfour() {
    var q4El= document.querySelector('h1');
    q4El.textContent =
    'Commonly used data types DO NOT include:';
    q4El.setAttribute('style', 'margin:auto; width:100%; text-align:center;');
    
    btn2.style.visibility='visible'
     btn3.style.visibility='visible'
     btn4.style.visibility='visible'

    
    btn1.innerHTML = "strings";
    btn1.addEventListener("click", function() {
        wrong()
         questionfive()
         console.log(btn1)
    });

    btn1.removeEventListener("click", function() {
        wrong()
        questiontwo()
        
    });
    
    
    btn2.innerHTML = "booleans";
    btn2.addEventListener("click", function() {
        wrong()
         questionfive()
    });

    btn2.removeEventListener("click", function() {
        wrong()
        questiontwo()
        console.log(btn2)
    });
    
    
    btn3.innerHTML = "console.log";
    btn3.addEventListener("click", function() {
           document.querySelector("#answer").innerHTML = 'Correct!';
           questionfive();
    });

    btn3.removeEventListener("click", function() {
        wrong()
        questiontwo()
        console.log(btn3)
    });

    
    
    btn4.innerHTML = "terminal";
    btn4.addEventListener("click", function() {
        wrong()
         questionfive()
         console.log(btn14)
    });

    btn4.removeEventListener("click", function() {
        wrong()
        questiontwo()
        
    });
    
     if (timeLeft == 0) {
        finalscore();
    };

}

function questionfive() {
    var q5El= document.querySelector('h1');
    q5El.textContent =
    'A very useful tool used during development and debugging for printing content to the debugger is:';
    q5El.setAttribute('style', 'margin:auto; width:100%; text-align:center;');
    
    btn2.style.visibility='visible'
     btn3.style.visibility='visible'
     btn4.style.visibility='visible'

    
    btn1.innerHTML = "Javascript";
    btn1.addEventListener("click", function() {
        wrong()
         finalscore()
         
    });

    btn1.removeEventListener("click", function() {
        wrong()
        questiontwo()
        

    });
    btn2.innerHTML = "for loops";
    btn2.addEventListener("click", function() {
        wrong()
         finalscore()
    });

    btn2.removeEventListener("click", function() {
        wrong()
        questiontwo()
        
    });

    btn3.innerHTML = "console.log";
    btn3.addEventListener("click", function() {
        wrong()
         finalscore()
    });

    btn3.removeEventListener("click", function() {
        wrong()
        questiontwo()
        
    });
    
    btn4.innerHTML = "all the above";
    btn4.addEventListener("click", function() {
        timeLeft = timeLeft -10
        document.querySelector("#answer").innerHTML = 'Wrong!';
         finalscore()
    });

    btn4.removeEventListener("click", function() {
        wrong()
        questiontwo()
        
    });
     if (timeLeft == 0) {
        finalscore();
    };

}

function finalscore() {
    var finalEl= document.querySelector('h1');
    finalEl.textContent =
    'Final Score:' + timeLeft

    var finalRe = document.querySelector('h4');
    finalRe.textContent = 
    'All Done!';
    finalEl.setAttribute('style', 'margin:auto; width:100%; text-align:center;')
    
    document.querySelector('#answer').style.visibility='hidden'
    document.querySelector('#buttonOne').style.visibility='hidden'
    btn2.style.visibility='hidden'
     btn3.style.visibility='hidden'
     btn4.style.visibility='hidden'
    document.querySelector('#scoreName').style.visibility='visible'
}

score.addEventListener('click', function(event) {
     var intials = document.querySelector('#score');
     renderLastRegistered()
     hsPage();
})
    

function renderLastRegistered() {
    document.user_form.action = "score"
    var nameSubmit = localStorage.setitem("intials", intials);
    var scoreSubmit = localStorage.setitem("score", timeLeft);
    
}


    var finScore = localStorage.getItem('score');
    var intScore = localStorage.getItem('intials');

//
// 

    function hsPage() {
    var hsIntial= document.querySelector('h1');
    hsIntial.textContent= finScore, intScore;
    localStorage.setItem('score', timeLeft);
    localStorage.setItem('initials', intialSubmit);
    renderLastRegistered()
    }



