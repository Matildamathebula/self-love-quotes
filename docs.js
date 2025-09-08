function generateQuote(event){
    event.preventDefault();

new Typewriter("#quote", {
  strings: "To love oneself is the beginning of a lifelong romance.",
  autoStart: true,
  delay:1,
  cursor:"",
});
}

      let quoteFormElement=document.querySelector("#quote-generator-form");
      quoteFormElement.addEventListener("submit", generateQuote);

