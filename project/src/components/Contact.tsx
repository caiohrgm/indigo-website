export function Contact() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfQ-g4djXcGY8ZQFzNhp25qxRnnTXfHEMq6c4UoeagG9kiB2A/viewform?usp=dialog";

  return (
    <section id="contact" className="bg-white text-black py-8 px-6 text-center max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Junte-se à Indigo Technologies</h2>
      
      <p className="mb-6 text-lg text-center">
        Para se afiliar à nossa organização, basta preencher o <span className="font-semibold">Formulário de Aplicação</span> seguindo as instruções no link abaixo.</p>
        <p> Após o preenchimento deste formulário, procure pelo nosso esquadrão dentro do jogo: <span className="font-semibold">Indigo Space Fleet</span>, pela tag <span className="font-semibold">IDSF</span> e solicite acesso ao esquadrão. </p>

        <br></br>

        <p> Caso seu formulário esteja de acordo com os requisitos, sua liberação será feita imediatamente. </p>
        
        <br></br>

        <p>Fique a postos e bons vôos, Comandante!</p>

        <br></br>
      <a
        href={googleFormUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-indigo-blue text-white font-semibold py-2 px-6 rounded hover:bg-green-500 transition"
      >
        Acessar Formulário de Aplicação
      </a>
    </section>
  );
}


// VERSÃO DE FORMULARIO ------
// import { useState } from "react";
// export function Contact() {
//   const [nomePessoal, setNomePessoal] = useState("");
//   const [nomeComandante, setNomeComandante] = useState("");
//   const [imagemAfil, setImagemAfil] = useState<File | null>(null);
//   const [whatsapp, setWhatsapp] = useState("");
//   const [preferencias, setPreferencias] = useState<string[]>([]);

//   const opcoesPreferencias = [
//     "Mineração",
//     "Comércio",
//     "Exploração",
//     "Pesquisa exobiológica",
//     "Colonização",
//     "Guerras Galácticas",
//     "Policiamento de sistemas",
//   ];

//   function togglePreferencia(preferencia: string) {
//     if (preferencias.includes(preferencia)) {
//       setPreferencias(preferencias.filter((p) => p !== preferencia));
//     } else {
//       setPreferencias([...preferencias, preferencia]);
//     }
//   }

//   const handleImagemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setImagemAfil(e.target.files[0]);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Aqui você pode fazer o que quiser com os dados, 
//     // ex: montar URL para Google Forms, mostrar alerta, etc.
//     console.log({
//       nomePessoal,
//       nomeComandante,
//       imagemAfil,
//       whatsapp,
//       preferencias,
//     });
//     alert("Formulário enviado! (Aqui você deve implementar a ação desejada)");
//   };

//   return (
//     <section id="contact" className="bg-white text-black py-8 px-6 text-center max-w-lg mx-auto">
//       <h2 className="text-2xl font-semibold mb-6">Contato e Afiliação</h2>
//       <form onSubmit={handleSubmit} className="space-y-6 text-left">
//         {/* Nome Pessoal */}
//         <label className="block">
//           <span className="font-medium">Nome Pessoal:</span>
//           <input
//             type="text"
//             className="mt-1 block w-full rounded border border-gray-300 p-2"
//             value={nomePessoal}
//             onChange={(e) => setNomePessoal(e.target.value)}
//             required
//           />
//         </label>

//         {/* Nome do Comandante */}
//         <label className="block">
//           <span className="font-medium">Nome do Comandante:</span>
//           <input
//             type="text"
//             className="mt-1 block w-full rounded border border-gray-300 p-2"
//             value={nomeComandante}
//             onChange={(e) => setNomeComandante(e.target.value)}
//             required
//           />
//         </label>

//         {/* Imagem de afiliação */}
//         <label className="block">
//           <span className="font-medium">Imagem de afiliação à Indigo Technologies:</span>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImagemChange}
//             className="mt-1 block w-full"
//           />
//           {imagemAfil && <p className="mt-1 text-sm text-gray-600">Arquivo selecionado: {imagemAfil.name}</p>}
//         </label>

//         {/* Contato do WhatsApp */}
//         <label className="block">
//           <span className="font-medium">Contato do WhatsApp:</span>
//           <input
//             type="tel"
//             placeholder="+55 (xx) xxxxx-xxxx"
//             className="mt-1 block w-full rounded border border-gray-300 p-2"
//             value={whatsapp}
//             onChange={(e) => setWhatsapp(e.target.value)}
//             required
//           />
//         </label>

//         {/* Preferências de jogo */}
//         <fieldset>
//           <legend className="font-medium mb-2">Preferências de jogo:</legend>
//           <div className="grid grid-cols-2 gap-2">
//             {opcoesPreferencias.map((opcao) => (
//               <label key={opcao} className="inline-flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   checked={preferencias.includes(opcao)}
//                   onChange={() => togglePreferencia(opcao)}
//                   className="form-checkbox h-5 w-5 text-teal-600"
//                 />
//                 <span>{opcao}</span>
//               </label>
//             ))}
//           </div>
//         </fieldset>

//         <button
//           type="submit"
//           className="w-full bg-teal-600 text-white font-semibold py-2 rounded hover:bg-teal-700 transition"
//         >
//           Enviar
//         </button>
//       </form>
//     </section>
//   );
// }
