import coracaoIcon from '../assets/coração2.svg'
import livroIcon from '../assets/livro.svg'
import ballIcon from '../assets/ball.svg'
import artIcon from '../assets/art.svg'
import homeIcon from '../assets/home.svg'
import startIcon from '../assets/star.svg'

function Servicos() {
  return (
    <section
      id="servicos-projetos"
      className="bg-stone-100 px-6 pt-12 pb-16 sm:px-10 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      {/* Mesmo contentor e largura máxima (max-w-6xl) do Hero e da Historia */}
      <div className="mx-auto w-full max-w-6xl">
        
        {/* Bloco 1: Missão, visão e valores */}
        <div className="text-center">
          <h2 className="font-serif text-4xl font-bold leading-tight text-[#103586] sm:text-5xl">
            Missão, visão e valores
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            Guiados pela assistência social, pela proteção integral e pelos direitos humanos,
            trabalhamos para garantir direitos, desenvolver potencialidades e promover cidadania.
          </p>
        </div>

        {/* 3 Cartões de Missão, Visão e Valores */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Cartão 1: Missão (Fundo azul) */}
          <div className="flex flex-col rounded-3xl bg-[#1c5db4] p-8 text-white shadow-sm">
            <span className="mx-auto mb-6 inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-bold uppercase tracking-wider">
              Missão
            </span>
            <h3 className="text-center font-serif text-2xl font-bold leading-snug">
              Proteger, incluir e fortalecer vínculos
            </h3>
            <p className="mt-4 text-center text-sm leading-6 text-blue-100">
              Serviços de proteção básica a crianças, adolescentes e famílias em situação de vulnerabilidade e risco social, promovendo acesso a direitos, convivência comunitária e o fortalecimento de vínculos sociais.
            </p>
          </div>

          {/* Cartão 2: Visão (Fundo branco/gelo com borda) */}
          <div className="flex flex-col rounded-3xl border border-slate-200 bg-[#F9FAFB] p-8 text-slate-800 shadow-sm">
            <span className="mx-auto mb-6 inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#103586]">
              Visão
            </span>
            <h3 className="text-center font-serif text-2xl font-bold leading-snug text-[#103586]">
              Ser referência em Tatuí e região
            </h3>
            <p className="mt-4 text-center text-sm leading-6 text-slate-600">
              Consolidar-se como organização de referência na proteção socioassistencial de crianças e adolescentes, contribuindo para o SUAS e para a redução da vulnerabilidade, da exclusão e da violação de direitos.
            </p>
          </div>

          {/* Cartão 3: Valores (Fundo azul) */}
          <div className="flex flex-col rounded-3xl bg-[#1c5db4] p-8 text-white shadow-sm">
            <span className="mx-auto mb-6 inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-bold uppercase tracking-wider">
              Valores
            </span>
            <h3 className="text-center font-serif text-2xl font-bold leading-snug">
              Nossos valores
            </h3>
            <p className="mt-4 text-center text-sm leading-6 text-blue-100">
              Respeito à dignidade humana, Defesa intransigente dos direitos, Equidade e justiça social, Transparência na gestão, Comprometimento ético, Participação comunitária, Universalidadade do acesso.
            </p>
          </div>

        </div>

        {/* Separador / Espaçamento entre as secções */}
        <div className="my-20 h-px w-full bg-slate-200" />

        {/* Bloco 2: Como cuidamos das crianças e adolescentes */}
        <div className="text-center">
          <h2 className="font-serif text-4xl font-bold leading-tight text-[#103586] sm:text-5xl">
            Como cuidamos das crianças e adolescentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Conforme a Tipificação Nacional dos Serviços Socioassistenciais (Resolução CNAS nº 109/2009).
          </p>
        </div>

        {/* Grelha de 6 itens de cuidados */}
        <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-rose-100">
              <img src={coracaoIcon} alt="" className="h-8 w-8 object-contain" />
            </div>
            <h3 className="mt-5 font-serif text-2xl font-bold text-[#103586]">
              Saúde integral
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 max-w-xs">
              Acompanhamento psicossocial e odontológico.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <img src={livroIcon} alt="" className="h-8 w-8 object-contain" />
            </div>
            <h3 className="mt-5 font-serif text-2xl font-bold text-[#103586]">
              Acompanhamento pedagógico
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 max-w-xs">
              Apoio ao desempenho escolar de quem estuda na rede pública.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
              <img src={ballIcon} alt="" className="h-8 w-8 object-contain" />
            </div>
            <h3 className="mt-5 font-serif text-2xl font-bold text-[#103586]">
              Esporte e lazer
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 max-w-xs">
              Atividades coletivas que promovem socialização e saúde.
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-100">
              <img src={artIcon} alt="" className="h-8 w-8 object-contain" />
            </div>
            <h3 className="mt-5 font-serif text-2xl font-bold text-[#103586]">
              Oficinas socioculturais
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 max-w-xs">
              Arte e criatividade pelo Projeto Samaritano.
            </p>
          </div>

          {/* Item 5 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
              <img src={homeIcon} alt="" className="h-8 w-8 object-contain" />
            </div>
            <h3 className="mt-5 font-serif text-2xl font-bold text-[#103586]">
              Apoio às famílias
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 max-w-xs">
              Atendimento sociofamiliar para fortalecer vínculos.
            </p>
          </div>

          {/* Item 6 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
              <img src={startIcon} alt="" className="h-8 w-8 object-contain" />
            </div>
            <h3 className="mt-5 font-serif text-2xl font-bold text-[#103586]">
              Ações comunitárias
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 max-w-xs">
              Eventos e celebrações com a participação das famílias.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Servicos