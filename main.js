document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const spans = menuToggle.querySelectorAll("span");

    // Alterna o menu ao clicar no botão
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");

        // Animação do botão hambúrguer
        if (navLinks.classList.contains("open")) {
            spans[0].style.transform = "rotate(45deg) translateY(8px)";
            spans[1].style.opacity = "0";
            spans[2].style.transform = "rotate(-45deg) translateY(-8px)";
        } else {
            spans[0].style.transform = "rotate(0) translateY(0)";
            spans[1].style.opacity = "1";
            spans[2].style.transform = "rotate(0) translateY(0)";
        }
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            spans[0].style.transform = "rotate(0) translateY(0)";
            spans[1].style.opacity = "1";
            spans[2].style.transform = "rotate(0) translateY(0)";
        });
    });
});
// FINALLLLLLLL DE DEIXAR RESSPONSIVO PARA CELULAR


















// PRIMEIRA SECTION 
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("#apresentacao, #objetivos");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
});
// FINAL DA SEGUNDA SECTION
















document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector("#objetivos");
    const listItems = section.querySelectorAll("ul li");
    const image = section.querySelector(".image-container img");
    const title = section.querySelector("h2");

    // Adiciona animação de entrada para a seção
    const animateSection = () => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        setTimeout(() => {
            section.style.transition = "all 1s ease-out";
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, 200);
    };

    // Destaque animado nos itens da lista
    listItems.forEach((item, index) => {
        item.style.opacity = "0";
        setTimeout(() => {
            item.style.transition = `all 0.5s ease-out ${index * 0.2}s`;
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
        }, 300);
    });

    // Adiciona um efeito de brilho dourado no título ao carregar
    const addTitleGlow = () => {
        title.style.textShadow = "0px 0px 15px #e0c06a";
        setTimeout(() => {
            title.style.transition = "text-shadow 1.5s ease-in-out";
            title.style.textShadow = "0px 2px 4px rgba(224, 192, 106, 0.8)";
        }, 1500);
    };

    // Efeito ao passar o mouse na imagem
    image.addEventListener("mouseenter", () => {
        image.style.filter = "brightness(1.2)";
        image.style.boxShadow = "0 0 20px rgba(224, 192, 106, 0.8)";
    });

    image.addEventListener("mouseleave", () => {
        image.style.filter = "brightness(1)";
        image.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
    });

    // Inicializa as animações na seção
    animateSection();
    addTitleGlow();
});











document.addEventListener("DOMContentLoaded", () => {
    const beneficiosSection = document.querySelector("#beneficios");
    const listItems = beneficiosSection.querySelectorAll("li");
    const image = beneficiosSection.querySelector(".image-container img");

    // Animação de fade-in na seção
    const fadeInOnScroll = () => {
        const sectionPosition = beneficiosSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (sectionPosition < screenHeight - 100) {
            beneficiosSection.classList.add("fade-in");
            window.removeEventListener("scroll", fadeInOnScroll);
        }
    };

    window.addEventListener("scroll", fadeInOnScroll);

    // Destaque animado nos itens da lista
    listItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        setTimeout(() => {
            item.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, 300);
    });

    // Efeito de "pulsar" nos itens da lista ao passar o mouse
    listItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.1)";
            setTimeout(() => {
                item.style.transform = "scale(1.05)";
            }, 200);
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });

    // Efeito especial na imagem ao passar o mouse
    image.addEventListener("mouseenter", () => {
        image.style.filter = "brightness(1.2)";
        image.style.boxShadow = "0 0 30px rgba(224, 192, 106, 0.8)";
    });

    image.addEventListener("mouseleave", () => {
        image.style.filter = "brightness(1)";
        image.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
    });
});










// corresel de imagens categorias sobre nos 
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    let currentIndex = 0;

    // Função para atualizar o slide ativo
    const updateSlides = () => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    // Evento do botão "Próximo"
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
    });

    // Evento do botão "Anterior"
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlides();
    });

    // Ajuste automático ao redimensionar a janela
    window.addEventListener('resize', updateSlides);

    // Navegação automática
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
    }, 5000);
});

// FINALLLLLLL








// PRIMEIRA SECTION DA SOBRE NOS DOS PROFS 
document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('#sobre-nos');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    section.classList.add('fade-in');
                }
            });
        },
        { threshold: 0.3 }
    );
    observer.observe(section);
    document.addEventListener('DOMContentLoaded', () => {
        const section = document.querySelector('#sobre-nos');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        section.classList.add('appear');
                    }
                });
            },
            { threshold: 0.3 }
        );
        observer.observe(section);
    });
    
    // Animação hover para a galeria
    const galleryImages = document.querySelectorAll('.demos-gallery img');
    galleryImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transition = 'transform 0.5s ease, filter 0.5s ease';
            image.style.transform = 'scale(1.1)';
        });

        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });
});





// FINALLLLLL


// ONDE TREINAMOSSSS
document.addEventListener('DOMContentLoaded', () => {
    const locais = document.querySelectorAll('.local');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        },
        { threshold: 0.3 }
    );

    locais.forEach(local => {
        observer.observe(local);
    });
});

const botaoMapa = document.querySelectorAll('.btn-mapa');

botaoMapa.forEach(botao => {
    botao.addEventListener('click', () => {
        botao.style.transform = 'scale(0.95)';
        setTimeout(() => {
            botao.style.transform = 'scale(1)';
        }, 200);
    });
});


const imagens = document.querySelectorAll('.mapa-imagem');

imagens.forEach(imagem => {
    imagem.addEventListener('click', () => {
        imagem.style.transition = 'transform 0.5s ease';
        imagem.style.transform = 'scale(1.2)';
        setTimeout(() => {
            imagem.style.transform = 'scale(1)';
        }, 500);
    });
});
// finallll


// botao zip zop
document.addEventListener('DOMContentLoaded', () => {
    const whatsappButton = document.querySelector('.whatsapp-button');

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                whatsappButton.style.opacity = '1';
                whatsappButton.style.transform = 'translateY(0)';
            }
        },
        { threshold: 0.1 }
    );

    observer.observe(document.body);
});



// final
// primeira section conquistas
document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('#destaque-conquistas');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                target.querySelectorAll('.fade-in-text').forEach((el, index) => {
                    el.style.animationDelay = `${index * 0.5}s`;
                    el.classList.add('visible');
                });
            }
        });
    }, { threshold: 0.5 });

    observer.observe(target);
});




// final 

// segunda section

document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('#oportunidades-conquistas');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                section.querySelectorAll('.fade-in-text').forEach((el, index) => {
                    el.style.animationDelay = `${index * 0.5}s`;
                    el.classList.add('visible');
                });
            }
        });
    }, { threshold: 0.5 });

    observer.observe(section);
});




























// SECTION 2 e 1 
document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('#destaque-conquistas');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                section.querySelectorAll('.fade-in-text').forEach((el, index) => {
                    el.style.animationDelay = `${index * 0.5}s`;
                    el.classList.add('visible');
                });
            }
        });
    }, { threshold: 0.5 });

    observer.observe(section);
});




document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('#destaques-ano');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                section.querySelectorAll('h2, p, li').forEach((el, index) => {
                    el.style.animationDelay = `${index * 0.3}s`;
                    el.classList.add('visible');
                });
            }
        });
    }, { threshold: 0.5 });

    observer.observe(section);
});

// final










// JS DA SECTION PRECOS 

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.preco-item');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
});

// Adicionar estilo para itens visíveis
const style = document.createElement('style');
style.textContent = `
    .preco-item.visible {
        animation: slideInUp 0.8s ease forwards;
    }
`;
document.head.appendChild(style);









// Adiciona animação de clique
document.querySelectorAll('.social-btn122').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'), 300);
    });
});



























// final

// FOTERRR
document.addEventListener('DOMContentLoaded', () => {
    // Atualizar automaticamente o ano no footer
    const yearElement = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});
// Define o ano atual no footer
document.getElementById("current-year").textContent = new Date().getFullYear();






