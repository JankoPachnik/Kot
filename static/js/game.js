/*const map_generate = function (map_size=20) {
    for(let i = 0; i<map_size; i++){
        map.push([]);
        for(let j = 0; j<map_size * 1.5; j++){
            map[i].push(0);
        }
    }
};*/ //Map generating
const create_object = function(type, styles = {backgroundColor:"white", width:"0x", margin:"0px", height:"0px", cssFloat:"none"}){
    const object = document.createElement(type);
    object.style.backgroundColor = styles["backgroundColor"];
    object.style.width = styles["width"];
    object.style.margin = styles["margin"];
    object.style.cssFloat = styles["cssFloat"];
    object.style.height = styles["height"];
    return object
};

const create_field = function(){
    const field = create_object("div", {backgroundColor:"black", width:"30px", margin:"0px", height:"30px", cssFloat:"left"});
    return field
};

const create_image = function(path){
    const image = create_object("img", {width:"100%", height:"100%"});
    image.setAttribute("src", path);
    return image
};

const map_render = function(map) {
    let counter = 0;
    const game = create_object("div", {width:"900px", height:"600px", margin:"auto"});
    game.setAttribute("id", "game");
    document.body.appendChild(game);
    map.forEach(function (element) {
        element.forEach(function (element) {
            const field = create_field();
            if (element == 0){
                //const image = create_image("/static/images/grass.jpg");
                //field.appendChild(image);
            } else if (element == 1) { //box rendering
                const image = create_image("/static/images/box.jpg");
                field.appendChild(image);
            } else if (element == 2){
                const image = create_image("/static/images/wall.png");
                field.appendChild(image);
            } else if (element == 3) {
                const image = create_image("/static/images/lighter.png");
                field.appendChild(image);
            } else if (element == 'm') {
                const image = create_image("/static/images/milk.png");
                field.appendChild(image);
            } else if (element == 'd') {
                const image = create_image("/static/images/door.png");
                field.appendChild(image);
            } else if (element == 'k') {
                const image = create_image("/static/images/key.png");
                field.appendChild(image);
            }
            document.getElementById("game").appendChild(field);
            counter += 1; // counting the number of fields
        })
    });
    console.log(counter)
};
document.body.style.backgroundColor = "lightgray";
//map_generate(20);

const map = [
[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
[2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[2, 0, 0, 0, 0, 0, 3, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 'm', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[2, 2, 2, 2, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 2, 'd', 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'k', 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
console.log(map);
map_render(map);
document.body.style.backgroundColor = "gray";

test_array = [
    [1,0,'g'],
    [1,0,0],
    [0,0,1]];

console.log(test_array[0].indexOf('g'));


