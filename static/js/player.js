/*function anim(e) {
    let x_y = cat_start_coordinates(map);
    let x = x_y[0];
    let y = x_y[1];
    if (e.keyCode === 39) {
    //catLeft += 30; cat.style.left = catLeft + "px";
    map[x][y+1] = 'p';
    } else if (e.keyCode === 37) {
    //catLeft -= 30; cat.style.left = catLeft + "px";
    map[x][y-1] = 'p';
    } else if (e.keyCode === 40) {
    //catTop += 30; cat.style.top = catTop + "px";
    map[x+1][y] = 'p';
    } else if (e.keyCode === 38) {
    map[x-1][y] = 'p';
    //catTop -= 30; cat.style.top = catTop + "px";
    }
}

(x*29) + y

const cat_start_coordinates = function (map) {
    let counter = 0;
    map.forEach(function (element) {
        if(element.includes('p')){
            return [element.indexOf('p'), counter]
        }
        counter += 1;
    })
};

const put_cat = function (id) {
    let cat = create_image("/static/images/cat.png");
    if document.getElementById(id)
        document.getElementById(id).appendChild(cat);
    else {

    }
};*/