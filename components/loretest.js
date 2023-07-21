import Hardcodedpage from "./hardcodedpage";
import Welcomepage from "./welcomepage";
import { useState, useRef } from "react";

export default function Loretest() {
  const loreRef = useRef(null);
  const [startlore, setStartlore] = useState(true);

  function startbutton() {
    setStartlore(!startlore);
  
    if (loreRef.current) {
      if (loreRef.current.paused) {
        loreRef.current.play();
      } else {
        loreRef.current.pause();
      }
    }
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <img
        src="/bgnoir.jpg"
        alt="img estatica"
        className="w-[2200px] h-[1100px] object-cover"
      />

      <div className="p-2 items-center flex flex-col center border border-gray-500 bg-white rounded w-screen  2xl:max-w-[900px] xl:max-w-[800px] lg:max-w-[700px] md:max-w-[600px] max-w-[350px] h-screen 2xl:max-h-[800px] xl:max-h-[700px] lg:max-h-[650px] md:max-h-[600px] max-h-[550px]">
        {startlore && <Welcomepage></Welcomepage>}
        <div>
          {!startlore ? (
            <>
              <audio ref={loreRef} controls autoPlay>
  <source src="sexo.mp3" type="audio/mpeg" />
</audio>
              <Hardcodedpage />
            </>
          ) : null}
        </div>
        <div className="absolute bottom-0 mb-5 mt">
          <button
            onClick={startbutton}
            className="border font-bold font-xl rounded-full bg-black text-white w-[100px]"
          >
            {startlore ? "Iniciar" : "Voltar Inicio"}
          </button>
        </div>
      </div>
    </div>
  );
}
