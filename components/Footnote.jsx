import Image from "next/image";
import stripe from "@/public/Stripe.png";
import machine from "@/public/modelImg.png";

const Footnote = () => {
  return (
    <div className="relative mt-[200px] lg:mt-0">
      <Image className="w-screen" src={stripe} alt="note" />
      <Image
        className="absolute left-[-130px] 2xl:left-[-70px] top-[-150px]"
        src={machine}
        alt="machine"
      />
    </div>
  );
};

export default Footnote;
