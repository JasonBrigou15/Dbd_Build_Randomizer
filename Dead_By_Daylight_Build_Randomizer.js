document.getElementById("killer-randomize-btn").onclick = function () {
    pickRandomKiller().then(randomKiller => {
        pickRandomKillerAddons(randomKiller);
    });
}


function ReadJsonFile() {
    return fetch("DbdKillers.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}


function pickRandomKiller() {
     return ReadJsonFile().then(killerList => {
        let randomIndex = Math.floor(Math.random() * (killerList.length - 1))
        let randomKiller = killerList[randomIndex];

        console.log(randomKiller);

        const killerPhoto = document.getElementById("killer-photo-block");
        const killerPowerPhoto = document.getElementById("power-image-cell");

        killerPhoto.innerHTML =
            `<img id="killer-photo" src="images/Portraits/${randomKiller.Name}.webp">`

        if (randomKiller.Name !== "The Good Guy" && randomKiller.Name !== "The Knight" && randomKiller.Name !== "The Nemesis"
            && randomKiller.Name !== "The Twins" && randomKiller.Name !== "The Xenomorph") {

            killerPowerPhoto.innerHTML =
                `<img id="power-image" src="images/PowerImages/${randomKiller.Name}_power.webp" alt="photo of the ${randomKiller.Name}'s power">`
        }
        else {
            killerPowerPhoto.innerHTML =
                `<img id="power-image" src="images/PowerImages/${randomKiller.Name}_power.gif" alt="photo of the ${randomKiller.Name}'s power">`
        }

        return randomKiller;
    });
}

function pickRandomKillerAddons(randomKiller) {
    console.log(randomKiller);
}