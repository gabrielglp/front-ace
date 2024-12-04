import Image from "next/image";
import Countdown from "@/components/Countdown/Countdown";

import Logo from "../../public/logo.svg";
import Mockup from "../../public/Mockup/mockupMockup.svg";
import ImgClip from "../../public/Mockup/mockupImgClip.svg";
import ImgClipTwo from "../../public/Mockup/mockupImgClipTwo.svg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      <nav className="w-full bg-primary p-4 shadow-lg flex justify-center z-50">
        <Countdown />
      </nav>

      <section className="w-full bg-gradient-to-b from-primary-orange100 to-black shadow-xl relative space-y-8 text-center flex">
        <div className="w-full flex justify-center">
          <div className="flex justify-center items-center w-[85%] relative">
            <div className="p-10 flex flex-col items-start justify-center">
              <div className="">
                <Image src={Logo} alt="Logo" width={150} height={150} />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-orange-500 mt-10"><span className="text-white font-medium">Aprenda e</span> venda mais.</h1>
              <p className="text-start text-xl mb-8 max-w-[28rem]">
                Uma plataforma de área de membros projetada para te ajudar a vender muito mais.
              </p>
              <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300">
                Saiba Mais
              </button>
            </div>

            <div className="z-50">
              <Image src={Mockup} alt="Mockup" />
            </div>

            <div className="absolute left-[-27%] top-1/2 transform -translate-y-1/2 z-10">
              <Image src={ImgClip} alt="Clip Image" />
            </div>

            <div className="absolute right-[-27%] top-[43%] transform -translate-y-1/2 z-10 flex justify-end">
              <Image src={ImgClipTwo} alt="Clip Image Two" />
            </div>
          </div>
        </div>
      </section>


      {/* Seção de Detalhes adicionais
      <section className="w-full max-w-4xl space-y-8 mt-16">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">O Que Esperar</h2>
          <p className="text-gray-700 mb-4">
            Teremos palestras inspiradoras, workshops interativos e oportunidades de networking para todos os participantes.
          </p>
          <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300">
            Saiba Mais
          </button>
        </div>

      </section>
     Adicionar mais seções conforme necessário */}
    </div>
  );
}