document.getElementById("killer-randomize-btn").onclick = function () {
    pickRandomKiller();
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
    ReadJsonFile().then(killerList => {
        let randomIndex = Math.floor(Math.random() * (killerList.length - 1))
        let randomKiller = killerList[randomIndex];

        if (randomKiller === "Common Perks") {
            killerList[randomIndex];
        }       

        console.log(randomKiller);

        const killerPhoto = document.getElementById("killer-photo-block");

        killerPhoto.innerHTML = 
        `<img id="killer-photo" src="images/Portraits/${randomKiller}.webp">`
    });
}