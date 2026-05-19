import "./styles/audio.css";
import { useRef } from "react";

export default function AudioHome({ audio }) {
  const audioRef = useRef(null);

  const tocarAudio = () => {
    audioRef.current.play();
  };

  return (
    <div className="audio-container">
      <button className="audio-button" onClick={tocarAudio}>
        🔊 Ouvir
      </button>

      <audio
        ref={audioRef}
        className="audio-player"
        controls
        src={audio}
      />
    </div>
  );
}