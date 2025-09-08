function displayQuote(response){
  
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateQuote(event){
    event.preventDefault();
    let instructionsInput=document.querySelector("#user-instructions");
    let apiKey = "36029o83t7fb6b04f2aa5c604a48d52f";
    let prompt=`Generate a self-love quote based on the following instructions: ${instructionsInput.value}. The quote should be between 4 and 6 lines.`;
    let context="You are a helpful assistant that generates self-love quotes, please generate a self-love quote based on the user's instructions. Make sure the quote is between 4 and 6 lines. And it is motivoting to the reader.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  

    axios.get(apiUrl).then(displayQuote);


}

      let quoteFormElement=document.querySelector("#quote-generator-form");
      quoteFormElement.addEventListener("submit", generateQuote);

