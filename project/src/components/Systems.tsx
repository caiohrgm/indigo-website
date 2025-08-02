import systems from '../data/systems.json';

export function Systems() {
  console.log('systems:', systems); // DEBUG: verifica se JSON carregou

  return (
    <section id="systems" className="py-16 px-6 max-w-6xl mx-auto">
      <h3 className="text-3xl font-semibold mb-6">Sistemas Controlados</h3>
      <p className="mb-4 text-lg">
        A Indigo Technologies administra sistemas estratégicos sob a bandeira da Aliança.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {systems.map((system, index) => {
          const influence = typeof system.influence === 'string'
            ? parseFloat(system.influence.replace('%', ''))
            : system.influence;

          const description = `${system.government} government, ${system.allegiance} allegiance, population of ${system.population.toLocaleString()}, influence: ${influence}%, controlled by Indigo: ${system.is_leader}.`;

          return (
            <li
              key={index}
              className="bg-white rounded-xl shadow p-4 border-l-4 border-[#6666FF]"
            >
              <h4 className="text-xl font-bold text-[#6666FF]">{system.name}</h4>
              <p className="text-[#4A4A48]">{description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
