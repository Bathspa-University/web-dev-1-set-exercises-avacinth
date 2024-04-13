var readButton=document.getElementById('TextToRead-button');
readButton.addEventListener('click', function(){
    varctextToRead=document.getElementById('TextToRead').ariaValueMax.trim();
    const speech=new SpeechSynthesisUtterance();
    speech.text=textToRead;
    speech.volume=20;
    speech.rate=9;

    speechSynthesis.speak(speech);
});