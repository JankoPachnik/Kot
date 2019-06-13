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
    if(new_field.hasChildNodes()) {
        if (new_field.children[0].className === "box") {
            let next_field = new_position + direction;
            if (!(document.getElementById(next_field).hasChildNodes())) {
                document.getElementById(next_field).appendChild(new_field.children[0]);
                move_cat(new_position, new_field);
            }
        } else if (new_field.className === "milk") {
            if (current_level === 'level1') {
                document.getElementById("game").remove();
                current_level = 'level2';
                game_initiate('level2')
            } else if (current_level === 'level2') {
                document.getElementById("game").remove();
                current_level = 'level3';
                game_initiate('level3')
            }
        } else if (new_field.className === "door") {
            if (doingMaths() === true) {
                  new_field.children[0].remove();
                }
            }
            //place to add more interactive objects
    }
    else {
            move_cat(new_position, new_field);
        }
};

const move_cat = function(new_position, new_field){
    new_field.appendChild(document.getElementById("cat"));
    cat_id = new_position;
};

document.body.addEventListener('keypress', anim);
let cat_id = 0;

//write a function to generate array with equations for two levels

const equations = ["5*6", "7*8", "9*8", "7*6", "8*5", "8*6", "4*7", "9*4", "9*5", "7*5"];

const doingMaths = function() {
    const displayed_Equation_Index = [Math.floor(Math.random() * equations.length)];
    const displayedEquation = equations[displayed_Equation_Index];
    const displayedEquationString = displayedEquation.toString();
    let answer = prompt(displayedEquationString);
    if (eval(equations[displayed_Equation_Index]) === parseInt(answer)) {
        alert("Correct!");
        return true;
    } else {
        alert("Incorrect! Try again");
        return false;
        }
    };