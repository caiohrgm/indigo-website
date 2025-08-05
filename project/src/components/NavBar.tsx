import { useState } from "react";
import { Menu, X } from "lucide-react";
import indigo_logo from "../assets/indigo_logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f7f2e8] shadow-md px-6 py-4 sticky top-0 z-50">
      {/* Container centralizado */}
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo com altura controlada */}
        <img
          src={indigo_logo}
          alt="Logo Indigo Technologies"
          className="h-22 md:h-32 w-auto object-contain"
        />

        {/* Botão menu mobile */}
        <button
          className="md:hidden text-indigo-blue cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-8 md:text-base lg:text-xl font-semibold text-[#4A4A48]">
          <li>
            <a href="#about" className="hover:text-indigo-blue font-exo-2 font-semibold">
              Sobre
            </a>
          </li>
          <li>
            <a href="#domains" className="hover:text-indigo-blue font-exo-2 font-semibold">
              Atuação
            </a>
          </li>
          <li>
            <a href="#systems" className="hover:text-indigo-blue font-exo-2 font-semibold">
              Sistemas
            </a>
          </li>
          <li>
            <a href="#alliance" className="hover:text-indigo-blue font-exo-2 font-semibold">
              Aliança
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-blue font-exo-2 font-semibold">
              Contato
            </a>
          </li>
        </ul>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 text-sm font-medium text-[#4A4A48] md:hidden">
          <li>
            <a href="#about" className="hover:text-indigo-blue font-exo-2 font-semibold">
              Sobre
            </a>
          </li>
          <li>
            <a href="#domains" className="hover:text-indigo-blue font-exo-2 font-semibold">
              Atuação
            </a>
          </li>
          <li>
            <a href="#systems" className="hover:text-indigo-blue font-exo-2 font-semibold">
              Sistemas
            </a>
          </li>
          <li>
            <a href="#alliance" className="hover:text-indigo-blue font-exo-2 font-semibold">
              Aliança
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-blue font-exo-2 font-semibold">
              Contato
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
