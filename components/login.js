import Spline from "@splinetool/react-spline";
import Music from "./music";

export default function Login(props) {
  const { setIsImageLoaded } = props;

  function splineLoad() {
    setIsImageLoaded(true);
  }

  return (
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
       
    </div>
  );
}
