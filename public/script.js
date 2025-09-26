const voiceSelect = document.querySelector('#voiceSelect');
const playButton = document.querySelector('#playButton');
const textInput = document.querySelector('textarea');
const languageSelect = document.querySelector('#languageSelect');

// Array of objects with supported languages and ISO codes to populate
const languages = [
  { code: 'en', name: 'English'},
  { code: 'es', name: 'Spanish'},
  { code: 'fr', name: 'French'},
  { code: 'de', name: 'German'},
  { code: 'it', name: 'Italian'},
  { code: 'ja', name: 'Japanese'},
  { code: 'zh-CN', name: 'Chinese (Simplified)'},
];

// Populate language selection with array, then object destructuing for code and name
languages.forEach(({ code, name }) => {
  const option = document.createElement('option');
  // Fill option 
  option.value = code;
  option.textContent = name;
  languageSelect.appendChild(option);
})

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