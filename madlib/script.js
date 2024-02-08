(function () {

    'use strict';
    console.log('reading js');

    document.querySelector('#next').addEventListener('click',function(event) {
        event.preventDefault();
        document.querySelector('#two').className="showing";
        document.querySelector('#one').className="hidden";
    });


    document.querySelector('#recipe').addEventListener('click',function(event) {
        event.preventDefault();
        document.querySelector('#overlay').className="showing1"
        document.querySelector('#two').className="hidden"
        ;
    });

    const madlib = document.querySelectorAll("#finaltext");
    // document.querySelector("#finaltext").className = "showing1";
    const myForm = document.querySelector("form");

    myForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const verb1 = document.querySelector("#verb1").value;
        const food1 = document.querySelector("#food1").value;
        const sharp1 = document.querySelector("#sharp1").value;
        const food2 = document.querySelector("#food2").value;
        const hollow1 = document.querySelector("#hollow1").value;
        const liquid1 = document.querySelector("#liquid1").value;
        const food3 = document.querySelector("#food3").value;
        const flat = document.querySelector("#flat").value;

        let myText;

        if(verb1 == ""){
            myText = "Please enter a verb!"
            document.querySelector("#verb1").focus();
        } else if(food1 == ""){
            myText = "Please enter a food item!"
            document.querySelector("#food1").focus();
        } else if(sharp1 == ""){
            myText = "Please enter a sharp object!"
            document.querySelector("#sharp1").focus();
        } else if(food2 == ""){
                myText = "Please enter another food item."
                document.querySelector("#food2").focus();
        } else if(hollow1 == ""){
            myText = "Please enter a hollow item!"
            document.querySelector("#hollow1").focus();
        } else if(liquid1 == ""){
            myText = "Please enter a liquid."
            document.querySelector("#liquid1").focus();
        } else if(food3 == ""){
            myText = "Please enter an inedible item."
            document.querySelector("#food3").focus();
        } else if(flat == ""){
            myText = "Please enter a flat object."
            document.querySelector("#flat").focus();
        } else {
            myText = `1. Let’s ${verb1} the sauce. Take the ${food1} and mince it finely with any ${sharp1} you can find. You want to cut it really quick so it makes a cool sound. 
            2. Next, you have to boil the ${food2}. Take a big ${hollow1} and fill it with ${liquid1}. Turn the stove up to the highest setting and watch it do its magic! I’m not really sure when to tell when it’s done, but you should just trust your “intooichun”, like my parents say.
            3. This next part is really easy. We’re going to saute ${food3}, so put some ${liquid1} into a pan on high heat. Then, add the ${food3} and let it sit until it starts to make a really scary noise. 
            4. Let the ${food3} “rest.” I guess this makes sense because even food gets sleepy. Then safely cut it into pieces. Place it onto your favorite ${flat} and drizzle it with the sauce from earlier. Plate it with the ${food1}  from earlier.
            5. Now we eat! I personally don’t like to chew my food but that’s up to you.
            `;

            document.querySelector("#verb1").value = "";
            document.querySelector("#food1").value = "";
            document.querySelector("#sharp1").value = "";
            document.querySelector("#food2").value = "";
            document.querySelector("#hollow1").value = "";
            document.querySelector("#liquid1").value = "";
            document.querySelector("#food3").value = "";
            document.querySelector("#flat").value = "";
        }

        document.querySelector('#overlaytext').innerHTML = myText;

        // madlib.innerHTML = myText;

        event.preventDefault();
        document.getElementById("myform").className = "hidden";
        document.getElementById("madlib").className = "showing";
    });


    // more complicated version that isn't working: 
    // const myForm = document.querySelector('form');
    // const finalText = document.querySelector('#finaltext');
    // const formData = document.querySelectorAll("input[type=text]");

    // myForm.addEventListener('submit', function (event) {
    //     event.preventDefault();
    //     processFormData(formData);
    // });

    // function processFormData(formData){
    //     const words = [];
    //     const emptyfields = [];
    //     let counter = 0;
        
    //     for (const eachWord of formData){
    //         if (eachWord.value){
    //             words.push(eachWord.value);
    //             eachWord.value = "";
    //         } else {
    //             emptyfields.push(counter);
    //         }
    //         counter++;
    //     }

    //     if (emptyfields.length>0){
    //         showErrors(formData,emptyfields);
    //     } else {
    //         makeMadlib(words);}
    // }
    
    // // function that targets empty field and sends error message
    // function showErrors (formData,emptyfields){
    //     const errorId = formData[emptyfields[0]].id;
    //     const errorText = `Plesae fill out this field: ${errorId}`;
    //     finalText.innerHTML = errorText;
    //     document.querySelector(`${errorId}`).focus()
    // }

    // //creates madlib
    // function makeMadlib(words){
    //     const myText = 
    //     `1. Let’s ${words[0]} the sauce. Take the ${words[1]} and mince it finely with any ${words[2]} you can find. You want to cut it really quick so it makes a cool sound. 
    //     2. Next, you have to boil the ${words[3]}. Take a big ${words[4]} and fill it with ${words[5]}. Turn the stove up to the highest setting and watch it do its magic! I’m not really sure when to tell when it’s done, but you should just trust your “intooichun”, like my parents say.
    //     3. This next part is really easy. We’re going to saute ${words[6]}, so put some ${words[7]} into a pan on high heat. Then, add the ${words[6]} and let it sit until it starts to make a really scary noise. 
    //     4. Let the ${words[6]} “rest.” I guess this makes sense because even food gets sleepy. Then safely cut it into pieces. Place it onto your favorite ${words[8]} and drizzle it with the sauce from earlier. Plate it with the ${words[1]}  from earlier.
    //     5. Now we eat! I personally don’t like to chew my food but that’s up to you.
    //     `;
    //     finalText.innerHTML = myText;
    //     // clears the madlib
    //     for (const eachField of formData){
    //         eachField.value='';
    //     }
    // }
})();

