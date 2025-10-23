 // Carrossel de Avaliações
    const listaAvaliacoes = document.getElementById('lista-avaliacoes');
    let posicao = 0;

    function mover(direcao) {
        const totalAvaliacoes = listaAvaliacoes.children.length;
        const larguraAvaliacao = listaAvaliacoes.children[0].offsetWidth + 20;
        const itensVisiveis = Math.floor(listaAvaliacoes.offsetWidth / larguraAvaliacao);

        posicao += direcao;

        if (posicao < 0) {
            posicao = totalAvaliacoes - itensVisiveis;
        } else if (posicao > totalAvaliacoes - itensVisiveis) {
            posicao = 0;
        }

        listaAvaliacoes.style.transform = `translateX(${-posicao * larguraAvaliacao}px)`;
    }

    for (let i = 0; i < imagensPorVez; i++) {
  const clone = imagens.children[i].cloneNode(true);
  imagens.appendChild(clone);
    }

    document.addEventListener('DOMContentLoaded', () => {
        listaAvaliacoes.style.width = `${listaAvaliacoes.children.length * (listaAvaliacoes.children[0].offsetWidth + 20)}px`;
    });