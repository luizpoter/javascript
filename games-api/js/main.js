import { getAllGames } from "./service.js";


window.onload = () => {
    loadGames();
};
const loadGames = () => {
    console.log('eu aqyu')
    const dataContainer = document.getElementById('data-container');

    getAllGames().then(resp => {
        const gamesElement = document.createElement('div');

        resp.forEach(element => {

            gamesElement.innerHTML =
                `<strong>${game.title}<-/strong><p>${game.preco}</p>`;
            dataContainer.appendChild(gamesElement);
        });

    })


}

// Função para lidar com erros nas solicitações fetch
const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response);
    }
    return response;
};
// Função para buscar e exibir dados da API
const fetchData = async() => {
    try {
        // Fazendo uma solicitação GET para obter produtos da AP
        const response =
            await fetch('http://localhost:3000/jogos');
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

// Chamando a função para buscar e exibir dados ao carregar a página



const createGame = () => {
    const jogoTeste = {
        "title": "The legend of Zelda",
        "img": "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
        "preco": 100
    };
    fetch('http://localhost:3000/jogos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jogoTeste)
        })
        .then(response => response.json())
        .then(data => console.log('sucesso: ', data))
        .catch((error) => console.log('Erro: ', error));
};

const deleteGame = () => {
    const game = {
        nome: "The legend of Zelda",
        img: "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
        preco: 100,
        id: 3
    };
    fetch(URL + `/${game.id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
};

const updateGame = () => {
    const game = {
        nome: "The legend of Zelda 2",
        img: "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
        preco: 100,
        id: 3
    };
    fetch(URL + `/${game.id}`, { method: 'PATCH' })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
};