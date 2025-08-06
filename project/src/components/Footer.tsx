import indigo_space_fleet from '../assets/indigo_space_fleet_logo.png'

export function Footer() {
  return (
    <footer id="footer" className="bg-[#4A4A48] text-white py-8 px-6 text-center">
      {/* Imagem com link */}
      <h2 className='font-exo-2 text-lg'>Junte-se a nossa frota!</h2>
      <a href="https://inara.cz/elite/squadron/3982/" target="_blank" rel="noopener noreferrer">
        <img
          src={indigo_space_fleet}
          alt="Indigo Space Fleet"
          className="mx-auto mb-4 h-16 w-auto hover:opacity-80 transition-opacity duration-300 cursor-pointer"
        />
      </a>

      <p><sup>©</sup> 3334 Indigo Technologies</p>
      <p className="text-sm text-[#D8DAD3] mt-2">Website fictício</p>
      <p className="text-sm text-[#D8DAD3] mt-2"> <sup>©</sup>Elite: Dangerous - Frontier Developments </p>
    </footer>
  );
}
