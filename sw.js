console.log("Hola mundo");
self.addEventListener("install", (event) => {
    console.log("Service Worker instalado");
})

self.addEventListener("activate", (event) => {
    console.log("Service Worker activado");
})

self.addEventListener("fetch", (event) => {
    console.log("Service Worker recibiendo una solicitud");
})