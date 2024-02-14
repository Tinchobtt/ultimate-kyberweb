let docTitle = document.title
window.addEventListener("blur", () => {
    document.title = "¡Vuelve! Te extrañamos 😢";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})