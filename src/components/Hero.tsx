import heartIcon from '../assets/coração.svg'
import downArrowIcon from '../assets/seta_baixo.png'
import heroImage from '../assets/Foto_1.png'

function Hero() {
  return (
    <section className="bg-slate-50 px-6 pt-12 pb-6 sm:px-10 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-10">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 text-lg font-bold tracking-[0.18em] text-[#103586]">
            TATUÍ/SP - DESDE 1976
          </p>
          <h1 className="max-w-xl font-serif text-4xl font-bold leading-tight text-[#103586] sm:text-5xl">
            Proteção para crianças de Tatuí.
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
            Há 50 anos, a Associação Recanto Betel acolhe crianças e
            adolescentes de 6 a 15 anos com convivência, aprendizado e cuidado.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#contribuir"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/25">
                <img
                  src={heartIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-3 w-3 brightness-0 invert"
                />
              </span>
              Como contribuir
            </a>
            <a
              href="#nossa-historia"
              className=" text-lg inline-flex items-center gap-2 rounded-full border border-slate-500 bg-[#EBEBEB] px-5 py-3 font-semibold text-blue-950 transition-colors hover:border-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              Nossa história
              <img
                src={downArrowIcon}
                alt=""
                aria-hidden="true"
                className="h-4 w-4 object-contain"
              />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Apresentação para crianças na Associação Recanto Betel"
            className="w-full max-w-md rounded-[1rem_38%_1rem_38%] object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero