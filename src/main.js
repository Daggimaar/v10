import startRecording from './recorder.js';

document.addEventListener("DOMContentLoaded", () => {
  const stopRecording = startRecording();

 
  setTimeout(() => {
    stopRecording();
  }, 10000);
});
