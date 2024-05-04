let chosenKiller;

document.getElementById("killer-randomize-btn").onclick = function () {
    pickRandomKiller().then(randomKiller => {
        chosenKiller = randomKiller;
    });
}

document.getElementById("addon-randomize-btn").onclick = function () {
        pickRandomKillerAddons(chosenKiller);
}

document.getElementById("perks-randomize-btn").onclick = function () {
    pickRandomPerks();
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

function pickRandomKillerAddons(chosenKiller) {
    let randomAddons = [];

    while (randomAddons.length < 2) {
        let randomIndex = Math.floor(Math.random() * chosenKiller.Addons.length);
        if (!randomAddons.includes(randomIndex)) {
            randomAddons.push(randomIndex);
        }
    }

    let firstAddon = chosenKiller.Addons[randomAddons[0]];
    let secondAddon = chosenKiller.Addons[randomAddons[1]];

    function sanitizeAddonName(name) {
        return name.replace(/[^a-zA-Z0-9]/g, "");
    }

    let firstAddonSanitized = sanitizeAddonName(firstAddon);
    let secondAddonSanitized = sanitizeAddonName(secondAddon);

    let firstAddonLogo = document.getElementById("addon1");
    let secondAddonLogo = document.getElementById("addon2");

    firstAddonLogo.innerHTML = `<img class="addon-photo" src="images/Addons/${firstAddonSanitized}.webp" alt="${firstAddon} logo"` +
        `<span class="addon-name">${firstAddon}</span>`;

    secondAddonLogo.innerHTML = `<img class="addon-photo" src="images/Addons/${secondAddonSanitized}.webp" alt="${secondAddon} logo"` +
        `<span class="addon-name">${secondAddon}</span>`;
}

function pickRandomPerks() {
    return ReadJsonFile().then(killerList => {
        let randomPerks = [];
    });


}