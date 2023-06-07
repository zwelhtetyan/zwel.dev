import Image from "next/image";
import { Icons } from "../icons";

export default function Hero() {
  return (
    <section className="mb-8 flex flex-col items-center pt-28 xs:pt-36">
      <Image
        src="/images/panda.png"
        alt="bear"
        width={500}
        height={500}
        className="mb-16 w-64 xs:w-80"
        priority
      />

      <h1 className="flex flex-col items-center space-y-2 text-3xl font-bold text-muted-foreground xs:flex-row xs:space-y-0">
        <span className="flex">
          Hi
          <Icons.wavingHand className="ml-1 inline-block h-8 w-8" />,
          <span className="ml-3">I am</span>
        </span>
        <span className="font-extrabold text-foreground xs:ml-2">
          Zwel Htet Yan
        </span>
      </h1>

      <div className="mt-5 w-full max-w-lg rounded-md border bg-muted px-4 py-2 text-center xs:py-3 sm:text-lg">
        A passionate fullstack developer <br className="xs:hidden" /> based in{" "}
        <span className="font-bold">Myanmar</span>
      </div>
    </section>
  );
}
