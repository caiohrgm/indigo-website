import { useState } from "react";
import systems from "../data/systems.json";
import { FaCrown, FaTimesCircle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { useEffect } from "react";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/react';
import { FaCheck } from 'react-icons/fa';

const filterOptions = [
  { value: 'nome', label: 'Nome (A-Z)' },
  { value: 'pop-desc', label: 'População (ordem decrescente)' },
  { value: 'pop-asc', label: 'População (ordem crescente)' },
  { value: 'lider-yes', label: 'Somente líder Indigo' },
  { value: 'lider-no', label: 'Somente concorrentes' },
  { value: 'alianca', label: 'Sistemas da Aliança (Edmund Mahon)' },
  { value: 'outros-poderes', label: 'Outros Poderes Galáticos' },
];

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
        className="w-5 h-5 text-indigo-blue cursor-pointer"
      >
        <path d="M12 3l9 8h-3v9h-4v-6h-4v6H6v-9H3l9-8z" />
      </svg>
      <div
        className={`absolute left-full top-1/2 transform -translate-y-1/2 ml-2 w-auto p-2 text-sm text-white bg-dark-grey text-center rounded shadow z-10 transition-opacity ${
          showTooltip ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"
        }`}
      >
        Sistema natal
      </div>
    </div>
  );
}

function TooltipInfo() {
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleTooltip = () => setShowTooltip((prev) => !prev);

  return (
    <div className="relative group" onClick={toggleTooltip}>
      <FaInfoCircle
        className="text-alliance-green cursor-pointer text-lg"
        title="Informações"
      />
      <div
        className={`absolute left-full top-1/2 transform -translate-y-1/2 ml-2 w-56 p-2 text-sm text-white bg-dark-grey text-center rounded shadow z-10 transition-opacity ${
          showTooltip ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"
        }`}
      >
        Esse botão busca os dados mais recentes dos sistemas via API.
      </div>
    </div>
  );
}

type AlertBoxProps = {
  title: string;
  message: string;
  onClose: () => void;
};

export function AlertBox({ title, message, onClose }: AlertBoxProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // fecha automaticamente após 3 segundos
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-50">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="mb-4">{message}</p>
        <button
          className="bg-alliance-green text-white px-4 py-2 rounded hover:bg-gray-700"
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

export function Systems() {
  const [systemsData, setSystemsData] = useState(systems);
  const [page, setPage] = useState(0);
  const [sortOption, setSortOption] = useState("nome");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
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
    Patronage: "Patronato",
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
  let filteredSystems = [...systemsData];
  if (sortOption === "lider-yes") {
    filteredSystems = systemsData.filter((s) => s.is_leader === "yes");
  }
  if (sortOption === "lider-no") {
    filteredSystems = systemsData.filter((s) => s.is_leader !== "yes");
  }
  if (sortOption === "alianca") {
    filteredSystems = systemsData.filter((s) => s.power === "Edmund Mahon");
  }
  if (sortOption === "outros-poderes") {
    filteredSystems = systemsData.filter(
      (s) => s.power !== "Edmund Mahon" && s.power?.toLowerCase() !== "unoccupied"
    )
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
      default: 
        return a.name.localeCompare(b.name);
    }
  });

  const totalPages = Math.ceil(sortedSystems.length / pageSize);
  const paginatedSystems = sortedSystems.slice(
    page * pageSize,
    (page + 1) * pageSize
  );

  function updateSystemsData() {
    fetch("https://indigo-website-scrap-cron-job.onrender.com/update-system-data", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((newSystems) => {
        setSystemsData(newSystems);  // Atualiza o estado com os dados recebidos
        setAlertTitle("Sucesso!");
        setAlertMessage("Dados atualizados com sucesso.");
        setAlertVisible(true);
        setPage(0);
      })
      .catch((err) => {
        console.error("Erro ao atualizar dados:", err);
        setAlertTitle("Erro");
        setAlertMessage("Não foi possível atualizar os dados.");
        setAlertVisible(true);
      });
  }

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
      <div className="mb-4 flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
        <label htmlFor="sort" className="font-medium">
          Ordenar / Filtrar:
        </label>

        
        <Listbox
          value={sortOption}
          onChange={(value) => {
            setSortOption(value);
            setPage(0);
          }}
        >
          {({ open }) => (
            <div className="relative w-75">
              {/* Botão do Listbox */}
              <ListboxButton
                className={`w-79 h-8 px-4 py-[-10px] text-left rounded-lg shadow-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  open ? 'border-indigo-500 ring-2 ring-indigo-500' : 'border-gray-300'
                }`}
              >
                {filterOptions.find((opt) => opt.value === sortOption)?.label}
              </ListboxButton>

              {/* Dropdown */}
              <ListboxOptions className="absolute mt-1 w-79 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto z-10">
                {filterOptions.map((option) => (
                  <ListboxOption
                    key={option.value}
                    value={option.value}
                    className={({ active, selected }) =>
                      `cursor-pointer px-4 py-2 flex justify-between items-center ${
                        active ? 'bg-green-500 text-white' : 'text-gray-700'
                      } ${selected ? 'font-semibold' : ''}`
                    }
                  >
                    {({ selected }) => (
                      <>
                        {option.label}
                        {selected && <FaCheck className="text-white ml-2" />}
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          )}
        </Listbox>


        <div className="text-gray-700 text-sm mt-2 sm:mt-0 sm:ml-auto">
          Resultado da busca: <span className="font-semibold">{filteredSystems.length}</span> sistemas encontrados
        </div>
      </div>

      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full border-collapse">
          <thead className="bg-[#6666FF] text-white">
            <tr>
              <th className="px-4 py-2 text-center w-40 text-sm">Sistema</th>
              <th className="px-4 py-2 text-center w-32 text-sm">Tipo de Governo</th>
              <th className="px-4 py-2 text-center w-32 text-sm">Afiliação</th>
              <th className="px-4 py-2 text-center w-40 text-sm">Poder Galático</th>
              <th className="px-4 py-2 text-center w-32 text-sm">População</th>
              <th className="px-4 py-2 text-center w-32 text-sm">Influência Indigo</th>
              <th className="px-4 py-2 text-left w-40 text-sm">Líder do Sistema</th>
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

              const powerClass =
                powerColors[powerDisplay] ?? "text-white font-semibold";

              return (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 text-center whitespace-nowrap text-ellipsis">
                    <div className="flex items-center justify-center gap-2">
                      {system.name}
                      {system.name === "Bletii" && <TooltipIcon />}
                    </div>
                  </td>
                  <td className="px-4 py-2 text-center w-42">
                    {governmentTranslations[system.government] ??
                      system.government}
                  </td>
                  <td className="px-4 py-2 text-center w-auto">
                    {allegianceTranslations[system.allegiance] ??
                      system.allegiance}
                  </td>
                  <td className="px-4 py-2 text-center whitespace-nowrap overflow-hidden text-ellipsis">
                    <span
                      className={`${powerClass} inline-block px-1 bg-black rounded`}
                    >
                      {powerDisplay}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-center">
                    {system.population.toLocaleString()}
                  </td>

                  <td className="px-4 py-2 text-center w-45">{influence}%</td>

                  {/* Aqui alinhamos só as células da coluna à esquerda */}
                  <td className="px-4 py-2 text-left">
                    <div className="flex items-center gap-2">
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
                          <span className="text-dark-grey font-semibold">
                            Concorrente
                          </span>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

      </div>
      
      <div className="flex items-center justify-between gap-4 mt-4">
        <div className="flex items-center gap-2">
          <button
            onClick={updateSystemsData}
            className="px-4 py-2 bg-indigo-blue text-white rounded hover:bg-green-500 cursor-pointer"
          >
            Atualizar dados dos sistemas
          </button>

          {/* Subir o ícone levemente */}
          <div className="-translate-y-1.5">
            <TooltipInfo />
          </div>
        </div>

        <div className="flex items-center gap-4">
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
      </div>
      {alertVisible && (
        <AlertBox
          title={alertTitle}
          message={alertMessage}
          onClose={() => {
            setAlertVisible(false);
          }}
        />
      )}

    </section>
  );
}

