const create_object = function(type, styles = {backgroundColor:"black", width:"0x", margin:"0px", height:"0px", cssFloat:"none"}){
    const object = document.createElement(type);
    object.style.backgroundColor = styles["backgroundColor"];
    object.style.width = styles["width"];
    object.style.margin = styles["margin"];
    object.style.cssFloat = styles["cssFloat"];
    object.style.height = styles["height"];
    return object
};

const create_field = function() {
    return create_object("div", {backgroundColor:"black", width:"30px", margin:"0px", height:"30px", cssFloat:"left"});
};

const create_image = function(path) {
    const image = create_object("img", {width:"100%", height:"100%"});
    image.setAttribute("src", path);
    return image
};

const game_render = function(map) {
    let counter = 0;
    const game = create_object("div", {width:"900px", height:"600px", margin:"auto"});
    game.setAttribute("id", "game");
    document.getElementById('game_window').appendChild(game);
    map.forEach(function (element) {
        element.forEach(function (element) {
            const field = create_field();
            if (element === 0){
                field.setAttribute("class", "empty");
            } else if (element === 'b') { //box rendering
                const image = create_image("/static/images/box.jpg");
                image.setAttribute("class", "box");
                field.appendChild(image);
                field.setAttribute("class", "box");
            } else if (element === 'w') {
                const image = create_image("/static/images/wall2.png");
                field.appendChild(image);
                field.setAttribute("class", "wall");
            } else if (element === 1) {
                const image = create_image("/static/images/water2.png");
                field.appendChild(image);
                field.setAttribute("class", "water");
            } else if (element === 'g') {
                const image = create_image("/static/images/grass2.png");
                field.appendChild(image);
                field.setAttribute("class", "grass");
            } else if (element === 'l') {
                const image = create_image("/static/images/lighter.png");
                field.appendChild(image);
                field.setAttribute("class", "light");
            } else if (element === 'm') {
                const image = create_image("/static/images/molk.png");
                field.appendChild(image);
                field.setAttribute("class", "milk");
            } else if (element === 'd') {
                const image = create_image("/static/images/door.png");
                image.setAttribute("id", "door");
                field.appendChild(image);
                field.setAttribute("class", "door");
            } else if (element === 'k') {
                const image = create_image("/static/images/kay.png");
                image.setAttribute("id", "key");
                field.appendChild(image);
                field.setAttribute("class", "key");
            } else if (element === 's') {
                const image = create_image("/static/images/cat-right.png");
                image.setAttribute("id", "cat");
                field.appendChild(image);
                field.setAttribute("class", "start");
            }
            field.setAttribute("id", counter);
            document.getElementById("game").appendChild(field);
            counter += 1; // counting the number of fields
        })
    });
    console.log(map);
    console.log(counter)
};

const level_selector = function(level) {
    let map_level = [];
    if(level === 'level1')
        map_level = level1();
    else if(level === 'level2')
        map_level = level2();
    else if(level === 'level3')
        map_level = level3();
    return map_level
};

const game_initiate = function(level) {
    map = level_selector(level); // need to add custom level selection
    game_render(map);
    inventory = [];
    cat_starting_id();
};

const window_prep = function() {
  document.getElementById('start').remove();
  game_initiate('level1');
};

const inventory_reload = function(path = "/static/images/kay.png") {
    let field_inv = document.getElementById("inventory");
    if (inventory.includes("key")) {
        let new_image = create_image(path);
        new_image.style.width = "50px";
        new_image.style.height = "50px";
        field_inv.appendChild(new_image);
    } else if (!inventory.includes("key")){
        console.log(field_inv.childNodes[1]);
        field_inv.childNodes[1].remove()
    }
};

let inventory = [];
let current_level = 'level1';
let map = [];
document.getElementById('start').addEventListener('click', window_prep);

