//DECLARACION DE VARIABLES GLOBALES
let MAIN;
let MODAL_POST;
let BTN_UPLOAD_POST;
let BTN_CLOSE_POST;

//FUNCIONES
const showpostmodal = () => {
    MAIN.style.display = "none";
    MODAL_POST.style.display = "block";
    setTimeout(() => {
        MODAL_POST.style.transform = "translateY(0)";
    }, 1);
};

const hidepostmodal = () => {
    MODAL_POST.style.transform = "translateY(100vh)";
    setTimeout(() => {
        MODAL_POST.style.display = "none";
        MAIN.style.display = "block";
    }, 300);
};

//CUANDO SE CARGA EL DOM
window.addEventListener("load", () => {
    MAIN = document.querySelector("#main");
    MODAL_POST = document.querySelector("#modal-post-section");

    // ✅ Apuntar correctamente al botón con el ícono "+"
    BTN_UPLOAD_POST = document.querySelector("#btn-upload-post");
    BTN_UPLOAD_POST.addEventListener("click", showpostmodal);

    // ✅ Cerrar el modal al hacer clic en "Cancelar"
    BTN_CLOSE_POST = document.querySelector("#btn-post-cancel");
    BTN_CLOSE_POST.addEventListener("click", hidepostmodal);

    if (navigator.serviceWorker) {
        const res = navigator.serviceWorker.register("../../sw.js");
        if (res) {
            console.log("Service Worker registrado correctamente");
        }
    }
});