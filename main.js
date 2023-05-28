const canvas = document.getElementById("canvas");

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
    console.log("mousedown triggered");
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
})

canvas.addEventListener("mousemove", (event) => {
    if (activated) {
        console.log("mousemove triggered");
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }
})

canvas.addEventListener("click", () => {
    activated = false;
    console.log("click triggered");
})