const canvas = document.getElementById("canvas");
const paletteColors = document.querySelector(".palette__colors");
const currentColor = document.getElementById("current-color");
const lineWidth = document.getElementById("line-width");

const ctx = canvas.getContext("2d");
let activated = false;

// 직선 그리기 기능
// canvas.addEventListener("click", (event) => {
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
    // setColor();
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(event.offsetX, event.offsetY);
})

canvas.addEventListener("mousemove", (event) => {
    if (activated) {
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

paletteColors.addEventListener("click", (event) => {
    if (event.target.className === "palette__color") {
        const rgbColor = event.target.style.backgroundColor;
        ctx.strokeStyle = rgbColor;
        const rgbs = rgbColor.substring(4, rgbColor.length - 1).split(',');
        const [r, g, b] = rgbs.map(n => parseInt(n));
        currentColor.value = rgbToHex(r, g, b);
    }
});

currentColor.addEventListener("input", setColor);
currentColor.addEventListener("change", setColor);

lineWidth.addEventListener("change", () => {
    ctx.lineWidth = lineWidth.value;
})

function setColor() {
    const {r, g, b} = hexToRgb(currentColor.value);
    ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
}

function rgbToHex(red, green, blue) {
    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');
  
    const hexCode = '#' + redHex + greenHex + blueHex;
  
    return hexCode;
}

function hexToRgb(hex) {
    const tempHex = hex.replace('#', '');
  
    const red = parseInt(tempHex.substring(0, 2), 16);
    const green = parseInt(tempHex.substring(2, 4), 16);
    const blue = parseInt(tempHex.substring(4, 6), 16);
  
    return {
        r: red,
        g: green,
        b: blue
    };
}
