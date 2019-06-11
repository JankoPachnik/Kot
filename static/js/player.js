let cat = document.getElementById("Cat");
let catLeft = 0;
let catTop = 0;



function anim(e) {
    if (e.keyCode === 39) {
        //catLeft += 30; cat.style.left = catLeft + "px";
        map[X][Y+1] = 'p';

        }
        else if (e.keyCode === 37) {
        //catLeft -= 30; cat.style.left = catLeft + "px";
        map[X][Y-1] = 'p';
        }
        else if (e.keyCode === 40) {
        //catTop += 30; cat.style.top = catTop + "px";
        map[X+1][Y] = 'p';
        }
        else if (e.keyCode === 38) {
        map[X-1][Y] = 'p';
        //catTop -= 30; cat.style.top = catTop + "px";
        }
}

document.onkeydown = anim;