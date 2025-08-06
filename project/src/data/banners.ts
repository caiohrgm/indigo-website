import conquering_galaxies from '../assets/banners/conquering_galaxies.png'
import alliance_powerplay from '../assets/banners/alliance_powerplay.jpg'
import exploration from '../assets/banners/exploration.png'


export const banners = [
  {
    id: 1,
    title: "Tecnologia que conquista galáxias",
    description:
      "A Indigo Technologies lidera a colonização interestelar, unindo ciência, mineração avançada e poder estratégico para expandir os limites da civilização humana.",
    image: conquering_galaxies,
    button: {
      text: "Saiba Mais",
      href: "#about",
    },
    brightness: "brightness-65", // normal
  },
  {
    id: 2,
    title: "Exploração sem limites",
    description:
      "Das bordas da bolha civilizada às regiões mais inóspitas da galáxia, nossa frota opera com precisão, visão e coragem.",
    image: exploration,
    button: {
      text: "Ver Sistemas",
      href: "#systems",
    },
    brightness: "brightness-80", // normal
  },
  {
    id: 3,
    title: "Aliança pela inovação",
    description:
      "Com orgulho, apoiamos os princípios da Aliança, promovendo tecnologia justa, livre e descentralizada. O futuro pertence aos que ousam inovar.",
    image: alliance_powerplay,
    button: {
      text: "Nossa Missão",
      href: "#alliance",
    },
    brightness: "brightness-300", // precisa de mais brilho
  },
];
