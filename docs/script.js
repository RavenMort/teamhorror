const img = document.getElementById("medicImg");
const canvas = document.getElementById("glitchCanvas");
const ctx = canvas.getContext("2d");

function resize() {
    const r = img.getBoundingClientRect();
    canvas.width = r.width;
    canvas.height = r.height;
    canvas.style.width = r.width + "px";
    canvas.style.height = r.height + "px";
}

img.onload = () => {
    resize();
    draw();
};

window.addEventListener("resize", resize);

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    const w = canvas.width;
    const h = canvas.height;

    // рисуем «сломанный контур»
    ctx.strokeStyle = "rgba(255,255,255,0.8)";
    ctx.lineWidth = 2;

    ctx.beginPath();

    // верх
    for (let x = 0; x < w; x += 10) {
        ctx.lineTo(x, -2 + Math.random() * 6);
    }

    // правая
    for (let y = 0; y < h; y += 10) {
        ctx.lineTo(w - (-2 + Math.random() * 6), y);
    }

    // низ
    for (let x = w; x > 0; x -= 10) {
        ctx.lineTo(x, h - (-2 + Math.random() * 6));
    }

    // левая
    for (let y = h; y > 0; y -= 10) {
        ctx.lineTo(-2 + Math.random() * 6, y);
    }

    ctx.closePath();
    ctx.stroke();

    requestAnimationFrame(draw);
}