const canvas = document.getElementById("canvas");
const paletteColors = document.querySelector(".palette__colors");
const currentColor = document.getElementById("current-color");

const ctx = canvas.getContext("2d");
let activated = false;

// 직선 그리기 기능
// canvas.addEventListener("click", (event) => {
//     console.log(event.offsetX, event.offsetY, activated);
//     if (!activated) {
//         ctx.moveTo(event.offsetX, event.offsetY);
//         activated = true;
//     } else {
//         ctx.lineTo(event.offsetX, event.offsetY);
//         ctx.stroke();
//         activated = false;
//     }
// })

canvas.addEventListener("mousedown", (event) => {
    activated = true;
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
})

canvas.addEventListener("mousemove", (event) => {
    if (activated) {
        console.log(event.offsetX, event.offsetY);
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }
});

canvas.addEventListener("click", () => {
    activated = false;
});

canvas.addEventListener("mouseleave", () => {
    activated = false;
});