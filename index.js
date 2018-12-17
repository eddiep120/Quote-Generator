function getQuote(){
   $.getJSON(
  "https://api.whatdoestrumpthink.com/api/v1/quotes/random",
      function(json) {
         $("#quote").empty().append('"' + json.message + '"');
         $("#author").empty().append("- Donald J. Trump");   
         $(".twitterLink").attr("href", "https://twitter.com/intent/tweet?text='" + json.quote + " - Donald J. Trump");
      }
   );
}
getQuote();

$("#getQuote").on("click", function() {
   getQuote();
});