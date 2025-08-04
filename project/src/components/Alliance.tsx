// export function Alliance() {
//   return (
//     <section id="alliance" className="py-16 bg-[#009A0A] text-white text-center px-6">
//       <h3 className="text-3xl font-semibold mb-4">Parte do Powerplay de Edmund Mahon</h3>
//       <p className="max-w-2xl mx-auto text-lg">
//         A Indigo Technologies tem orgulho de integrar o poder da Aliança sob a liderança de Edmund Mahon, oferecendo suporte estratégico, inovação e defesa em prol da soberania galáctica.
//       </p>
//     </section>
//   );
// }
import alliance_logo_3d from '../assets/alliance_logo_3d.png'
import edmund_mahon from '../assets/edmund_mahon.png'


// export function Alliance() {
//   return (
//     <section
//       id="alliance"
//       className="py-16 bg-alliance-green text-white px-6"
//     >
//       <div className="flex items-center justify-center gap-8 max-w-5xl mx-auto">
//         {/* Imagem Esquerda */}
//         <img
//           src={alliance_logo_3d}
//           alt="Logo esquerda"
//           className="w-auto h-40 object-contain"
//         />

//         {/* Texto Central */}
//         <div className="text-center max-w-2xl">
//           <h3 className="text-3xl font-semibold mb-4">
//             <span className='text-white font-semibold font-exo-2'>Aliança de Sistemas Independentes</span>
//           </h3>
//           <p className="text-lg">
//             A Indigo Technologies tem orgulho de integrar o poder da Aliança sob
//             a liderança de Edmund Mahon, oferecendo suporte estratégico,
//             inovação e defesa em prol da soberania galáctica.
//           </p>
//         </div>

//         {/* Imagem Direita */}
//         <img
//           src={edmund_mahon}
//           alt="Logo direita"
//           className="w-auto h-60 object-contain border-2 border-medium-grey rounded-lg"
//         />
//       </div>
//     </section>
//   );
// }
export function Alliance() {
  return (
    <section
      id="alliance"
      className="py-16 bg-alliance-green text-white px-6"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto text-center md:text-left">
        {/* Imagem Esquerda */}
        <img
          src={alliance_logo_3d}
          alt="Logo da Aliança"
          className="w-24 h-24 md:h-40 md:w-auto object-contain"
        />

        {/* Texto Central */}
        <div className="max-w-2xl">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-exo-2">
            Aliança de Sistemas Independentes
          </h3>
          <p className="text-base md:text-lg">
            A Indigo Technologies tem orgulho de integrar o poder da Aliança sob
            a liderança de Edmund Mahon, oferecendo suporte estratégico,
            inovação e defesa em prol da soberania galáctica.
          </p>
        </div>

        {/* Imagem Direita */}
        <img
          src={edmund_mahon}
          alt="Edmund Mahon"
          className="w-32 h-40 md:h-60 md:w-auto object-contain border-2 border-medium-grey rounded-lg"
        />
      </div>
    </section>
  );
}
