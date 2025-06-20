document.addEventListener('DOMContentLoaded', () => {
    const screenContent = document.getElementById('screen-content');
    const btnA = document.getElementById('btn-a');
    const btnB = document.getElementById('btn-b');

    const sections = [
        {
            id: 'personal',
            title: 'SOBRE MÍ',
            content: `
                <p>Soy Luis Alberto Gómez.</p>
                <p>Ingeniero en Mecatrónica.</p>
                <p>Soy un apasionado por la tecnología y el desarrollo de software. Tengo 8 años de experiencia en el desarrollo de aplicaciones web. Me gusta trabajar en equipo y aprender nuevas tecnologías para mejorar mis habilidades.</p>
            `
        },
        {
            id: 'contacto',
            title: 'CONTACTO',
            content: `
                <p>Email:</p>
                <p>luis.gomez.catalan@gmail.com</p>
                <p>Cel:</p>
                <p>777-265-6318</p>
                <p><a href="https://www.linkedin.com/in/luis-alberto-g%C3%B3mez/" target="_blank">LinkedIn</a></p>
            `
        },
        {
            id: 'experiencia',
            title: 'LOGROS DE TRABAJO',
            content: `
                <h2>Con el cliente BBVA</h2>
                <p>Durante mi tiempo en BBVA, he logrado contribuir a la creación de dos seguros que se integraron al portal de BBVA. Estos seguros son:</p>
                <ul>
                    <li><a href="https://seguros.bbva.mx/index.html#!/seguro-para-cirugias" target="_blank">Seguro para cirugías</a></li>
                    <li><a href="https://seguros.bbva.mx/index.html#!/seguro-para-mascotas" target="_blank">Seguro para mascotas</a></li>
                </ul>
                <p>El seguro para mascotas es especialmente significativo, ya que se implementó por primera vez en México, aunque ya existía en otros países.</p>
            `
        },
        {
            id: 'experiencia',
            title: 'EXPERIENCIA',
            content: `
                <h2>Desarrollador Full-Stack</h2>
                <h2>GoNet</h2>
                <h2>Jul 2017 - Actualidad</h2>
                <p>He trabajado en el desarrollo de software para BBVA utilizando tecnologías como Java, JavaScript, HTML, CSS y bases de datos. He participado en proyectos que requieren tanto el desarrollo del lado del cliente como del servidor.</p>
                <p>Mi experiencia incluye el uso de frameworks como Spring para el desarrollo del backend y la implementación de interfaces de usuario responsivas y accesibles.</p>   
                <p>Además, tengo experiencia en el uso de herramientas de control de versiones como Git y en la gestión de proyectos utilizando Jira.</p>
                <p>He trabajado en equipos ágiles, colaborando estrechamente con diseñadores y otros desarrolladores para crear soluciones efectivas y eficientes.</p>
            `
        },
        {
            id: 'habilidades',
            title: 'SKILLS',
            content: `
                <div style="text-align: center; margin-top: 40px;">
                    <img src="java.png" alt="Java" width="50" height="50" style="margin: 10px 10px 10px 10px;">
                    <img src="javascript.png" alt="JavaScript" width="50" height="50" style="margin: 10px 10px 10px 10px;">
                    <img src="css-icono.png" alt="CSS" width="50" height="50" style="margin: 10px 10px 10px 10px;">
                </div>
                <div style="text-align: center;">
                    <img src="html-icono2.png" alt="HTML" width="50" height="50" style="margin: 10px 10px 10px 10px;">
                    <img src="git-icono.png" alt="Git" width="50" height="50" style="margin: 10px 10px 10px 10px;">
                    <img src="base-datos.png" alt="Base de Datos" width="50" height="50" style="margin: 10px 10px 10px 10px;">
                </div>
                <div style="text-align: center;">
                    <img src="spring-icono.png" alt="Spring" width="50" height="50" style="margin: 10px 10px 10px 10px;">
                    <img src="jira-icono2.png" alt="Jira" width="50" height="50" style="margin: 10px 10px 10px 10px;">
                    <img src="bit.png" alt="Bitbucket" width="50" height="50" style="margin: 10px 10px 10px 10px;">
                </div>
            `
        }
    ];

    let currentSectionIndex = 0;

    function renderSection() {
        const currentSection = sections[currentSectionIndex];
        screenContent.innerHTML = `<h2>${currentSection.title}</h2>${currentSection.content}`;
        // Scroll al inicio de la pantalla al cambiar de sección
        screenContent.scrollTop = 0;
    }

    // Botón A: Avanza a la siguiente sección
    btnA.addEventListener('click', () => {
        currentSectionIndex = (currentSectionIndex + 1) % sections.length;
        renderSection();
    });

    // Botón B: Retrocede a la sección anterior
    btnB.addEventListener('click', () => {
        currentSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
        renderSection();
    });

    // Cargar la sección inicial al cargar la página
    renderSection();
});