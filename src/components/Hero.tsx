import heartIcon from '../assets/coração.svg'
import downArrowIcon from '../assets/setinha.svg'
import heroImage from '../assets/Foto_1.png'

function Hero() {
  return (
    <section className="bg-stone-100 px-6 pt-12 pb-6 sm:px-10 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-10">
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

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contribuir"
              className="inline-flex h-[60px] w-full sm:w-[240px] items-center justify-center gap-3 rounded-full bg-[#22c55e] text-lg font-bold text-white transition-colors hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/30">
                <img
                  src={heartIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-4 w-4 brightness-0 invert"
                />
              </span>
              Como contribuir
            </a>

            <a
              href="#nossa-historia"
              className="inline-flex h-[60px] w-full sm:w-[240px] items-center justify-center gap-3 rounded-full border border-gray-300 bg-[#EBEBEB] text-lg font-bold text-[#103586] transition-colors hover:border-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              Nossa história
              <img
                src={downArrowIcon}
                alt=""
                aria-hidden="true"
                className="h-6 w-6 object-contain"
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