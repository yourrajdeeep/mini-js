const api_url = "https://api.freeapi.app/api/v1/public/quotes/quote/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    
    quote.innerHTML = data.data.content;
    author.innerHTML = data.data.author;
}

getQuote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " ---- by " + author.innerHTML, "Tweet window", "width=600, height=300");
}