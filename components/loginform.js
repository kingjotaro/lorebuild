
import Selection from "./selection";
import Music from "./music";
export default function LoginForm(props) {
    const {bypass, setBypass} = props;

    const handleBypassClick = () => {
        setBypass(true);
      };


      if (bypass) {
        return (
            <Selection></Selection>
        ); 
      } else {
        return (
        <div className="center bg-black bg-opacity-70 rounded-lg text-white flex flex-col p-5">
            <h1 className="text-center font-bold text-2xl mb-5">Em dev, clique em Bypass</h1>

            <div className=" flex flex-col">
            <div className="text-gray-50">Email</div>
            <input 
            className="input" 
            type="text"
            placeholder=" your_email@email.com"
            ></input>

            <div className="flex justify-between mt-3">
            <div className="text-gray-50">Password</div>
            <button className="text-blue-400">Forgot? </button> 
            </div>
            <input 
            className="input" 
            type="text"
            placeholder=" 1234567890"
            ></input>
            </div>

            <button className="rounded bg-blue-500 mt-5 py-2">Login now</button>
            <div className="flex justify-around mt-3">
            <div>Dont have an account?</div>
            <button className="text-blue-400"> Sign up</button>
            </div>
            <button onClick={handleBypassClick}>Bypass</button>
            <Music></Music>
         
           
        </div>
    )
    
};

     
    }