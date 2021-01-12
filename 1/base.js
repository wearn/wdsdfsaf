document.getElementById("header-social").style.opacity=0;
show("content",100);
                    
function show(id, speed) { let vars;
let ID = setInterval(function() { 
(vars=Number(document.getElementById('header-social').style.opacity));
if (vars>1) {
clearInterval(ID);
}
vars += 0.1; document.getElementById('header-social').style.opacity=vars;
}, speed);
}


window.onscroll = function() {
    let scrolled = window.pageYOffset;
    let block_1 = document.querySelector('.block-1-image')
    let block_2 = document.querySelector('.block-2-image')
    let block_3 = document.querySelector('.block-3-image')
    let block_4 = document.querySelector('.block-4-image')
    let img = document.querySelector('.team-content')
    let h1 = document.querySelector('.expect')
    
    if(scrolled > 100 ){
        h1.classList.add('h1-tile_flex');
    }
    if(scrolled > 300 ){
        block_1.classList.add('block_1');
    }
    if(scrolled > 600 ){
        block_2.classList.add('block_1');
    }
    if(scrolled > 900 ){
        block_3.classList.add('block_1');
    }
    if(scrolled > 1250 ){
        block_4.classList.add('block_4');
    }
    if(scrolled > 1618 ){
       img.classList.add('img-anim');
    }
    
};
