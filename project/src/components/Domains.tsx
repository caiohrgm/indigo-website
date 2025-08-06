import mining_action from '../assets/domains/mining.png'
import exploring_action from '../assets/domains/exploring.jpg'
import colonizing_action from '../assets/domains/colonizing.jpg'
import enforcing_action from '../assets/domains/enforcing.png'
import warfaring_action from '../assets/domains/warfaring.jpg'
import researching_action from '../assets/domains/researching.png'

const domains = [
  { title: 'Mineração', desc: 'Extração automatizada em cinturões e planetas ricos em recursos.', img: mining_action},
  { title: 'Exploração', desc: 'Tecnologia de mapeamento e sondas para sistemas não catalogados.', img: exploring_action},
  { title: 'Colonização', desc: 'Infraestrutura para assentamentos planetários.', img: colonizing_action },
  { title: 'Policiamento', desc: 'Unidades especializadas atuam na proteção de colônias e rotas comerciais, garantindo ordem e segurança com presença tática e resposta rápida..',img: enforcing_action },
  { title: 'Guerras Galáticas', desc: 'Conflitos entre superpotências estelares pelo domínio de sistemas. Oferecemos suporte estratégico e armamentos inteligentes para vencer batalhas decisivas.', img: warfaring_action },
  { title: 'Pesquisa', desc: 'Laboratórios móveis e bioengenharia aplicada a ambientes extremos.', img: researching_action }
];

export function Domains() {
  return (
    <section id="domains" className="py-16 bg-light-grey px-6">
      <h3 className="text-3xl font-semibold text-[#4A4A48] mb-8 text-center font-exo-2">Áreas de Atuação</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
       {domains.map(({ title, desc, img }) => (
        <div key={title} className="bg-white rounded-xl shadow hover:shadow-lg transition-all text-center overflow-hidden flex flex-col">
          {/* Bloco textual com padding */}
          <div className="p-6 flex-grow">
            <h4 className="text-xl font-bold text-[#6666FF]">{title}</h4>
            <p className="mt-2 text-[#4A4A48]">{desc}</p>
          </div>
          {/* Imagem ocupa 100% da largura sem padding */}
          <img
            src={img}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </div>
      ))}
      </div>
    </section>
  );
}
