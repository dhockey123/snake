const grids = document.querySelectorAll('.grid')
const test  = document.getElementById('test')

var length = 20
var init_pos = Math.round((length**2)/2 + length/2)
var idx_list = [init_pos]
var idx = init_pos
var size=12

var direction = 0

// grids.forEach((grid, i)=>{setTimeout(()=>{console.log(i)}, i*1000)})

// setTimeout((i)=>{console.log("test")}, i*1000)

grids[idx].style.background = "black"

document.addEventListener('keydown', (e)=>{
    var key = e.keyCode;
    if(key == 38){
        moveUp()
    }
    else if(key == 40){
        moveDown()
    }
    else if(key == 37){
        moveLeft()
    }
    else if(key == 39){
        moveRight()

    }
    console.log(idx_list)
})




function currentMotion(){
    idx = idx + direction
    idx_list.push(idx)
    grids[idx].style.background = "black"
    set_length()
    setTimeout(currentMotion, 200)
}





function set_length(){
    if(idx_list.length >= size){
        grids[idx_list[0]].style.background = "white"
        idx_list = idx_list.slice(1, )
    }
}
function moveDown(){
    if(!(idx > (length*length - length -1))){
        idx += length
        direction = length
        checkforLoss()
        idx_list.push(idx)
        grids[idx].style.background = "black"
        set_length()
    }
}
function moveUp(){
    if(!(idx < length)){
        idx -= length
        direction = (- length)
        checkforLoss()
        grids[idx].style.background = "black"
        idx_list.push(idx)
        set_length()
    }
}
function moveLeft(){
    if(idx % length != 0){
        idx -= 1
        direction = (-1)
        checkforLoss()
        grids[idx].style.background = "black"
        idx_list.push(idx)
        set_length()
    }
}
function moveRight(){
    if((idx+1) % length != 0)
    {
        idx += 1
        direction = 1
        checkforLoss()
        grids[idx].style.background = "black"
        idx_list.push(idx)
        set_length()
    }
}
function checkforLoss(){
    console.log(idx_list.includes(idx))
    if(idx_list.includes(idx) === true){
        console.log("LOSE")
    }
}

setTimeout(currentMotion, 200)