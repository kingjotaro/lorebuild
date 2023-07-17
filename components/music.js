import { useState, useRef, useEffect } from "react";

const Music = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const handleMuteUnmute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const handleClick = () => {
      audioRef.current.play();
    };

    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const handleAudioEnded = () => {
      audioRef.current.currentTime = 0; // Reinicia a reprodução para o início
      audioRef.current.play(); // Inicia a reprodução novamente
    };

    audioRef.current.addEventListener("ended", handleAudioEnded);

    return () => {
      audioRef.current.removeEventListener("ended", handleAudioEnded);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef}>
        <source src="village.mp3" type="audio/mpeg" />
      </audio>
      <button onClick={handleMuteUnmute}>{isMuted ? "Unmute" : "Mute"}</button>
    </div>
  );
};

export default Music;
