(function () {

    'use strict';
    console.log('reading js');

    document.querySelector('#next').addEventListener('click',function(event) {
        event.preventDefault();
        document.querySelector('#two').className="showing";
        document.querySelector('#one').className="hidden";
    });

    // make it possible to escape overlap with esc key
    document.querySelector('#recipe').addEventListener('click',function(event) {
        event.preventDefault();
        document.querySelector('#two').className="hidden"
        document.querySelector('#one').className="showing"
        ;
    });

    document.addEventListener('keydown', function(event){
        if(event.key == 'Escape'){
            document.querySelector('#recipe').addEventListener('click',function(event) {
                event.preventDefault();
                document.querySelector('#two').className="hidden";
            });
        }
    });

    

})();

