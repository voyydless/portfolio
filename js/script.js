// Toggle dark/light mode and store it
function toggleTheme() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    
    if (element.classList.contains("dark-mode")) {
        localStorage.setItem("theme","dark");
    } else {
        localStorage.setItem("theme","light")
    }
}

// Loads previously toggled theme upon going to new page
function loadTheme() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode")
    }
}

document.addEventListener("DOMContentLoaded", loadTheme);

// Toggle dropdown for tech stack
document.querySelectorAll('.dropdown-toggle').forEach(btn => {
    const parent = btn.closest(".project") || btn.closest(".about");
    if (parent) {
      btn.addEventListener("click", function() {
        parent.classList.toggle("open");
  });
    }
});

// Language translations
let language = {
    ptbr: {
        projects: "Projetos",
        aboutme: "Sobre Mim",
        catchline: "Eleve seu negócio digital a outro nível <strong>com um Front-end de qualidade!</strong>",
        welcome: "Olá! Sou Void, desenvolvedor Front-end com especialidade em React, HTML e CSS. Ajudo pequenos negócios e designers a colocarem em prática boas ideias. Vamos conversar?",
        socials: "Acesse minhas redes:",
        about_h1: "Sobre Mim",
        about_text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        about_education: "Formações",
        education_uni: "Universidade do Vale do Rio dos Sinos (Unisinos)",
        education_uni_course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        education_course_date: "Agosto 2024 - Presente",
        education_alura: "AOVS Sistemas de informática LTDA (Caelum / Alura)",
        education_alura_description: "Um programa de treinamento prático em Engenharia de Software, Bancos de Dados e DevOps. Concluí mais de 16 cursos abordando tecnologias Front-end, lógica de programação, JavaScript, Python, Java e Git.",
        education_alura_date: "Setembro 2024 - Presente",
        project_title_guido: "Guido Café & Co.",
        project_description_guido01: "Um site feito em React inspirado no Guido Café & Co., uma cafeteria localizada em Canoas - RS, Brasil, nomeada em homenagem ao cachorro do dono.",
        project_description_guido02: "Possui uma página inicial responsiva, uma seção 'sobre' com a história de origem da cafeteria e informações sobre o café utilizado, um cardápio interativo com abas, informações de localização com incorporação do Google Maps e links para as redes sociais.",
        project_title_am: "Portfólio AM Studio",
        project_description_am: 'Um site de portfólio para um ilustrador fictício chamado Alex Mosely, criado com base no arquivo Figma fornecido durante o curso <a href="https://www.superhi.com/catalog/plan-design-and-code-your-first-website" target="_blank">Planeje, Desenhe + Codifique Seu Primeiro Site</a> da SuperHi.',
        project_this_site_title: "E claro, <strong>este site!</strong>",
        project_this_site_description: 'Você pode conferir o código de tudo isso e mais no meu <a href="https://github.com/voyydless" target="_blank">Github</a> !'
    },
    eng: {
        projects: "Projects",
        aboutme: "About",
        catchline: "Take your digital business to another level <strong>with quality Front-end!</strong>",
        welcome: "Hi! I'm Void, a Front-end developer specializing in React, HTML and CSS. I help small businesses and designers put good ideas into practice. Lets talk?",
        socials: "Check out my socials:",
        about_h1: "About Me",
        about_text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        about_education: "Education",
        education_uni: "Universidade do Vale do Rio dos Sinos (Unisinos)",
        education_uni_course: "Associate's degree in System Analysis and Development",
        education_course_date: "August 2024 - Present",
        education_alura: "AOVS Sistemas de informática LTDA (Caelum / Alura)",
        education_alura_description: "A hands-on training program in Software Engineering, Databases and DevOps. I've completed over 16 courses covering Front-end technologies, programming logic, JavaScript, Python, Java and Git.",
        education_alura_date: "September 2024 - Present",
        project_title_guido: "Guido Café & Co.",
        project_description_guido01: "A React-based website inspired by Guido Café & Co., a coffee shop located in Canoas - RS, Brazil, named after the owner's dog.",
        project_description_guido02: "Features a responsive home page, an about section with the café's origin story & information about the coffee they use, an interactive menu with tabs, location information with embedded Google Maps and links to their social media.",
        project_title_am: "AM Studio Portfolio",
        project_description_am: 'A portfolio website for a fictional illustrator named Alex Mosely, created based on the Figma file provided during the <a href="https://www.superhi.com/catalog/plan-design-and-code-your-first-website" target="_blank">Plan, Design + Code Your First Website</a> course from SuperHi.',
        project_this_site_title: "And of course, <strong>this very site!</strong>",
        project_this_site_description: 'You can check out the code for everything here and more on my <a href="https://github.com/voyydless" target="_blank">Github</a> !'
    }
};

// Define language via window hash
function setLanguage() {
    const elements = {
        projects: document.querySelector("#projects"),
        aboutme: document.querySelector("#aboutme"),
        catchline: document.querySelector("#catchline"),
        welcome: document.querySelector("#welcome"),
        socials: document.querySelector("#socials"),
        about_h1: document.querySelector("#about_h1"),
        about_text: document.querySelector("#about_text"),
        about_education: document.querySelector("#about_education"),
        education_uni: document.querySelector("#education_uni"),
        education_uni_course: document.querySelector("#education_uni_course"),
        education_course_date: document.querySelector("#education_course_date"),
        education_alura: document.querySelector("#education_alura"),
        education_alura_description: document.querySelector("#education_alura_description"),
        education_alura_date: document.querySelector("#education_alura_date"),
        project_title_guido: document.querySelector("#project_title_guido"),
        project_description_guido01: document.querySelector("#project_description_guido01"),
        project_description_guido02: document.querySelector("#project_description_guido02"),
        project_title_am: document.querySelector("#project_title_am"),
        project_description_am: document.querySelector("#project_description_am"),
        project_this_site_title: document.querySelector("#project_this_site_title"),
        project_this_site_description: document.querySelector("#project_this_site_description")
    };

    const currentLanguage = window.location.hash === "#eng" ? "eng" : "ptbr";

    // Store language preference
    localStorage.setItem("language", currentLanguage);

    // Update each element if it exists
    Object.keys(elements).forEach(key => {
        if (elements[key]) {
            elements[key].innerHTML = language[currentLanguage][key];
        }
    });
}

// Load stored language
function loadLanguage() {
    const storedLanguage = localStorage.getItem("language") || "ptbr";
    window.location.hash = storedLanguage;
    setLanguage();
}


// Define language reload onClick illiteration
window.addEventListener('hashchange', setLanguage);
document.addEventListener('DOMContentLoaded', loadLanguage);

// Change image shown in about section based on toggle via mouse click
const img = document.getElementById("about_image_normal");

let toggle = false;
img.addEventListener("mousedown", function(){
    toggle = true;
    img.src = "../assets/imagem_rato_hover.png";
})

img.addEventListener("mouseup", function(){
    toggle = false;
    img.src = "../assets/imagem_rato.png";
})