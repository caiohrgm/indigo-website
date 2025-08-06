export function About() {
  return (
    <section id="about" className="py-16 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-semibold text-[#4A4A48] mb-6 font-exo-2 ">Sobre a Indigo Technologies</h3>
      <div className="text-lg leading-relaxed text-justify hyphenate">
        <p className="indent-8 mb-4">
            Indigo Technologies é uma companhia independente fundada nas fronteiras do espaço habitado, no sistema Bletii, com especialização em operações de comércio, 
            transporte interestelar e pesquisas xenobiológicas. Desde seus primeiros passos, a corporação se destacou por sua atuação estratégica e inovadora, sempre guiada pelo compromisso com a expansão consciente da humanidade.
        </p>

        <p className="indent-8 mb-4">
            Criada no ano de 3304 pelo comandante, explorador e pesquisador Kvothe Briez, a Indigo Technologies nasceu para transformar a 
            presença humana nas estrelas, impulsionando a descoberta científica e o desenvolvimento tecnológico em ambientes extremos. 
            Sob sua liderança visionária, tornou-se referência em engenharia de terraformação, mineração espacial avançada, prospecção automatizada de recursos e integração sustentável de assentamentos interplanetários.
        </p>

        <p className="indent-8 mb-4">
            Atualmente, a Indigo Technologies opera em 357 sistemas estelares, com controle direto sobre 182 deles. Mantemos uma vasta infraestrutura composta por 
            254 estações espaciais e 129 assentamentos planetários, conectando ciência, comércio e segurança em larga escala. Cada ponto de presença simboliza nosso compromisso 
            com o desenvolvimento de civilizações interplanetárias fundamentadas no conhecimento, autonomia e equilíbrio galáctico.
        </p>

        <div className="mt-6 p-4 rounded-xl bg-medium-grey text-white shadow-md">
          <h3 className="text-lg font-bold text-dark-grey mb-2 font-exo-2">Nosso lema:</h3>
          <p className="text-2xl font-bold italic text-indigo-blue mb-4">
            "Ousamos sonhar com uma galáxia mais forte."
          </p>

          <h3 className="text-lg font-bold text-dark-grey mb-2 font-exo-2">Nossa missão:</h3>
          <p className="text-base text-dark-grey leading-relaxed font-semibold">
            Fortalecer as conexões entre os povos estelares, impulsionando a colaboração e a inovação
            para construir um futuro sustentável e promissor para todas as formas de vida no universo.
          </p>
        </div>
      </div>
    </section>
  );
}
