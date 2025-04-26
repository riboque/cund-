def apply_nav_style_on_scroll(nav_element):
    """
    Aplica estilos à barra de navegação quando ela se move para baixo.

    :param nav_element: Elemento da barra de navegação (objeto HTML ou similar).
    """
    # Verifica a posição de rolagem
    if nav_element.scrollTop > 0:
        nav_element.style.position = "fixed"  # Torna o nav fixo
        nav_element.style.background = "#fff"
        nav_element.style.width = "1400px"
        nav_element.style.borderRadius = "50px"
    else:
        # Reseta os estilos caso a barra volte ao topo
        nav_element.style.position = ""
        nav_element.style.background = ""
        nav_element.style.width = ""
        nav_element.style.borderRadius = ""