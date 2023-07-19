import {useRouter} from "next/router"
export default function Selection() {

const router = useRouter();

function movePage() {

    const audio = new Audio("/loretest.wav");
    audio.play();

   
    setTimeout(() => {
      router.push("/lore");
    }, 2000); 
  }

   
        return (
        <div className="center bg-white bg-opacity-90 rounded-lg text-black flex flex-col p-5 items-center ">
            <h1 className="text-center font-bold text-2xl mb-5 ">Choose your lore</h1>

            <div className=" text-center grid grid-cols-2 gap-6 w-screen max-w-[300px] sm:max-w-[400px] ">

            <button 
            onClick={movePage}
            className="border border-black  bg-gray-100 rounded-lg hover:bg-green-300"
            >Lore Test</button>
            <div> placeholder 1</div>
            <div> placeholder 3</div>
            <div> placeholder 4</div>

            </div>

            
         
           
        </div>
    )
    
};

     
