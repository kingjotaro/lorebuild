import React, { useRef } from 'react';
import { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import LoginForm from "./loginform";

export default function Login() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  function splineLoad() {
    setIsImageLoaded(true);
  }

  const audioRef = useRef(null);

 useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play()}
  }, []);

  return (
    <div>
      <div className="fixed inset-0 z-0">
      <div>
      <audio ref={audioRef} controls autoPlay >
  <source src="village.mp3" type="audio/mpeg" />
  Seu navegador não suporta a reprodução de áudio.
</audio>
    </div>

        <Spline
          className="hidden sm:block"
          scene="https://prod.spline.design/88Yayv49dX4j4FSG/scene.splinecode"
          onLoad={splineLoad}
        />

        {/* The container takes up the full width and height of the viewport. */}
        <img
          src="/mobilebg.png"
          alt="img estatica"
          className="block sm:hidden w-screen h-screen"
        />

        {isImageLoaded && <LoginForm> </LoginForm>}
      </div>
    </div>
  );
}
