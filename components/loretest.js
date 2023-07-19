export default function Loretest() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <img
        src="/bgnoir.jpg"
        alt="img estatica"
        className="w-[2200px] h-[1100px] object-cover"
      />

      <div className="p-2 items-center flex flex-col center border border-gray-500 bg-white rounded w-screen  2xl:max-w-[900px] xl:max-w-[800px] lg:max-w-[700px] md:max-w-[600px] max-w-[350px] h-screen 2xl:max-h-[800px] xl:max-h-[700px] lg:max-h-[650px] md:max-h-[600px] max-h-[550px]">
        <div className="font-bold text-xl text-center"> Bem vindo ao teste do projeto Lorekeeper </div>
        <div className="mt-5">
          Prepare-se para embarcar em uma jornada épica, onde suas escolhas
          moldam o destino da história. O LoreKeeper combina a emoção da leitura
          com a magia do áudio, transportando você para um mundo repleto de
          mistérios e possibilidades. Nesta experiência interativa, você será o
          protagonista de uma trama única, onde suas escolhas terão impacto no desenvolvimento da história.
          O LoreKeeper é sua porta de entrada para o mundo da fantasia. Aventure-se e
          desvende os segredos que aguardam sua chegada. A jornada começa agora,
          e o destino está em suas mãos. Tenha uma boa aventura!
          
        </div>
        <div className="mt-5">Atenciosamente Lorekeeper</div>
        <div className="absolute bottom-0 mb-5">
          <button className="border font-bold font-xl rounded-full bg-black text-white w-[100px]">Iniciar</button>
        </div>
      </div>
    </div>
  );
}
