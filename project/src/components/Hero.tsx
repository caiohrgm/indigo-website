export function Hero() {
  return (
    <section className="h-[90vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#6666FF] to-[#009A0A] text-white px-4">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">Tecnologia que conquista galáxias</h2>
      <p className="text-lg md:text-xl max-w-xl">Indigo Technologies é pioneira em colonizar novos sitemas, líder em  mineração e encontra-se na vanguarda da exploração e pesquisas espaciais. Uma corporação forte, que apoia os ideais da Aliança.</p>
      <a href="#about" className="mt-8 px-6 py-3 bg-white text-[#6666FF] rounded-xl font-semibold shadow-md hover:bg-[#F1F2EB] transition-all">Saiba Mais</a>
    </section>
  );
}
