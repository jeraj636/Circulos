const igralec = document.getElementById('igralec');
const igra = document.getElementById('igra');

document.addEventListener("mousemove", premakni_igralca);

let kaz_poz_x;
let kaz_poz_y;
function premakni_igralca(event) {
    igralec.style.top = event.clientY + 'px';
    igralec.style.left = event.clientX + 'px';
    kaz_poz_x = event.clientX - 10;
    kaz_poz_y = event.clientY - 10;
}
const krogi = [];
let krogi_num = 150;

class Krog {
    constructor(xpoz, ypoz, xsmer, ysmer, krog, hitrost, vel) {
        this.xpoz = xpoz;
        this.ypoz = ypoz;
        this.xsmer = xsmer;
        this.ysmer = ysmer;
        this.krog = krog;
        this.hitrost = hitrost;
        this.vel = vel;
    }
}

const smeri = [];

main();
function main() {
    for (let i = 0; i < krogi_num; i++) {
        const tmp = document.createElement('div');

        tmp.id = 'krog';
        let vel = Math.random() * 10 + 30;
        tmp.style.width = vel + 'px';
        tmp.style.height = vel + 'px';
        igra.appendChild(tmp);
        let val = Math.random() * 360;
        krogi.push(new Krog(Math.random() * (window.innerWidth - 50 - vel / 2) + 25, Math.random() * (window.innerHeight - 50 - vel / 2) + 25, Math.cos(val), Math.sin(val), tmp, Math.random() + 0.4, vel));
    }
    let sem_ziv = true;
    let interavl = setInterval(() => {
        if (sem_ziv) {

            for (let i = 0; i < krogi_num; i++) {
                krogi[i].krog.style.left = krogi[i].xpoz + 'px';
                krogi[i].krog.style.top = krogi[i].ypoz + 'px';

                let pol_vel = krogi[i].vel / 2;
                if (krogi[i].xpoz - pol_vel < 5 || krogi[i].xpoz + pol_vel > window.innerWidth - 5 || krogi[i].ypoz - pol_vel < 5 || krogi[i].ypoz + pol_vel > window.innerHeight - 5) {
                    krogi[i].xsmer *= -1;
                    krogi[i].ysmer *= -1;

                    krogi[i].ypoz += krogi[i].hitrost * 2 * krogi[i].ysmer;
                    krogi[i].xpoz += krogi[i].hitrost * 2 * krogi[i].xsmer;

                    krogi[i].xpoz += krogi[i].hitrost * 2 * krogi[i].xsmer;
                    krogi[i].ypoz += krogi[i].hitrost * 2 * krogi[i].ysmer;
                }
                krogi[i].xpoz += krogi[i].hitrost * 2 * krogi[i].xsmer;
                krogi[i].ypoz += krogi[i].hitrost * 2 * krogi[i].ysmer;
                if (kaz_poz_x > krogi[i].xpoz - pol_vel && kaz_poz_x < krogi[i].xpoz + pol_vel && kaz_poz_y > krogi[i].ypoz - pol_vel && kaz_poz_y < krogi[i].ypoz + pol_vel) {
                    sem_ziv = false;
                    for (let i = 0; i < krogi_num; i++) {
                        krogi[i].krog.remove();
                    }
                }
            }
        }
        else {
            let t = document.createElement('a');

            t.textContent = 'IGRAJ PONOVNO';
            t.href = "https://kokosek.si/Circulos/";
            document.body.appendChild(t);

            clearInterval(interavl);
        }
    }, 30);
}
