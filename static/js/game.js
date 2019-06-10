const map = [];
const map_generate = function (map_size=20) {
    for(let i = 0; i<map_size; i++){
        map.push([]);
        for(let j = 0; j<map_size; j++){
            if (i == 0 || i == 19)
                map[i].push(1);
            else
                map[i].push(0);
        }
    }
};
const map_render = function() {
    let counter = 0;
    const game = document.createElement("div");
    game.style.width = "600px";
    game.style.margin = "0px";
    game.style.height = "600px";
    game.setAttribute("id", "game");
    document.body.appendChild(game);
    map.forEach(function (element) {
        element.forEach(function (element) {
            if (element == 0) {
                const field = document.createElement("div");
                field.style.backgroundColor = "lightblue";
                field.style.width = "30px";
                field.style.margin = "0px";
                field.style.cssFloat = "left";
                field.style.height = "30px";
                document.getElementById("game").appendChild(field);
                counter += 1;
            } else if (element == 1) {
                const field = document.createElement("div");
                field.style.backgroundColor = "magenta";
                field.style.width = "30px";
                field.style.margin = "0px";
                field.style.cssFloat = "left";
                field.style.height = "30px";
                document.getElementById("game").appendChild(field);
                counter += 1;
            }
        })
    });
    console.log(counter)
};

map_generate(20);
console.log(map);
map_render();
