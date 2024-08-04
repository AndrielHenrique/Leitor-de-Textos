const textarea = document.getElementById('text');
const button = document.getElementById('btn');
const rateInput = document.getElementById('rate');
const voiceSelect = document.getElementById('voiceSelect');

let voices = [];

function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';
    voices.forEach((voice, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
}

window.speechSynthesis.onvoiceschanged = populateVoiceList;

button.addEventListener('click', () => {
    const text = textarea.value;
    const speaks = new SpeechSynthesisUtterance(text);
    speaks.lang = 'pt-BR';
    speaks.voice = voices[voiceSelect.value];
    speaks.rate = rateInput.value;
    window.speechSynthesis.speak(speaks);
});