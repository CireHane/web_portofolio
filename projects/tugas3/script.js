const button = document.getElementById('btn');
const box = document.getElementById('boxes')
const boxes = document.getElementsByClassName('box');

const rotateBox = [
    {transform: "rotate(0deg)"},
    {transform: "rotate(360deg)"}
];

const gapAnim = [
    {gap: '0', width: '500px', height: '500px'},
    {gap: '30px', width: '590px', height: '590px'}
];

const dur = 250;

const boxAnim = box.animate(gapAnim, {duration:dur});
boxAnim.pause()

var state = false;

boxAnim.onfinish = (event) =>{
    boxAnim.reverse();
    boxAnim.pause();

    if(!state)
        Object.assign(box.style, gapAnim[1]);
    else
        Object.assign(box.style, gapAnim[0]);

    state = !state;
    button.disabled = false;
}

button.addEventListener("click", () => {
    button.disabled = true;
    boxAnim.play();
    if(!state){
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].animate(rotateBox, {duration:dur, easing:'ease-out'});
        }
    }
    else{
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].animate(rotateBox, {duration:dur, easing:'ease-in'}).reverse();
        }
    }
})

window.onload = () => {
    for (let i = 0; i < boxes.length; i++) {
        Object.assign(boxes[i].style, {'z-index': i})
    }
}