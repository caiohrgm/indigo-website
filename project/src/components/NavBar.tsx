export function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-indgo-b text-2xl font-bold font-orbitron">Indigo Technologies</h1>
      <ul className="flex gap-6 text-sm font-medium text-[#4A4A48]">
        <li><a href="#about">Sobre</a></li>
        <li><a href="#domains">Atuação</a></li>
        <li><a href="#systems">Sistemas</a></li>
        <li><a href="#alliance">Aliança</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
}
