//Get blockquote element
var blockQuote = document.querySelector('blockQuote');


//Get more Ron button
var button = document.querySelector('#more-ron');

//Sanitize
var sanitizeHTML = function(str) {
    var temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
};

//Listen for click events
button.addEventListener('click', function(event) {
  // Set up our HTTP request
var xhr = new XMLHttpRequest();
// Setup our listener to process request state changes
xhr.onreadystatechange = function() {
    // Only run if the request is complete
    if (xhr.readyState !== 4) return;
    // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
        // This will run when the request is successful
        blockQuote.textContent = JSON.parse (xhr.responseText);
    } else {
        // This will run when it's not
        blockquote.textContent = "Sorry Ron Hates You. Don't Come Back Later"
        console.log(xhr);
    }
};

//create get request
xhr.open('GET', 'https://ron-swanson-quotes.herokuapp.com/v2/quotes');
xhr.send();

},false);
