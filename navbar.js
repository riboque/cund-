

  function applyNavStyleOnScroll(navElement,ilElement, h1Element, haElement ) {
   
    
    
  /**
   * Aplica estilos à barra de navegação quando ela se move para baixo.
   *@param ilElement
   * @param navElement: Elemento da barra de navegação (objeto HTML).
   */
  if (window.scrollY > 30) {
    navElement.style.background = "rgba(255, 255, 255, 0.8)";
      navElement.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)"; // Adiciona sombra

     
  } else {
      // Reseta os estilos caso a barra volte ao topo
      navElement.style.background = "";
      navElement.style.boxShadow = "";

  }
}

  // Seleciona o elemento da barra de navegação
  const navElement = document.querySelector("nav");

  // Adiciona o evento de rolagem para aplicar os estilos
  window.addEventListener("scroll", () => applyNavStyleOnScroll(navElement));
