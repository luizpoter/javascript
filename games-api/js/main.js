import { getAllGames, deleteGame, createGame, updateGame } from "./service.js";
window.onload = () => {
    loadGames();
};
const loadGames = () => {
    const dataContainer = document.getElementById('data-container');
    getAllGames().then(resp => {
        const gamesElement = document.createElement('div');
        resp.forEach(jogo => {
            const tagDiv =
                document.createElement('div');
            tagDiv.innerHTML =
                `
                <div class="elemento">
                    <img class="cardimg" src="${jogo.img}" alt="${jogo.title}"<hr>
                    <h5 class="cardtitle">${jogo.title}</h5>
                    <hr>
                    <p class="cardtext">R$ ${jogo.preco}</p>                    
                </div>
                `;
            dataContainer.appendChild(tagDiv);
        });

    })
}
document.getElementById('btnCreate').addEventListener('click', () => {
    const jogo = {
        title: "The legend of Zelda",
        img: "https://zelda.nintendo.com/tears-of-the-kingdom/_images/game/logo-shadow.png",
        preco: 100
    };
    createGame(jogo);
});
document.getElementById('btnDelete').addEventListener('click', () => {
    const jogo = {
        title: "The legend of Zelda",
        img: "https://zelda.nintendo.com/tears-of-the-kingdom/_images/game/logo-shadow.png",
        preco: 100,
        id: 3
    };
    deleteGame(jogo);
});

document.getElementById('btnUpdate').addEventListener('click', () => {
    const jogo = {
        title: "The legend of Zelda 2",
        img: "https://zelda.nintendo.com/tears-of-the-kingdom/_images/game/logo-shadow.png",
        preco: 200,
        id: 3
    };
    updateGame(jogo);
});