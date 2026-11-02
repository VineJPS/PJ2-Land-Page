import primeiraFoto from '../assets/primeira_foto_esquerda.png'
import foto1 from '../assets/1.png'
import foto2 from '../assets/2.png'
import foto3 from '../assets/3.png'
import foto4 from '../assets/4.png'
import penultimaFoto from '../assets/penultimafoto.png'
import ultimaFoto from '../assets/ultimafoto.png'

function Galeria() {
  return (
    <section
      id="galeria-alunos"
      className="bg-stone-100 px-6 pt-12 pb-16 sm:px-10 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      {/* Mantém a largura máxima padrão alinhada com o Hero e a Historia */}
      <div className="mx-auto w-full max-w-6xl">
        
        {/* Bloco 1: Um espaço feito para as crianças */}
        <div>
          <h2 className="font-serif text-4xl font-bold leading-tight text-[#103586] sm:text-5xl">
            Um espaço feito para as crianças.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Registros das nossas instalações e das atividades do dia a dia com as crianças, os adolescentes e suas famílias.
          </p>
        </div>

        {/* Mosaico ajustado conforme o layout do Figma: Foto esquerda equilibrada e 4 fotos à direita em 2x2 */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12 items-center">
          
          {/* Foto Principal Esquerda (ocupando 5 colunas para ficar harmoniosa) */}
          <div className="md:col-span-5">
            <img
              src={primeiraFoto}
              alt="Atividade com crianças na Associação Recanto Betel"
              className="h-[440px] w-full rounded-3xl object-cover shadow-sm"
            />
          </div>

          {/* Coluna da Direita com as 4 fotos divididas em grelha 2x2 (ocupando 7 colunas) */}
          <div className="grid grid-cols-2 gap-4 md:col-span-7">
            <img
              src={foto1}
              alt="Atividades pedagógicas"
              className="h-[210px] w-full rounded-3xl object-cover shadow-sm"
            />
            <img
              src={foto2}
              alt="Refeitório e convivência"
              className="h-[210px] w-full rounded-3xl object-cover shadow-sm"
            />
            <img
              src={foto3}
              alt="Atividades ao ar livre"
              className="h-[210px] w-full rounded-3xl object-cover shadow-sm"
            />
            <img
              src={foto4}
              alt="Momentos em grupo"
              className="h-[210px] w-full rounded-3xl object-cover shadow-sm"
            />
          </div>

        </div>

        {/* Separador */}
        <div className="my-20 h-px w-full bg-slate-200" />

        {/* Bloco 2: Alunos destaque 2026 */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            07 DE JULHO DE 2026
          </span>
          <h2 className="mt-2 font-serif text-4xl font-bold leading-tight text-[#103586] sm:text-5xl">
            Alunos destaque 2026
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
            Celebramos a entrega do reconhecimento aos <strong className="text-slate-800">alunos destaque</strong> e também aos que mostraram uma <strong className="text-slate-800">significativa mudança de comportamento</strong>, homenageados por sua evolução e dedicação no Serviço de Convivência e Fortalecimento de Vínculos.
          </p>
        </div>

        {/* Cartão de Reconhecimento + Foto */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12 items-center">
          <div className="relative rounded-3xl bg-blue-50/80 p-8 border border-blue-100 shadow-sm md:col-span-6">
            <div className="absolute left-0 top-8 h-12 w-1.5 bg-amber-400 rounded-r" />
            <h3 className="font-serif text-2xl font-bold text-[#103586]">
              Cartinha de reconhecimento
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Cada aluno homenageado recebeu uma cartinha escrita pela equipe técnica, para valorizar sua trajetória e fortalecer a autoestima.
            </p>
          </div>

          <div className="md:col-span-6">
            <img
              src={penultimaFoto}
              alt="Alunos segurando cartas de reconhecimento"
              className="h-64 w-full rounded-3xl object-cover shadow-sm"
            />
          </div>
        </div>

        {/* Foto final grande */}
        <div className="mt-6">
          <img
            src={ultimaFoto}
            alt="Grupo de alunos destaque reunidos"
            className="h-[400px] w-full rounded-3xl object-cover shadow-sm"
          />
        </div>

      </div>
    </section>
  )
}

export default Galeria