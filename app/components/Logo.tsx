import Image from "next/image";

export default function Logo() {
  return (
    <section className="">
      <Image
        className=""
        src="/images/logo.png"
        alt="Eri Schön logo"
        width={30}
        height={30}
        priority={true}
      />
    </section>
  );
}
