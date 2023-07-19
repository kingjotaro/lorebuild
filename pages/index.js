import Login from "@/components/login"
import {useState} from 'react';
import LoginForm from "@/components/loginform";



export default function Home() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [bypass, setBypass] = useState(false)



  return (
    <div>
    <Login isImageLoaded={isImageLoaded} setIsImageLoaded={setIsImageLoaded}></Login>

    {isImageLoaded && <LoginForm setBypass={setBypass} bypass={bypass}> </LoginForm>}
    
    </div>
  )
}
