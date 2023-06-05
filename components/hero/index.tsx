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

      <h1 className="flex flex-col items-center space-y-2 text-3xl font-bold text-muted-foreground xs:flex-row xs:space-y-0">
        <span className="flex">
          Hi
          <Icons.wavingHand className="ml-1 inline-block h-8 xs:w-8" />,
          <span className="ml-2">I am</span>
        </span>
        <span className="font-extrabold text-foreground xs:ml-2">
          Zwel Htet Yan
        </span>
      </h1>

      <div className="mt-10 rounded-md border bg-muted px-4 py-2 text-center sm:py-3 sm:text-lg">
        A passionate fullstack developer based in Myanmar
      </div>
    </section>
  );
}
