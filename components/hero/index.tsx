import Image from "next/image";
import { Icons } from "../icons";

export default function Hero() {
  return (
    <section className="flex flex-col items-center pt-28">
      <Image
        src="/images/bear.png"
        alt="bear"
        width={500}
        height={500}
        className="mb-7 w-[340px]"
      />

      <h1 className="text-3xl font-extrabold text-muted-foreground xs:text-4xl">
        Hi <Icons.wavingHand className="inline-block" />, I am{" "}
        <span className="text-[#FFC683]">Zwel Htet Yan</span>
      </h1>
    </section>
  );
}
