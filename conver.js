function applyNavStyleOnScroll(navElement) {
    /**
     * Aplica estilos à barra de navegação quando ela se move para baixo.
     *
     * @param navElement: Elemento da barra de navegação (objeto HTML).
     */
    if (window.scrollY > 0) {
        navElement.style.position = "fixed"; // Torna o nav fixo
        navElement.style.background = "#fff";
        navElement.style.width = "1400px";
        navElement.style.borderRadius = "50px";
    } else {
        // Reseta os estilos caso a barra volte ao topo
        navElement.style.position = "";
        navElement.style.background = "";
        navElement.style.width = "";
        navElement.style.borderRadius = "";
    }
}
