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
        className="mb-10 w-[340px]"
      />

      <h1 className="flex flex-wrap items-center text-2xl font-bold text-muted-foreground xs:text-3xl sm:text-4xl">
        Hi <Icons.wavingHand className="mb-[10px] inline-block h-10 w-10" />,
        <span className="ml-2">I am</span>
        <span className="ml-2 font-extrabold text-foreground">
          Zwel Htet Yan
        </span>
      </h1>

      <div className="mt-7 rounded bg-muted  px-4 py-2 text-center sm:py-3 sm:text-lg">
        A passionate fullstack developer based in Myanmar
      </div>
    </section>
  );
}
