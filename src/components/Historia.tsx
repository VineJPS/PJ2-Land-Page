import historyImage from '../assets/Foto_2.png'

const milestones = [
  {
    year: '1976',
    description: 'Fundação do Recanto Santa Cruz, no Bairro Valinho.',
  },
  {
    year: '2005',
    description: 'Inscrição no CMAS de Tatuí, viabilizando a atuação no SUAS.',
  },
  {
    year: '2012',
    description:
      'Registro no CMCA de Tatuí (Resolução nº 02/2012), vigente até 30/08/2028.',
  },
  {
    year: '2025-26',
    description:
      'Renovação de parcerias com a Prefeitura, recursos para a construção da quadra poliesportiva e comemoração dos 50 anos de atuação.',
  },
]

function Historia() {
  return (
    <section
      id="nossa-historia"
      className="bg-white px-6 pt-6 pb-12 sm:px-10 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20"
    >
      {/* Limitamos a largura do contentor principal para max-w-5xl para alinhar tudo perfeitamente com a margem desejada */}
      <div className="mx-auto w-full max-w-5xl">
        
        <h2 className="font-serif text-4xl font-bold leading-tight text-[#103586] sm:text-5xl">
          50 anos cuidando de quem está crescendo.
        </h2>

        {/* Removi o max-w-3xl restritivo daqui para que o texto ocupe a mesma largura uniforme do bloco */}
        <div className="mt-5 space-y-4 font-sans font-normal text-sm leading-7 text-[#56617A] sm:text-lg">
          <p>
            Fundada em 5 de agosto de 1976, pela Pastora Alice Castello Mattar,
            a Associação Recanto Betel, originalmente denominada Recanto Santa
            Cruz, surgiu com o objetivo de acolher crianças em situação de
            vulnerabilidade social no bairro Valinho, em Tatuí/SP.
          </p>
          <p>
            Atualmente, como Organização da Sociedade Civil inscrita no CMAS e
            CMDCA, executa o Serviço de Convivência e Fortalecimento de Vínculos
            (SCFV), destinado a crianças e adolescentes de 6 a 15 anos, conforme
            a Tipificação Nacional dos Serviços Socioassistenciais.
          </p>
        </div>

        {/* Imagem perfeitamente contida e alinhada às margens do contentor pai */}
        <img
          src={historyImage}
          alt="Fachada da Associação Recanto Betel"
          className="mt-8 mb-12 block w-full rounded-3xl object-cover shadow-sm"
        />

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {milestones.map((milestone, index) => (
            <li key={milestone.year} className="relative pt-6">
              {/* Linha divisória ajustada para alinhar perfeitamente */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-1.5 h-[2px] bg-blue-200"
              />
              {/* Ponto indicador alinhado de forma exata */}
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1 z-10 h-3 w-3 -translate-y-0.5 rounded-full border-2 ${
                  index === milestones.length - 1
                    ? 'border-yellow-400 bg-yellow-400'
                    : 'border-blue-700 bg-white'
                }`}
              />
              <h3 className="font-serif text-[40px] font-bold leading-none text-[#103586]">
                {milestone.year}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {milestone.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Historia