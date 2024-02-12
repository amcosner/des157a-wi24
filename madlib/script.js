(function () {

    'use strict';
    console.log('reading js');

    const finalText = document.querySelector('#finaltext');

    /**********-------------CHANGE 1---------------------**************** */
    //Targets only the fields under div with id=one
    const formData1 = document.querySelectorAll("#one input[type=text]");
    //Targets only the fields under div with id=two
    const formData2 = document.querySelectorAll("#two input[type=text]");
    /**********----------------------------------**************** */


    // triggering buttons
    document.querySelector('#one').addEventListener('submit',function(event) {
        event.preventDefault();
        document.querySelector('#one').className="hidden";
        document.querySelector('#two').className="showing1";

        /**********-------------CHANGE 2---------------------**************** */

        //As soon as we submit the first form, we process the formdata and and it to the words array
        processFormData(formData1);
        /**********----------------------------------**************** */

    });

    document.querySelector('#two').addEventListener('submit',function(event) {
        event.preventDefault();

        /**********--------------CHANGE 3--------------------**************** */

        //As soon as we submit the second form, we process the formdata and and it to the words array
        processFormData(formData2);
         /**********----------------------------------**************** */

        document.querySelector('#two').className="hidden";
        document.querySelector('#overlay').className="showing1";
        document.querySelector('#finaltext').className="showing1";
    });

    document.querySelector('#retry').addEventListener('click',function(event) {
        event.preventDefault();
        document.querySelector('#overlay').className="hidden";
        document.querySelector('#finaltext').className="hidden";
        document.querySelector('#one').className="showing1";
        ;
    });

    const words = [];
    const emptyfields = [];
    let counter = 0;
   /**********----------------------------------**************** */


    function processFormData(formData){
        // const words = [];
        // const emptyfields = [];
        // let counter = 0;
        
        for (const eachWord of formData){
            if (eachWord.value){
                words.push(eachWord.value);
                eachWord.value = "";
            } else {
                emptyfields.push(counter);
            }
            counter++;
        }

        if (emptyfields.length>0){
            showErrors(formData,emptyfields);
        } else {
            makeMadlib(words);}
    }
    
    // function that targets empty field and sends error message
    function showErrors (formData,emptyfields){
        const errorId = formData[emptyfields[0]].id;
        const errorText = `Please fill out this field: ${errorId}`;
        finalText.innerHTML = errorText;
        document.querySelector(`${errorId}`).focus()
    }

    //creates madlib
    function makeMadlib(words){
        // is converting into html so use <br>
        const myText = 
        `1.Let's ${words[0]} the sauce. Take the ${words[1]} and mince it finely with any ${words[2]} you can find. You want to cut it really quick so it makes a cool sound.<br><br>

        2. Next, you have to boil the ${words[3]}. Take a big ${words[4]} and fill it with ${words[5]}. Turn the stove up to the highest setting and watch it do its magic! I’m not really sure when to tell when it’s done, but you should just trust your “intooichun”, like my parents say.<br><br>

        3. This next part is really easy. We’re going to saute ${words[6]}, so put some ${words[7]} into a pan on high heat. Then, add the ${words[6]} and let it sit until it starts to make a really scary noise.<br><br>

        4. Let the ${words[6]} “rest.” I guess this makes sense because even food gets sleepy. Then safely cut it into pieces. Place it onto your favorite ${words[7]} and drizzle it with the sauce from earlier. Plate it with the ${words[1]}  from earlier.<br><br>

        5. Now we eat! I personally don’t like to chew my food but that’s up to you.
        `;
        finalText.innerHTML = myText;
        // clears the madlib
        // for (const eachField of formData){
        //     eachField.value='';
        // }
    }
    console.log(words);
})();


    // code that wasn't working
    // document.querySelector('#next').addEventListener('submit',function(event) {
    //     event.preventDefault();
    //     document.querySelector('#two').className="showing";
    //     document.querySelector('#one').className="hidden";
    // });

    // document.querySelector('#recipe').addEventListener('submit',function(event) {
    //     event.preventDefault();
    //     document.querySelector('#overlay').className="showing1"
    //     document.querySelector('#finaltext').className="showing1"
    //     document.querySelector('#two').className="hidden"
    //     ;
    // });

    // document.querySelector('#retry').addEventListener('submit',function(event) {
    //     event.preventDefault();
    //     document.querySelector('#overlay').className="hidden"
    //     document.querySelector('#finaltext').className="hidden"
    //     document.querySelector('#one').className="showing"
    //     ;
    // });

    // more complicated version that isn't working: 
    // const FormOne = document.querySelector('#one');
    // const FormTwo = document.querySelector('#two');
    // const finalText = document.querySelector('#finaltext');
    // const formData = document.querySelectorAll("input[type=text]");

    // FormOne.addEventListener('submit', function (event) {
    //     event.preventDefault();
    //     processFormData(formData);
    // });

    // FormTwo.addEventListener('submit', function (event) {
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
    //     const errorText = `Please fill out this field: ${errorId}`;
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