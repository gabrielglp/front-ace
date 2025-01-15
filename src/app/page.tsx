import Image from "next/image";
import Countdown from "@/components/Countdown/Countdown";

import Logo from "../../public/logo.svg";
import Mockup from "../../public/Mockup/mockupMockup.svg";
import ImgClip from "../../public/Mockup/mockupImgClip.svg";
import ImgClipTwo from "../../public/Mockup/mockupImgClipTwo.svg";
import Branding from "../../public/branding.svg";
import WebDevelopment from "../../public/web-development.svg";
import DigitalMarketing from "../../public/digital-marketing.svg";
import MobileApp from "../../public/mobile-app.svg";
import Seo from "../../public/seo.svg";
import UserTesting from "../../public/user-testing.svg";
import Range from "../../public/range.svg";
import Check from "../../public/check.svg";
import CheckOrange from "../../public/check-orange.svg";

import Slider from "@/components/Slider/Slider";
import Card from "@/components/Card/Card";
import ModuleCard from "@/components/Card/ModuleCard";

export default function Home() {
  const logos = [
    "/public/logo.svg",
    "/public/logo.svg",
    "/public/logo.svg",
    "/public/logo.svg",
    "/public/logo.svg",
    "/public/logo.svg",
    "/public/logo.svg",
    "/public/logo.svg",
    "/public/logo.svg",
    "/public/logo.svg",
    "/public/logo.svg",
    "/public/logo.svg",
  ];

  const cardData = [
    {
      imageSrc: Branding,
      title: "Branding",
      description: "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices",
    },
    {
      imageSrc: WebDevelopment,
      title: "Web development",
      description: "Integer ante non nunc, eget est justo vel semper nunc. Lacus",
    },
    {
      imageSrc: DigitalMarketing,
      title: "Digital marketing",
      description: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.",
    },
    {
      imageSrc: MobileApp,
      title: "Mobile App",
      description: "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices",
    },
    {
      imageSrc: Seo,
      title: "SEO",
      description: "Integer ante non nunc, eget est justo vel semper nunc. Lacus",
    },
    {
      imageSrc: UserTesting,
      title: "User testing",
      description: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.",
    },
  ];

  const moduleData = [
    { module: 1, title: "Nome da aula", videoDuration: "30:21" },
    { module: 2, title: "Nome da aula", videoDuration: "28:15" },
    { module: 3, title: "Nome da aula", videoDuration: "35:08" },
    { module: 4, title: "Nome da aula", videoDuration: "40:12" },
    { module: 5, title: "Nome da aula", videoDuration: "33:22" },
    { module: 6, title: "Nome da aula", videoDuration: "29:05" },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      <nav className="w-full bg-primary p-4 shadow-lg flex justify-center z-50">
        <Countdown />
      </nav>

      <section className="w-full bg-gradient-to-b from-primary-orange100 to-[#121212] shadow-xl relative space-y-8 text-center flex">
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


      <section className="w-full bg-black py-8 overflow-hidden pb-24">
        <div className="w-full flex flex-col items-start ml-[10%] my-12">
          <h3 className="text-primary-orange200 font-bold mb-2">Se inspire.</h3>
          <h1 className="text-3xl max-w-[26rem]">Empresas parceiras e que utilizam nossa plataforma para melhores resultados.</h1>
        </div>
        <Slider logos={logos} />
        <Slider logos={logos} />
      </section>

      <section className="w-full bg-[#121212] py-8 overflow-hidden">
        <div className="w-full flex flex-col items-center my-12">
          <h1 className="text-3xl">Mas, <span className="text-primary-orange200 font-bold">como funciona</span>?</h1>
          <p className="text-sm text-center max-w-[31rem] text-[#E7E7E799] mt-4">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.</p>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-auto grid grid-cols-3 gap-8 p-8">
            {cardData.map((card, index) => (
              <Card
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-black py-8 mt-6 overflow-hidden">
        <div className="flex justify-center w-full">
          <div className="flex w-9/12">
            <div className="w-[40%] flex flex-col text-start items-start">
              <h1 className="font-bold text-primary-orange200">Nossa metodologia.</h1>
              <p className="text-3xl max-w-60 py-2">Nosso módulos e aulas.</p>
              <p className="text-sm text-[#E7E7E799] max-w-[23rem]">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
              <button className="rounded-full px-4 py-2 border text-xs mt-4">VER MAIS</button>
            </div>

            <div className="w-full flex justify-center">
              <div className="w-auto grid grid-cols-2 gap-8 p-8">
                {moduleData.map((module, index) => (
                  <ModuleCard
                    key={index}
                    module={module.module}
                    title={module.title}
                    videoDuration={module.videoDuration}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full flex justify-center">
        <Image src={Range} alt="Range" />
      </div>

      <section className="w-full bg-black py-8 mt-6 overflow-hidden">
        <div className="flex justify-center w-full">
            <div className="w-full flex flex-col items-center my-12">
              <h1 className="text-4xl">Confira mais das nossas aulas</h1>
              <p className="text-sm text-center max-w-[42rem] text-[#E7E7E799] mt-4">Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts. Stay updated with real-time trends, automate tasks, and extract insights from any document or URL. All within a sleek, futuristic design. Create more, effortlessly.</p>
            </div>
        </div>

        <div className="flex justify-center w-ful mt-24">
          <div className="flex bg-dark p-8 rounded-md">
            <div className="flex flex-col text-start items-start mr-6">
              <h1 className="text-3xl">Nome do Módulo</h1>
              <p className="max-w-[31rem] text-[#E7E7E799] text-sm mt-6">Create engaging voice content with unique AI Voices perfect for your audience.</p>
              <p className="max-w-[32rem] text-[#E7E7E799] my-6 text-sm">Generate Conversational, Long-form or Short-form Voice Content With Consistent Quality and Performances.</p>
              <p className="text-[#E7E7E799] text-sm">Secure and Private Voice Generations with Full Commercial and Copyrights</p>
              
              <div className="mt-24 w-auto grid grid-cols-2 gap-4">
                <button className="border rounded-full px-4 py-2 border-[#A1AEBF] text-sm">Nome do módulo</button>
                <button className="border rounded-full px-4 py-2 border-[#A1AEBF] text-sm">Nome do módulo</button>
                <button className="border rounded-full px-4 py-2 border-[#A1AEBF] text-sm">Nome do módulo</button>
                <button className="border rounded-full px-4 py-2 border-[#A1AEBF] text-sm">Nome do módulo</button>
                <button className="border rounded-full px-4 py-2 border-[#A1AEBF] text-sm">Nome do módulo</button>
                <button className="border rounded-full px-4 py-2 border-[#A1AEBF] text-sm">Nome do módulo</button>
              </div>
            </div>

            <div className="px-64 py-56 bg-black"></div>
          </div>
        </div>

      </section>

      <section className="w-full bg-dark-dark100 py-8 mt-6 overflow-hidden">
        <div className="flex justify-center w-full">
          <div className="w-full flex flex-col items-center my-12">
            <p className="text-primary-orange200">Os preços.</p>
            <h1 className="text-4xl mt-4">Confira os nossos planos</h1>
            <p className="text-sm py-2 px-8 rounded-full bg-gradient-to-r from-[#FF723B] to-primary-orange600 mt-6">Mês/ano</p>
          </div>
        </div>

        <div className="flex justify-center w-full mt-8 gap-12">
          <div className="w-[300px] bg-transparent p-6 rounded-2xl border-[1px] border-primary-orange500 relative">
            <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-[60px] h-[60px] bg-gradient-to-b from-primary-orange500 to-dark-dark900 rounded-full"></div>
            <h3 className="text-lg font-semibold text-white mb-6 w-full flex items-center justify-center border-b-[1px] border-primary-orange500 pb-2 mt-8">Plano mensal</h3>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="items-center bg-gradient-to-b from-primary-orange500 to-dark-dark900 rounded-lg inline-block p-2">
                  <Image src={Check} alt="Check" width={11} height={11} />
                </div>
                <p className="text-sm text-gray-300 ml-4">Característica</p>
              </div>

              <div className="flex items-center">
                <div className="items-center bg-gradient-to-b from-primary-orange500 to-dark-dark900 rounded-lg inline-block p-2">
                  <Image src={Check} alt="Check" width={11} height={11} />
                </div>
                <p className="text-sm text-gray-300 ml-4">Característica</p>
              </div>

              <div className="flex items-center">
                <div className="items-center bg-gradient-to-b from-primary-orange500 to-dark-dark900 rounded-lg inline-block p-2">
                  <Image src={Check} alt="Check" width={11} height={11} />
                </div>
                <p className="text-sm text-gray-300 ml-4">Característica</p>
              </div>

              <div className="flex items-center">
                <div className="items-center bg-gradient-to-b from-primary-orange500 to-dark-dark900 rounded-lg inline-block p-2">
                  <Image src={Check} alt="Check" width={11} height={11} />
                </div>
                <p className="text-sm text-gray-300 ml-4">Característica</p>
              </div>

              <div className="flex items-center">
                <div className="items-center bg-gradient-to-b from-primary-orange500 to-dark-dark900 rounded-lg inline-block p-2">
                  <Image src={Check} alt="Check" width={11} height={11} />
                </div>
                <p className="text-sm text-gray-300 ml-4">Característica</p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-3xl font-bold text-white flex items-center">R$50,00 <span className="text-sm font-normal ml-2">/mês</span></p>
              <button className="w-auto py-2 px-6 bg-primary-orange500 text-white rounded-full hover:bg-orange-600 transition duration-300 inline-block text-xs">Adquirir</button>
            </div>
          </div>

          <div className="w-[300px] bg-gradient-to-t from-[#D15E32] to-transparent p-6 rounded-2xl border-[1px] border-primary-orange400 relative">
            <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-[60px] h-[60px] bg-gradient-to-b from-primary-orange500 to-dark-dark900 rounded-full"></div>

            <div className="flex flex-col items-center justify-center mt-4">
              <p className="text-primary-orange200 text-xs">Recomendado</p>
              <h3 className="text-lg font-semibold text-white mb-6 w-full flex justify-center border-b-[1px] border-primary-orange400 pb-2">Plano anual</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="items-center bg-white rounded-lg inline-block p-2">
                  <Image src={CheckOrange} alt="Check" width={11} height={11} />
                </div>
                <p className="text-sm text-gray-300 ml-4">Característica</p>
              </div>

              <div className="flex items-center">
                <div className="items-center bg-white rounded-lg inline-block p-2">
                  <Image src={CheckOrange} alt="Check" width={11} height={11} />
                </div>
                <p className="text-sm text-gray-300 ml-4">Característica</p>
              </div>

              <div className="flex items-center">
                <div className="items-center bg-white rounded-lg inline-block p-2">
                  <Image src={CheckOrange} alt="Check" width={11} height={11} />
                </div>
                <p className="text-sm text-gray-300 ml-4">Característica</p>
              </div>

              <div className="flex items-center">
                <div className="items-center bg-white rounded-lg inline-block p-2">
                  <Image src={CheckOrange} alt="Check" width={11} height={11} />
                </div>
                <p className="text-sm text-gray-300 ml-4">Característica</p>
              </div>

              <div className="flex items-center">
                <div className="items-center bg-white rounded-lg inline-block p-2">
                  <Image src={CheckOrange} alt="Check" width={11} height={11} />
                </div>
                <p className="text-sm text-gray-300 ml-4">Característica</p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-3xl font-bold text-white flex items-center">R$300 <span className="text-sm font-normal ml-2">/ano</span></p>
              <button className="w-auto py-2 px-6 bg-white text-primary-orange400 rounded-full hover:bg-primary-orange500 transition duration-300 inline-block text-xs">Adquirir</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}