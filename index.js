yesBtn = document.querySelector('#yesBtn')

yesBtn.addEventListener('click', function(){
    alert('SABIA QUE DIRIAS QUE SI MI PRINCESA HERMOSA')
    alert('ME HACES MUY FELIZ MI COSITA LINDA')
})
const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;

    // Guardar las coordenadas en variables CSS personalizadas
    noBtn.style.setProperty('--randomX', randomX + 'vw');
    noBtn.style.setProperty('--randomY', randomY + 'vh');
});