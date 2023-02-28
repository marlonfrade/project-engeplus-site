import { useState } from "react";

import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

import HeroBackground from "./assets/hero-bg.png";

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="relative w-full h-full pb-10">
        <div className="hidden md:flex items-center absolute bg-cover bg-center w-full h-full inset-0">
          <div className="w-[50%] h-full bg-white"></div>
          <div className="w-[50%] h-full bg-custom-blue"></div>
        </div>

        <MobileNavbar menu={menu} setMenu={setMenu} />
        <Navbar />
        <div className="relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
          <div className="text-color w-full md:w-1/3 pt-16 lg:pt-32 xl:pt-12">
            <h1 className="text-4xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-5xl text-gray-800 font-extrabold">
              Tradição e qualidade que há mais de 35 anos marcam história.
            </h1>
            {/* <div className="f-f-r text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6">
              <h2>
                Tradição e qualidade que há mais de 35 anos marcam história.
              </h2>
            </div> */}
            <div className="lg:flex">
              <a
                href="mailto:elias.borges@engeplus.eng.br"
                className="hidden md:block hover:opacity-90 text-center w-full xl:text-center xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-green-500 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue rounded-lg"
              >
                Entrar em contato
              </a>
            </div>
          </div>
          <img
            src={HeroBackground}
            className="w-full mt-8 md:mt-0 object-fill md:w-2/3 md:-ml-4 lg:-ml-4 xl:ml-0"
            alt="Engeplus Capa"
          />
          <a
            href="mailto:elias.borges@engeplus.eng.br"
            className="md:hidden hover:opacity-90 text-center w-full xl:text-center xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-green-500 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue rounded-lg"
          >
            Entrar em contato
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
