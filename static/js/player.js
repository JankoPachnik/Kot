const anim = function (e) {
    let keycode = e.keyCode;
    if (keycode === 100) { // ->
        cat_move_logic(1, cat_id + 1);
        return console.log("right");
    } else if (keycode === 97) { // <-
        cat_move_logic(-1, cat_id - 1);
        return console.log("left");
    } else if (keycode === 115) { // \/
        cat_move_logic(30, cat_id + 30);
        return console.log("down");
    } else if (keycode === 119) {  // /\
        cat_move_logic(-30, cat_id - 30);
        return console.log("up");
    }
};

const cat_starting_id = function () {
    let start = document.getElementsByClassName("start");
    cat_id = parseInt(start[0].id, 10);
};

const cat_move_logic = function (direction, new_position) {
    let new_field = document.getElementById(new_position);
    if(new_field.hasChildNodes()){
        if (new_field.children[0].className === "box") {
            let next_field = new_position + direction;
            if (!(document.getElementById(next_field).hasChildNodes())){
                document.getElementById(next_field).appendChild(new_field.children[0]);
                move_cat(new_position, new_field);
            }
        } else if (new_field.className === "milk") {
            if (current_level === 'level1') {
                document.getElementById("game").remove();
                current_level = 'level2';
                game_initiate('level2')
            }
            else if (current_level === 'level2') {
                document.getElementById("game").remove();
                current_level = 'level3';
                game_initiate('level3')
            }
        } else if (new_field.className === "door")
            move_cat(new_position, new_field);
        //place to add more interactive objects
    } else
        move_cat(new_position, new_field);
};

const move_cat = function(new_position, new_field){
    new_field.appendChild(document.getElementById("cat"));
    cat_id = new_position;
};

document.body.addEventListener('keypress', anim);
let cat_id = 0;
