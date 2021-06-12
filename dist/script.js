/*var quotes=[
  "Be yourself\; everyone else is taken- Oscar Wilde",
  "Two things ar infinite: the universe and human studpidity, and i am not sure about the universe-Albert Einstein",
  "A room without books is like a body without soul-Markus Tullius Cicero",
  "You only live once, but if you do it right once is enough- Mae West",
  "Be the change you wish to see in the world-Mahatma Gandhi"
]
function newQuote(){
var randomNumber=Math.floor(Math.random()*(quotes.length));
document.getElementById("quote").innerHTML=quotes[randomNumber];
  var tweetQuote = quotes[randNum].split(' ').join('%20');
  tweetQuote = tweetQuote.split('<br>').join('');
  tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
  $('.twitter-share-button').attr('href', tweetQuote);
}*/
var qurl = "https://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en";
var turl = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
$("button").on("click", function() {
  $("#quote").slideUp(500).slideDown(1000);
  getQuote();
  
});

function getQuote() {
 
  $.getJSON(qurl, function(response) {
    $("#quote").html(response.quoteText);
    $("i.author").html(response.quoteAuthor);
    $("#tweetlink").attr("href", 
      turl + response.quoteText + " ― " + response.quoteAuthor);
  }); 
}
getQuote();