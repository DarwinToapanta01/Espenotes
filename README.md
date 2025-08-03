# 📝 Tarea 1: Desarrollo de una PWA Básica con Elementos de Material Design

Espenotes es una aplicación web progresiva (PWA) diseñada para tomar, guardar y consultar notas de manera rápida, simple y elegante. Desarrollada como parte de la materia *Programación Integrativa*, la app hace uso de tecnologías modernas como **Material Design Lite (MDL)**, **localStorage**, **manifest.json** y **Service Worker**, permitiendo su funcionamiento incluso sin conexión a internet.

## 🚀 Características principales

- ✅ **Diseño limpio y moderno con Material Design Lite (MDL)**  
  La interfaz ha sido cuidadosamente construida con componentes MDL, ofreciendo una experiencia visual atractiva y profesional.

- ✅ **Funcionalidad completa de toma de notas**  
  Permite añadir, visualizar y persistir notas de forma eficiente mediante `localStorage`. También se manejan casos borde, como evitar guardar notas vacías.

- ✅ **Instalación como aplicación nativa**  
  El archivo `manifest.json` está correctamente configurado con íconos, nombre, descripción y colores de tema, lo que permite instalar la app en el dispositivo como una aplicación nativa.

- ✅ **Soporte sin conexión con Service Worker**  
  Se implementa correctamente la estrategia *Cache First*, cacheando el App Shell para que la app funcione sin conexión. La experiencia offline es fluida y libre de errores.

- ✅ **Código limpio y mantenible**  
  El código está organizado, comentado y sigue buenas prácticas de desarrollo web. La estructura facilita su comprensión y mantenimiento.

## 🎥 Video demostrativo

[🔗 Ver video de demostración](https://drive.google.com/drive/folders/1aI9n6s5HpvtuY1BloQgEWVgdMv-Bo2fL?usp=sharing)  
> Muestra todas las funcionalidades: interfaz MDL, uso de localStorage, instalación desde navegador, funcionamiento offline, y experiencia general del usuario.

## 📁 Estructura del proyecto

``` bash
ESPENOTES/
│
├── src/
│ ├── css/
│ │ └── app.css
│ ├── icons/
│ │ ├── icon-144x144.png
│ │ ├── icon-192x192.png
│ │ ├── icon-256x256.png
│ │ ├── icon-384x384.png
│ │ └── icon-512x512.png
│ ├── img/
│ │ └── images.jpeg
│ ├── js/
│ │ └── app.js
├── index.html
├── package-lock.json
├── package.json
├── manifest.webmanifest.json
├── sw.js
└── README.md
```
## 📦 Tecnologías utilizadas

- HTML5
- CSS3 (con Material Design Lite)
- JavaScript (ES6)
- Web APIs: `localStorage`, `Service Worker`, `Cache API`
- manifest.json (PWA)

## 💡 Cómo usar o instalar

1. Clona el repositorio:
   ```bash
   git clone https://github.com/DarwinToapanta01/Espenotes.git
   ```
2. Abre el archivo index.html en tu navegador o usa una extensión como Live Server (en VS Code) para visualizarlo localmente.
3. Para instalarla como app:
- En dispositivos móviles o navegadores como Chrome, verás la opción “Agregar a la pantalla de inicio”.
- Al instalar, la aplicación funcionará como si fuera nativa.
4. Prueba el modo offline:
- Abre la app una vez con conexión.
- Luego desconéctate de internet y vuelve a abrirla; notarás que sigue funcionando gracias al Service Worker.