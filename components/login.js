import {  useState } from 'react';
import Spline from "@splinetool/react-spline";
import LoginForm from "./loginform";


export default function Login() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  function splineLoad() {
    setIsImageLoaded(true);
  }



 


  return (
    <div>
      <div className="fixed inset-0 z-0">
       

        <Spline
          className="hidden sm:block"
          scene="https://prod.spline.design/88Yayv49dX4j4FSG/scene.splinecode"
          onLoad={splineLoad}
        />

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
