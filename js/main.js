// ============================================
// MAIN.JS - Multiservicios Sagunto
// Menú móvil hamburguesa
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuBtn && navMenu) {

        // Abrir/cerrar menú al pulsar el botón
        mobileMenuBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            // Cambiar icono hamburguesa / X
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Cerrar menú al pulsar un enlace
        navMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });

        // Cerrar menú al pulsar fuera
        document.addEventListener('click', function (e) {
            if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    }

});
