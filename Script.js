// Función para mostrar secciones
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    const activeNavItem = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
    if (activeNavItem && activeNavItem.classList.contains('nav-item')) {
        activeNavItem.classList.add('active');
    }
}

// Manejo del formulario de citas
document.getElementById('citaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const especialidad = formData.get('especialidad');
    const fecha = formData.get('fecha');
    const motivo = formData.get('motivo');
    
    // Simulación de envío de datos
    setTimeout(() => {
        const messageDiv = document.getElementById('citaMessage');
        messageDiv.style.display = 'block';
        messageDiv.style.backgroundColor = '#e8f5e9';
        messageDiv.style.color = '#4caf50';
        messageDiv.textContent = '¡Cita agendada correctamente! Nos pondremos en contacto para confirmar.';
        
        // Resetear formulario
        this.reset();
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }, 1000);
});

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Activar la sección de inicio por defecto
    showSection('home');
    
    // Configurar fecha mínima para el input de fecha (hoy)
    const today = new Date().toISOString().split('T')[0];
    document.querySelector('input[name="fecha"]').min = today;
    
    // Agregar funcionalidad al botón de perfil
    document.querySelector('.nav-item:last-child').addEventListener('click', function() {
        alert('Sección de perfil en desarrollo');
    });
    
    // Agregar funcionalidad al botón "Ver Detalles" de la próxima cita
    document.querySelector('.appointment-info .btn-primary').addEventListener('click', function() {
        alert('Detalles de la cita:\n\nDoctor: Dr. María González\nEspecialidad: Cardiología\nFecha: 15 de Enero, 2024 - 10:30 AM');
    });
    
    // Agregar funcionalidad a los botones "Ver Detalle" de resultados
    const resultButtons = document.querySelectorAll('.result-item .btn-primary:not([disabled])');
    resultButtons.forEach(button => {
        button.addEventListener('click', function() {
            const testName = this.closest('.result-item').querySelector('h3').textContent;
            alert(`Detalles del resultado:\n\nPrueba: ${testName}\nEstado: Completo\nFecha: 10 de Enero, 2024\n\nLos resultados están disponibles en su historial médico.`);
        });
    });
});
