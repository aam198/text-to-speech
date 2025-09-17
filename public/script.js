const voiceSelect = document.querySelector('#voiceSelect')
const playButton = document.querySelector('#playButton')
const textInput = document.querySelector('textarea')

// Load an Options list of available voices 

// Array that is empty 
let voice = [];
function loadVoices(){
  // Get the voices
  voices = speechSynthesis.getVoices();
  // Output voices as options with voice name and lang
  voiceSelect.innerHTML = voices.map((voice, index)=> `<option value="${index}">${voice.name} (${voice.lang})</option>`).join('');
}

// Trigger loading voices when they become available
speechSynthesis.onvoiceschanged = loadVoices;
// Or load initially
loadVoices();

// Play TTS - Type to Speech Conversion
playButton.addEventListener('click', () => {
  const utterance = new SpeechSynthesisUtterance(textInput.value);
  // taking the value that is in variable utterance for it to speak
  speechSynthesis.speak(utterance);
})