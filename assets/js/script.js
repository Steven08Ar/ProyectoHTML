document.querySelectorAll('.tarjeta-opcion').forEach(tarjeta => {
    tarjeta.addEventListener('mouseover', () => {
        tarjeta.style.transform = 'translateY(-20px)';
    });
    tarjeta.addEventListener('mouseout', () => {
        tarjeta.style.transform = 'translateY(0)';
    });
});
