# 🚀 Jose Panza — Senior Backend Engineer & Systems Architect Portfolio

Este repositorio contiene el código fuente de mi sitio web de portafolio profesional y técnico. Diseñado bajo un enfoque **cyber-professional minimalista**, con arquitectura modular de componentes, alto rendimiento visual y un conmutador de idioma en tiempo real (EN/ES) integrado para entornos globales.

🌐 **Demo en vivo:** [https://josepanz.github.io/TU-REPOSITORIO/](https://josepanz.github.io/portfolio/)

---

## 🛠️ Stack Tecnológico & Arquitectura Frontend

La aplicación fue construida desde cero siguiendo las mejores prácticas del desarrollo frontend moderno:

* **Core:** React 18 + Vite (Ecosistema ultra-rápido de empaquetado y HMR).
* **Estilos:** TailwindCSS (Utility-first CSS orientado a diseño responsivo nativo y limpio).
* **Diseño Visual:** Estética *Dark Cyber-Professional* con efectos de Glassmorphism (desenfoque de cristal), degradados premium y consistencia semántica.
* **Internacionalización (i18n):** Arquitectura basada en diccionarios estáticos controlados mediante hooks de estado de React para conmutación de idioma (EN/ES) instantánea y sin parpadeos de renderizado.
* **Buenas Prácticas:**
    * Estructuras de datos e índices centralizados para evitar duplicación de JSX.
    * Uso estricto de HTML semántico para accesibilidad (SEO & Screen Readers).
    * Optimización de rutas relativas mediante variables de entorno de Vite (`import.meta.env.BASE_URL`) para asegurar resiliencia en sub-rutas de servidores estáticos.

---

## 📂 Estructura del Proyecto

```text
Portfolio/
├── public/                 # Recursos estáticos globales (No compilados)
│   ├── Jose_Panza_CV.pdf   # Currículum descargable para reclutadores
│   └── profile.jpg         # Fotografía de perfil del Ingeniero
├── src/
│   ├── assets/             # Recursos estáticos importables por módulos
│   ├── components/         # Componentes atómicos y reutilizables
│   ├── App.jsx             # Componente Core y punto de montaje principal
│   ├── index.css           # Directivas globales de TailwindCSS
│   └── main.jsx            # Bootstrapper de la aplicación React
├── .gitignore              # Exclusión estricta de node_modules y entornos locales
├── index.html              # Punto de entrada HTML5 con optimización de fuentes
├── package.json            # Scripts de automatización y manifiesto de dependencias
├── tailwind.config.js      # Configuración de extensiones y paleta de colores del diseño
└── vite.config.js          # Inyección de alias de compilación y base path para GitHub Pages