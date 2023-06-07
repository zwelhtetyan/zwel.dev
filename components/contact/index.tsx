import { Icons } from "../icons";

export default function Contact() {
  return (
    <section id="contact" className="pt-24 text-muted-foreground sm:text-lg">
      <h1 className="mb-[23px] mt-14 text-xl font-bold text-foreground xs:text-2xl">
        <p className="flex items-center">
          On the web{" "}
          <Icons.web className="ml-2 inline-block h-[22px] w-[22px]" />
        </p>
        <div className="title-underline w-[146px] xs:w-[169px]" />
      </h1>
    </section>
  );
}
