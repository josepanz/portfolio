# 🚀 Jose Panza — Senior Backend Engineer & Systems Architect Portfolio

Este repositorio contiene el código fuente de mi sitio web de portafolio profesional y técnico. Diseñado bajo un enfoque **cyber-professional minimalista**, con arquitectura modular de componentes, alto rendimiento visual y un conmutador de idioma en tiempo real (EN/ES) integrado para entornos globales.

🌐 **Demo en vivo:** [https://josepanz.github.io/portfolio/](https://josepanz.github.io/portfolio/)

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
├── dist/                   # Artefactos de producción minificados (Autogenerado, Ignorado en Git)
├── node_modules/           # Dependencias locales del ecosistema (Ignorado en Git)
├── public/                 # Recursos estáticos globales (Raíz del Servidor)
│   ├── profile.jpg     # Fotografía de perfil del Ingeniero
│   └── Jose_Panza_CV.pdf   # Currículum descargable para Reclutadores / ATSt
├── src/                    # Código Fuente de la Aplicación
│   ├── index.css           # Directivas globales e importación de Tailwind v4
│   ├── JosePanzaPortfolio.jsx # Componente Core (Estructura de Datos, Idioma e Interfaz)
│   ├── main.jsx            # Bootstrapper y punto de montaje en el DOM de React
│   └── setupTests.js       # Configuración global de entorno y matchers de testing
├── .gitignore              # Exclusión estricta de binarios, dependencias y variables
├── index.html              # Punto de entrada HTML5 con optimización SEO y metadata
├── package.json            # Scripts de automatización y manifiesto de dependencias
├── package-lock.json       # Bloqueo determinista de versiones del árbol de Node
└── vite.config.js          # Inyección del compilador de Tailwind v4 y Base Path
```

## 🧠 Core de Ingeniería Inyectado (Matriz de Competencias)
El portafolio expone de manera dinámica el siguiente mapa de capacidades técnicas:

- **Backend Avanzado:** Java (Spring Boot, Spring Framework), Node.js (NestJS, Express), jPOS Framework, Estándar de mensajería financiera ISO-8583, Integraciones criptográficas con HSM (Thales 9000), Python, C# (.NET Core).

- **Bases de Datos & Sistemas Legados:** Gestión y optimización de consultas sobre PostgreSQL, SQL Server, Oracle, MySQL, SQLite y entornos corporativos IBM i (AS400) utilizando DB2.

- **DevOps & Operaciones:** Orquestación de contenedores en entornos productivos con Docker y Kubernetes. Pipelines de Integración y Despliegue Continuo (CI/CD) mediante Jenkins y GitHub Actions. Observabilidad y análisis distribuido con la suite ELK Stack (Elasticsearch, Logstash, Kibana).

- **Arquitectura de Software:** Sistemas distribuidos, microservicios resilientes, Clean Architecture, patrones de diseño orientados a esquemas de Alta Disponibilidad (High Availability) y Liderazgo Técnico (Tech Lead) orientado a la mentoría de equipos.

##⚡ Desarrollo Local & Ejecución del Sistema
Sigue este protocolo para replicar el entorno de ingeniería localmente:

1. Clonar el Repositorio:
```bash
git clone [https://github.com/josepanz/portfolio.git](https://github.com/josepanz/portfolio.git)
cd portfolio
```

2. Instalar Dependencias de Forma Limpia:
```bash
npm install
```

3. Ejecutar Entorno de Desarrollo (con Hot Reload HMR):
```bash
npm run dev
```
_El servidor local se levantará en_ `http://localhost:5173/.`

4. Correr la Suite de Pruebas Automáticas (Modo Watch Activo):
```bash
npm run test
```

## 🚀 Pipeline de Despliegue Continuo Automatizado
El despliegue a la nube de GitHub Pages está completamente automatizado a través de scripts de Node.js:

Para empaquetar y subir los cambios a producción con un solo comando, ejecuta:
```bash
npm run deploy
```

## Mecánica Interna del Flujo:
1. El script dispara un hook predeploy que ejecuta vite build. El compilador analiza el código, aplica tree-shaking para remover código muerto, procesa el CSS de Tailwind v4 y exporta un paquete optimizado en la carpeta /dist.

2. El módulo gh-pages toma el control de la carpeta /dist, genera un commit empaquetado y lo empuja de manera aislada hacia la rama gh-pages en tu repositorio remoto, actualizando la infraestructura en producción de forma transparente.

## 👤 Información del Ingeniero de Sistemas
- **Nombre:** Jose Maria Dejesus Panza Benitez
- **Ubicación:** Limpio, Central, Paraguay
- **Contacto Directo:** josepanza1@gmail.com
- **LinkedIn:** [linkedin.com/in/jose-panza/](https://www.linkedin.com/in/jose-panza/)
- **GitHub:** [github.com/josepanz](https://github.com/josepanz)

_Desarrollado bajo principios de robustez, escalabilidad y Clean Code._