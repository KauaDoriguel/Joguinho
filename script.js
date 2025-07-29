const personagem = document.querySelector('.personagem');
const pipe = document.querySelector('.pipe');

let pontos = 0;
let contador;

const placar = document.getElementById('pontos');


let recorde = localStorage.getItem('recorde') || 0;
document.getElementById('maior-pontuacao').textContent = recorde;

const jump = () => {
    personagem.classList.add('jump');

    setTimeout(() => {
        personagem.classList.remove('jump');
    }, 500);
};


contador = setInterval(() => {
    pontos++;
    placar.textContent = pontos;
}, 100);


const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && personagemPosition < 80) {
      
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        personagem.style.animation = 'none';
        personagem.style.bottom = `${personagemPosition}px`;

        personagem.src = 'img/pngtree-yellow-skull-with-tongue-out-cartoon-png-image_19116463.png';
        personagem.style.width = '110px';

    
        clearInterval(loop);
        clearInterval(contador);

      if (pontos > recorde) {
    localStorage.setItem('recorde', pontos);
    document.getElementById('maior-pontuacao').textContent = pontos;

   
    document.getElementById('mensagem-recorde').style.display = 'block';
}

    
        document.getElementById('restart-btn').style.display = 'block';
    }
}, 10);

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);