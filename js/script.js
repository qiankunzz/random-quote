// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// 1. create 8 quotes as quote reservoir
var quote1 = {
  quote:"Be yourself; everyone else is already taken.",
  source:"Oscar Wilde",
  citation:"",
  year:"",
  tags:["Brainy","Success","Neighbor"],
};

var quote2 = {
  quote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  source:"Marilyn Monroe",
  citation:"",
  year:"",
  tags:["tag1","Success","Love"],
};

var quote3 = {
  quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  source:"Albert Einstein",
  citation:"Selected Pulications",
  year:"1945",
  tags:["tag2","Success","tag3"],
};

var quote4 = {
  quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  source:"Bernard M. Baruch",
  citation:"",
  year:"1802",
  tags:["tag1","Success","Neighbor"],
};

var quote5 = {
  quote:"You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
  source:"William W. Purkey",
  citation:"",
  year:"1978",
  tags:["tag1","tag2","tag3"],
};

var quote6 = {
  quote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  source:"Dr. Seuss",
  citation:"",
  year:"",
  tags:["Brainy","Success","Neighbor"],
};

var quote7 = {
  quote:"A room without books is like a body without a soul.",
  source:"Marcus Tullius Cicero",
  citation:"",
  year:"275",
  tags:["Life","tag1","Neighbor"],
};

var quote8 = {
  quote:"So many books, so little time.",
  source:"Frank Zappa",
  citation:"",
  year:"1967",
  tags:["Life","Success","tag2"],
}

var quoteReserve = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8]

// Starting the randome generator
function getRandomQuote() {
  var randomNumber= Math.floor( 8 * Math.random())
  return quoteReserve[randomNumber];
};

function printQuote() {
  var quoteDisplay = getRandomQuote();
  var html

  // Test to improve the logic
  var quote, source, citation, year
  quote = '<p class="quote">' + quoteDisplay.quote + '</p>'
  source = '<p class="source">' + quoteDisplay.source
  if (quoteDisplay.citation === "") {citation = ""} else {
    citation = '<span class="citation">' + quoteDisplay.citation + '</span>'
  }
  if (quoteDisplay.year === "") {year = ""} else {
    year = '<span class="year">' + quoteDisplay.year + '</span>'
  }

  html = quote + source + citation + year + '</p>'

// Adding tags for display
  var htmlTags = '<p class="tags">'
  var lengthTags = quoteDisplay.tags.length
  for (i = 0; i < lengthTags; i++) {
    if (i === lengthTags - 1) {
      htmlTags += quoteDisplay.tags[i] +"</p>"
    } else {
      htmlTags += quoteDisplay.tags[i] +", "
    }
  }
  html += htmlTags


  
  /*
  // previous logic tree
  html = '<p class="quote">' + quoteDisplay.quote + '</p>'
  html += '<p class="source">' + quoteDisplay.source
    if (quoteDisplay.citation === "") {
      if (quoteDisplay.year === "") {
        html += '</p>'
      } else {
        html += '<span class="year">' + quoteDisplay.year + '</span> </p>'
      }
    }
    else {
  html += '<span class="citation">' + quoteDisplay.citation + '</span>'
      if (quoteDisplay.year === "") {
        html += '</p>'
      } else {
    html += '<span class="year">' + quoteDisplay.year + '</span> </p>'
    }
  }
  */

  document.getElementById('quote-box').innerHTML = html ;

}

printQuote();
