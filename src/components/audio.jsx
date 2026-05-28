import "./styles/audio.css";
import { useRef, useState, useEffect } from "react";

export default function Audio({ audio }) {
  const audioRef = useRef(null);
  const [minimized, setMinimized] = useState(false);

 
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [audio]);

  const tocarAudio = () => {
    if (audioRef.current) {
    
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Erro ao reproduzir áudio:", error);
        });
      }
    }
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