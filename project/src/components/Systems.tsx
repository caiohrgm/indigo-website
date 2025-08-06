import { useState } from "react";
import systems from "../data/systems.json";
import { FaCrown, FaTimesCircle } from "react-icons/fa";

export function Systems() {
  const [page, setPage] = useState(0);
  const [sortOption, setSortOption] = useState("nome");
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

  const powerColors: Record<string, string> = {
    // Aliança
    "Edmund Mahon": "text-alliance-green font-semibold",
    "Nakato Kaine": "text-[#9cff00] font-semibold", 

    // Federação
    "Felicia Winters": "text-[#f69113] font-semibold",
    "Jerome Archer": "text-[#db3239] font-semibold",

    // Império
    "Arissa Lavigny-Duval": "text-[#780cdf] font-semibold",
    "Aisling Duval": "text-[#08a2f6] font-semibold",
    "Denton Patreus": "text-[#09d2d5] font-semibold",
    "Zemina Torval": "text-[#0253ac] font-semibold",
 
    // Independentes
    "Li Yong-Rui": "text-[#c7fd25] font-semibold text-center",
    "Pranav Antal": "text-[#e3f747] font-semibold",
    "Archon Delaine": "text-[#92ff04] font-semibold",
    "Yuri Grom": "text-[#f94d03] font-semibold"
  };

  // --- FILTRO ---
  let filteredSystems = [...systems];
  if (sortOption === "lider-yes") {
    filteredSystems = systems.filter((s) => s.is_leader === "yes");
  }
  if (sortOption === "lider-no") {
    filteredSystems = systems.filter((s) => s.is_leader !== "yes");
  }

  // --- ORDENANDO ---
  const sortedSystems = filteredSystems.sort((a, b) => {
    if (a.name === "Bletii") return -1;
    if (b.name === "Bletii") return 1;

    switch (sortOption) {
      case "pop-desc":
        return b.population - a.population;
      case "pop-asc":
        return a.population - b.population;
      default: // nome
        return a.name.localeCompare(b.name);
    }
  });

  const totalPages = Math.ceil(sortedSystems.length / pageSize);
  const paginatedSystems = sortedSystems.slice(
    page * pageSize,
    (page + 1) * pageSize
  );

  return (
    <section id="systems" className="py-16 px-6 max-w-6xl mx-auto">
      <h3 className="text-3xl font-semibold mb-6 font-exo-2">
        Onde está a Indigo?
      </h3>
      <p className="mb-4 text-lg">
        A Indigo Technologies possui uma presença marcante na galáxia, atuando
        em mais de 350 sistemas.
      </p>

      {/* SELECT PARA FILTRAR/ORDENAR */}
      <div className="mb-4 flex gap-4 items-center">
        <label htmlFor="sort" className="font-medium">
          Ordenar / Filtrar:
        </label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => {
            setSortOption(e.target.value);
            setPage(0);
          }}
          className="px-4 py-2 rounded-lg border border-gray-300 bg-white shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="nome">Nome (A-Z)</option>
          <option value="pop-desc">População (ordem decrescente)</option>
          <option value="pop-asc">População (ordem crescente)</option>
          <option value="lider-yes">Somente líder Indigo</option>
          <option value="lider-no">Somente concorrentes</option>
        </select>
      </div>

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
              <th className="px-4 py-2 text-left">Líder do Sistema</th>
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
              
              const powerClass = powerColors[powerDisplay] ?? "text-white font-semibold";

              return (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 flex items-center gap-2">
                    {system.name}
                    {system.name === "Bletii" && <TooltipIcon />}
                  </td>
                  <td className="px-4 py-2">
                    {governmentTranslations[system.government] ??
                      system.government}
                  </td>
                  <td className="px-4 py-2">
                    {allegianceTranslations[system.allegiance] ??
                      system.allegiance}
                  </td>
                  <td className="px-4 py-2">
                    <span className={`${powerClass} inline-block px-1 bg-black rounded`}>
                      {powerDisplay}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    {system.population.toLocaleString()}
                  </td>
                  <td className="px-4 py-2">{influence}%</td>
                  <td className="px-4 py-2 flex items-center gap-2">
                    {system.is_leader === "yes" ? (
                      <>
                        <FaCrown
                          className="text-yellow-500"
                          title="Controlado pela Indigo"
                        />
                        <span className="text-indigo-blue font-semibold">
                          Indigo
                        </span>
                      </>
                    ) : (
                      <>
                        <FaTimesCircle
                          className="text-red-500"
                          title="Sistema concorrente"
                        />
                        <span className="text-dark-grey font-semibold">Concorrente</span>
                      </>
                    )}
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
          className="px-4 py-2 bg-indigo-100 rounded disabled:opacity-50 hover:bg-green-300 cursor-pointer"
        >
          Anterior
        </button>
        <button
          disabled={(page + 1) * pageSize >= sortedSystems.length}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-indigo-blue rounded disabled:opacity-50 cursor-pointer text-white hover:bg-green-500"
        >
          Próximo
        </button>
      </div>
    </section>
  );
}

// Componente auxiliar para tooltip com suporte a mobile
function TooltipIcon() {
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleTooltip = () => setShowTooltip((prev) => !prev);

  return (
    <div
      className="relative group md:hover:opacity-100"
      onClick={toggleTooltip}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-[#6666FF] cursor-pointer"
      >
        <path d="M12 3l9 8h-3v9h-4v-6h-4v6H6v-9H3l9-8z" />
      </svg>
      <div
        className={`absolute left-full top-1/2 transform -translate-y-1/2 ml-2 w-44 p-2 text-sm text-white bg-dark-grey text-center rounded shadow z-10 transition-opacity ${
          showTooltip ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"
        }`}
      >
        Sistema natal da Indigo
      </div>
    </div>
  );
}
