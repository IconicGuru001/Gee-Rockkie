document.addEventListener('DOMContentLoaded', () => {

    // --- MENÚ HAMBURGUESA ---
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú móvil al hacer click en cualquier link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });


    // --- BOTÓN VOLVER ARRIBA (BACK TO TOP) ---
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // --- VALIDACIÓN DE FORMULARIO ---
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Detener el envío nativo para validar
        
        let isValid = true;

        // Limpiar estados previos
        nameError.style.display = 'none';
        emailError.style.display = 'none';
        messageError.style.display = 'none';
        successMessage.style.display = 'none';

        // Validar Nombre
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'El nombre es obligatorio.';
            nameError.style.display = 'block';
            isValid = false;
        }

        // Validar Email (Debe contener @)
        if (!emailInput.value.includes('@')) {
            emailError.textContent = 'Por favor, introduce un correo electrónico válido (debe contener @).';
            emailError.style.display = 'block';
            isValid = false;
        }

        // Validar Mensaje
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'El mensaje no puede estar vacío.';
            messageError.style.display = 'block';
            isValid = false;
        }

        // Si todo es correcto, mostrar éxito
        if (isValid) {
            successMessage.style.display = 'block';
            contactForm.reset(); // Limpiar inputs del formulario
        }
    });
});
