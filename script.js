const quote = document.getElementById("quote");
const authorName = document.getElementById("author");
const api_url = "https://api.quotable.io/random";
const speakerBtn = document.querySelector(".speak");
const copyBtn = document.querySelector(".clipboard");



//Using async function which promises a value
async function quoteGen(url){
    //fetching data from the url and parsing it into JavaScript Object
    const response = await fetch(url);
    var data = await response.json();
    
    quote.innerHTML = data.content;
    authorName.innerHTML = data.author
}

quoteGen(api_url);


//Adding event listener to speech the quote and author name
speakerBtn.addEventListener("click", ()=>{
    //the SpeechSynthesisUtterance is a Web Speech api that represents a speech request
    let utter = new SpeechSynthesisUtterance(`${quote.innerHTML} by ${authorName.innerHTML}`);
    //speak is a method of SpeechSynthesis
    speechSynthesis.speak(utter);
});

//Adding event listener to copy the contents to the system clipboard
copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quote.innerHTML);
    alert("Text Copied to Clipboard");
})

//Redirect to twitter along with the contents
function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML, "Tweet Window", "height=300, wdith=400")
}





// async function searchByAuthor(name){
//     const authorUrl = `https://api.quotable.io//search/authors`;


// }
// searchByAuthor(authorName);
