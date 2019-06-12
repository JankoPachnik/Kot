const anim = function (e) {
    let keycode = e.keyCode;
    if (keycode === 100) { // ->
        cat_move(1, cat_id + 1);
        return console.log("right");
    } else if (keycode === 97) { // <-
        cat_move(-1, cat_id - 1);
        return console.log("left");
    } else if (keycode === 115) { // \/
        cat_move(30, cat_id + 30);
        return console.log("down");
    } else if (keycode === 119) {  // /\
        cat_move(-30, cat_id - 30);
        return console.log("up");
    }
};

const cat_starting_id = function () {
    let start = document.getElementsByClassName("start");
    cat_id = parseInt(start[0].id, 10);
};

const cat_move = function (direction, new_position) {
    let new_field = document.getElementById(new_position);
    if (new_field.children)
        console.log("yup");
    if (new_field.className === "wall")
        console.log("wall");
    if (new_field.className === "wall")
        console.log("end");
    else if(new_field.hasChildNodes()){
        if (new_field.children[0].className === "box") {
            let next_field = new_position + direction;
            if (!(document.getElementById(next_field).hasChildNodes())){
                document.getElementById(next_field).appendChild(new_field.children[0]);
                new_field.appendChild(document.getElementById("cat"));
            }
            cat_id = new_position;
        }
        //place to add more interactive objects
    } else{
        new_field.appendChild(document.getElementById("cat"));
        cat_id = new_position;
    }
};

document.body.addEventListener('keypress', anim);
let cat_id = 0;
