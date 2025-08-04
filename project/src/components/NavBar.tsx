// export function Navbar() {
//   return (
//     <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
//       <h1 className="text-indigo-blue text-2xl font-bold font-orbitron">Indigo Technologies</h1>
//       <ul className="flex gap-6 text-sm font-medium text-[#4A4A48] ">
//         <li><a href="#about" className="hover:text-indigo-blue">Sobre</a></li>
//         <li><a href="#domains" className="hover:text-indigo-blue">Atuação</a></li>
//         <li><a href="#systems" className="hover:text-indigo-blue">Sistemas</a></li>
//         <li><a href="#alliance" className="hover:text-indigo-blue">Aliança</a></li>
//         <li><a href="#contact" className="hover:text-indigo-blue">Contato</a></li>
//       </ul>
//     </nav>
//   );
// }
import { useState } from "react";
import { Menu, X } from "lucide-react"; // você pode usar ícones diferentes se quiser

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-indigo-blue text-2xl font-bold font-orbitron">Indigo Technologies</h1>

        {/* Botão de menu hamburguer para mobile */}
        <button
          className="md:hidden text-indigo-blue cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu normal (desktop) */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-[#4A4A48]">
          <li><a href="#about" className="hover:text-indigo-blue">Sobre</a></li>
          <li><a href="#domains" className="hover:text-indigo-blue">Atuação</a></li>
          <li><a href="#systems" className="hover:text-indigo-blue">Sistemas</a></li>
          <li><a href="#alliance" className="hover:text-indigo-blue">Aliança</a></li>
          <li><a href="#contact" className="hover:text-indigo-blue">Contato</a></li>
        </ul>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 text-sm font-medium text-[#4A4A48] md:hidden">
          <li><a href="#about" className="hover:text-indigo-blue">Sobre</a></li>
          <li><a href="#domains" className="hover:text-indigo-blue">Atuação</a></li>
          <li><a href="#systems" className="hover:text-indigo-blue">Sistemas</a></li>
          <li><a href="#alliance" className="hover:text-indigo-blue">Aliança</a></li>
          <li><a href="#contact" className="hover:text-indigo-blue">Contato</a></li>
        </ul>
      )}
    </nav>
  );
}
