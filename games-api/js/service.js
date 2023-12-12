import { handleErrors } from "./exeption.js";

var URL = 'http://localhost:3000/jogos';

export const getAllGames = async() => {
    try {
        // Fazendo uma solicitação GET para obter produtos da AP
        const response =
            await fetch(URL);
        //lidando com oerros na resposta
        handleErrors(response);

        //converter os dados para json
        const data = await response.json();

        //exibir os dados na pagina html
        data.forEach(jogo => {
            const tagDiv =
                document.createElement('div');
            tagDiv.innerHTML =
                `<strong>${jogo.title}</strong><p>${jogo.preco}</p>`;
            dataContainer.appendChild(tagDiv);
        });

    } catch (error) {
        console.log('Error >>>', error);
    }
};