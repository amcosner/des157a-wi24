(function(){
    'use strict';
    console.log('running JS');

    const gameData = {
		health:[100],
		// attack: [5, 15, 25, 30, 40],
        index: 0
	};

    let health = gameData.health;

    // start game
    document.querySelector('#start').addEventListener('click', function(event){
        document.querySelector('#startoverlay').className="hidden";
        document.querySelector('#bfast').className="showing";
        document.querySelector('#smallcharacter').className="showing";
        document.querySelector('#health').className="showing";
    });

    // first question (breakfast)

    // if you click yes
    document.querySelector('#btnbfastyes').addEventListener('click', function(event){
        health = 100
        document.querySelector('#bfast').className="hidden";
        document.querySelector('#bfastyes').className="showing";
         // adjusting healthbar based on health
         document.querySelector(`#healthbar div`).style.width = `health: ${health}%`;
         // updating health percentage
         document.querySelector(`#percent`).innerHTML = `health: ${health}%`;
    });

    // if you click no
    document.querySelector('#btnbfastno').addEventListener('click', function(event){
        document.querySelector('#bfast').className="hidden";
        document.querySelector('#bfastno').className="showing";
        health = health - 80
        if(health < 0) {health= 0;}
         // adjusting healthbar based on health
         document.querySelector(`#healthbar div`).style.width = `health: ${health}%`;
         // updating health percentage
         document.querySelector(`#percent`).innerHTML = `health: ${health}%`;
    });

     // second question (class)
    //  hitting next triggers question 2 (class or essay)
     document.querySelector('#btnbfastnext1').addEventListener('click', function(event){
        document.querySelector('#bfastyes').className="hidden";
        document.querySelector('#class').className="showing";
    });

    document.querySelector('#btnbfastnext2').addEventListener('click', function(event){
        if (health > 0){
            document.querySelector('#bfastno').className="hidden";
            document.querySelector('#class').className="showing";
        }
        else if (health = 0) {
            document.querySelector('#bfastno').className="hidden";
            document.querySelector('#smallcharacter').className="hidden";
            document.querySelector('#youdied').className="showing";
            document.querySelector('#dead').className="showing";
        }
    });

    // pay attention
    document.querySelector('#attention').addEventListener('click', function(event){
        document.querySelector('#class').className="hidden";
        document.querySelector('#payattention').className="showing";
        health = health - 20
        if(health < 0) {health = 0;}
         // adjusting healthbar based on health
         document.querySelector(`#healthbar div`).style.width = `health: ${health}%`;
         // updating health percentage
         document.querySelector(`#percent`).innerHTML = `health: ${health}%`;
    });

    // essay
    document.querySelector('#essay').addEventListener('click', function(event){
        document.querySelector('#class').className="hidden";
        document.querySelector('#writeessay').className="showing";
        health = health + 20
        if(health > 100) {health = 100;}
         // adjusting healthbar based on health
         document.querySelector(`#healthbar div`).style.width = `health: ${health}%`;
         // updating health percentage
         document.querySelector(`#percent`).innerHTML = `health: ${health}%`;
    });

    // triggering third question (lunch)
    document.querySelector('#btnessaynext').addEventListener('click', function(event){
        document.querySelector('#writeessay').className="hidden";
        document.querySelector('#lunch').className="showing";
    });

    document.querySelector('#btnattentionnext').addEventListener('click', function(event){
        if (health > 0){
            document.querySelector('#payattention').className="hidden";
            document.querySelector('#lunch').className="showing";
        } else if (health = 0) {
            document.querySelector('#payattention').className="hidden";
            document.querySelector('#smallcharacter').className="hidden";
            document.querySelector('#youdied').className="showing";
            document.querySelector('#dead').className="showing";
        }
    });

    // if soup 
    document.querySelector('#btnsoup').addEventListener('click', function(event){
        document.querySelector('#lunch').className="hidden";
        document.querySelector('#lunchsoup').className="showing";
        health = health - 60
        if(health < 0) {health = 0;}
         // adjusting healthbar based on health
         document.querySelector(`#healthbar div`).style.width = `health: ${health}%`;
         // updating health percentage
         document.querySelector(`#percent`).innerHTML = `health: ${health}%`;
    });
 
    // if rice
    document.querySelector('#btnrice').addEventListener('click', function(event){
        document.querySelector('#lunch').className="hidden";
        document.querySelector('#lunchrice').className="showing";
        health = health + 40
         // adjusting healthbar based on health
         document.querySelector(`#healthbar div`).style.width = `health: ${health}%`;
         // updating health percentage
         document.querySelector(`#percent`).innerHTML = `health: ${health}%`;
    });

    // triggering question 4 (work)
    document.querySelector('#btnricenext').addEventListener('click', function(event){
        document.querySelector('#lunchrice').className="hidden";
        document.querySelector('#work').className="showing";
    });

    document.querySelector('#btnsoupnext').addEventListener('click', function(event){
        document.querySelector('#lunchsoup').className="hidden";
        document.querySelector('#work').className="showing";
    });

    // if library
    document.querySelector('#btnlibrary').addEventListener('click', function(event){
        document.querySelector('#work').className="hidden";
        document.querySelector('#worklibrary').className="showing";
        health = health + 5
         // adjusting healthbar based on health
         document.querySelector(`#healthbar div`).style.width = `health: ${health}%`;
         // updating health percentage
         document.querySelector(`#percent`).innerHTML = `health: ${health}%`;
    });

    // if home
    document.querySelector('#btnhome').addEventListener('click', function(event){
        document.querySelector('#work').className="hidden";
        document.querySelector('#workhome').className="showing";
        health = health - 5
        if(health < 0) {health = 0;}
         // adjusting healthbar based on health
         document.querySelector(`#healthbar div`).style.width = `health:${health}%`;
         // updating health percentage
         document.querySelector(`#percent`).innerHTML = `health:${health}%`;
    });

    // triggering 5th question (freetime)
    document.querySelector('#btnhomenext').addEventListener('click', function(event){
        document.querySelector('#workhome').className="hidden";
        document.querySelector('#freetime').className="showing";
    });

    document.querySelector('#btnlibrarynext').addEventListener('click', function(event){
        document.querySelector('#worklibrary').className="hidden";
        document.querySelector('#freetime').className="showing";
    });

    // if walk
    document.querySelector('#btnwalk').addEventListener('click', function(event){
        document.querySelector('#freetime').className="hidden";
        document.querySelector('#freetimewalk').className="showing";
        health = health + 5
         // adjusting healthbar based on health
         document.querySelector(`#healthbar div`).style.width = `health:${health}%`;
         // updating health percentage
         document.querySelector(`#percent`).innerHTML = `health:${health}%`;
    });

     // if hw
     document.querySelector('#btnhw').addEventListener('click', function(event){
        document.querySelector('#freetime').className="hidden";
        document.querySelector('#freetimehw').className="showing";
        health = health - 5
        if(health < 0) {health = 0;}
         // adjusting healthbar based on health
         document.querySelector(`#healthbar div`).style.width = `health:${health}%`;
         // updating health percentage
         document.querySelector(`#percent`).innerHTML = `health:${health}%`;
    });

    // triggering congrats
    document.querySelector('#btnhwnext').addEventListener('click', function(event){
        document.querySelector('#freetimehw').className="hidden";
        document.querySelector('#congrats').className="showing";
        checkWinningCondition(health);
    });

    document.querySelector('#btnwalknext').addEventListener('click', function(event){
        document.querySelector('#freetimewalk').className="hidden";
        document.querySelector('#congrats').className="showing";
        checkWinningCondition(health);
    });

    // triggering retry
    document.querySelector('#btnretry').addEventListener('click', function(event){
        document.querySelector('#congrats').className="hidden";
        document.querySelector('#startoverlay').className="showing";
        document.querySelector('#smallcharacter').className="hidden";
    });
})();