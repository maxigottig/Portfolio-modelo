
import { ProfileData } from './types';

export const PORTFOLIO_DATA: ProfileData = {
  name: "Maxi Gottig",
  title: "Senior Product Designer & Experience Lead",
  bio: "Especialista en Diseño de Producto y Liderazgo UX/UI con más de 8 años de trayectoria en agencias globales de primer nivel. Enfocado en crear soluciones digitales que equilibran las necesidades del negocio con experiencias de usuario excepcionales.",
  location: "Buenos Aires, Argentina",
  email: "maxigottig1985@gmail.com",
  linkedin: "https://www.linkedin.com/in/maximiliano-gottig-504201129/",
  github: "https://github.com/maxigottig",
  skills: [
    { name: "Product Design", level: 98 },
    { name: "UX Strategy", level: 95 },
    { name: "Design Systems", level: 92 },
    { name: "Leadership", level: 90 },
    { name: "Figma & Prototyping", level: 96 },
    { name: "UI Design", level: 94 }
  ],
  agencies: [
    {
      id: "1",
      name: "VML",
      role: "Lead Product Designer / Experience Lead",
      period: "2021 - Presente",
      description: "Liderazgo de equipos de diseño y definición de estrategias de producto para clientes globales. Supervisión de procesos de UX de punta a punta y mantenimiento de sistemas de diseño escalables.",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=300",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "2",
      name: "Wunderman Thompson",
      role: "Senior Product Designer",
      period: "2020 - 2021",
      description: "Diseño de experiencias digitales complejas para marcas de consumo masivo y servicios financieros. Foco en la arquitectura de información y flujos de usuario optimizados.",
      logo: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?auto=format&fit=crop&q=80&w=300",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "3",
      name: "R/GA",
      role: "Senior UX Designer",
      period: "2018 - 2020",
      description: "Colaboración en proyectos de innovación para clientes como Nike y Google. Creación de prototipos de alta fidelidad y ejecución de pruebas de usabilidad.",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=300",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "4",
      name: "Accenture Song",
      role: "Experience Designer",
      period: "2016 - 2018",
      description: "Consultoría de diseño centrada en el usuario. Desarrollo de interfaces para aplicaciones empresariales y transformación digital de servicios públicos.",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=300",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
    }
  ],
  projects: [
    {
      id: "p1",
      title: "Global Commerce Transformation",
      category: "Product Design",
      imageUrl: "https://picsum.photos/id/20/800/600"
    },
    {
      id: "p2",
      title: "Banking Experience Redesign",
      category: "UX/UI Strategy",
      imageUrl: "https://picsum.photos/id/48/800/600"
    },
    {
      id: "p3",
      title: "Automotive Design System",
      category: "Design Systems",
      imageUrl: "https://picsum.photos/id/60/800/600"
    }
  ]
};
