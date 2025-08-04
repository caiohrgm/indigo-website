import { useState } from "react";
import systems from "../data/systems.json";

export function Systems() {
  const [page, setPage] = useState(0);
  const pageSize = 10;

  const governmentTranslations: Record<string, string> = {
    Anarchy: "Anarquia",
    Communist: "Comunista",
    Confederacy: "Confederação",
    Cooperative: "Cooperativa",
    Corporate: "Corporativo",
    Democracy: "Democracia",
    Dictatorship: "Ditadura",
    Feudal: "Feudal",
    Patronage: "Patrocínio",
    "Prison Colony": "Colônia Penal",
    Theocracy: "Teocracia",
  };

  const allegianceTranslations: Record<string, string> = {
    Empire: "Império",
    Federation: "Federação",
    Independent: "Independente",
  };

  const sortedSystems = [...systems].sort((a, b) => {
    if (a.name === "Bletii") return -1;
    if (b.name === "Bletii") return 1;
    return a.name.localeCompare(b.name);
  });

  const totalPages = Math.ceil(sortedSystems.length / pageSize);
  const paginatedSystems = sortedSystems.slice(
    page * pageSize,
    (page + 1) * pageSize
  );

  return (
    <section id="systems" className="py-16 px-6 max-w-6xl mx-auto">
      <h3 className="text-3xl font-semibold mb-6 font-exo-2">Sistemas Controlados</h3>
      <p className="mb-4 text-lg">
        A Indigo Technologies já atua em mais de 300 sistemas estratégicos.
      </p>

      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full border-collapse">
          <thead className="bg-[#6666FF] text-white">
            <tr>
              <th className="px-4 py-2 text-left">Sistema</th>
              <th className="px-4 py-2 text-left">Tipo de Governo</th>
              <th className="px-4 py-2 text-left">Afiliação</th>
              <th className="px-4 py-2 text-left">Poder Galático</th>
              <th className="px-4 py-2 text-left">População</th>
              <th className="px-4 py-2 text-left">Influência</th>
              <th className="px-4 py-2 text-left">Controlado</th>
            </tr>
          </thead>
          <tbody>
            {paginatedSystems.map((system, index) => {
              const influence =
                typeof system.influence === "string"
                  ? parseFloat(system.influence.replace("%", ""))
                  : system.influence;
                
              const powerDisplay =
                system.power?.toLowerCase() === "unoccupied"
                  ? "Não Controlado"
                  : system.power;

              return (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 flex items-center gap-2">
                    {system.name}
                    {system.name === "Bletii" && (
                      <div className="relative group">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-[#6666FF] cursor-pointer"
                        >
                          <path d="M12 3l9 8h-3v9h-4v-6h-4v6H6v-9H3l9-8z" />
                        </svg>
                        <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 w-45 p-2 text-sm text-white bg-dark-grey text-center rounded shadow opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          Sistema natal da Indigo
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {governmentTranslations[system.government] ??
                      system.government}
                  </td>
                  <td className="px-4 py-2">
                    {allegianceTranslations[system.allegiance] ??
                      system.allegiance}
                  </td>
                  <td className="px-4 py-2">{powerDisplay}</td>
                  <td className="px-4 py-2">
                    {system.population.toLocaleString()}
                  </td>
                  <td className="px-4 py-2">{influence}%</td>
                  <td className="px-4 py-2">
                    {system.is_leader === "yes" ? "Sim" : "Não"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-end gap-4 mt-4">
        <span className="text-gray-600">
          Página {page + 1} / {totalPages}
        </span>
        <button
          disabled={page === 0}
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          disabled={(page + 1) * pageSize >= sortedSystems.length}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Próximo
        </button>
      </div>
    </section>
  );
}








