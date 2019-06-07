//DETAILS CONTROLLER - bookDetails
var detailsController = (function() {

    //Some code
    
}) ();

//UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputTitle: '.add_title',
        inputAuthor: '.add_author',
        inputYear: '.add_year',
        inputIsbn13: '.add_isbn13',
        inputIsbn10: '.add_isbn10',
        inputSummary: '.add_summary',
        inputPrice: '.add_price',
        inputGenre: '.add_genre',
        inputFile: '.box__file'
    };

    return {
        getInput: function() {
            return {
                title: document.querySelector(DOMstrings.inputTitle).value,
                author: document.querySelector(DOMstrings.inputAuthor).value,
                year: document.querySelector(DOMstrings.inputYear).value,
                isbn13: document.querySelector(DOMstrings.inputIsbn13).value,
                isbn10: document.querySelector(DOMstrings.inputIsbn10).value,
                summary: document.querySelector(DOMstrings.inputSummary).value,
                price: document.querySelector(DOMstrings.inputPrice).value,
                genre: document.querySelector(DOMstrings.inputGenre).value,
                file: document.querySelector(DOMstrings.inputFile).value
            };
        }
    };

}) ();

//GLOBAL APP CONTROLLER
var controller = (function(detailsCtrl, UICtrl) {

    var ctrlAddBook = function() {
        //ze na zacetku :/ namest pol ko das input dejasnko notr
        // 1. Get the filed input data
        var input = UICtrl.getInput();
        console.log(input);


        // 2. Add a book to the details controller

        // 3. Add a book to the UI

        // 4. Display a book on the UI

        //ze na začetku je, ne dela pravilno
        //console.log('It works!');
    }

    document.getElementById("#add-btn").addEventListener("click", ctrlAddBook());

    /* 
    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddBook();
        }
    });
    */

}) (detailsController, UIController);