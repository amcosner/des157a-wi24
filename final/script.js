(function(){
    'use strict';
    console.log('running JS');

    // health = only gameData I need for now, will probably add time later
    const gameData = {
		health:[100],
		// attack: [5, 15, 25, 30, 40],
        index: 0
	};

    // noises + variables
    const btnnoise = new Audio('sounds/button.mp3');
    const gameOver =  new Audio('sounds/gameover.mp3');
    let health = gameData.health;

    // functions

    //updates health bar and updates percentage
    function adjustHealth() {
        // adjusting healthbar based on health
        document.querySelector(`#healthbar div`).style.width = `${health}%`;
        // updating health percentage
        document.querySelector(`#percent`).innerHTML = `health: ${health}%`;
    }

    //triggers death screen elements to appear
    function deathScreen(){
        document.querySelector('#smallcharacter').className="hidden1";
        document.querySelector('#youdied').className="showing";
        document.querySelector('#deadcharacter').className="showing";
        document.querySelector('#deadcharacter').className= "zap";
    }

    //resets 'hop' animation so it can be triggered again later
    function resetAnimation() {
        document.querySelector('#smallcharacter').className="showing";
    }

    //makes sure health stays in between 0-100
    function healthInteger() {
        if(health < 0) {health=0;};
        if(health > 100) {health = 100;};
    }

    // start game
    document.querySelector('#start').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        // hiding front page + triggering 2nd overlay + other page elements
        document.querySelector('#startoverlay').className="hidden";
        document.querySelector('#bfast').className="showing";
        document.querySelector('#background2').className="showing";
        document.querySelector('#smallcharacter').className="showing";
        document.querySelector('#health').className="showing";
        // starting health at 80
        health = 80
        adjustHealth()
    });

    // first question (breakfast)

    // if you click yes
    document.querySelector('#btnbfastyes').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        // health change
        health = health + 20
        // triggering next overlay + page elements
        document.querySelector('#bfast').className="hidden";
        document.querySelector('#bfastyes').className="showing";
        document.querySelector('#smallcharacter').className="showing, hop";
        adjustHealth()
    });

    // if you click no
    document.querySelector('#btnbfastno').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        // triggering next overlay
        document.querySelector('#bfast').className="hidden";
        document.querySelector('#bfastno').className="showing";
        document.querySelector('#smallcharacter').className="showing, zap";
        // health change
        health = health - 80
        // making sure health bar is capped at 0
        healthInteger()
        adjustHealth()
    });

     // second question (class)

    //  hitting next triggers question 2 (class or essay)
    document.querySelector('#btnbfastnext1').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        // triggering next overlay
        resetAnimation()
        document.querySelector('#bfastyes').className="hidden";
        document.querySelector('#class').className="showing";
    });

    document.querySelector('#btnbfastnext2').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        // triggering next overlay
            document.querySelector('#bfastno').className="hidden";
            document.querySelector('#smallcharacter').className="hidden1";
            //play gameover sound
            gameOver.play()
            document.querySelector('#youdied').className="showing";
            document.querySelector('#deadcharacter').className="showing, zap";
    });

    // if you died and need to retry
    document.querySelector('#btndeadretry').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        // triggering next overlay
        document.querySelector('#youdied').className="hidden";
        document.querySelector('#deadcharacter').className="hidden";
        document.querySelector('#startoverlay').className="showing";
        document.querySelector('#smallcharacter').className="hidden";
        document.querySelector('#background2').className="hidden";
    });

    // pay attention
    document.querySelector('#attention').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        //health change
        health = health - 40
        healthInteger()
        // triggering next overlay
        document.querySelector('#class').className="hidden";
        document.querySelector('#payattention').className="showing";
        document.querySelector('#smallcharacter').className="showing, zap";
        adjustHealth()
    });

    // essay
    document.querySelector('#essay').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        //triggering next overlay
        document.querySelector('#class').className="hidden";
        document.querySelector('#smallcharacter').className="showing, hop";
        document.querySelector('#writeessay').className="showing";
        // health change
        health = health + 20
        healthInteger()
        adjustHealth()
    });

    // triggering third question (lunch)
    document.querySelector('#btnessaynext').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        //health change
        // making sure health is capped at 100
        healthInteger()
        // triggering next overlay
        resetAnimation()
        document.querySelector('#writeessay').className="hidden";
        document.querySelector('#lunch').className="showing";
    });

    document.querySelector('#btnattentionnext').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        // making sure health stays 0-100
        healthInteger()
        // if you have health, move onto next overlay or show death overlay
        if (health > 0){
            document.querySelector('#payattention').className="hidden";
            document.querySelector('#lunch').className="showing";
            resetAnimation()
        } else if (health == 0) {
            //play gameover sound
            gameOver.play()
            document.querySelector('#payattention').className="hidden";;
            deathScreen()
        }
    });

    // if soup 
    document.querySelector('#btnsoup').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        //health change
        health = health - 60
        healthInteger()
        // next overlay
        document.querySelector('#lunch').className="hidden";
        document.querySelector('#lunchsoup').className="showing";
        document.querySelector('#smallcharacter').className="showing, zap";
        adjustHealth()
    });
 
    // if rice
    document.querySelector('#btnrice').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        //health change
        // next overlay
        document.querySelector('#lunch').className="hidden";
        document.querySelector('#lunchrice').className="showing";
        document.querySelector('#smallcharacter').className="showing, hop";
        // health change
        health = health + 40
        healthInteger()
        adjustHealth()
    });

    // triggering question 4 (work)
    document.querySelector('#btnricenext').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        //health change
        // next overlay
        resetAnimation()
        document.querySelector('#lunchrice').className="hidden";
        document.querySelector('#work').className="showing";
    });

    document.querySelector('#btnsoupnext').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        //keeping health 0-100
        healthInteger()
        // if user has health --> continue or show death screen
        if (health > 0){
            document.querySelector('#lunchsoup').className="hidden";
            document.querySelector('#work').className="showing";
            resetAnimation()
        } else if (health == 0) {
            //play gameover sound
            gameOver.play()
            document.querySelector('#lunchsoup').className="hidden";
            deathScreen()
        }
    });

    // if library
    document.querySelector('#btnlibrary').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        // next overlay
        document.querySelector('#work').className="hidden";
        document.querySelector('#worklibrary').className="showing";
        document.querySelector('#smallcharacter').className="showing, hop";
        // health change
        health = health + 20
        healthInteger()
        adjustHealth()
    });

    // if home
    document.querySelector('#btnhome').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        //next overlay
        document.querySelector('#work').className="hidden";
        document.querySelector('#workhome').className="showing";
        document.querySelector('#smallcharacter').className="showing, zap";
        // health change
        health = health - 50
        healthInteger()
        adjustHealth()
    });

    // triggering 5th question (freetime)
    document.querySelector('#btnhomenext').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        //keep health 0-100
        healthInteger()
        // if health --> continue, if not --> death overlay
        if (health > 0){
            resetAnimation()
            document.querySelector('#workhome').className="hidden";
            document.querySelector('#freetime').className="showing";
        } else if (health == 0) {
            //play gameover sound
            gameOver.play()
            document.querySelector('#workhome').className="hidden";
            deathScreen()
        }
    });

    document.querySelector('#btnlibrarynext').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        //next overlay
        resetAnimation()
        document.querySelector('#worklibrary').className="hidden";
        document.querySelector('#freetime').className="showing";
    });

    // if walk
    document.querySelector('#btnwalk').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        //next overlay
        document.querySelector('#freetime').className="hidden";
        document.querySelector('#freetimewalk').className="showing";
        document.querySelector('#smallcharacter').className="showing, hop";
        // health change
        health = health + 40
        healthInteger()
        adjustHealth()
    });

     // if hw
     document.querySelector('#btnhw').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        //next overlay
        document.querySelector('#freetime').className="hidden";
        document.querySelector('#freetimehw').className="showing";
        document.querySelector('#smallcharacter').className="showing, zap";
        // health change
        health = health - 40
        healthInteger()
        adjustHealth()
    });

    // triggering last question (hangout)
    document.querySelector('#btnhwnext').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        //next overlay
        healthInteger()
        // if health exists --> continue, if not --> death overlay
        if (health > 0){
            resetAnimation()
            document.querySelector('#freetimehw').className="hidden";
            document.querySelector('#hangout').className="showing";
        } else if (health == 0) {
            //play gameover sound
            gameOver.play()
            document.querySelector('#freetimehw').className="hidden";
            deathScreen()
        }
        adjustHealth()
    });

    document.querySelector('#btnwalknext').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        //next overlay
        resetAnimation()
        document.querySelector('#freetimewalk').className="hidden";
        document.querySelector('#hangout').className="showing";
        adjustHealth()
    });

    // if bar
    document.querySelector('#btnbar').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        //next overlay
        document.querySelector('#hangout').className="hidden";
        document.querySelector('#hangoutbar').className="showing";
        document.querySelector('#smallcharacter').className="showing, zap";
        health = health - 30
        healthInteger()
        adjustHealth()
    });

    // if movie
    document.querySelector('#btnmovie').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        //next overlay
        document.querySelector('#hangout').className="hidden";
        document.querySelector('#hangoutmovie').className="showing";
        document.querySelector('#smallcharacter').className="showing, hop";
        // health change
        health = health + 50
        healthInteger()
        adjustHealth()
    });


    // triggering congrats
    document.querySelector('#btnmovienext').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        //next overlay
        healthInteger()
        document.querySelector('#hangoutmovie').className="hidden";
        document.querySelector('#congrats').className="showing";
         document.querySelector('#smallcharacter').className="showing, yippee";
    });

    document.querySelector('#btnbarnext').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        //next overlay
        healthInteger()
        // if health exists --> continue, if not --> death overlay
        if (health > 0){
            document.querySelector('#smallcharacter').className="showing, yippee";
            document.querySelector('#hangoutbar').className="hidden";
            document.querySelector('#congrats').className="showing";
            // document.querySelector('#background2').className="showing";
        } else if (health == 0) {
            //play gameover sound
            gameOver.play()
            document.querySelector('#hangoutbar').className="hidden";
            deathScreen(); }
    });

    document.querySelector('#btnretry').addEventListener('click', function(event){
        // playing noise
        btnnoise.play()
        //next overlay
        document.querySelector('#congrats').className="hidden";
        document.querySelector('#startoverlay').className="showing";
        document.querySelector('#smallcharacter').className="hidden";
        document.querySelector('#background2').className="hidden";
    });
})();
