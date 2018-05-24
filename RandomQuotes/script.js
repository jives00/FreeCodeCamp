var varQuote = "";
var varCharacter = "";

// Main
$(document).ready(function(){ 
	// Load a quote immediately upon page load
	getQuote();

	// Call a new quote when button is clicked
  $("#getMessage").on("click", function(){getQuote();});

	// Activate the various social media buttons
  $('#tweetit').on('click', function() {tweet();});
  $('#fbit').on('click', function() {facebook();});
  $('#tumblrit').on('click', function() {tumblr();});

});

// Get a new quote
function getQuote() {
	    $.getJSON("https://thesimpsonsquoteapi.glitch.me/quotes", function(json) {
      var html = "";
      json.forEach(function(val){
       	var keys = Object.keys(val);
        html += "<div class = 'quotes'>";
				html += "<br><img src = '" + val.image + "'>";
        html += val.quote;
				html += "<br><br><div class='char'>- " + val.character;
        html += "</div></div><br>";
      	varQuote = val.quote;
				varCharacter = val.character
			});

			$(".message").html(html);
 	 });

};

// Tweet Button
function tweet() {
	var link = "https://twitter.com/intent/tweet?text=";
			link += varQuote + " - " + varCharacter;
			link += " (See more at https://codepen.io/jives00/full/GdxLvx)";
			openURL(link);
};

// Facebook Button
function facebook() {
	var u = location.href;
	var link = "http://www.facebook.com/sharer.php?u=" + u;
			link += varQuote + " - " + varCharacter;
			link += " (See more at https://codepen.io/jives00/full/GdxLvx)";
			openURL(link);
};

// Tumblr Button
function tumblr() {
	var link = "https://www.tumblr.com/share?DataContent";
			link += varQuote + " - " + varCharacter;
			link += " (See more at https://codepen.io/jives00/full/GdxLvx)";
			openURL(link);
};

// General window open function for sharer-type functions
function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}