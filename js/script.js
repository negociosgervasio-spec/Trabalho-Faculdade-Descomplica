// Seleciona o botão que abre/fecha o menu (hamburger/toggler)
const toggler = document.querySelector(".btn-toggler");

// Seleciona o menu de navegação
const menu = document.querySelector(".navbar-menu");

// Seleciona o elemento <header>
const header = document.querySelector("header");

// Adiciona um evento de clique ao botão toggler
toggler.addEventListener("click", () => {
    // Alterna a classe "active" no menu (abre/fecha)
    menu.classList.toggle("active");

    // Troca o ícone do botão: "X" se o menu estiver ativo, "≡" se não estiver
    toggler.innerHTML = menu.classList.contains("active")
        ? "<i class='fa fa-times'></i>"
        : "<i class='fa fa-bars'></i>";

    // Se o menu estiver ativo, aplica animação de entrada e remove sombra do header
    if (menu.classList.contains("active")) {
        menu.classList.add("slide-in-top");
        header.classList.remove("shadow-sm");
    } else {
        // Se o menu for fechado, aplica animação de saída e adiciona sombra ao header
        menu.classList.add("slide-in-bottom");
        header.classList.add("shadow-sm");
    }
});

// Seleciona todos os botões que possuem o atributo "data-card"
document.querySelectorAll("[data-card]").forEach(button => {
    // Adiciona evento de clique em cada botão
    button.addEventListener("click", () => {
        // Pega o ID do card associado ao botão
        const cardId = button.getAttribute("data-card");
        const card = document.getElementById(cardId);
        let expanded = false;

        if (card) {
            // Alterna a classe "expanded" no card (abre/fecha detalhes)
            expanded = card.classList.toggle("expanded");

            // Atualiza o texto do botão conforme o estado do card
            button.innerText = card.classList.contains("expanded")
                ? "Ver menos"
                : "Saber mais...";
        }
    });
});

// Cria um observador para detectar quando elementos entram na tela (scroll)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // Se o elemento estiver visível na viewport
        if (entry.isIntersecting) {
            // Torna o elemento visível e aplica animação de entrada
            entry.target.style = "opacity: 1";
            entry.target.classList.add("slide-in-bottom");
        }
    });
}, { threshold: .3 }); // threshold = 0.3 → ativa quando 30% do elemento aparece

// Seleciona todos os parágrafos da página
const paragraphs = document.querySelectorAll("p");

// Observa cada parágrafo para aplicar animação quando entrar na tela
paragraphs.forEach(p => observer.observe(p));
