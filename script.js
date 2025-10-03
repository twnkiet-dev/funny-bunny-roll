const images = [
    {src:"images/one.png", weight: 18}, 
    {src:"images/two.png", weight: 12},
    {src:"images/three.png", weight: 6},
    {src:"images/spin.png", weight: 12}
];
const demoImg = document.getElementById('demoImg');
const rollBtn = document.getElementById('rollBtn');
document.getElementById("rollBtn").addEventListener("click", function () {
    let img = document.getElementById("demoImg");
    img.classList.remove("spin");
    void img.offsetWidth;
    img.classList.add("spin");
});
function rollImage() {
    const total = images.reduce((sum, img) => sum + img.weight, 0);

    let rand = Math.random() * total;

    for (let i = 0; i < images.length; i++) {
        rand -= images[i].weight;
        if (rand < 0) {
            demoImg.src = images[i].src;
            break;
        }
    }
}
rollBtn.addEventListener('click', rollImage);

