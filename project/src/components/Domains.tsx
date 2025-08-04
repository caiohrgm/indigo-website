const domains = [
  { title: 'Mineração', desc: 'Extração automatizada em cinturões e planetas ricos em recursos.' },
  { title: 'Exploração', desc: 'Tecnologia de mapeamento e sondas para sistemas não catalogados.' },
  { title: 'Colonização', desc: 'Infraestrutura para assentamentos planetários.' },
  { title: 'Policiamento', desc: 'Unidades especializadas atuam na proteção de colônias e rotas comerciais, garantindo ordem e segurança com presença tática e resposta rápida..' },
  { title: 'Guerras', desc: 'Apoio estratégico e armamento inteligente.' },
  { title: 'Pesquisa', desc: 'Laboratórios móveis e bioengenharia aplicada a ambientes extremos.' }
];

export function Domains() {
  return (
    <section id="domains" className="py-16 bg-[#D8DAD3] px-6">
      <h3 className="text-3xl font-semibold text-[#4A4A48] mb-8 text-center font-exo-2">Áreas de Atuação</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {domains.map(({ title, desc }) => (
          <div key={title} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h4 className="text-xl font-bold text-[#6666FF]">{title}</h4>
            <p className="mt-2 text-[#4A4A48]">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
