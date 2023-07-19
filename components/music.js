import { useState, useRef, useEffect } from "react";

const Music = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const handleMuteUnmute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
      document.removeEventListener("click", handleClick);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} autoPlay>
        <source src="village.mp3" type="audio/mpeg" />
      </audio>
      <button onClick={handleMuteUnmute}>{isMuted ? "Unmute" : "Mute"}</button>
    </div>
  );
};

export default Music;
