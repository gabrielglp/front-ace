import Image from "next/image";
import Play from "../../../public/botao-play.png";

interface ModuleCardProps {
  module: number;
  title: string;
  videoDuration: string;
}

const ModuleCard = ({ module, title, videoDuration }: ModuleCardProps) => {
  return (
    <div className="border p-4 rounded-md border-[#A1AEBF]">
      <div className="w-full bg-white py-12 px-40"></div>
      <h1 className="text-xs bg-primary p-1 rounded-sm mt-4 inline-block">
        MÓDULO {module}: {title}
      </h1>
      <div className="flex justify-between items-center mt-6">
        <p className="text-xl font-bold">{title}</p>
        <div className="flex items-center">
            <Image src={Play} alt="Play" width={11} height={11} />
            <p className="text-sm text-[#E7E7E799] ml-2"> {videoDuration}</p>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;