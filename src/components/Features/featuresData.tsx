import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
        <path
          opacity="0.5"
        />
      </svg>
    ),
    title: "Sistema de Creación de Historias",
    paragraph:
      "Permite a los usuarios crear historias personalizadas utilizando herramientas intuitivas y sugerencias generadas por IA.",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
        />
      </svg>
    ),
    title: "Sistema de Creación de Personajes",
    paragraph:
      "Ofrece herramientas para diseñar personajes únicos, con la capacidad de sugerir rasgos y características basadas en la historia del juego y las preferencias del usuario.",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
        />
      </svg>
    ),
    title: "Integración de IA para Narrativa Dinámica",
    paragraph:
      "Utiliza IA para generar eventos y misiones de manera dinámica, adaptándose a las decisiones y acciones de los jugadores para ofrecer una experiencia de juego única.",
  },

];
export default featuresData;
