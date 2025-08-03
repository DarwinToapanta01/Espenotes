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

const BTN_SUBMIT = document.querySelector("#btn-post-submit");
const TITLE_INPUT = document.querySelector("#title");
const DESCRIPTION_INPUT = document.querySelector("#description");
 
// Cargar notas al iniciar
window.addEventListener("load", () => {
    // Código existente...
    loadNotes(); // ← cargar notas existentes
});

const saveNote = (title, description) => {
    const note = { title, description, date: new Date().toLocaleString() };
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    addNoteToUI(note);
};

const addNoteToUI = (note) => {
    const notesContainer = document.createElement("div");
    notesContainer.className = "mdl-card mdl-shadow--2dp";
    notesContainer.style.margin = "10px";
    notesContainer.innerHTML = `
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">${note.title}</h2>
        </div>
        <div class="mdl-card__supporting-text">
            ${note.description}
        </div>
        <div class="mdl-card__actions mdl-card--border">
            <small>${note.date}</small>
        </div>
    `;
    document.querySelector(".page-content").appendChild(notesContainer);
};

const loadNotes = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach(addNoteToUI);
};

BTN_SUBMIT.addEventListener("click", (e) => {
    e.preventDefault();
    const title = TITLE_INPUT.value.trim();
    const description = DESCRIPTION_INPUT.value.trim();
    if (title && description) {
        saveNote(title, description);
        hidepostmodal();
        TITLE_INPUT.value = "";
        DESCRIPTION_INPUT.value = "";
    }
});
