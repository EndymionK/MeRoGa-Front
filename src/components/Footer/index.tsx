import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-1 bg-white pt-1 dark:bg-gray-dark md:pt-20 lg:pt-12">
      <div className="container mx-auto">
        <div className="flex items-center">
          <Link href="/" className="mb-8 inline-block">
            <Image
              src="/images/logo/logo-2.svg"
              alt="logo"
              className=" dark:block"
              width={400}
              height={30}
            />
          </Link>
          <p className="mb-9 ml-14 text-xl leading-relaxed text-body-color dark:text-body-color-dark">
            Diseña tu personaje, crea tu historia, vive tu aventura.
          </p>
        </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        <div className="py-6">
          <p className="text-center text-base text-body-color dark:text-white">
            Creado por {" "}
            <a
              href="https://github.com/EndymionK"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Endymion
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
