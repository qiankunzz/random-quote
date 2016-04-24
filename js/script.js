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

// Extra Credit Step-3 Storing the random number in an array
var randomNumber
var randomNumberStored = []
console.log (randomNumberStored)

// Starting the random generator
// This function is to generator a random Number that doesn't generated before
function getNewRandomNumber() {
    randomNumber = Math.floor( 8 * Math.random());
    while (randomNumberStored.includes(randomNumber)) {
      randomNumber = Math.floor( 8 * Math.random());
    }
  return randomNumber
};

// This function is to generate the quote
function getRandomQuote() {
  getNewRandomNumber();
  console.log(randomNumber);
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
  var htmlTags = '<p>'
  var lengthTags = quoteDisplay.tags.length
  for (i = 0; i < lengthTags; i++) {
      htmlTags += '<span class="tags">' + quoteDisplay.tags[i] + '</span>'
  }
  html += htmlTags  + "</p>"

// Adding random color for background and Button
  var randomColor = '#'
  randomColor += Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("mainBody").style.backgroundColor = randomColor
  document.getElementById("loadQuote").style.backgroundColor = randomColor

// Writing HTML
  document.getElementById('quote-box').innerHTML = html ;


// Storing the previous random numbers in an array

  randomNumberStored.push(randomNumber)
  if (randomNumberStored.length === quoteReserve.length) {
    randomNumberStored = []
  }
  console.log(randomNumberStored)
  //console.log(ifShown)
  return randomNumberStored
}

printQuote();
