const igralec = document.getElementById('igralec');
const igra = document.getElementById('igra');
const krogi = [];

document.addEventListener("mousemove", premakni_igralca);

function premakni_igralca(event) {
    const x = event.clientX;
    const y = event.clientY;

    igralec.style.left = x + 'px';
    igralec.style.top = y + 'px';
}

const st_krogov = 150;

function main() {

    for (let i = 0; i < st_krogov; i++) {
        const krog = document.createElement('div');


        const X = Math.random() * (window.innerWidth - 50) + 25;
        const Y = Math.random() * (window.innerHeight - 50) + 25;

        krog.style.left = X + 'px';
        krog.style.top = Y + 'px';

        krog.id = 'krog';
        igra.appendChild(krog);
        krogi.push(krog);

    }
    setInterval(() => {
        for (let krog of krogi) {
            const randomX = Math.random() * (window.innerWidth - 50) + 25;
            const randomY = Math.random() * (window.innerHeight - 50) + 25;

            krog.style.left = randomX + 'px';
            krog.style.top = randomY + 'px';
        }
    }, 200);
}

window.addEventListener('load', main);