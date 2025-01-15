import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card = ({ imageSrc, title, description }: CardProps) => {
  return (
    <div className="border py-6 pr-8 pl-4 rounded-md border-[#A1AEBF]">
      <Image src={imageSrc} alt={title} width={48} height={48} />
      <h1 className="text-2xl font-bold py-4">{title}</h1>
      <p className="text-sm text-[#E7E7E799] max-w-60">{description}</p>
    </div>
  );
};

export default Card;