const images = [
    {src:"images/one.png", weight: 18}, 
    {src:"images/two.png", weight: 12},
    {src:"images/three.png", weight: 6},
    {src:"images/spin.png", weight: 12}
];

const demoImg = document.getElementById('demoImg');
const rollBtn = document.getElementById('rollBtn');

function rollImage() {
    demoImg.classList.add("spin");

    const total = images.reduce((sum, img) => sum + img.weight, 0);
    let rand = Math.random() * total;
    let chosen = null;

    for (let i = 0; i < images.length; i++) {
        rand -= images[i].weight;
        if (rand < 0) {
            chosen = images[i];
            break;
        }
    }

    setTimeout(() => {
        demoImg.src = chosen.src;
    }, 400);

    demoImg.addEventListener("animationend", () => {
        demoImg.classList.remove("spin");
    }, { once: true });
}

rollBtn.addEventListener('click', rollImage);
