import {Game} from "./game.js";

const game = new Game();
game.settings.gridSize = {
    columns: 4,
    rows: 4,
}

const tableElement = document.getElementById("grid");

game.start()

const render = () => {

    for (let y = 1; y <= game.settings.gridSize.rows; y++) {
        const trElement = document.createElement("tr");
        tableElement.append(trElement);

        for (let x = 1; x <= game.settings.gridSize.columns; x++) {
            const tdElement = document.createElement("td");
            trElement.append(tdElement);

            if (game.google.position.x === x && game.google.position.y === y) {
                const imgElement = document.createElement("img");
                imgElement.src = "./assets/google.svg/";
                imgElement.alt = "google image";
                tdElement.append(imgElement);
            }

            if (game.player1.position.x === x && game.player1.position.y === y) {
                const imgElement = document.createElement("img");
                imgElement.src = "./assets/first.svg";
                imgElement.alt = "player1 image";
                tdElement.append(imgElement);
            }

            if (game.player2.position.x === x && game.player2.position.y === y) {
                const imgElement = document.createElement("img");
                imgElement.src = "./assets/second.svg";
                imgElement.alt = "player2 image";
                tdElement.append(imgElement);
            }

        }
    }

}

render()