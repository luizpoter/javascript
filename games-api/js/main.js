import { getAllGames, deleteGame } from "./service.js";
window.onload = () => {
    loadGames();
};
const loadGames = () => {
    console.log('>>>>')
    const dataContainer = document.getElementById('data-container');
    getAllGames().then(resp => {
        const gamesElement = document.createElement('div');
        resp.forEach(jogo => {
            const tagDiv =
                document.createElement('div');
            tagDiv.innerHTML =
                `<strong>${jogo.title}</strong><p>${jogo.preco}</p>`;
            dataContainer.appendChild(tagDiv);
        });

    })
}
document.getElementById('btnCreate').addEventListener('click', () => {
    const jogoTeste = {
        title: "The legend of Zelda",
        img: "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
        preco: 100
    };
    createGane(jogo);
});
document.getElementById('btnDelete').addEventListener('click', () => {
    const jogo = {
        title: "The legend of Zelda",
        img: "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
        preco: 100,
        id: 3
    };
    deleteGame(jogo);
});

document.getElementById('btnUpdate').addEventListener('click', () => {
    const jogo = {
        title: "The legend of Zelda",
        img: "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
        preco: 100,
        id: 3
    };
    updateGame(jogo);
});