import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[100px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[110px]"
        style={{ 
          backgroundImage: "url('/images/background.png')", 
          backgroundSize: "cover",
          position: "relative",
          zIndex: "10", 
          opacity: "1"
        }}
      >
        <div className="container relative">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[1100px] text-center">
                <div className="mb-8">
                  <Image
                      src="/images/logo/logo.svg"
                      alt="logo"
                      width={600}
                      height={30}
                      className="align-middle mx-auto al"   
                  />
                </div>
                <h1 className="mb-10 text-5xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight"style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.9)", color: "black" }}>
                  MeRoGa: Mevieval Role Game
                </h1>
  
                <p className="mb-12 text-lg font-bold text-black md:text-4xl"style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.9)", color: "black" }}>
                  Diseña tu personaje, crea tu historia, vive tu aventura.
                </p>
                <div className="flex mt-20 flex-col items-center justify-center space-y-14 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/contact"
                    className="rounded-xl bg-black px-12 py-6 text-base text-xl font-semibold text-white hover:bg-dark/100"
                  >
                    Diseñar personaje
                  </Link>
                  <Link
                    href="/about"
                    className="rounded-xl bg-black px-12 py-6 text-base text-xl font-semibold text-white hover:bg-dark/100"
                  >
                    Crear historia
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
