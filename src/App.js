import React, { useEffect } from 'react';
import kisa from './kisa.png';
import './App.css';

function App() {
  useEffect(() => {
    const constraints = { audio: true, video: { width: 1280, height: 720 } };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((mediaStream) => {
        const video = document.querySelector('video');
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => video.play();
      })
      .catch((err) => {
        console.error(err);
      });

    document.querySelector('button').addEventListener('click', () => {
      document.querySelector('video').classList.toggle('crazy');
    });
  }, []); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={kisa} className="App-logo" alt="logo" />
        <video></video>
        <button class="crazy">Click for surprise</button>
      </header>
    </div>
  );
}

export default App;