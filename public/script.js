const voiceSelect = document.querySelector('#voiceSelect')
const playButton = document.querySelector('#playButton')
const textInput = document.querySelector('textarea')

// Load an Options list of available voices 

// Array that is empty 
let voice = [];
function loadVoices(){
  // Get the voices
  voices = speechSynthesis.getVoices();
  // Output voices as options with voice name and lang, .join to change to string
  voiceSelect.innerHTML = voices.map((voice, index)=> `<option value="${index}">${voice.name} (${voice.lang})</option>`).join('');
}

// Trigger loading voices when they become available
speechSynthesis.onvoiceschanged = loadVoices;
// Loadvoices when onvoiceschanged
loadVoices();

// Play TTS - Type to Speech Conversion
playButton.addEventListener('click', () => {
  const utterance = new SpeechSynthesisUtterance(textInput.value);
  // Setting selectedVoice from user selection
  const selectedVoice = voices[voiceSelect.value];
  // Changing the voice based on selection 
  if(selectedVoice){
    utterance.voice = selectedVoice; 
  }
  // taking the value that is in variable utterance for it to speak
  speechSynthesis.speak(utterance);
})