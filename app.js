const btnPc = document.getElementById('btn-pc');
const btnConsola = document.getElementById('btn-consola');
const btnAmbos = document.getElementById('btn-ambos');
const planPc = document.getElementById('plan-pc');
const planCore = document.getElementById('plan-core');
const planUltimate = document.getElementById('plan-ultimate');

btnPc.style.backgroundColor = '#107C10';
btnPc.style.color = 'white';
planPc.style.display = 'block';
planCore.style.display = 'none';
planUltimate.style.display = 'block';


btnPc.addEventListener('click', () => {
    btnPc.style.backgroundColor = '#107C10';
    btnPc.style.color = 'white';
    planPc.style.display = 'block';
    planCore.style.display = 'none';
    planUltimate.style.display = 'block';

    btnConsola.style.backgroundColor = '';
    btnConsola.style.color = '';
    btnAmbos.style.backgroundColor = '';
    btnAmbos.style.color = '';
});

btnConsola.addEventListener('click', () => {
    btnConsola.style.backgroundColor = '#107C10';
    btnConsola.style.color = 'white';
    planPc.style.display = 'none';
    planCore.style.display = 'block';
    planUltimate.style.display = 'block';

    btnPc.style.backgroundColor = '';
    btnPc.style.color = '';
    btnAmbos.style.backgroundColor = '';
    btnAmbos.style.color = '';
});

btnAmbos.addEventListener('click', () => {
    btnAmbos.style.backgroundColor = '#107C10';
    btnAmbos.style.color = 'white';
    planPc.style.display = 'none';
    planCore.style.display = 'none';
    planUltimate.style.display = 'block';

    btnPc.style.backgroundColor = '';
    btnPc.style.color = '';
    btnConsola.style.backgroundColor = '';
    btnConsola.style.color = '';
})