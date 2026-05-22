import "./styles/audio.css";
import { useRef, useState } from "react";

export default function Audio({ audio }) {

  const audioRef = useRef(null);

  const [minimized, setMinimized] = useState(false);

  const tocarAudio = () => {
    audioRef.current.play();
  };

  return (
    <div className={`audio-container ${minimized ? "minimized" : ""}`}>

      <button
        className="audio-button"
        onClick={() => {
          if (minimized) {
            setMinimized(false);
          } else {
            tocarAudio();
          }
        }}
      >
        {minimized ? "🔊" : "🔊 Ouvir"}
      </button>

      {!minimized && (
        <>
          <audio
            ref={audioRef}
            className="audio-player"
            controls
            src={audio}
          />

          <button
            className="minimize-button"
            onClick={() => setMinimized(true)}
          >
            ❌
          </button>
        </>
      )}

    </div>
  );
}