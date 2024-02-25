(function(){
    'use strict';
    console.log('reading js');

    // const btns = querySelectorAll('button')
    // btns.AddEventListener('click',function(event){
    //     btns.style.backgroundColor = "#FEADFD";
    // });

    // sprinkle button
    const sprinklebtn = document.querySelector('#sprinklebtn');
    sprinklebtn.addEventListener('click',function(event){
        // altering overlay information
        
        // changing image
        document.querySelector('#spin').src= "images/sprinkle.GIF";
        document.querySelector('#spin').setAttribute('alt','spinning version of sprinkle');
        // changing title
        document.querySelector('#meetblank').innerHTML="meet  sprinkle!"
        // changing story
        document.querySelector('#story').innerHTML="I found Sprinkle at a thrift store for $2, which I was really excited about because I love the toy brand, Kidrobot. This is one of their older figures that is really hard to find (much less for cheap). Ever since I was a kid, I've loved dessert aesthetics and I always collect dessert-related items. I find myself staring at the small details on this figure even though I've had it for a year already."
        // changing song link
        document.querySelector('#song').innerHTML = "<a href='https://open.spotify.com/track/6QNvJpBdvgqVovmSTwfGNK?si=e5f8b13b500141b4'>cosmic tone cooking</a> by capsule"
        // changing mbti
        document.querySelector('#mbti').innerHTML = "ESTP (outgoing and spontaneous)"
        // changing fav food
        document.querySelector('#food').innerHTML = "strawberry ice cream with konpeito"
        // making main page disappear
        document.querySelector('#overlay').className= 'showing';
        document.querySelector('main').className= 'hidden';
    });

    // charlotte button
    document.querySelector('#charlottebtn').addEventListener('click',function(event){
        // altering overlay information
        document.querySelector('#spin').src= "images/charlotte.GIF";
        document.querySelector('#spin').setAttribute('alt','spinning version of charlotte');
        document.querySelector('#meetblank').innerHTML= "meet  charlotte!";
        document.querySelector('#story').innerHTML= "This little character looks cute, but is actually a menace from the show, Madoka Magica, and is one of the first villains to appear. They initially released 2 figures in this specific series, and my sister bought the first one. She peer pressured me into buying the other one so we could match (not that I regret it :D). Also, this figure line is awesome because the material is fuzzy! Charlotte is (respectfully) the biggest brat out of all my trinkets.";
        document.querySelector('#song').innerHTML = "<a href='https://open.spotify.com/track/6dw4AxBtf7BRyohRu6rCoP?si=7d182d650d96402d'>Mahou Monki!</a> by bye2";
        document.querySelector('#mbti').innerHTML = "ESTP (action-oriented, skilled negotiator)";
        document.querySelector('#food').innerHTML = "giant turkey leg";
        document.querySelector('#overlay').className= 'showing';
        document.querySelector('main').className= 'hidden';
    });

    // dot button
    document.querySelector('#dotbtn').addEventListener('click',function(event){
        // altering overlay information
        document.querySelector('#spin').src= "images/dot.GIF";
        document.querySelector('#spin').setAttribute('alt','spinning version of dot');
        document.querySelector('#meetblank').innerHTML= "meet  dot!"
        document.querySelector('#story').innerHTML= "This is a figure from PopMart that my mom got me last Christmas. She's definitely one of my favorite PopMarts that I own because of her color palette and how detailed she is. As someone who is very passionate about accessories, I really love her hat, glasses, and especially her bag! She usually just keeps me company while I do my homework"
        document.querySelector('#song').innerHTML = "<a href='https://open.spotify.com/track/06Or2mWfbQ3JdlqUpshzhx?si=06583fc742294806'>Seabird</a> by Air Miami"
        document.querySelector('#mbti').innerHTML = "ISTP (reserved and analytical)"
        document.querySelector('#food').innerHTML = "cotton candy dippin dots"
        document.querySelector('#overlay').className= 'showing';
        document.querySelector('main').className= 'hidden';
    });

    // altering shoe dino button
   document.querySelector('#dinobtn').addEventListener('click',function(event){
        document.querySelector('#spin').src= "images/dino.GIF";
        document.querySelector('#spin').setAttribute('alt','spinning version of shoe dino');
        document.querySelector('#meetblank').innerHTML= "meet shoe dino!"
        document.querySelector('#story').innerHTML= "My mom and sister enjoy buying blindboxes, which is a popular way to buy figures, where you buy a box and you don't know what's in it until you open it. Usually, they end up with either a duplicate or something they don't want, so they give it to me. This is how I adopted shoe-dino. My sister thought he was 'really ugly' (her words, not mine), so she gave him to me. I love him very much and feel guilty that he was insulted, so I usually have him in my backpack so he can experience the day with me!" 
        document.querySelector('#song').innerHTML = "<a href='https://open.spotify.com/track/22x3Kcm7FhEdItqyRZyBYT?si=3fe6fb9af0424f26'>Hakai Yono Yume</a> by Ling tosite sigure"
        document.querySelector('#mbti').innerHTML = "ENFP (enthusiastic, skilled communicator)"
        document.querySelector('#food').innerHTML = "mala hotpot"
        document.querySelector('#overlay').className= 'showing';
        document.querySelector('main').className= 'hidden';
    });
})();