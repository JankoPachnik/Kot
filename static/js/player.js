const anim = function (e) {
    let keycode = e.keyCode;
    if (keycode === 100) { // ->
        cat_move("right", cat_id + 1);
        return console.log("right");
    } else if (keycode === 97) { // <-
        cat_move("left", cat_id - 1);
        return console.log("left");
    } else if (keycode === 115) { // \/
        cat_move("down", cat_id + 30);
        return console.log("down");
    } else if (keycode === 119) {  // /\
        cat_move("up", cat_id - 30);
        return console.log("up");
    }
};

const cat_starting_id = function () {
    let start = document.getElementsByClassName("start");
    cat_id = start[0].id;
};

const cat_move = function (direction, new_position) {
    document.getElementById(new_position).appendChild(document.getElementById("cat"));
    cat_id = new_position;
};

document.body.addEventListener('keypress', anim);
let cat_id = 0;
