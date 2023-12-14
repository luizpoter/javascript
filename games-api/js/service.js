import { handleErrors } from "./exeption.js";
var URL = 'http://localhost:3000/jogos';

export const getAllGames = async() => {
    try {
        const dataContainer = document.getElementById('data-container');
        // Fazendo uma solicitação GET para obter produtos da AP
        const response =
            await fetch(URL);
        //lidando com oerros na resposta
        handleErrors(response);

        //converter os dados para json
        return await response.json();


    } catch (error) {
        console.log('Error >>>', error);
    }
};

export const createGame = async(jogo) => {
    fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jogo)
        })
        .then(response => response.json())
        .then(data => console.log('sucesso: ', data))
        .catch((error) => console.log('Erro: ', error));

};

export const deleteGame = async(jogo) => {
    fetch(URL + `/${jogo.id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
};

export const updateGame = async(jogo) => {
    fetch(URL + `/${jogo.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jogo)
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
};